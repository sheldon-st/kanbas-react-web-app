import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/labs"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
      >
        Hello
      </Link>
      <Link
        to="/kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
      >
        Kanbas
      </Link>
    </nav>
  );
}
export default Nav;
