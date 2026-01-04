import { rm, cp } from 'fs/promises';
import path from 'path';

const root = process.cwd();
const distPath = path.join(root, 'dist');

// Copy dist to root, overwriting files
async function main() {
  try {
    console.log('Copying dist to root...');
    await cp(distPath, root, { recursive: true, force: true });
    console.log('Copied dist to root');
  } catch (err) {
    console.error('Failed to copy dist to root:', err);
    process.exit(1);
  }
}

main();