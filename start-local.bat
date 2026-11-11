@echo off
setlocal
cd /d "%~dp0"
set "PORT=3001"
echo ==========================================
echo       SkillPath AI - Local Server
echo ==========================================
echo Project folder: %CD%
if not exist "package.json" (
  echo ERROR: package.json is missing from this folder.
  echo Extract the complete ZIP and run this file from the extracted folder.
  pause
  exit /b 1
)
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or is not in PATH.
  echo Install Node.js 18 or newer, then reopen VS Code.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm was not found. Reinstall Node.js with npm enabled.
  pause
  exit /b 1
)
if not exist "node_modules\express" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo ERROR: npm install failed. Check your internet connection and npm output.
    pause
    exit /b 1
  )
)
echo Starting SkillPath AI at http://localhost:3001
call npm start
pause
