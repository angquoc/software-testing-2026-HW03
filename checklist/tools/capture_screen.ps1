# Chụp toàn màn hình Windows (gồm cửa sổ Chrome, thanh địa chỉ, taskbar) cho n1_chrome_checklist.js.
# Đưa cửa sổ Chrome do script mở (tiến trình chrome khởi động sau thời điểm -SinceMs) lên trước rồi mới chụp.
# Cách dùng: powershell -NoProfile -ExecutionPolicy Bypass -File capture_screen.ps1 -Out <file.png> -SinceMs <epoch ms> [-Proc firefox]
# -Proc: Tên tiến trình trình duyệt cần đưa lên trước (mặc định chrome; n2_firefox_checklist.js dùng firefox).
param(
  [Parameter(Mandatory = $true)][string]$Out,
  [long]$SinceMs = 0,
  [string]$Proc = 'chrome'
)
Add-Type -AssemblyName System.Windows.Forms, System.Drawing
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class HwWin {
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
  [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
  [DllImport("user32.dll")] public static extern void keybd_event(byte b, byte s, int f, int e);
}
"@
# Lấy kích thước thật của màn hình khi Windows scale 150%
[HwWin]::SetProcessDPIAware() | Out-Null

if ($SinceMs -gt 0) {
  $since = [DateTimeOffset]::FromUnixTimeMilliseconds($SinceMs).LocalDateTime
  $win = Get-Process $Proc -ErrorAction SilentlyContinue |
    Where-Object { $_.MainWindowHandle -ne [IntPtr]::Zero -and $_.StartTime -ge $since } |
    Sort-Object StartTime | Select-Object -First 1
  if ($win) {
    if ([HwWin]::IsIconic($win.MainWindowHandle)) { [HwWin]::ShowWindow($win.MainWindowHandle, 9) | Out-Null }
    # Nhấn và thả phím Alt để Windows cho phép đổi cửa sổ đang ở trước
    [HwWin]::keybd_event(0x12, 0, 0, 0)
    [HwWin]::SetForegroundWindow($win.MainWindowHandle) | Out-Null
    [HwWin]::keybd_event(0x12, 0, 2, 0)
    Start-Sleep -Milliseconds 500
  } else {
    Write-Output "WARN: Không tìm thấy cửa sổ $Proc của script; vẫn chụp màn hình hiện tại"
  }
}

$b = [System.Windows.Forms.SystemInformation]::VirtualScreen
$bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($b.Left, $b.Top, 0, 0, $bmp.Size)
$dir = Split-Path -Parent $Out
if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
$bmp.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Output "OK $($b.Width)x$($b.Height) $Out"
