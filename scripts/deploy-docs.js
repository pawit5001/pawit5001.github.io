import { rm, cp } from 'fs/promises';
import path from 'path';

const root = process.cwd();
const distPath = path.join(root, 'dist');
const docsPath = path.join(root, 'docs');

async function main() {
  try {
    // remove existing docs folder
    await rm(docsPath, { recursive: true, force: true });
    // copy dist to docs
    await cp(distPath, docsPath, { recursive: true });
    console.log('Copied dist -> docs');
  } catch (err) {
    console.error('Failed to copy dist to docs:', err);
    process.exit(1);
  }
}

main();
