/**
 * Script to scan the directory and generate/update icons.json
 * Run via: node generate-icons.js
 */

const fs = require('fs');
const path = require('path');

function scanIcons(dir = '.') {
  const files = fs.readdirSync(dir);
  const svgIcons = [];

  for (const file of files) {
    if (file.toLowerCase().endsWith('.svg')) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      // Prettify name: "scan-qr1.svg" -> "Scan Qr 1"
      let baseName = file.replace(/\.svg$/i, '');
      let cleanName = baseName
        .replace(/[-_]+/g, ' ')
        .replace(/([a-zA-Z])(\d+)/g, '$1 $2')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase());

      // Auto categorize
      let category = 'General';
      const lower = file.toLowerCase();
      if (/discord|github|instagram|linkedin|telegram|twitter|youtube|facebook|whatsapp|tiktok|reddit/.test(lower)) {
        category = 'Social';
      } else if (/qr|scan|barcode/.test(lower)) {
        category = 'Scanner & QR';
      } else if (/setting|gear|config|tool|option/.test(lower)) {
        category = 'System';
      } else if (/arrow|chevron|caret|direction/.test(lower)) {
        category = 'Arrows';
      } else if (/user|profile|account|avatar/.test(lower)) {
        category = 'Users';
      }

      svgIcons.push({
        filename: file,
        name: cleanName,
        size: (stat.size / 1024).toFixed(2) + ' KB',
        category: category,
        updatedAt: stat.mtime.toISOString().split('T')[0]
      });
    }
  }

  // Sort alphabetically by name
  svgIcons.sort((a, b) => a.name.localeCompare(b.name));

  const jsonContent = JSON.stringify(svgIcons, null, 2);
  fs.writeFileSync('icons.json', jsonContent);
  console.log(`Successfully indexed ${svgIcons.length} SVG icon(s) into icons.json`);
}

scanIcons();
