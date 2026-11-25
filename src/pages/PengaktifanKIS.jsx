
import { Link } from "react-router-dom";
import { Phone, ArrowLeft } from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import "../styles/PenurunanDesil.css";

import kisImage from "../assets/images/kis.png";

function PengaktifanKIS() {
  return (
    <>
      <Navbar />

      <main className="desil-page">
        <div className="desil-container">

          {/* Konten Utama */}
          <section className="desil-main">

            {/* Gambar */}
            <div className="desil-image-section">
              <Link to="/informasi" className="desil-back">
                <ArrowLeft size={18} />
                Back
              </Link>

              {/* Bingkai Gambar */}
              <div className="desil-image-wrapper">
                <img
                  src={kisImage}
                  alt="Kartu Indonesia Sehat"
                  className="desil-image"
                />
              </div>
            </div>

            {/* Informasi Persyaratan */}
            <div className="desil-content">

              <h1>Mengaktifkan Kartu Indonesia Sehat (KIS)</h1>

              <div className="desil-title-line"></div>

              <div className="desil-requirements">

                <h3>Persyaratan :</h3>
                <ol>
                  <li>
                    Surat Keterangan Sakit dari Rumah Sakit/Puskesmas
                  </li>
                  <li>Fotokopi KTP dan KK</li>
                  <li>
                    Foto rumah tampak depan, ruang tamu, dapur, dan
                    kamar mandi menggunakan aplikasi GPS Map Camera,
                    lalu cetak/print.
                  </li>
                </ol>

                <h3>Alur Pelayanan :</h3>
                <ol>
                  <li>
                    Bawa semua persyaratan ke kantor kelurahan
                  </li>
                  <li>
                    Pihak kelurahan akan membuat Surat Keterangan
                    KIS Darurat
                  </li>
                  <li>
                    Setelah surat dibuat, pihak kelurahan akan
                    mengajukan pengaktifan KIS
                  </li>
                  <li>
                    Setelahnya, warga dapat memeriksa status KIS
                    di rumah sakit/puskesmas terkait
                  </li>
                </ol>

              </div>

              {/* Estimasi Waktu */}
              <div className="desil-estimation">
                <strong>Estimasi Waktu :</strong>
                <span>Min. 5 Hari</span>
              </div>

            </div>
          </section>

          {/* Jadwal dan Kontak */}
          <section className="desil-service">

            {/* Jadwal Pelayanan */}
            <div className="desil-schedule">

              <h2>Jadwal Pelayanan :</h2>

              <div className="schedule-timeline">

                <div className="schedule-item">
                  <div className="schedule-dot"></div>
                  <div>
                    <h4>Senin-Kamis</h4>
                    <p>07.30-16.00</p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-dot"></div>
                  <div>
                    <h4>Jum'at</h4>
                    <p>07.30-16.30</p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-dot"></div>
                  <div>
                    <h4>Sabtu-Minggu</h4>
                    <p>TUTUP</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Informasi Kontak */}
            <div className="desil-contact">

              <h2>
                Untuk pelayanan lainnya, silahkan hubungi kami :
              </h2>

              <div className="contact-item">
                <Phone size={21} fill="black" />
                <span>08215980521 (Kelurahan Lakawan)</span>
              </div>

              <div className="contact-item">
                <Phone size={21} fill="black" />
                <span>082393471538 (Operator Kelurahan)</span>
              </div>

            </div>

          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PengaktifanKIS;
