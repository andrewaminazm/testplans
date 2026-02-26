import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Linkedin, BookOpen, Target, Cpu, Download,
  ArrowRight, Star, FileText, Zap
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-amin-48763a194/";

const skills = [
  { label: "Test Planning", icon: "📋", desc: "Writing structured test plans for Agile and enterprise projects." },
  { label: "Test Strategy", icon: "🎯", desc: "Building organization-wide quality frameworks and approaches." },
  { label: "QA Automation", icon: "⚙️", desc: "Selenium, Cypress, Postman and CI/CD integration." },
  { label: "AI in QA", icon: "🤖", desc: "Using ChatGPT, Copilot and AI tools to accelerate testing." },
  { label: "Defect Management", icon: "🐛", desc: "Jira, severity triaging, SLA tracking and root-cause analysis." },
  { label: "Team Leadership", icon: "👥", desc: "Mentoring QA teams, running three-amigos and sprint ceremonies." },
];

const siteHighlights = [
  { icon: <BookOpen size={20} />, label: "5 In-depth Articles", desc: "Test plans, strategy, how-to guides, AI in QA, best practices." },
  { icon: <Download size={20} />, label: "22+ Templates", desc: "Download in TXT, PDF or Excel and start filling in your project details." },
  { icon: <Cpu size={20} />, label: "19 AI Prompts", desc: "Copy-paste prompts for plans, strategy, test cases, UAT, RTM and more." },
  { icon: <Star size={20} />, label: "100% Free", desc: "No sign-up, no paywall — just quality QA knowledge." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section style={{
        padding: "80px 24px 70px",
        background: "linear-gradient(135deg, #0f0c29 0%, #1a1642 50%, #24243e 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            {/* Avatar */}
            <div style={{
              width: 100, height: 100,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "2.4rem",
              boxShadow: "0 0 40px rgba(99,102,241,0.35)",
            }}>
              👨‍💻
            </div>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 14px",
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 20,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#a5b4fc",
              letterSpacing: "0.06em",
              marginBottom: 18,
              textTransform: "uppercase",
            }}>
              <Zap size={12} /> QA Engineer & Author
            </div>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.15,
            }}>
              Hi, I'm{" "}
              <span style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 60%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Andrew Amin
              </span>
            </h1>

            <p style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: 580,
              margin: "0 auto 32px",
            }}>
              QA Engineer passionate about software quality, test planning, and helping teams
              build better products. I created QAInsight to share practical knowledge, templates,
              and AI techniques that make QA work faster and smarter.
            </p>

            {/* LinkedIn badge */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                background: "#0a66c2",
                borderRadius: 10,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 0 28px rgba(10,102,194,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(10,102,194,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(10,102,194,0.4)";
              }}
            >
              <Linkedin size={20} fill="#fff" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* About the author */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "70px 24px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text="ABOUT ME" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
            My Story
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "I'm a QA Engineer with hands-on experience across Agile teams, enterprise releases, and API-heavy products. Over the years I've written test plans, built test strategies, set up automation frameworks, and mentored junior testers.",
              "I started QAInsight because I kept seeing the same pain points in teams: test plans that nobody reads, strategies that are too abstract to use, and engineers who don't know where to start. This site fixes that — with clear guides, ready-made templates you can actually use, and AI prompts that speed up documentation.",
              "My goal is simple: give every QA engineer — from junior to lead — the tools and knowledge to do their best work.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                {text}
              </p>
            ))}
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 28,
              padding: "10px 20px",
              background: "rgba(10,102,194,0.15)",
              border: "1px solid rgba(10,102,194,0.4)",
              borderRadius: 8,
              color: "#60a5fa",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(10,102,194,0.25)";
              e.currentTarget.style.borderColor = "rgba(10,102,194,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(10,102,194,0.15)";
              e.currentTarget.style.borderColor = "rgba(10,102,194,0.4)";
            }}
          >
            <Linkedin size={16} />
            View LinkedIn profile
          </a>
        </motion.div>
      </section>

      {/* Skills */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text="EXPERTISE" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 28 }}>
            What I Work On
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  padding: "20px 22px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(99,102,241,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: 6, color: "#f0f0f8" }}>{s.label}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What's on this site */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text="THE SITE" />
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 28 }}>
            What You'll Find on QAInsight
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {siteHighlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "20px 22px",
                  background: "rgba(99,102,241,0.05)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: 12,
                }}
              >
                <div style={{
                  width: 42, height: 42,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff",
                }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: 5, color: "#f0f0f8" }}>{h.label}</div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            padding: "40px 36px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.08))",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🚀</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 12 }}>
            Ready to level up your QA?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.97rem", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            Explore the articles, grab a template, or connect on LinkedIn. Let's make testing better — together.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: 10,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.92rem",
                boxShadow: "0 0 24px rgba(99,102,241,0.35)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <BookOpen size={17} /> Read the articles
            </Link>
            <Link
              to="/templates"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                fontSize: "0.92rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
            >
              <FileText size={17} /> Browse templates <ArrowRight size={15} />
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px",
                background: "rgba(10,102,194,0.15)",
                border: "1px solid rgba(10,102,194,0.35)",
                borderRadius: 10,
                color: "#60a5fa",
                fontWeight: 600,
                fontSize: "0.92rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(10,102,194,0.25)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(10,102,194,0.15)"}
            >
              <Linkedin size={17} /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function SectionLabel({ text }) {
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
      {text}
    </div>
  );
}
