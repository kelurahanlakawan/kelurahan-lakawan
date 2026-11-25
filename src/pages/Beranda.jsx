import "../styles/Beranda.css";


import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import kantorLurah from "../assets/images/lakawan.png";
import kepalaLurah from "../assets/images/kepala-lurah.jpeg";

import logo from "../assets/images/logo.png";


import {
  UsersRound,
  MapPinned,
  House,
  UserRound,
  ArrowRight
} from "lucide-react";

function Beranda() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="hero-section" id="beranda">
          <img
            src={kantorLurah}
            alt="Kantor Kelurahan Lakawan"
            className="hero-image"
          />

          <div className="hero-overlay">
            <h1>Selamat Datang Di Kelurahan Lakawan</h1>

            <p>
              Salah satu kelurahan di Kecamatan Anggeraja,
              Kabupaten Enrekang, Sulawesi Selatan
            </p>
          </div>
        </section>

        {/* SLOGAN */}
        <section className="slogan">
          " Iyato Tau kaminang Melona, Iyato Mangkamo Baja Paja’na,
          Natuli Turu’ Lako Pamarenta "
        </section>

        {/* SAMBUTAN KEPALA LURAH */}
        <section className="welcome-section">

          <div className="leader-photo">
            <img
              src={kepalaLurah}
              alt="Kepala Kelurahan Lakawan"
            />
          </div>

          <div className="welcome-card">
            <span className="leader-position">
              Kepala Lurah Lakawan
            </span>

            <h2>Kadang Kandari S.IP., M.Si</h2>

            <h4>Assalamualaikum Warahmatullahi Wabarakatuh</h4>

            <p>
              Selamat datang di Website Profil Kelurahan Lakawan.
              Website ini hadir sebagai sarana informasi untuk
              memudahkan masyarakat dalam mengakses berbagai
              informasi mengenai Kelurahan Lakawan, sekaligus
              mendukung terwujudnya pelayanan publik yang
              transparan, terpercaya dan berkualitas.
            </p>
          </div>

        </section>

        {/* STATISTIK SINGKAT */}
        <section className="quick-stats">

          <div className="quick-stat-card">
            <div>
              <span>Jumlah Penduduk</span>
              <h3>3.700 Jiwa</h3>
            </div>
            <UsersRound />
          </div>

          <div className="quick-stat-card">
            <div>
              <span>Luas Wilayah</span>
              <h3>9.30 Km2</h3>
            </div>
            <MapPinned />
          </div>

          <div className="quick-stat-card">
            <div>
              <span>Jumlah Lingkungan</span>
              <h3>4 Lingkungan</h3>
            </div>
            <House />
          </div>

        </section>

        {/* PROFIL */}
        <section className="profile-section" id="profil">

          <h2 className="section-title">Profile</h2>

          <div className="profile-brand">
            <img src={logo} alt="Logo Kelurahan Lakawan" />
            <div>
              <h3>Kelurahan Lakawan</h3>
              <p>Kecamatan Anggeraja, Kabupaten Enrekang</p>
            </div>
          </div>

          <div className="vision-mission-card">

            <h3>Visi</h3>

            <p className="vision-text">
              TERWUJUDNYA KELURAHAN LAKAWAN YANG MAJU, AMAN,
              SEJAHTERA, DAN RELIGIUS MELALUI PELAYANAN PUBLIK
              YANG BERKUALITAS SERTA PEMBANGUNAN YANG
              BERKELANJUTAN
            </p>

            <h3>Misi</h3>

            <ol>
              <li>Meningkatkan kualitas pelayanan publik</li>
              <li>Mendorong peningkatan kualitas sumber daya manusia</li>
              <li>Mewujudkan lingkungan kelurahan yang aman, tertib, dan harmonis</li>
              <li>Mendorong pemberdayaan ekonomi masyarakat</li>
              <li>Meningkatkan kualitas sarana dan prasarana lingkungan</li>
              <li>Memperkuat nilai-nilai keagamaan dan sosial kemasyarakatan</li>
            </ol>

          </div>

          <Link to="/profil" className="section-button">
            Lihat Profil Kelurahan Selengkapnya
            <ArrowRight size={17} />
          </Link>

        </section>

        {/* INFORMASI */}
        <section className="information-section" id="informasi">

          <h2 className="section-title">Informasi</h2>

          <div className="information-grid">

            <div className="information-card">
              <UsersRound />
              <span>Jumlah Penduduk</span>
              <h3>3.700 Jiwa</h3>
            </div>

            <div className="information-card">
              <MapPinned />
              <span>Luas Wilayah</span>
              <h3>9.30 Km2</h3>
            </div>

            <div className="information-card">
              <House />
              <span>Jumlah Lingkungan</span>
              <h3>4 Lingkungan</h3>
            </div>

            <div className="information-card">
              <House />
              <span>Jumlah KK</span>
              <h3>1.132 Orang</h3>
            </div>

            <div className="information-card">
              <UserRound />
              <span>Jumlah Laki-Laki</span>
              <h3>1.826 Orang</h3>
            </div>

            <div className="information-card">
              <UserRound />
              <span>Jumlah Perempuan</span>
              <h3>1.860 Orang</h3>
            </div>

          </div>

          <Link to="/informasi" className="section-button">
            Lihat Informasi Kelurahan Selengkapnya
            <ArrowRight size={17} />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Beranda;
