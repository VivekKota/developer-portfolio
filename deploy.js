const { execSync } = require("child_process");
const fs = require("fs");

// Function to run shell commands
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

// Check if the out directory exists
if (!fs.existsSync("./out")) {
  console.error(
    'The "out" directory does not exist. Make sure the build was successful.'
  );
  process.exit(1);
}

// Deploy to GitHub Pages
console.log("Deploying to GitHub Pages...");

if (
  runCommand("git checkout --orphan gh-pages") &&
  runCommand("cp .nojekyll out/") && // Add this line
  runCommand("git --work-tree out add --all") &&
  runCommand('git --work-tree out commit -m "Deploy Next.js to GitHub Pages"') &&
  runCommand("git push origin HEAD:gh-pages --force") &&
  runCommand("git checkout -f main") &&
  runCommand("git branch -D gh-pages")
) {
  console.log("Deployed successfully!");
} else {
  console.log("Deployment failed!");
}
