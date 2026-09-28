// Zips dist/ into civorax-group-site.zip for uploading to cPanel.
// Uses Windows' built-in bsdtar (creates real .zip files with forward-slash paths,
// so folders extract correctly on the Linux server). Falls back to `zip` elsewhere.
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const out = 'civorax-group-site.zip';
if (existsSync(out)) rmSync(out);

if (process.platform === 'win32') {
  const tar = join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe');
  execFileSync(tar, ['-a', '-c', '-f', out, '-C', 'dist', '.'], { stdio: 'inherit' });
} else {
  execFileSync('zip', ['-r', `../${out}`, '.'], { cwd: 'dist', stdio: 'inherit' });
}
console.log(`\n✔ ${out} ready — upload it to public_html in cPanel and extract.`);
