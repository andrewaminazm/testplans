import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { templates, templateContent } from "../data/templates";
import { downloadTemplate } from "../utils/exportTemplate";

const FORMAT_OPTIONS = [
  { id: "txt", label: "TXT", ext: ".txt" },
  { id: "pdf", label: "PDF", ext: ".pdf" },
  { id: "xlsx", label: "Excel", ext: ".xlsx" },
];

// Custom dropdown so options use dark theme (native select options are often white)
function FormatDropdown({ value, onChange, accentColor }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const selected = FORMAT_OPTIONS.find((o) => o.id === value) || FORMAT_OPTIONS[0];
  return (
    <div ref={ref} style={{ position: "relative", minWidth: 100 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 8,
          color: "rgba(255,255,255,0.95)",
          fontSize: "0.8rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <span>{selected.label} {selected.ext}</span>
        <ChevronDown size={14} style={{ opacity: open ? 1 : 0.7 }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              marginTop: 4,
              background: "#1a1a26",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              zIndex: 50,
              overflow: "hidden",
            }}
          >
            {FORMAT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => { onChange(opt.id); setOpen(false); }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  textAlign: "left",
                  background: value === opt.id ? (accentColor ? accentColor + "22" : "rgba(99,102,241,0.2)") : "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.95)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (value !== opt.id) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  if (value !== opt.id) e.currentTarget.style.background = "transparent";
                }}
              >
                {opt.label} {opt.ext}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TemplatesPage() {
  const [downloaded, setDownloaded] = useState(new Set());
  const [selectedFormat, setSelectedFormat] = useState(() => ({}));

  const handleDownload = (id, name, format) => {
    const content = templateContent[id];
    if (!content) return;
    downloadTemplate(content, name, format);
    setDownloaded((s) => new Set([...s, id]));
    setTimeout(() => setDownloaded((s) => { const n = new Set(s); n.delete(id); return n; }), 2000);
  };

  const getFormatForCard = (tId) => selectedFormat[tId] ?? "txt";

  const categories = [...new Set(templates.map((t) => t.category))];

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px 60px",
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08), transparent 60%)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>📥</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "#fff", marginBottom: 12 }}>
              Test Plan & QA Templates
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto" }}>
              Download in <strong>TXT</strong>, <strong>PDF</strong>, or <strong>Excel</strong>. Ready-to-use templates for test plans, test cases, UAT, traceability, and more.
            </p>
            <Link
              to="/post/what-is-a-test-plan"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: 24,
                padding: "10px 20px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 8,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <FileText size={16} />
              How to write a test plan
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Templates grid by category */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 24px 80px" }}>
        {categories.map((cat, catIndex) => (
          <motion.section
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            style={{ marginBottom: 48 }}
          >
            <h2 style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span style={{
                width: 4,
                height: 24,
                background: "linear-gradient(180deg, #6366f1, #8b5cf6)",
                borderRadius: 2,
              }} />
              {cat}
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 18,
            }}>
              {templates
                .filter((t) => t.category === cat)
                .map((t, i) => {
                  const format = getFormatForCard(t.id);
                  const justDownloaded = downloaded.has(t.id);
                  return (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 14,
                        padding: "22px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = t.color + "55";
                        e.currentTarget.style.boxShadow = `0 8px 30px ${t.color}22`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ fontSize: "2rem" }}>{t.icon}</div>
                        <span style={{
                          padding: "3px 8px",
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.6)",
                          borderRadius: 6,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}>
                          TXT · PDF · Excel
                        </span>
                      </div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f0f0f8", lineHeight: 1.3 }}>
                        {t.name}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, flex: 1 }}>
                        {t.description}
                      </p>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <FormatDropdown
                          value={format}
                          onChange={(id) => setSelectedFormat((prev) => ({ ...prev, [t.id]: id }))}
                          accentColor={t.color}
                        />
                        <button
                          onClick={() => handleDownload(t.id, t.name, format)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            padding: "8px 16px",
                            flex: 1,
                            minWidth: 0,
                            background: justDownloaded ? "rgba(16,185,129,0.2)" : t.color + "22",
                            border: `1px solid ${justDownloaded ? "rgba(16,185,129,0.4)" : t.color + "55"}`,
                            borderRadius: 8,
                            color: justDownloaded ? "#34d399" : t.color,
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          {justDownloaded ? (
                            <>
                              <Check size={16} /> Downloaded
                            </>
                          ) : (
                            <>
                              <Download size={16} /> Download
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 48,
            padding: "28px 24px",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            Need help filling these in? Read our guide on writing test plans step by step.
          </p>
          <Link
            to="/post/write-test-plan-step-by-step"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: "#6366f1",
              borderRadius: 8,
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Write a test plan in 7 steps <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
