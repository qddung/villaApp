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

  // Replace next/link
  if (content.includes('next/link')) {
    content = content.replace(/import Link from ["']next\/link["'];?/g, 'import { Link } from "react-router-dom";');
    content = content.replace(/href=/g, 'to='); // naive replace href to 'to' for Link. Wait, <a> tags also use href.
    // Better to use regex for <Link href=...>
    content = content.replace(/<Link([^>]*)\bhref=/g, '<Link$1to=');
    changed = true;
  }

  // Replace next/image
  if (content.includes('next/image')) {
    content = content.replace(/import Image from ["']next\/image["'];?/g, '');
    // replace <Image to <img
    content = content.replace(/<Image/g, '<img');
    // next/image uses 'fill', replace with standard css
    content = content.replace(/fill(\s|>)/g, 'className="absolute inset-0 w-full h-full object-cover" $1');
    changed = true;
  }

  // Replace next/navigation
  if (content.includes('next/navigation')) {
    content = content.replace(/import {([^}]*)} from ["']next\/navigation["'];?/g, (match, imports) => {
      let reactRouterImports = [];
      if (imports.includes('useRouter')) reactRouterImports.push('useNavigate');
      if (imports.includes('useSearchParams')) reactRouterImports.push('useSearchParams');
      if (imports.includes('usePathname')) reactRouterImports.push('useLocation');
      if (imports.includes('notFound')) reactRouterImports.push('useNavigate'); // simplified
      return `import { ${reactRouterImports.join(', ')} } from "react-router-dom";`;
    });
    content = content.replace(/useRouter\(\)/g, 'useNavigate()');
    content = content.replace(/const router = useNavigate\(\)/g, 'const navigate = useNavigate()');
    content = content.replace(/router\.push\(/g, 'navigate(');
    content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');
    changed = true;
  }

  if (content.includes('"use client"')) {
    content = content.replace(/"use client";?\n?/g, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
