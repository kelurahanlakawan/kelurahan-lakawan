
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Halaman yang termasuk dalam kategori Informasi
  const informasiPages = [
    "/informasi",
    "/penurunan-desil",
    "/kelengkapan-surat-pernikahan",
    "/pengaktifan-kis",
  ];

  const isInformasiActive = informasiPages.includes(location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo Kelurahan Lakawan" />

        <div className="brand-text">
          <strong>KELURAHAN LAKAWAN</strong>
          <span>Kecamatan Anggeraja, Kabupaten Enrekang</span>
        </div>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Buka menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          end
          onClick={() => setMenuOpen(false)}
        >
          Beranda
        </NavLink>

        <NavLink
          to="/profil"
          end
          onClick={() => setMenuOpen(false)}
        >
          Profil
        </NavLink>

        <NavLink
          to="/informasi"
          className={isInformasiActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Informasi
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
