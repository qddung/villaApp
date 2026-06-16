const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'frontend/src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('<Link ')) {
    content = content.replace(/<Link([^>]*)\bhref=/g, '<Link$1to=');
    changed = true;
  }

  if (file.endsWith('LocaleProvider.tsx') && content.includes('export function LocaleProvider')) {
    content = content.replace(/export function LocaleProvider/g, 'export default function LocaleProvider');
    changed = true;
  }
  
  if (file.endsWith('main.tsx') && content.includes('import { LocaleProvider }')) {
    content = content.replace(/import { LocaleProvider }/g, 'import LocaleProvider');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
