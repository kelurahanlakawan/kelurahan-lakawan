
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Informasi from "./pages/Informasi";
import PengaktifanKIS from "./pages/PengaktifanKIS";
import KelengkapanSuratPernikahan from "./pages/KelengkapanSuratPernikahan";
import PenurunanDesil from "./pages/PenurunanDesil";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route
          path="/penurunan-desil"
          element={<PenurunanDesil />}
        />

        <Route
          path="/kelengkapan-surat-pernikahan"
          element={<KelengkapanSuratPernikahan />}
        />

        <Route
          path="/pengaktifan-kis"
          element={<PengaktifanKIS />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;