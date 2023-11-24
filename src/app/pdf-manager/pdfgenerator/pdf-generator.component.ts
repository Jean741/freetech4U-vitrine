import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTMLOptions, jsPDF, jsPDFOptions} from "jspdf";

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.css'
})
export class PdfGeneratorComponent {
  pdfSrc: any;

  generatePDF() {
    const pdfOptions: jsPDFOptions = {
      orientation: 'portrait', // or 'landscape'
      unit: 'px', // or 'pt', 'px', 'in', 'cm', 'ex', 'em', 'pc'
      format:  "a4", // or [width, height] in points
      compress: true, // enable PDF compression
      precision: 100, // number of decimal places for numbers in PDF
      filters: ['ASCIIHexEncode'], // array of applied filters
      userUnit: 1.0, // scaling factor for the unit
      putOnlyUsedFonts: false, // only put fonts used in the document
      //hotfixes: ['pxmldom', 'removefetch'],
      floatPrecision: 'smart', // 'smart' or a number for float precision
    };
    const pdf = new jsPDF(pdfOptions);
    const content = document.getElementById('pdf-content');
    const options: any = {
      callback: (pdf:jsPDF) => {
       pdf.save('generated.pdf');
       // const pdfDataUri = pdf.output('datauristring');
       // this.pdfSrc=pdfDataUri;
      },
      margin: [10,10,10,10], // Set uniform margins (top, left, bottom, right)
      autoPaging: true,
      image: {
        quality: 1,
        format: 'JPEG',
      },
      html2canvas: {
        scale: 0.8,
      },
      x: 0,
      y: 50,
      width: 520,
      windowWidth: 520,
    };
    pdf.setFont('times','italic',10)
    pdf.html(content as HTMLElement, options);
  }
}
