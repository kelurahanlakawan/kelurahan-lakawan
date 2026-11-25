
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import "../styles/KelengkapanSuratPernikahan.css";
import suratPernikahan from "../assets/images/surat-pernikahan.png";

function KelengkapanSuratPernikahan() {
  const navigate = useNavigate();

  return (
    <div className="pernikahan-page">
      <Navbar />

      <main className="pernikahan-container">
        {/* Tombol Kembali */}
        <button
          className="pernikahan-back"
          onClick={() => navigate("/informasi")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Konten Utama */}
        <section className="pernikahan-main">
          {/* Gambar */}
          <div className="pernikahan-image-wrapper">
            <img
              src={suratPernikahan}
              alt="Pengurusan surat pernikahan"
              className="pernikahan-image"
            />
          </div>

          {/* Informasi */}
          <div className="pernikahan-content">
            <h1>
              Pengurusan Kelengkapan
              <br />
              Surat Pernikahan
            </h1>

            <div className="pernikahan-title-line"></div>

            {/* Persyaratan dan Alur */}
            <div className="pernikahan-info-card">
              <p className="pernikahan-description">
                =&gt; Surat keterangan belum menikah, Surat pengantar nikah
                (model N1), Surat permohonan kehendak nikah (model N2),
                Surat persetujuan calon pengantin (model N4), dan Surat
                izin orang tua (model N5).
              </p>

              <h3>Persyaratan :</h3>
              <ol>
                <li>KTP Asli/ Fotokopi KTP kedua calon suami istri</li>
                <li>Fotokopi KK kedua calon suami istri</li>
                <li>
                  Menyebutkan Data Pernikahan (Mahar Pernikahan, hari,
                  tanggal, dan jam akad nikah)
                </li>
              </ol>

              <h3>Alur Pelayanan :</h3>
              <ol>
                <li>Bawa semua persyaratan ke kantor kelurahan</li>
                <li>
                  Pihak kelurahan akan membuatkan surat-surat yang
                  dibutuhkan
                </li>
                <li>Surat akan langsung selesai di hari yang sama.</li>
              </ol>
            </div>

            {/* Estimasi Waktu */}
            <div className="pernikahan-estimasi">
              <strong>Estimasi Waktu :</strong>
              <span>Min. 1 Hari</span>
            </div>
          </div>
        </section>

        {/* Jadwal dan Kontak */}
        <section className="pernikahan-bottom">
          <div className="pernikahan-schedule">
            <h2>Jadwal Pelayanan :</h2>

            <div className="schedule-timeline">
              <div className="schedule-item">
                <div className="schedule-dot"></div>
                <div>
                  <strong>Senin–Kamis</strong>
                  <p>07.30–16.00</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="schedule-dot"></div>
                <div>
                  <strong>Jum’at</strong>
                  <p>07.30–16.30</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="schedule-dot"></div>
                <div>
                  <strong>Sabtu–Minggu</strong>
                  <p>TUTUP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pernikahan-contact">
            <h2>
              Untuk pengurusan surat lainnya, silahkan hubungi kami :
            </h2>

            <a href="tel:08215980521">
              <Phone size={21} fill="currentColor" />
              <span>08215980521 (Kelurahan Lakawan)</span>
            </a>

            <a href="tel:082393471538">
              <Phone size={21} fill="currentColor" />
              <span>082393471538 (Operator Kelurahan)</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default KelengkapanSuratPernikahan;
