import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Copy, Check, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { posts } from "../data/posts";

function getGradientColors(g) {
  const map = {
    "from-blue-600 via-indigo-600 to-violet-700": "#2563eb, #4f46e5, #6d28d9",
    "from-violet-600 via-purple-600 to-pink-600": "#7c3aed, #9333ea, #db2777",
    "from-emerald-500 via-teal-500 to-cyan-600": "#10b981, #14b8a6, #0891b2",
    "from-orange-500 via-amber-500 to-yellow-500": "#f97316, #f59e0b, #eab308",
    "from-rose-500 via-pink-600 to-fuchsia-600": "#f43f5e, #db2777, #c026d3",
  };
  return map[g] || "#6366f1, #8b5cf6";
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "6px 12px",
        background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.07)",
        border: `1px solid ${copied ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.12)"}`,
        borderRadius: 6,
        color: copied ? "#34d399" : "rgba(255,255,255,0.5)",
        fontSize: "0.75rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function ContentRenderer({ blocks }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "intro":
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                style={{
                  fontSize: "1.15rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  padding: "20px 24px",
                  background: "rgba(99,102,241,0.07)",
                  borderLeft: "3px solid #6366f1",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                {block.text}
              </motion.p>
            );

          case "heading":
            return (
              <motion.h2
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#f0f0f8",
                  paddingTop: 12,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {block.text}
              </motion.h2>
            );

          case "paragraph":
            return (
              <p key={i} style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 0, listStyle: "none" }}>
                {block.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * j }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 16px",
                      background: "rgba(255,255,255,0.025)",
                      borderRadius: 8,
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "0.8rem", marginTop: 2, flexShrink: 0 }}>▶</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "20px 24px",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  borderRadius: 12,
                }}
              >
                <div style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  background: "rgba(99,102,241,0.2)",
                  borderRadius: 6,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#818cf8",
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                }}>
                  {block.label}
                </div>
                <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  {block.text}
                </p>
              </motion.div>
            );

          case "linkCard":
            return (
              <Link
                key={i}
                to={block.url || "/templates"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "24px 28px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 14,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 52, height: 52,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Download size={24} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#f0f0f8", marginBottom: 6 }}>{block.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{block.description}</div>
                </div>
                <span style={{
                  padding: "10px 18px",
                  background: "#6366f1",
                  borderRadius: 8,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  whiteSpace: "nowrap",
                }}>
                  {block.buttonText || "View templates"}
                </span>
              </Link>
            );

          case "steps":
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {block.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * j }}
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: "18px 20px",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                  >
                    <div style={{
                      minWidth: 42, height: 42,
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      borderRadius: 10,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 5, color: "#f0f0f8" }}>{item.title}</div>
                      <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );

          case "table":
            return (
              <div key={i} style={{ overflowX: "auto" }}>
                <table style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}>
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j} style={{
                          padding: "12px 16px",
                          background: "rgba(99,102,241,0.1)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "#a5b4fc",
                          fontWeight: 700,
                          textAlign: "left",
                          whiteSpace: "nowrap",
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} style={{
                            padding: "11px 16px",
                            border: "1px solid rgba(255,255,255,0.05)",
                            color: k === 0 ? "#f0f0f8" : "rgba(255,255,255,0.6)",
                            fontWeight: k === 0 ? 600 : 400,
                            background: j % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "prompts":
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {block.items.map((p, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * j }}
                    style={{
                      background: "rgba(15,15,25,0.8)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{
                      padding: "12px 16px",
                      background: "rgba(99,102,241,0.08)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <span style={{ fontWeight: 700, fontSize: "0.88rem", color: "#a5b4fc" }}>{p.title}</span>
                      <CopyButton text={p.prompt} />
                    </div>
                    <div style={{ padding: "16px", fontFamily: "'Fira Code', monospace", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                      {p.prompt}
                    </div>
                  </motion.div>
                ))}
              </div>
            );

          case "tools":
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {block.items.map((t, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.06 * j }}
                    style={{
                      padding: "16px",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#f0f0f8" }}>{t.name}</span>
                      <span style={{
                        padding: "2px 8px",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        borderRadius: 4,
                        fontSize: "0.68rem",
                        color: "#818cf8",
                        fontWeight: 600,
                      }}>
                        {t.tier}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{t.use}</p>
                  </motion.div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: "4rem" }}>🔍</div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Post not found</h2>
        <button onClick={() => navigate("/")} style={{ padding: "10px 24px", background: "#6366f1", border: "none", borderRadius: 8, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
          Go Home
        </button>
      </div>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div style={{
        padding: "60px 24px 50px",
        backgroundImage: `linear-gradient(135deg, ${getGradientColors(post.coverGradient)})`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)" }} />
        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
              <ArrowLeft size={14} /> Back to all articles
            </Link>

            <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>{post.icon}</div>

            <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(0,0,0,0.3)", borderRadius: 20, fontSize: "0.75rem", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "0.04em" }}>
              {post.category}
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", marginBottom: 16, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              {post.title}
            </h1>

            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 24, maxWidth: 640 }}>
              {post.subtitle}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 36, height: 36,
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "0.75rem", color: "#fff",
                }}>
                  {post.authorAvatar}
                </div>
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{post.author}</span>
              </div>
              <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
                <Calendar size={13} /> {post.date}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 24px 80px" }}>
        <ContentRenderer blocks={post.content} />

        {/* Related posts */}
        <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 24, letterSpacing: "-0.01em" }}>
            Keep Reading
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/post/${r.slug}`}
                style={{
                  padding: "18px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; e.currentTarget.style.background = "rgba(99,102,241,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{r.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.4, marginBottom: 6 }}>{r.title}</div>
                <div style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={11} /> {r.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
