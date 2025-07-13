const fs = require('fs');
const path = require('path');

const ignore = ['node_modules', '.git', '.vscode', '.next', 'dist', 'build'];

function printTree(dir, prefix = '') {
  const files = fs.readdirSync(dir).filter(file => !ignore.includes(file));
  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLast ? '    ' : '│   ');
    console.log(prefix + connector + file);
    if (fs.statSync(fullPath).isDirectory()) {
      printTree(fullPath, nextPrefix);
    }
  });
}

printTree('.');
