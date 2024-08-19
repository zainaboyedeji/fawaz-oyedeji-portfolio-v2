export function Footer({ title = "" }) {
  return (
    <footer>
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <img src="/logo.png" alt="logo" className="logoImg"/>
      </a>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <code>{title}</code>
      </a>
    </footer>
  );
}
