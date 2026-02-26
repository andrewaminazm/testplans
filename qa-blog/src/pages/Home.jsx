import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Cpu, Target, FileText, Star, TrendingUp, Download } from "lucide-react";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

const stats = [
  { value: "5", label: "In-depth Articles", icon: BookOpen },
  { value: "3", label: "Core Topics", icon: Target },
  { value: "100%", label: "AI-Enhanced", icon: Cpu },
  { value: "Free", label: "Always Free", icon: Star },
];

const categories = [
  { label: "Test Planning", slug: "test-planning", icon: "📋", desc: "Master the art of structured test documentation", color: "#6366f1", path: "/category/test-planning" },
  { label: "Templates", slug: "templates", icon: "📥", desc: "Download test plans, test cases, UAT & more", color: "#10b981", path: "/templates" },
  { label: "Test Strategy", slug: "test-strategy", icon: "🎯", desc: "Build organization-wide quality frameworks", color: "#8b5cf6", path: "/category/test-strategy" },
  { label: "AI in QA", slug: "ai-in-qa", icon: "🤖", desc: "Leverage AI tools for smarter, faster testing", color: "#f97316", path: "/category/ai-in-qa" },
  { label: "Best Practices", slug: "best-practices", icon: "⭐", desc: "Proven techniques from senior QA engineers", color: "#f43f5e", path: "/category/best-practices" },
];

export default function Home() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Background glow orbs */}
        <div style={{
          position: "absolute",
          top: "15%", left: "50%",
          transform: "translateX(-50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%", left: "20%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 20,
            marginBottom: 28,
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#a5b4fc",
            letterSpacing: "0.04em",
          }}>
            <TrendingUp size={14} />
            THE QA KNOWLEDGE HUB
          </div>

          <h1 style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            maxWidth: 800,
            margin: "0 auto 20px",
          }}>
            Master{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Test Planning
            </span>
            <br />
            & Strategy with AI
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}>
            Deep-dive articles on writing exceptional test plans, building robust test strategies,
            and using AI tools to supercharge your QA workflow.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to={`/post/${posts[0].slug}`} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 28px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#fff",
              boxShadow: "0 0 30px rgba(99,102,241,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.35)"; }}
            >
              <BookOpen size={18} />
              Start Reading
            </Link>
            <Link to="/templates" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.8)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              <Download size={18} />
              Download Templates
            </Link>
            <Link to="/post/ai-powered-test-planning" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.8)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              <Cpu size={18} />
              AI in QA
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            gap: 12,
            marginTop: 72,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} style={{
              padding: "16px 24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              textAlign: "center",
              minWidth: 120,
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                <Icon size={20} color="#6366f1" />
              </div>
              <div style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>{value}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Categories */}
      <section style={{ padding: "60px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel icon={<FileText size={14} />} text="EXPLORE BY TOPIC" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 36 }}>
            Choose Your Learning Path
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 16,
          }}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={cat.path || `/category/${cat.slug}`}
                  style={{
                    display: "block",
                    padding: "24px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = cat.color + "55";
                    e.currentTarget.style.background = cat.color + "10";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>{cat.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 6 }}>{cat.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{cat.desc}</div>
                  <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4, color: cat.color, fontSize: "0.82rem", fontWeight: 600 }}>
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured post */}
      <section style={{ padding: "20px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel icon={<Star size={14} />} text="FEATURED ARTICLE" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 28 }}>
            Start Here
          </h2>
          <PostCard post={featured} index={0} featured />
        </motion.div>
      </section>

      {/* All posts */}
      <section style={{ padding: "20px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel icon={<BookOpen size={14} />} text="ALL ARTICLES" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 28 }}>
            Explore the Full Library
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {rest.map((p, i) => (
              <PostCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function SectionLabel({ icon, text }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 12px",
      background: "rgba(99,102,241,0.1)",
      border: "1px solid rgba(99,102,241,0.2)",
      borderRadius: 20,
      fontSize: "0.72rem",
      fontWeight: 700,
      color: "#818cf8",
      letterSpacing: "0.06em",
      marginBottom: 14,
    }}>
      {icon}
      {text}
    </div>
  );
}
