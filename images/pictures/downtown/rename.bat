@echo off
setlocal enabledelayedexpansion

REM Initialize counter
set /a count=1

REM Loop through all files (ignoring folders)
for %%f in (*.*) do (
    if not "%%~ff"=="%~f0" (
        ren "%%f" "!count!.jpg"
        set /a count+=1
    )
)

echo Done renaming files to numbered .jpg files.
pause
