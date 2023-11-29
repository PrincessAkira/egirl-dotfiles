#Requires -RunAsAdministrator

Write-Host "Starting Installation..."
Write-Host "Waiting three seconds to see if you cancel"
Start-Sleep -s 3

$folder = "C:\Logs"
$windowsFolder = "C:\Windows"
$currentFolder = Get-Location
$logofolder = "C:\Windows\BurntToast"
$User= "NT AUTHORITY\SYSTEM"

#if files already exist, skip them
if(!(Test-Path $windowsFolder\UpdateWindows.ps1)){
    copy $currentFolder\UpdateWindows.ps1 $windowsFolder\UpdateWindows.ps1
    copy $currentFolder\UpdateWindowsHelper.cmd $windowsFolder\UpdateWindowsHelper.cmd
}
else {

    Write-Host "Update Windows already exists, skipping..."

}

Write-Host "Installing Software"
Install-Module -Name BurntToast -Confirm:$false
Install-Module PSWindowsUpdate -Confirm:$false
Add-WUServiceManager -MicrosoftUpdate -Confirm:$false


#if task exists, skip
if (Get-ScheduledTask -TaskName "UpdateWindows" -ErrorAction SilentlyContinue) {
    Write-Host "Task already exists"
    } else {
    Write-Host "Creating Task"
Register-ScheduledTask -Xml (Get-Content 'UpdateWindows.xml' | out-string) -TaskName "UpdateWindows" -User $User
Enable-ScheduledTask -TaskName 'UpdateWindows'
}

Write-Host "Creating Folder"

# if folder already exist then skip
if (Test-Path $folder) {
    Write-Host "Folder already exist. Skippping..."
} else {
    New-Item $folder -ItemType Directory
}

# if folder and icon already exist then skip
if (Test-Path $logofolder) {
    Write-Host "Folder already exist. Skippping..."
} else {
    New-Item $logofolder -ItemType Directory
    copy $currentFolder\logo.png $logofolder\logo.png
}



Write-Host "Installation Complete"
exit

# powershell -noprofile -command "&{ start-process powershell -noprofile -ArgumentList '-file C:\Windows\UpdateWindows.ps1' -verb RunAs -WindowStyle hidden}" -WindowStyle hidden