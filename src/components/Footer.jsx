
import {
  Mail,
  Phone,
  Copyright,
} from "lucide-react";

import logo from "../assets/images/logo.png";
import logoITH from "../assets/images/logo-ith.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* IDENTITAS KELURAHAN */}
        <div className="footer-identity">
          <img
            src={logo}
            alt="Logo Kelurahan Lakawan"
            className="footer-logo"
          />

          <div className="footer-identity-info">
            <h3>Pemerintahan Kelurahan Lakawan</h3>

            <p>
              Kelurahan Lakawan, Kecamatan Anggeraja,
              <br />
              Kabupaten Enrekang, Provinsi Sulawesi Selatan
            </p>

            <div className="footer-region-code">
              <p>Kode Wilayah: 73.16.04.1001</p>
              <p>Kode Pos: 91752</p>
            </div>
          </div>
        </div>

        {/* HUBUNGI KAMI */}
        <div className="footer-contact">
          <h3>Hubungi Kami</h3>

          <a>
            <Mail />
            <span>kelurahanlakawan@gmail.com</span>
          </a>


          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4z"
              />
            </svg>
            <span>Perpustakaan Kelurahan Lakawan</span>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5.5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <span>Perpustakaan Kelurahan Lakawan</span>
          </a>

        </div>

        {/* NOMOR TELEPON */}
        <div className="footer-contact footer-phone">
          <h3>Nomor Telepon Penting</h3>

          <a href="tel:08215980521">
            <Phone />
            <span>08215980521 (Kelurahan Lakawan)</span>
          </a>

          <a href="tel:082393471538">
            <Phone />
            <span>082393471538 (Operator Kelurahan)</span>
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        <Copyright className="copyright-icon" />

        <img
          src={logoITH}
          alt="Logo ITH"
          className="footer-ith-logo"
        />

        <span>Magang ITH 2026</span>
      </div>
    </footer>
  );
}

export default Footer;