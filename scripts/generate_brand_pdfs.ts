import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import sharp from 'sharp';
import { BRANDS_DATA, BRAND_HERO_MAP } from '../src/data/brandsData.ts';

type BrandData = (typeof BRANDS_DATA)[number];

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'brochures');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function prepareImageBuffer(relPath: string, maxW = 300, maxH = 200): Promise<Buffer | null> {
  if (!relPath) return null;
  const fullPath = path.join(process.cwd(), 'public', relPath.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) return null;

  try {
    const buf = await sharp(fullPath)
      .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();
    return buf;
  } catch (err) {
    console.warn(`Could not process image ${relPath}:`, (err as Error).message);
    return null;
  }
}

async function generateBrandPdf(brand: BrandData): Promise<string> {
  const outputPath = path.join(OUTPUT_DIR, `${brand.id}.pdf`);

  return new Promise(async (resolve, reject) => {
    // A4 size: 595.28 x 841.89 points
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 20, bottom: 20, left: 36, right: 36 },
      autoFirstPage: true,
      bufferPages: true
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const logoBuf = await prepareImageBuffer('/new_logo_01.png', 160, 50);
    const heroImgRel = brand.heroImage || BRAND_HERO_MAP[brand.id];
    const heroBuf = heroImgRel ? await prepareImageBuffer(heroImgRel, 480, 180) : null;

    // --- Helper function: Draw Standard Header ---
    const drawHeader = (isFirstPage = false) => {
      const topY = 24;
      if (logoBuf) {
        doc.image(logoBuf, 36, topY, { height: 26 });
      } else {
        doc.fontSize(14).fillColor('#c8102e').font('Helvetica-Bold').text('S. P. ENTERPRISES', 36, topY);
      }

      doc.fontSize(7.5).fillColor('#64748b').font('Helvetica-Bold')
        .text('AUTHORISED OEM DISTRIBUTOR & AUTOMATION SPECIALIST', 180, topY + 2, { align: 'right', width: 379 });
      doc.fontSize(7).fillColor('#0f172a').font('Helvetica')
        .text('Pune HQ: +91 83085 02100 | info@speautomation.com | www.speautomation.com', 180, topY + 14, { align: 'right', width: 379 });

      doc.moveTo(36, topY + 30).lineTo(559, topY + 30).strokeColor('#c8102e').lineWidth(1.5).stroke();
    };

    // Draw header on page 1
    drawHeader(true);

    let curY = 64;

    // --- Hero Banner Box ---
    const heroBoxHeight = heroBuf ? 125 : 95;
    doc.rect(36, curY, 523, heroBoxHeight).fill('#0f172a');

    // Accent line on left of hero box
    doc.rect(36, curY, 5, heroBoxHeight).fill('#c8102e');

    // Hero Text
    doc.fontSize(7.5).fillColor('#f59e0b').font('Helvetica-Bold')
      .text(`OFFICIAL BRAND CATALOGUE • ${brand.filterCategory.toUpperCase()}`, 52, curY + 10);

    doc.fontSize(16).fillColor('#ffffff').font('Helvetica-Bold')
      .text(brand.name.toUpperCase(), 52, curY + 23, { width: heroBuf ? 310 : 490 });

    doc.fontSize(9).fillColor('#e2e8f0').font('Helvetica')
      .text(brand.fullName, 52, curY + 44, { width: heroBuf ? 310 : 490 });

    doc.fontSize(7.8).fillColor('#94a3b8').font('Helvetica-Oblique')
      .text(brand.tagline, 52, curY + 58, { width: heroBuf ? 310 : 490 });

    // Badge pill in hero box
    doc.roundedRect(52, curY + 82, 130, 16, 3).fill('#c8102e');
    doc.fontSize(7).fillColor('#ffffff').font('Helvetica-Bold')
      .text(brand.badge.toUpperCase(), 52, curY + 86, { width: 130, align: 'center' });

    // Embed hero image on the right if available
    if (heroBuf) {
      try {
        doc.image(heroBuf, 375, curY + 8, { width: 172, height: 108, fit: [172, 108], align: 'center' });
      } catch (e) {}
    }

    curY += heroBoxHeight + 10;

    // --- Overview & Key Features Section ---
    doc.rect(36, curY, 523, 17).fill('#f1f5f9');
    doc.fontSize(8).fillColor('#0f172a').font('Helvetica-Bold')
      .text('ENGINEERING OVERVIEW & TECHNOLOGY HIGHLIGHTS', 44, curY + 4);

    curY += 22;

    doc.fontSize(8).fillColor('#334155').font('Helvetica')
      .text(brand.overview, 36, curY, { width: 523, align: 'justify', lineGap: 1.5 });

    curY = doc.y + 7;

    // Features 2-column list
    const features = brand.keyFeatures || [];
    if (features.length > 0) {
      const colW = 255;
      const startFeatY = curY;
      let leftY = startFeatY;
      let rightY = startFeatY;

      features.forEach((feat, fIdx) => {
        const isLeft = fIdx % 2 === 0;
        const x = isLeft ? 36 : 304;
        const y = isLeft ? leftY : rightY;

        doc.circle(x + 4, y + 4, 2.5).fill('#c8102e');
        doc.fontSize(7.2).fillColor('#1e293b').font('Helvetica')
          .text(feat, x + 12, y, { width: colW - 14, lineGap: 1 });

        const h = doc.heightOfString(feat, { width: colW - 14 }) + 3;
        if (isLeft) leftY += h;
        else rightY += h;
      });

      curY = Math.max(leftY, rightY) + 7;
    }

    // --- Helper function for dynamic Page Breaks ---
    const checkPageBreak = (neededHeight: number) => {
      if (curY + neededHeight > 765) {
        doc.addPage();
        drawHeader();
        curY = 64;
      }
    };

    // --- Product Categories & Items ---
    for (const cat of brand.categories) {
      checkPageBreak(35);

      // Category Header Bar
      doc.rect(36, curY, 523, 17).fill('#c8102e');
      doc.fontSize(8.5).fillColor('#ffffff').font('Helvetica-Bold')
        .text(cat.categoryName.toUpperCase(), 44, curY + 4);
      curY += 22;

      // Products in this category
      for (const prod of cat.products) {
        const prodBuf = prod.image ? await prepareImageBuffer(prod.image, 140, 100) : null;
        
        let textLeftX = prodBuf ? 132 : 46;
        let textWidth = prodBuf ? 417 : 503;

        // Measure text heights to accurately determine card height
        doc.font('Helvetica').fontSize(7.5);
        const descHeight = doc.heightOfString(prod.desc, { width: textWidth, lineGap: 1 });

        const specsText = prod.specs && prod.specs.length > 0 ? prod.specs.map(s => `• ${s}`).join('   ') : '';
        doc.font('Helvetica-Bold').fontSize(6.8);
        const specsHeight = specsText ? doc.heightOfString(specsText, { width: textWidth, lineGap: 1 }) : 0;

        const contentHeight = 22 + descHeight + (specsHeight > 0 ? specsHeight + 8 : 4);
        const itemBoxH = Math.max(prodBuf ? 82 : 55, contentHeight);

        checkPageBreak(itemBoxH + 8);

        const itemBoxY = curY;

        // Product Box Border
        doc.roundedRect(36, itemBoxY, 523, itemBoxH, 4).fillAndStroke('#ffffff', '#e2e8f0');

        // Left: Product Image Container
        if (prodBuf) {
          doc.rect(42, itemBoxY + 5, 80, itemBoxH - 10).fill('#f8fafc');
          try {
            doc.image(prodBuf, 44, itemBoxY + 8, {
              fit: [76, itemBoxH - 16],
              align: 'center',
              valign: 'center'
            });
          } catch (e) {}
        }

        // Product Title & Optional Badge
        doc.fontSize(9).fillColor('#0f172a').font('Helvetica-Bold')
          .text(prod.name, textLeftX, itemBoxY + 6, { width: textWidth - (prod.badge ? 85 : 0) });

        if (prod.badge) {
          doc.roundedRect(textLeftX + textWidth - 80, itemBoxY + 5, 75, 13, 2).fill('#fff1f2');
          doc.fontSize(6.5).fillColor('#c8102e').font('Helvetica-Bold')
            .text(prod.badge, textLeftX + textWidth - 80, itemBoxY + 8, { width: 75, align: 'center' });
        }

        let innerY = itemBoxY + 20;

        // Product Description
        doc.fontSize(7.5).fillColor('#475569').font('Helvetica')
          .text(prod.desc, textLeftX, innerY, { width: textWidth, lineGap: 1 });

        innerY = doc.y + 3;

        // Product Specifications
        if (specsText) {
          doc.fontSize(6.8).fillColor('#0284c7').font('Helvetica-Bold')
            .text(specsText, textLeftX, innerY, { width: textWidth, lineGap: 1 });
        }

        curY += itemBoxH + 5;
      }

      curY += 4;
    }

    // --- Commercial RFQ & Ordering Footer Card ---
    checkPageBreak(85);

    doc.rect(36, curY, 523, 74).fill('#0f172a');
    doc.rect(36, curY, 4, 74).fill('#f59e0b');

    doc.fontSize(8.5).fillColor('#f59e0b').font('Helvetica-Bold')
      .text('OFFICIAL COMMERCIAL QUOTATION & TECHNICAL SUPPORT', 48, curY + 8);

    doc.fontSize(7.5).fillColor('#ffffff').font('Helvetica')
      .text('To request an instant pricing quotation, OEM warranty validation, or technical submittals for this brand:', 48, curY + 22, { width: 500 });

    // Contact Details
    doc.fontSize(7.5).fillColor('#e2e8f0').font('Helvetica-Bold')
      .text('Director: Mr. Pradeep Kulkarni', 48, curY + 35);
    doc.fontSize(7.2).fillColor('#cbd5e1').font('Helvetica')
      .text('Mobile: +91 83085 02100 / +91 94220 12179', 48, curY + 47);
    doc.fontSize(7.2).fillColor('#fde68a').font('Helvetica')
      .text('Email: info@speautomation.com | Online RFQ: www.speautomation.com/request-quote', 48, curY + 59);

    curY += 84;

    // --- Add Running Footers to All Buffered Pages ---
    const totalPages = doc.bufferedPageRange().count;
    for (let i = 0; i < totalPages; i++) {
      doc.switchToPage(i);

      // Footer divider
      doc.moveTo(36, 804).lineTo(559, 804).strokeColor('#cbd5e1').lineWidth(0.5).stroke();

      // Footer text (lineBreak: false prevents auto-adding blank pages)
      doc.fontSize(6.8).fillColor('#64748b').font('Helvetica')
        .text(`S. P. ENTERPRISES Pune • Authorised Dealer: ${brand.name} • 100% Genuine OEM Warranty`, 36, 810, { width: 380, lineBreak: false });

      doc.fontSize(6.8).fillColor('#64748b').font('Helvetica-Bold')
        .text(`Page ${i + 1} of ${totalPages}`, 420, 810, { width: 139, align: 'right', lineBreak: false });
    }

    doc.end();

    stream.on('finish', () => resolve(outputPath));
    stream.on('error', (err) => reject(err));
  });
}

async function run() {
  console.log(`Starting PDF generation for ${BRANDS_DATA.length} brands...`);
  for (const brand of BRANDS_DATA) {
    const file = await generateBrandPdf(brand);
    const stat = fs.statSync(file);
    console.log(`✓ [${brand.id}] ${brand.name} -> ${(stat.size / 1024).toFixed(1)} KB (${file})`);
  }
  console.log('All brand PDF catalogues generated successfully!');
}

run().catch(console.error);
