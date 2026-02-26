import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "50px 24px 30px",
      background: "rgba(0,0,0,0.3)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.05rem" }}>
                QA<span style={{ color: "#6366f1" }}>Insight</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
              Your go-to resource for mastering test plans, test strategy, and AI-powered QA.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", marginBottom: 14, textTransform: "uppercase" }}>Topics</div>
            {[
              { label: "Test Planning", path: "/category/test-planning" },
              { label: "Templates", path: "/templates" },
              { label: "Test Strategy", path: "/category/test-strategy" },
              { label: "AI in QA", path: "/category/ai-in-qa" },
              { label: "Best Practices", path: "/category/best-practices" },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{ display: "block", marginBottom: 9, fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", marginBottom: 14, textTransform: "uppercase" }}>Articles</div>
            {[
              { label: "What Is a Test Plan?", path: "/post/what-is-a-test-plan" },
              { label: "Build a Test Strategy", path: "/post/test-strategy-guide" },
              { label: "Write Plans in 7 Steps", path: "/post/write-test-plan-step-by-step" },
              { label: "AI for Test Planning", path: "/post/ai-powered-test-planning" },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{ display: "block", marginBottom: 9, fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
            © 2026 QAInsight. Built for QA professionals everywhere.
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <div key={i} style={{
                width: 34, height: 34,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <Icon size={15} color="rgba(255,255,255,0.55)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
