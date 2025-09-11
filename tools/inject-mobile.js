// node tools/inject-mobile.js
import { readdirSync, readFileSync, writeFileSync } from "fs";
const files = readdirSync(".").filter(f => f.endsWith(".html"));
for (const f of files) {
  let html = readFileSync(f, "utf8");
  if (!html.includes('/styles/mobile-hotfix.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/styles/mobile-hotfix.css">\n</head>');
    writeFileSync(f, html);
    console.log("🔧 injected:", f);
  }
}
