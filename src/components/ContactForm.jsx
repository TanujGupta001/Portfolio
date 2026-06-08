import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:tanuj131124@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
      form.message + "\n\nFrom: " + form.email
    )}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <input
          className="input-field"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="input-field"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        className="input-field"
        name="message"
        placeholder="Your message..."
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        style={{ resize: "vertical" }}
      />
      <button
        className="btn-primary"
        type="submit"
        style={{ alignSelf: "center", minWidth: 180 }}
      >
        {sent ? "✅ Opening Mail..." : "Send Message →"}
      </button>
    </form>
  );
}
