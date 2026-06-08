import { theme } from "../data";

const { accent, accentGreen } = theme;

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0a0a0f; }
    ::-webkit-scrollbar-thumb { background: ${accent}; border-radius: 2px; }
    a { color: inherit; text-decoration: none; }
    .nav-link { cursor: pointer; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; padding: 6px 0; position: relative; transition: color 0.2s; color: #888; }
    .nav-link:hover, .nav-link.active { color: #e8e6f0; }
    .nav-link.active::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: ${accent}; border-radius: 2px; }
    .btn-primary { display: inline-block; padding: 12px 28px; background: ${accent}; color: #fff; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: 0.05em; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; border: none; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px ${accent}55; }
    .btn-outline { display: inline-block; padding: 11px 26px; background: transparent; color: ${accent}; border: 2px solid ${accent}; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: 0.05em; cursor: pointer; transition: all 0.15s; }
    .btn-outline:hover { background: ${accent}; color: #fff; }
    .card { background: #131320; border: 1px solid #ffffff14; border-radius: 16px; transition: border-color 0.2s, transform 0.2s; }
    .card:hover { border-color: ${accent}55; transform: translateY(-4px); }
    .skill-pill { display: inline-block; padding: 6px 14px; background: #1a1a2e; border: 1px solid #ffffff18; border-radius: 20px; font-size: 13px; font-weight: 600; margin: 4px; color: #c8c5e0; transition: all 0.2s; cursor: default; }
    .skill-pill:hover { background: ${accent}22; border-color: ${accent}55; color: #e8e6f0; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .gradient-text { background: linear-gradient(135deg, ${accent}, ${accentGreen}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .timeline-dot { width: 14px; height: 14px; background: ${accent}; border-radius: 50%; border: 3px solid #0a0a0f; box-shadow: 0 0 0 2px ${accent}; flex-shrink: 0; margin-top: 4px; }
    .input-field { width: 100%; padding: 12px 16px; background: #131320; border: 1px solid #ffffff18; border-radius: 10px; color: #e8e6f0; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
    .input-field:focus { border-color: ${accent}; }
    .input-field::placeholder { color: #555; }
    @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 0 0 ${accent}55; } 50% { box-shadow: 0 0 0 12px ${accent}00; } }
    @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .float { animation: float 4s ease-in-out infinite; }
  `}</style>
);

export default GlobalStyles;
