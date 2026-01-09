<#
PowerShell helper: commit and push current working tree to a remote GitHub repo.
Usage (PowerShell):
  pwsh -ExecutionPolicy Bypass -File .\scripts\git-push-to-remote.ps1 -RemoteUrl "https://github.com/USER/REPO.git" -Branch "update-portfolio" -CommitMessage "Update portfolio"

Notes:
- The script will NOT force-push. It creates a new branch by default and pushes that branch.
- Resolve conflicts manually if pull/rebase fails.
- Requires Git installed and available in PATH.
#>
param(
  [Parameter(Mandatory=$true)][string]$RemoteUrl,
  [string]$Branch = "update-portfolio",
  [string]$CommitMessage = "Update portfolio: changes from local workspace"
)

function Run-Git([string[]]$args) {
  $p = Start-Process -FilePath git -ArgumentList $args -NoNewWindow -Wait -PassThru -RedirectStandardOutput out.txt -RedirectStandardError err.txt
n  $out = Get-Content out.txt -Raw; $err = Get-Content err.txt -Raw; Remove-Item out.txt,err.txt -ErrorAction SilentlyContinue
  if ($p.ExitCode -ne 0) { Write-Host "git $($args -join ' ') failed:`n$err" -ForegroundColor Red; exit $p.ExitCode }
  return $out
}

Write-Host "Preparing to push to remote: $RemoteUrl (branch: $Branch)" -ForegroundColor Cyan

# ensure in a git repo
try { Run-Git @('rev-parse','--is-inside-work-tree') | Out-Null } catch { Write-Host "Not a git repository. Aborting." -ForegroundColor Red; exit 1 }

# set remote if not present
$hasOrigin = $false
try { Run-Git @('remote','get-url','origin') | Out-Null; $hasOrigin = $true } catch { $hasOrigin = $false }
if (-not $hasOrigin) {
  Write-Host "No 'origin' remote found. Adding origin -> $RemoteUrl" -ForegroundColor Yellow
  Run-Git @('remote','add','origin',$RemoteUrl)
}

# stage changes
Run-Git @('add','-A')

# commit if changes present
$diffIndex = Run-Git @('diff','--staged','--name-only')
if ([string]::IsNullOrWhiteSpace($diffIndex)) {
  Write-Host "No staged changes to commit. Continue to push current branch." -ForegroundColor Yellow
} else {
  Run-Git @('commit','-m',$CommitMessage)
}

# create and checkout branch
$currentBranch = Run-Git @('rev-parse','--abbrev-ref','HEAD').Trim()
if ($currentBranch -ne $Branch) {
  Write-Host "Creating/checking out branch: $Branch" -ForegroundColor Cyan
  Run-Git @('checkout','-b',$Branch)
} else {
  Write-Host "On branch $Branch" -ForegroundColor Green
}

# pull remote updates for safety (rebase)
Write-Host "Fetching origin..." -ForegroundColor Cyan
Run-Git @('fetch','origin')
try {
  Write-Host "Rebasing on origin/$Branch (if exists)" -ForegroundColor Cyan
  Run-Git @('rebase',"origin/$Branch")
} catch {
  Write-Host "Rebase failed or origin/$Branch does not exist; continuing." -ForegroundColor Yellow
}

# push branch
Write-Host "Pushing branch $Branch to origin..." -ForegroundColor Cyan
Run-Git @('push','-u','origin',$Branch)

Write-Host "Push complete. Create a Pull Request on GitHub to merge '$Branch' into main if desired." -ForegroundColor Green
