import jsPDF from 'jspdf';
import { CORE_SERVICES, PHONE_NUMBER, EMAIL_ADDRESS, EMIRATES_LIST } from '../data/servicesData';

export function generatePdfBrochure() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Helper colors
  const primaryColor = [11, 37, 69];    // Deep Navy #0b2545
  const accentColor = [249, 115, 22];   // Orange #f97316
  const darkTextColor = [30, 41, 59];   // Slate 800
  const lightBg = [248, 250, 252];      // Slate 50

  let y = 15;

  // --- PAGE HEADER BAND ---
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Orange Accent Stripe
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(0, 42, pageWidth, 2.5, 'F');

  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('FIX DUBAI', 14, 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('DUBAI PREMIER TECHNICAL & BUILDING SERVICES L.L.C', 14, 25);
  doc.setFontSize(9);
  doc.setTextColor(220, 230, 245);
  doc.text('24/7 Emergency Dispatch  |  DEWA & Dubai Municipality Standard Certified', 14, 32);

  // Right Header Contact Info
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(249, 115, 22);
  doc.text(PHONE_NUMBER, pageWidth - 14, 18, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text(EMAIL_ADDRESS, pageWidth - 14, 25, { align: 'right' });
  doc.text('www.fixdubai.pro', pageWidth - 14, 32, { align: 'right' });

  y = 54;

  // --- DOCUMENT TITLE ---
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('OFFICIAL SERVICES BROCHURE & RATE CARD (2026)', 14, y);

  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text('Serving Residential Villas, Luxury Apartments, Offices & Retail Shops across Dubai & UAE', 14, y);

  y += 10;

  // --- HIGHLIGHT BOX (COMPANY OVERVIEW) ---
  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(14, y, pageWidth - 28, 26, 3, 3, 'FD');

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Why Choose Fix Dubai?', 18, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  const overviewText = [
    '• Rapid 45-Minute Emergency Response across Dubai Marina, Downtown, JVC, Palm Jumeirah & Business Bay.',
    '• 100% Upfront Transparent Pricing with no hidden costs or surprise fees.',
    '• All repairs backed by a 6-Month Complete Service & Workmanship Warranty.'
  ];
  overviewText.forEach((line, index) => {
    doc.text(line, 18, y + 13 + index * 5.5);
  });

  y += 34;

  // --- SERVICES TABLE HEADER ---
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(14, y, pageWidth - 28, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('SERVICE CATEGORY', 18, y + 5.5);
  doc.text('KEY SCOPE OF WORK', 75, y + 5.5);
  doc.text('STARTING RATE (AED)', pageWidth - 18, y + 5.5, { align: 'right' });

  y += 8;

  // --- SERVICES LISTING ---
  CORE_SERVICES.forEach((service, idx) => {
    // Check page overflow
    if (y > pageHeight - 35) {
      doc.addPage();
      y = 20;
      // Re-draw Table Header on new page
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(14, y, pageWidth - 28, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('SERVICE CATEGORY', 18, y + 5.5);
      doc.text('KEY SCOPE OF WORK', 75, y + 5.5);
      doc.text('STARTING RATE (AED)', pageWidth - 18, y + 5.5, { align: 'right' });
      y += 8;
    }

    const itemHeight = 22;
    if (idx % 2 === 0) {
      doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
      doc.rect(14, y, pageWidth - 28, itemHeight, 'F');
    }

    // Border line
    doc.setDrawColor(226, 232, 240);
    doc.line(14, y + itemHeight, pageWidth - 14, y + itemHeight);

    // Title
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.text(service.title, 18, y + 6);

    // Emergency tag if available
    if (service.emergencyAvailable) {
      doc.setFillColor(254, 226, 226);
      doc.roundedRect(18, y + 9.5, 28, 5.5, 1.5, 1.5, 'F');
      doc.setTextColor(185, 28, 28);
      doc.setFontSize(7.5);
      doc.text('24/7 EMERGENCY', 20.5, y + 13.5);
    }

    // Description & Features
    doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    
    // Take top 2 features
    const feat1 = service.features[0] ? `• ${service.features[0]}` : '';
    const feat2 = service.features[1] ? `• ${service.features[1]}` : '';
    doc.text(service.shortDescription.substring(0, 58) + '...', 75, y + 6);
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    if (feat1) doc.text(feat1.substring(0, 55), 75, y + 11.5);
    if (feat2) doc.text(feat2.substring(0, 55), 75, y + 16.5);

    // Price
    doc.setTextColor(249, 115, 22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(service.priceRangeAED, pageWidth - 18, y + 11.5, { align: 'right' });

    y += itemHeight;
  });

  y += 10;

  // Check overflow before bottom section
  if (y > pageHeight - 50) {
    doc.addPage();
    y = 20;
  }

  // --- SERVICE AREAS & BOOKING BANNER ---
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.roundedRect(14, y, pageWidth - 28, 32, 4, 4, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Ready to Book? Get Instant Technician Dispatch Today!', 20, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(220, 230, 245);
  doc.text(`Call or WhatsApp 24/7 Hotline: ${PHONE_NUMBER}`, 20, y + 17);
  doc.text(`Coverage: Dubai Marina, Downtown, Jumeirah, Business Bay, Arabian Ranches & All Emirates`, 20, y + 24);

  // Footer note on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`FIX DUBAI  |  Official Brochure & Rate Card  |  Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  }

  // Save the PDF
  doc.save('FIX_DUBAI_Official_Brochure_&_Rate_Card.pdf');
}
