const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. EMIS Logo SVG
const emisSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="500" height="160">
  <g transform="translate(80, 80)">
    <circle cx="0" cy="0" r="54" fill="#ffffff" stroke="#0d8b54" stroke-width="7"/>
    <path d="M -28 24 L -28 -24 L -9 2 L 9 -24 L 28 24" fill="none" stroke="#0d8b54" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M -9 2 L 0 -12 L 9 2" fill="none" stroke="#0d8b54" stroke-width="7" stroke-linecap="round"/>
    <polygon points="-46,0 -54,-15 -54,15" fill="#0d8b54"/>
    <polygon points="46,0 54,-15 54,15" fill="#0d8b54"/>
  </g>
  <text x="160" y="98" font-family="Arial, Helvetica, sans-serif" font-size="80" font-weight="900" fill="#0d8b54" letter-spacing="4">EMIS</text>
  <text x="162" y="128" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" fill="#334155" letter-spacing="1">EMI SOLUTIONS PVT. LTD. (FILTERS)</text>
</svg>
`);

// 2. Hero Cards: 1983 x 793
async function generateAssets() {
  const brandLogoDir = path.join(process.cwd(), 'public', 'Brand_logo');
  const heroCardDir = path.join(process.cwd(), 'public', 'product_hero_card');
  if (!fs.existsSync(brandLogoDir)) fs.mkdirSync(brandLogoDir, { recursive: true });
  if (!fs.existsSync(heroCardDir)) fs.mkdirSync(heroCardDir, { recursive: true });

  await sharp(emisSvg).png().toFile(path.join(brandLogoDir, 'emis.png'));
  fs.writeFileSync(path.join(brandLogoDir, 'emis.svg'), emisSvg);

  console.log('Brand logos created.');

  // Create Hero Card for EMIS: 1983 x 793
  // Gradient background + Product showcase montage on right + Brand banner on left
  const emisFilterImg = await sharp('public/product_images/emis/line_filters.jpg')
    .resize(520, 390, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 0 } })
    .toBuffer();
  const emisEmpImg = await sharp('public/product_images/emis/emp_chamber_filters.jpg')
    .resize(480, 360, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 0 } })
    .toBuffer();
  const emisIecImg = await sharp('public/product_images/emis/iec_inlet_filter.jpg')
    .resize(360, 270, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 0 } })
    .toBuffer();

  const emisHeroSvg = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1983" height="793" viewBox="0 0 1983 793">
    <defs>
      <linearGradient id="emisBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22" />
        <stop offset="45%" stop-color="#064e3b" />
        <stop offset="80%" stop-color="#047857" />
        <stop offset="100%" stop-color="#059669" />
      </linearGradient>
      <linearGradient id="cardGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02" />
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="1983" height="793" fill="url(#emisBg)" />
    <!-- Modern geometric tech pattern -->
    <circle cx="1600" cy="400" r="420" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.1" />
    <circle cx="1600" cy="400" r="300" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="10 15" stroke-opacity="0.15" />
    <circle cx="1600" cy="400" r="180" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.2" />

    <!-- Left Badge & Content -->
    <rect x="140" y="130" width="360" height="42" rx="21" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.5"/>
    <text x="320" y="157" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#34d399" text-anchor="middle" letter-spacing="2">AUTHORIZED DEALER &amp; SUPPLIER</text>

    <!-- Main Title -->
    <text x="140" y="270" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="900" fill="#ffffff" letter-spacing="1">EMI SOLUTIONS</text>
    <text x="140" y="340" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" fill="#6ee7b7">EMI/EMC Power Line &amp; EMP Chamber Filters</text>

    <!-- Tagline & Description -->
    <text x="140" y="415" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="400" fill="#d1fae5">
      Single &amp; Three Phase Power Line Filters • EMP Chamber Shielding
    </text>
    <text x="140" y="455" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="400" fill="#d1fae5">
      Power Feedthrough Capacitors • IEC Inlets • Surge Protection Devices
    </text>

    <!-- Stat Highlights -->
    <g transform="translate(140, 520)">
      <rect x="0" y="0" width="220" height="110" rx="16" fill="url(#cardGlow)" stroke="#ffffff" stroke-opacity="0.2"/>
      <text x="110" y="52" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="bold" fill="#ffffff" text-anchor="middle">10 kHz - 10 GHz</text>
      <text x="110" y="85" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="#a7f3d0" text-anchor="middle">Attenuation Range</text>
    </g>

    <g transform="translate(390, 520)">
      <rect x="0" y="0" width="220" height="110" rx="16" fill="url(#cardGlow)" stroke="#ffffff" stroke-opacity="0.2"/>
      <text x="110" y="52" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="bold" fill="#ffffff" text-anchor="middle">1A - 1200A</text>
      <text x="110" y="85" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="#a7f3d0" text-anchor="middle">Current Range</text>
    </g>

    <g transform="translate(640, 520)">
      <rect x="0" y="0" width="220" height="110" rx="16" fill="url(#cardGlow)" stroke="#ffffff" stroke-opacity="0.2"/>
      <text x="110" y="52" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="bold" fill="#ffffff" text-anchor="middle">MIL-STD</text>
      <text x="110" y="85" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="#a7f3d0" text-anchor="middle">EMP Certified</text>
    </g>

    <!-- Right Card Frames -->
    <rect x="990" y="100" width="910" height="593" rx="24" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.5"/>
  </svg>
  `);

  await sharp(emisHeroSvg)
    .composite([
      { input: emisEmpImg, top: 130, left: 1020 },
      { input: emisFilterImg, top: 270, left: 1360 },
      { input: emisIecImg, top: 120, left: 1490 }
    ])
    .png()
    .toFile(path.join(heroCardDir, 'EMIS.png'));

  console.log('EMIS Hero Card created.');
}
generateAssets();

