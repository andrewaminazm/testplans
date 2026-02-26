import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const tagColors = {
  blue: { bg: "rgba(59,130,246,0.15)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  violet: { bg: "rgba(139,92,246,0.15)", text: "#a78bfa", border: "rgba(139,92,246,0.25)" },
  emerald: { bg: "rgba(16,185,129,0.15)", text: "#34d399", border: "rgba(16,185,129,0.25)" },
  orange: { bg: "rgba(249,115,22,0.15)", text: "#fb923c", border: "rgba(249,115,22,0.25)" },
  rose: { bg: "rgba(244,63,94,0.15)", text: "#fb7185", border: "rgba(244,63,94,0.25)" },
};

export default function PostCard({ post, index = 0, featured = false }) {
  const color = tagColors[post.tagColor] || tagColors.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      style={{ height: "100%" }}
    >
      <Link
        to={`/post/${post.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
          e.currentTarget.style.boxShadow = "0 8px 40px rgba(99,102,241,0.12)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Cover gradient */}
        <div style={{
          height: featured ? 180 : 140,
          background: `linear-gradient(135deg, ${getGradientColors(post.coverGradient)})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: featured ? "3.5rem" : "2.8rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }} />
          <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
            {post.icon}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{
              padding: "3px 10px",
              background: color.bg,
              color: color.text,
              border: `1px solid ${color.border}`,
              borderRadius: 20,
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}>
              {post.tag}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h3 style={{
            fontSize: featured ? "1.2rem" : "1.05rem",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: 10,
            color: "#f0f0f8",
            letterSpacing: "-0.01em",
          }}>
            {post.title}
          </h3>

          <p style={{
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.65,
            flex: 1,
            marginBottom: 16,
          }}>
            {post.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
              {post.date}
            </span>
            <span style={{
              display: "flex", alignItems: "center", gap: 4,
              color: "#6366f1",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}>
              Read more <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function getGradientColors(gradientClass) {
  const map = {
    "from-blue-600 via-indigo-600 to-violet-700": "#2563eb, #4f46e5, #6d28d9",
    "from-violet-600 via-purple-600 to-pink-600": "#7c3aed, #9333ea, #db2777",
    "from-emerald-500 via-teal-500 to-cyan-600": "#10b981, #14b8a6, #0891b2",
    "from-orange-500 via-amber-500 to-yellow-500": "#f97316, #f59e0b, #eab308",
    "from-rose-500 via-pink-600 to-fuchsia-600": "#f43f5e, #db2777, #c026d3",
  };
  return map[gradientClass] || "#6366f1, #8b5cf6";
}
