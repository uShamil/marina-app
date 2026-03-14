import fs from 'fs';
import path from 'path';

// Define the root of the project to scan (src folder)
const srcDir = path.join(process.cwd(), 'src');
const outputFile = path.join(process.cwd(), 'ARCHITECTURE.md');

// Generate the tree string
function generateTree(dir, prefix = '') {
  let result = '';
  const files = fs.readdirSync(dir);
  
  files.forEach((file, index) => {
    // Skip common ignores
    if (file === 'node_modules' || file === '.git' || file === '.DS_Store') return;
    
    const isLast = index === files.length - 1;
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const connector = isLast ? '└── ' : '├── ';
    
    result += `${prefix}${connector}${file}\n`;
    
    if (stats.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      result += generateTree(filePath, newPrefix);
    }
  });
  
  return result;
}

// Prepare Markdown content
const date = new Date().toUTCString();
const tree = generateTree(srcDir);

const markdown = `
# Marina Reservation System - Architecture & Schema
*Auto-generated on: ${date}*

This document outlines the current state, architecture, and documentation schema of the Pelra Marina Reservation Application.

## 1. Tech Stack
*   **Frontend Framework:** React 18 (Vite)
*   **Styling:** Tailwind CSS (utility-first styling), Vanilla CSS
*   **Routing:** React Router v6
*   **Database & Authentication:** Supabase (PostgreSQL + GoTrue Auth)
*   **Icons & Components:** Swiper.js

---

## 2. Directory Structure (Auto-Scanned)
\`\`\`text
src/
${tree}
\`\`\`

---

## 3. Database Schema (Supabase)

### Table: \`marinas\`
| Column Name   | Type    | Description                                   |
| :------------ | :------ | :-------------------------------------------- |
| \`id\`          | uuid    | Primary key, unique identifier                |
| \`name\`        | text    | Name of the boat/yacht (e.g. "Azimut 60")     |
| \`location\`    | text    | Marina city/location (e.g., "Dubai", "Miami") |
| \`price\`       | integer | Booking price (per hour or per day)           |
| \`image\`       | text    | URL to the primary image                      |
| \`guests\`      | integer | Maximum passenger capacity                    |
| \`bedrooms\`    | integer | Number of sleeping cabins                     |
| \`rating\`      | integer | Review rating (out of 5)                      |

---

## 4. Authentication Flow Map

1. **Guest State:** Visitor clicks **Sign Up** -> \`/register\` -> \`supabase.auth.signUp()\`.
2. **Authenticated State:** \`useAuth\` hook -> User goes to \`/dashboard\`.
`;

// Write to root directory
fs.writeFileSync(outputFile, markdown.trim());
console.log('Successfully generated ARCHITECTURE.md');
