const Header = () => {
  return (
    <nav className="top-nav" data-aos="fade-down">
      <a href="#" className="logo">vt729830</a>
      <div className="links">
        <a href="mailto:vt72983@bugcrowdninja.com" title="Email">
          <i className="fas fa-envelope"></i>
          <span className="link-text">Email</span>
        </a>
        <a href="https://github.com/vt72983" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
          <span className="link-text">GitHub</span>
        </a>
        <a href="https://t.me/vt72983" target="_blank" rel="noopener noreferrer" title="Telegram">
          <i className="fab fa-telegram"></i>
          <span className="link-text">Telegram</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;