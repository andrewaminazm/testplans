import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Test Plans", path: "/category/test-planning" },
  { label: "Templates", path: "/templates" },
  { label: "Strategy", path: "/category/test-strategy" },
  { label: "AI in QA", path: "/category/ai-in-qa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,15,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: 32, height: 32,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Zap size={16} color="white" fill="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
            QA<span style={{ color: "#6366f1" }}>Insight</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: "4px", alignItems: "center" }} className="nav-links-desktop">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: location.pathname === l.path ? "#fff" : "rgba(255,255,255,0.55)",
                background: location.pathname === l.path ? "rgba(99,102,241,0.15)" : "transparent",
                transition: "all 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/" style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 18px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            borderRadius: 8,
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#fff",
            boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            transition: "transform 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Start Reading
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-mobile-btn"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "none",
              borderRadius: 8,
              padding: "8px",
              color: "#fff",
              display: "none",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(10,10,15,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 24px 24px",
            }}
          >
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: location.pathname === l.path ? "#6366f1" : "rgba(255,255,255,0.7)",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
