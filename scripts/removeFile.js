import fs from "fs";
import path, { dirname } from "path";

const targetPath = path.resolve("../assets/react-app");
const buildPath = path.resolve("dist");

async function copyFolder(src, dest) {
  await fs.mkdirSync(dest, { recursive: true });

  const entries = await fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath); // Recursively copy subfolders
    } else {
      console.log(`ℹ️ Copying file: ${srcPath} to ${destPath}`);
      await fs.copyFileSync(srcPath, destPath); // Copy files
    }
  }

  console.log(`✅ Folder copied from ${src} to ${dest}`);
}

if(fs.existsSync(targetPath)) {
    console.log(`✅ Path exists: ${targetPath} removing file.`);

    fs.rmSync(targetPath, {recursive: true, force: true});
    console.log(`🗑️ Successfully removed: ${targetPath}`);
} else {
    console.log(`❌ Path does NOT exist: ${targetPath}`);
}

if(fs.existsSync(buildPath)) {
    console.log(`✅ Build exists copying files`);
    copyFolder(buildPath, targetPath);    
} else {
    console.log(`❌ Build does NOT exist`);

}