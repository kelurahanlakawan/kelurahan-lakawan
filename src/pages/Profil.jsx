
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import struktur from "../assets/images/struktur-kelurahan.png";
import "../styles/Profil.css";

function Profil() {
  const misi = [
    "Meningkatkan kualitas pelayanan publik",
    "Mendorong peningkatan kualitas sumber daya manusia",
    "Mewujudkan lingkungan kelurahan yang aman, tertib, dan harmonis",
    "Mendorong pemberdayaan ekonomi masyarakat",
    "Meningkatkan kualitas sarana dan prasarana lingkungan",
    "Memperkuat nilai-nilai keagamaan dan sosial kemasyarakatan",
  ];

  return (
    <div className="profil-page">
      <Navbar />

      {/* HEADER DAN VISI MISI */}
      <section className="profil-hero">
        <h1 className="profil-title">Profile</h1>

        <div className="profil-identity">
          <img src={logo} alt="Logo Kelurahan Lakawan" />

          <div>
            <h2>Kelurahan Lakawan</h2>
            <p>Kecamatan Anggeraja, Kabupaten Enrekang</p>
          </div>
        </div>

        <div className="visi-misi-card">
          <div className="visi-section">
            <h2>Visi</h2>
            <p>
              TERWUJUDNYA KELURAHAN LAKAWAN YANG MAJU, AMAN,
              SEJAHTERA, DAN RELIGIUS MELALUI PELAYANAN PUBLIK
              YANG BERKUALITAS SERTA PEMBANGUNAN YANG
              BERKELANJUTAN
            </p>
          </div>

          <div className="misi-section">
            <h2>Misi</h2>
            <ol>
              {misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section className="struktur-section">
        <h2>Struktur Kelurahan Lakawan</h2>

        <div className="struktur-image">
          <img
            src={struktur}
            alt="Struktur Organisasi Kelurahan Lakawan"
          />
        </div>
      </section>

      {/* SEJARAH KELURAHAN */}
      <section className="sejarah-section">
        <h2>Sejarah Kelurahan Lakawan</h2>

        <div className="sejarah-card">
          <p>
            Kelurahan Lakawan merupakan wilayah yang memiliki
            keterkaitan erat dengan sejarah dan perkembangan
            masyarakat adat Massenrempulu, khususnya wilayah
            adat Duri di Kabupaten Enrekang. Sejak masa lampau,
            kawasan ini telah menjadi bagian dari kehidupan
            masyarakat tradisional yang tergabung dalam federasi
            kerajaan-kerajaan lokal di Enrekang. Jejak kehidupan
            masyarakat terdahulu dapat ditemukan di kawasan
            Tontonan melalui keberadaan situs arkeologi Gua
            Tontonan, yang dahulu digunakan sebagai tempat
            penyimpanan jenazah dengan peti kayu tradisional
            yang dikenal sebagai <i>erong</i>. Seiring perkembangan
            zaman, wilayah Lakawan mengalami perubahan dalam
            struktur pemerintahan dari sistem pemerintahan
            tradisional menuju sistem administrasi pemerintahan
            modern pascakemerdekaan. Perkembangan kawasan Cakke
            sebagai pusat perdagangan hasil bumi dan aktivitas
            masyarakat turut mendorong pertumbuhan wilayah
            Lakawan hingga kemudian ditetapkan sebagai salah
            satu kelurahan di Kecamatan Anggeraja, Kabupaten
            Enrekang.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Profil;