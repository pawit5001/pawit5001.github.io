This folder contains helper scripts for repository maintenance.

git-push-to-remote.ps1
- Purpose: stage, commit (if needed), create a branch and push to a remote repository.
- Usage (PowerShell):
  pwsh -ExecutionPolicy Bypass -File .\git-push-to-remote.ps1 -RemoteUrl "https://github.com/USER/REPO.git" -Branch "update-portfolio" -CommitMessage "Update portfolio"

Notes:
- The script does not force-push. Inspect the output and resolve conflicts manually if required.
- Ensure `git` is installed and available in PATH.
