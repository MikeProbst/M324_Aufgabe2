const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

try {
    execSync("git config core.hooksPath .git-hooks", {
        stdio: "inherit"
    });
    const hookPath = path.join(
        __dirname,
        "..",
        ".git-hooks",
        "commit-msg"
    );
    if (process.platform !== "win32") {
        fs.chmodSync(hookPath, 0o755);
    }

    console.log("Git Hooks wurden erfolgreich eingerichtet.");
} catch (error) {
    console.error("Git Hooks konnten nicht eingerichtet werden.");
    console.error(error.message);
    process.exit(1);
}