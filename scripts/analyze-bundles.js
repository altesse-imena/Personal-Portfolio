const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script to analyze and optimize JavaScript bundles
 * This helps identify large dependencies and opportunities for code splitting
 */

console.log('🔍 Analyzing JavaScript bundles...');

// Install bundle analyzer if not already installed
try {
  console.log('Installing @next/bundle-analyzer if needed...');
  execSync('npm list @next/bundle-analyzer || npm install --save-dev @next/bundle-analyzer', { stdio: 'inherit' });
} catch (error) {
  console.error('Error installing dependencies:', error);
  process.exit(1);
}

// Update next.config.js to include bundle analyzer
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
let nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

// Check if bundle analyzer is already configured
if (!nextConfigContent.includes('@next/bundle-analyzer')) {
  console.log('Adding bundle analyzer to next.config.js...');
  
  // Create backup of original config
  fs.writeFileSync(`${nextConfigPath}.backup`, nextConfigContent, 'utf8');
  
  // Add bundle analyzer configuration
  const analyzerConfig = `
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

`;

  // Modify the next.config.js file to include the analyzer
  if (nextConfigContent.startsWith('/** @type')) {
    // Handle JSDoc type annotation
    const typeAnnotationEnd = nextConfigContent.indexOf('*/') + 2;
    nextConfigContent = 
      nextConfigContent.substring(0, typeAnnotationEnd) + 
      '\n' + analyzerConfig + 
      nextConfigContent.substring(typeAnnotationEnd);
  } else {
    nextConfigContent = analyzerConfig + nextConfigContent;
  }
  
  // Update the module.exports to wrap with withBundleAnalyzer
  nextConfigContent = nextConfigContent.replace(
    /module\.exports\s*=\s*(?:(\{)|([A-Za-z0-9_]+))/,
    (match, braceGroup, identifierGroup) => {
      if (braceGroup) {
        return 'module.exports = withBundleAnalyzer({';
      } else if (identifierGroup) {
        return `module.exports = withBundleAnalyzer(${identifierGroup}`;
      }
      return match;
    }
  );
  
  // Add closing parenthesis if needed
  if (nextConfigContent.trim().endsWith('}')) {
    nextConfigContent = nextConfigContent.replace(/}(?=\s*$)/, '})');
  }
  
  fs.writeFileSync(nextConfigPath, nextConfigContent, 'utf8');
  console.log('Bundle analyzer configuration added to next.config.js');
}

console.log('\n📊 To analyze bundles, run:');
console.log('ANALYZE=true npm run build');
console.log('\n💡 Tips for optimizing bundles:');
console.log('1. Use dynamic imports for large components that are not needed on initial load');
console.log('2. Consider code splitting for routes that have heavy dependencies');
console.log('3. Look for duplicate dependencies or opportunities to use smaller alternatives');
console.log('4. Use tree-shaking friendly imports (e.g., import { Button } from "ui" instead of import Button from "ui/Button")');
console.log('\n✅ Bundle analysis setup complete!');
