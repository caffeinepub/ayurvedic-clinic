import { Leaf, MessageCircle, Phone, User } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const services = [
  "Sugar (Diabetes) Treatment",
  "BP Control",
  "Asthma (Dama / Shwas)",
  "Hydrocele",
  "Kidney Stone (Pathri)",
  "Paralysis (Lakva)",
  "Infertility Treatment",
  "Men & Women Gupt Rog Treatment",
];

function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.opacity = "0.85";
}

function handleMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.opacity = "1";
}

export default function App() {
  useEffect(() => {
    console.log("Website Loaded Successfully");
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0f2c3f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <header style={{ backgroundColor: "#06202e", padding: "20px" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/generated/ayurveda-logo-transparent.dim_240x240.png"
            alt="Natural Ayurveda Logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
            data-ocid="header.logo"
          />
          <h1
            style={{ color: "#00ff88", margin: "10px 0 4px" }}
            className="text-3xl font-bold"
          >
            Natural Ayurveda
          </h1>
          <p style={{ margin: 0, opacity: 0.85 }} className="text-lg">
            Vaida S B Singh
          </p>
        </motion.div>
      </header>

      {/* About Us */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: "30px 20px" }}
        data-ocid="about.section"
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#00ff88" }}
        >
          About Us
        </h2>
        <p
          className="max-w-xl mx-auto leading-relaxed"
          style={{ opacity: 0.9 }}
        >
          Ayurvedic vanspatiyon se bimariyon ka upchar kiya jata hai. Bhasm,
          Ayurvedic oil therapy, massage aur natural medicines ke through
          treatment diya jata hai.
        </p>
      </motion.section>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{ padding: "20px" }}
        data-ocid="services.section"
      >
        <h2
          className="text-2xl font-semibold mb-6"
          style={{ color: "#00ff88" }}
        >
          Our Services
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto",
            maxWidth: "480px",
          }}
        >
          {services.map((service, i) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              style={{
                backgroundColor: "#124559",
                margin: "10px auto",
                padding: "12px 16px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
              }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Leaf size={16} style={{ color: "#00ff88", flexShrink: 0 }} />
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ padding: "30px 20px" }}
        data-ocid="contact.section"
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#00ff88" }}
        >
          Contact Us
        </h2>
        <p className="mb-2">
          <User
            size={16}
            style={{
              display: "inline",
              marginRight: "6px",
              verticalAlign: "middle",
            }}
          />
          <strong>Doctor:</strong> Vaida S B Singh
        </p>
        <p className="mb-4">
          <Phone
            size={16}
            style={{
              display: "inline",
              marginRight: "6px",
              verticalAlign: "middle",
            }}
          />
          <strong>Phone / WhatsApp:</strong> 7083087507
        </p>
        <a
          href="https://wa.me/917083087507"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            backgroundColor: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-ocid="contact.whatsapp_button"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </motion.section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#06202e",
          padding: "16px",
          marginTop: "20px",
          fontSize: "14px",
          opacity: 0.8,
        }}
      >
        <p style={{ margin: 0 }}>
          © 2026 Natural Ayurveda | All Rights Reserved
        </p>
        <p style={{ margin: "6px 0 0", fontSize: "12px", opacity: 0.7 }}>
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00ff88", textDecoration: "none" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
