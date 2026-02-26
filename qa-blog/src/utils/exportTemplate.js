import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";

const safeFilename = (name) => name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

export function downloadAsTxt(content, name) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeFilename(name)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadAsPdf(content, name) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  const lineHeight = 6;
  let y = 20;
  const fontSize = 10;

  doc.setFontSize(fontSize);
  doc.setFont("helvetica", "normal");

  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    const wrapped = doc.splitTextToSize(line || " ", maxWidth);
    for (let j = 0; j < wrapped.length; j++) {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(wrapped[j], margin, y);
      y += lineHeight;
    }
  }

  doc.save(`${safeFilename(name)}.pdf`);
}

export function downloadAsExcel(content, name) {
  const lines = content.split("\n");
  const rows = lines.map((line) => [line]);
  const ws = XLSX.utils.aoa_to_sheet([["Content"], ...rows]);
  const colWidth = Math.min(120, Math.max(80, lines.reduce((max, l) => Math.max(max, l.length), 0)));
  ws["!cols"] = [{ wch: colWidth }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Template");
  XLSX.writeFile(wb, `${safeFilename(name)}.xlsx`);
}

export function downloadTemplate(content, name, format) {
  if (!content) return;
  switch (format) {
    case "pdf":
      downloadAsPdf(content, name);
      break;
    case "xlsx":
    case "excel":
      downloadAsExcel(content, name);
      break;
    case "txt":
    default:
      downloadAsTxt(content, name);
      break;
  }
}
