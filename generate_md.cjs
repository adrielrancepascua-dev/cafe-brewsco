const fs = require('fs');
const path = require('path');

const filesToInclude = [
  'index.html',
  'tailwind.config.js',
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/components/Hero.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/pages/Home.tsx',
  'src/pages/Menu.tsx',
  'src/pages/About.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Gallery.tsx',
  'src/pages/PartyTrays.tsx',
  'src/layouts/Layout.tsx'
];

let mdContent = '# Cafe BrewsCo Codebase\n\n';

filesToInclude.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const ext = path.extname(file).replace('.', '');
    mdContent += `## ${file}\n\`\`\`${ext}\n${content}\n\`\`\`\n\n`;
  } catch (e) {
    console.log(`Could not read ${file}`);
  }
});

// Write to both export locations to be safe
if (!fs.existsSync('chatgpt-eval-bundle')) fs.mkdirSync('chatgpt-eval-bundle');
fs.writeFileSync('chatgpt-eval-bundle/all_code_for_chatgpt.md', mdContent);

if (!fs.existsSync('chatgpt-export')) fs.mkdirSync('chatgpt-export');
fs.writeFileSync('chatgpt-export/all_code_for_chatgpt.md', mdContent);

console.log('Markdown bundle updated with the latest code!');
