# Chụp toàn màn hình Windows cho usability/tools/edit_product_check.js (HW03 Task 2).
# Dựa trên checklist/tools/capture_screen.ps1 (Task 1), khác ở một điểm: PHÓNG TO cửa sổ Chrome do script mở
# (tiến trình chrome khởi động sau thời điểm -SinceMs) rồi mới chụp, để ảnh chỉ có Chrome và taskbar,
# không lọt cửa sổ khác (ví dụ VS Code đang mở file có thông tin người tham gia).
# Cách dùng: powershell -NoProfile -ExecutionPolicy Bypass -File capture_screen_max.ps1 -Out <file.png> -SinceMs <epoch ms>
param(
  [Parameter(Mandatory = $true)][string]$Out,
  [long]$SinceMs = 0
)
Add-Type -AssemblyName System.Windows.Forms, System.Drawing
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class HwWin2 {
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
  [DllImport("user32.dll")] public static extern void keybd_event(byte b, byte s, int f, int e);
}
"@
[HwWin2]::SetProcessDPIAware() | Out-Null

$win = $null
if ($SinceMs -gt 0) {
  $since = [DateTimeOffset]::FromUnixTimeMilliseconds($SinceMs).LocalDateTime
  $win = Get-Process chrome -ErrorAction SilentlyContinue |
    Where-Object { $_.MainWindowHandle -ne [IntPtr]::Zero -and $_.StartTime -ge $since } |
    Sort-Object StartTime | Select-Object -First 1
}
if (-not $win) {
  # Không chắc cửa sổ nào là của script thì không chụp, để không chụp nhầm cửa sổ khác
  Write-Output "SKIP: Không tìm thấy cửa sổ Chrome của script; không chụp"
  exit 2
}
[HwWin2]::ShowWindow($win.MainWindowHandle, 3) | Out-Null   # 3 = SW_MAXIMIZE
[HwWin2]::keybd_event(0x12, 0, 0, 0)
[HwWin2]::SetForegroundWindow($win.MainWindowHandle) | Out-Null
[HwWin2]::keybd_event(0x12, 0, 2, 0)
Start-Sleep -Milliseconds 600

$b = [System.Windows.Forms.SystemInformation]::VirtualScreen
$bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($b.Left, $b.Top, 0, 0, $bmp.Size)
$dir = Split-Path -Parent $Out
if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
$bmp.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Output "OK $($b.Width)x$($b.Height) $Out"
