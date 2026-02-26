import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

const categoryMeta = {
  "test-planning": { label: "Test Planning", icon: "📋", desc: "Master the art of structured test documentation and planning.", color: "#6366f1", gradient: "#2563eb, #4f46e5, #6d28d9" },
  "test-strategy": { label: "Test Strategy", icon: "🎯", desc: "Build organization-wide quality frameworks and approaches.", color: "#8b5cf6", gradient: "#7c3aed, #9333ea, #db2777" },
  "ai-in-qa": { label: "AI in QA", icon: "🤖", desc: "Leverage AI tools for smarter and faster testing.", color: "#f97316", gradient: "#f97316, #f59e0b, #eab308" },
  "best-practices": { label: "Best Practices", icon: "⭐", desc: "Proven techniques from senior QA engineers worldwide.", color: "#f43f5e", gradient: "#f43f5e, #db2777, #c026d3" },
  "how-to-guide": { label: "How-To Guides", icon: "✍️", desc: "Step-by-step tutorials and practical walkthroughs.", color: "#10b981", gradient: "#10b981, #14b8a6, #0891b2" },
};

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function CategoryPage() {
  const { slug } = useParams();
  const meta = categoryMeta[slug] || { label: slug, icon: "📁", desc: "Articles in this category.", color: "#6366f1", gradient: "#6366f1, #8b5cf6" };

  const filtered = posts.filter((p) => normalize(p.category) === slug);

  return (
    <div style={{ paddingTop: 64 }}>
      <div style={{
        padding: "60px 24px 50px",
        backgroundImage: `linear-gradient(135deg, ${meta.gradient})`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                marginBottom: 24,
                padding: "6px 14px",
                background: "rgba(0,0,0,0.25)",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <ArrowLeft size={14} /> Back to all
            </Link>
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>{meta.icon}</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "#fff", marginBottom: 12 }}>
              {meta.label}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem" }}>{meta.desc}</p>
            <div style={{ marginTop: 16, fontWeight: 600, fontSize: "0.88rem", color: "rgba(255,255,255,0.6)" }}>
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "50px 24px 100px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🚧</div>
            <p style={{ fontSize: "1.1rem" }}>More articles coming soon for this category!</p>
            <Link to="/" style={{ marginTop: 24, display: "inline-block", padding: "10px 24px", background: "#6366f1", borderRadius: 8, color: "#fff", fontWeight: 600 }}>
              Browse all articles
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
            {filtered.map((p, i) => (
              <PostCard key={p.id} post={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
