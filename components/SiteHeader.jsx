// ./components/SiteHeader.jsx

const { default: Link } = require("next/link");

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Link href={"/"}>
          <figure title="Site header">
            <h1>Inicio</h1>
          </figure>
        </Link>

        <nav className="site-nav">
          <ul className="links">
            <li className="link">
              <Link href={"/docs"}>Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
