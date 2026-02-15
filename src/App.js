// App.js
import { HashRouter, Routes, Route, Link } from "react-router-dom"; // přidán Link
import Checklist from './pages/Checklist';
import Criteria from './pages/Criteria';
import geoimage from "./assets/mapy_upol.png";

function App() {
  return (
    <HashRouter>  {/* Obalení celé aplikace v HashRouter */}
      <div className="homepage">
        <header className="header">
          <h1>🌍 Web Map Eval</h1>
          <p>NÁSTROJ PRO HODNOCENÍ WEBOVÝCH MAP</p>
        </header>

        <main className="main-content">
          <Routes>  {/* Definice rout */}
            {/* Hlavní stránka s odkazy */}
            <Route
              path="/"
              element={
                <>
                  <div className="bubble-container">
                    <Link to="/checklist" className="bubble">
                      <span className="bubble-icon">📝</span>
                      <span className="bubble-text">Otestovat</span>
                    </Link>

                    <Link to="/criteria/1" className="bubble secondary">
                      <span className="bubble-icon">📋</span>
                      <span className="bubble-text">Seznam kritérií</span>
                    </Link>
                  </div>

                  <section className="intro">
                    <div className="intro-text">
                      <h2>O aplikaci</h2>
                      <p>
                        Tato webová aplikace slouží pro hodnocení vybrané webové
                        mapové aplikace na základě určených kritérií.
                      </p>
                    </div>

                    <div className="intro-image">
                      <img src={geoimage} alt="Mapy UPOL" />
                    </div>
                  </section>
                </>
              }
            />

            {/* Definice rout pro checklist a criteria */}
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/criteria/:id" element={<Criteria />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Bakalářská práce – Jakub HERMANN</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
