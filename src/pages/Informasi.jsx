
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "../styles/Informasi.css";

import { Link } from "react-router-dom";

import desilImage from "../assets/images/desil.png";
import suratImage from "../assets/images/surat-pernikahan.png";
import kisImage from "../assets/images/kis.png";

import {
  Users,
  MapPinned,
  Building2,
  Home,
  User,
  UserRound,
  Baby,
  Accessibility,
  GraduationCap,
  BriefcaseBusiness,
  Sprout,
  BadgeCheck,
  Store,
  Car,
  Shield,
  Landmark,
  ArrowRight,
} from "lucide-react";

// DATA WILAYAH DAN KEPENDUDUKAN
const dataWilayah = [
  { label: "Jumlah Penduduk", value: "3.700 Jiwa", icon: Users },
  { label: "Luas Wilayah", value: "9.30 Km2", icon: MapPinned },
  { label: "Jumlah Lingkungan", value: "4 Lingkungan", icon: Building2 },
  { label: "Jumlah KK", value: "1.132 Orang", icon: Home },
  { label: "Jumlah Laki-laki", value: "1.826 Orang", icon: User },
  { label: "Jumlah Perempuan", value: "1.860 Orang", icon: UserRound },
  { label: "Jumlah Balita", value: "22 Balita", icon: Baby },
  { label: "Jumlah Lansia", value: "57 Orang", icon: Accessibility },
];

// DATA JENIS PEKERJAAN PENDUDUK
const dataPekerjaan = [
  { label: "Guru", value: "643 Orang", icon: GraduationCap },
  { label: "Wiraswasta", value: "473 Orang", icon: BriefcaseBusiness },
  { label: "Petani", value: "210 Orang", icon: Sprout },
  { label: "PNS", value: "177 Orang", icon: BadgeCheck },
  { label: "karyawan honorer", value: "62 Orang", icon: Users },
  { label: "karyawan swasta", value: "61 Orang", icon: BriefcaseBusiness },
  { label: "Pedagang", value: "30 Orang", icon: Store },
  { label: "Sopir", value: "27 Orang", icon: Car },
  { label: "karyawan BUMN", value: "6 Orang", icon: BriefcaseBusiness },
  { label: "Polisi", value: "5 Orang", icon: Shield },
  { label: "TNI", value: "2 Orang", icon: Shield },
  { label: "karyawan BUMD", value: "2 Orang", icon: Landmark },
];

// DATA JENIS PELAYANAN
const dataPelayanan = [
  {
    title: "Penurunan Desil",
    image: desilImage,
    description: "Informasi dan pengurusan penurunan desil.",
    link: "/penurunan-desil",
  },
  {
    title: "Pengurusan Kelengkapan Surat Pernikahan",
    image: suratImage,
    description: "Pelayanan pengurusan kelengkapan administrasi pernikahan.",
    link: "/kelengkapan-surat-pernikahan",
  },
  {
    title: "Mengaktifkan Kartu Indonesia Sehat (KIS)",
    image: kisImage,
    description: "Pelayanan informasi dan pengaktifan Kartu Indonesia Sehat.",
    link: "/pengaktifan-kis",
  },
];

function Informasi() {
  return (
    <>
      <Navbar />

      <main className="informasi-page">

        {/* JUDUL HALAMAN */}
        <div className="informasi-header">
          <h1>Informasi</h1>
        </div>

        {/* WILAYAH DAN KEPENDUDUKAN */}
        <section className="informasi-section">
          <h2>Wilayah dan Kependudukan</h2>

          <div className="informasi-grid">
            {dataWilayah.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="informasi-stat-card" key={index}>
                  <div className="informasi-icon">
                    <Icon size={21} strokeWidth={2.2} />
                  </div>

                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* JENIS PEKERJAAN PENDUDUK */}
        <section className="informasi-section pekerjaan-section">
          <h2>Jenis Pekerjaan Penduduk</h2>

          <div className="informasi-grid">
            {dataPekerjaan.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="informasi-stat-card" key={index}>
                  <div className="informasi-icon">
                    <Icon size={21} strokeWidth={2.2} />
                  </div>

                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* JENIS PELAYANAN KELURAHAN */}
        <section
          className="informasi-section pelayanan-section"
          id="jenis-pelayanan"
        >
          <h2>Jenis Pelayanan Kelurahan</h2>

          <div className="pelayanan-grid">
            {dataPelayanan.map((item, index) => (
              <div className="pelayanan-card" key={index}>
                <Link to={item.link} className="pelayanan-image">
                  <img src={item.image} alt={item.title} />
                </Link>

                <div className="pelayanan-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link
                    to={item.link}
                    className="pelayanan-detail"
                  >
                    Detail
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Informasi;
