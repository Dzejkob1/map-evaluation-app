import { useState } from "react";
import { Link } from "react-router-dom";
import "./Criteria.css";

const categories = [
  {
    id: "cartography",
    title: "Kartografické",
    description: "Základní kartografická pravidla.",
    items: [
      { text: "K dispozici je měřítko." },
      { text: "K dispozici je číselné měřítko." },
      { text: "Aplikace obsahuje mapové pole." },
      { text: "Mapová aplikace má přístupnou legendu." },
      { text: "Legenda je dle kartografických pravidel (např. v souladu s označením na mapě)." },
      { text: "Měřítko se dynamicky mění na základě změny pozice a zoomu." },
      { text: "Aplikace umožňuje manipulaci s mapou pomocí myši." },
      { text: "Aplikace obsahuje nadpis." },
      { text: "Mapa obsahuje tiráž." },
      { text: "Aplikace umožňuje přepínání tematických vrstev." },
      { text: "Mapové pole je nejdominantnějším prvkem mapy." },
      { text: "Tematické vrstvy v mapě se řídí kartografickými konvencemi." },
      { text: "Data jsou polohově správně lokalizována." },
      { text: "Kompozice mapy je vhodná." },
      { text: "Mapová symbologie je vhodně zvolená a odpovídá kartografickým pravidlům." },
      { text: "Odečet souřadnic ve formátu [lat, lon]." },
      { text: "Lze přepínat mezi podkladovými mapami." },
      { text: "Aplikace umožňuje změnu natočení pohledu." },
      { text: "Aplikace má možnost vyhledávání." }
    ]
  },

  {
    id: "technology",
    title: "Technologické",
    description: "Základní technologická pravidla.",
    items: [
      { text: "Zvolená technologie je vhodná pro podporu operačního řízení." },
      { text: "Aplikace je nezávislá na platformě, OS i prohlížeči." },
      { text: "Aplikace nevyžaduje pro svůj běh instalaci či žádný plugin." },
      { text: "Není vyžadováno načtení stránky při každém pohybu (data se načítají asynchronně)." },
      { text: "Aplikace je přizpůsobena pro mobilní zařízení." },
      { text: "Aplikace lze ovládat dotykem." },
      { text: "Aplikace obsahuje jednoznačný titulek stránky <title> (zpravidla obdoba nadpisu)." },
      { text: "URL aplikace je zapamatovatelné (SEO-friendly)." },
      { text: "Aplikace umožňuje vizualizovat různé typy dat." },
      { text: "Aplikaci lze upravit a rozšířit (např. otevřený zdrojový kód)." },
      { text: "Aplikace je rozšiřitelná (widgety, pluginy)." },
      { text: "Kód je psaný sémanticky správně." },
      { text: "Serverové/hardwarové řešení je stabilní a dostatečně flexibilní." },
      { text: "Aplikaci lze spustit v prostředí internetu." },
      { text: "Kód má deklarovaný <!DOCTYPE html>." },
      { text: "Po spuštění se aplikace načte do 3 sekund." },
      { text: "Aplikace má nastavené kódování UTF-8." },
      { text: "Kód aplikace splňuje správnou strukturu HTML (html, head, body)." },
      { text: "Kód používá správně atributy a elementy (href, alt,…)." },
      { text: "Aplikace má platné a správné vlastnosti/hodnoty CSS." }
    ]
  },

  {
    id: "gis",
    title: "GIS / Funkcionalita",
    description: "GIS konvence a funkcionalita.",
    items: [
      { text: "Aplikace umožňuje vyhledávání." },
      { text: "Aplikace umožňuje on-screen analýzy (např. měření, identifikace)." },
      { text: "Mapa obsahuje navigaci a umožňuje krokování vpřed a zpět." },
      { text: "Počet kroků nutných pro práci s mapou je minimalizován." },
      { text: "Odezva mapové aplikace je přiměřeně rychlá." },
      { text: "Obrázky mají popisky nebo alternativní texty (atribut alt)." },
      { text: "Funkcionalita GIS nástrojů je zřejmá (ikona, tooltip, popisek)." },
      { text: "URL aplikace je zapamatovatelné (SEO-friendly)." },
      { text: "Aplikace podporuje rastrová i vektorová data." },
      { text: "Aplikace podporuje OGC služby (WMS, WFS apod.)." },
      { text: "Aplikace podporuje připojení vrstev z lokálních souborů." },
      { text: "Aplikace podporuje dlaždicové vrstvy (TMS / WMTS)." },
      { text: "Aplikace podporuje GPS lokalizaci aktuální pozice." },
      { text: "Aplikace podporuje atributová data." },
      { text: "Kompozice a ovládání mapy odpovídá GIS standardům." }
    ]
  },

  {
    id: "safety",
    title: "Bezpečnost",
    description: "Důvěryhodnost, původ dat a legislativní aspekty.",
    items: [
      { text: "Mapový obsah je aktuální a důvěryhodný." },
      { text: "Jsou uvedeny autorské a licenční údaje dat." },
      { text: "Je uveden autor nebo tiráž mapové aplikace." },
      { text: "Bezpečnost aplikace nelze snadno narušit." },
      { text: "Neveřejné aplikace nejsou veřejně dohledatelné." },
      { text: "Veškeré části aplikace jsou na jedné URL adrese." },
      { text: "Nedochází k přesměrování bez vědomí uživatele." },
      { text: "Aplikace neobsahuje skryté nebo nechtěné skripty." },
      { text: "K dispozici je návod nebo nápověda." },
      { text: "Aplikace neobsahuje závažné typografické chyby." },
      { text: "Jsou definována chybová hlášení a stránka 404." },
      { text: "Chybová hlášení obsahují jasné instrukce." },
      { text: "Texty chyb a nápovědy jsou psány neutrálním tónem." },
      { text: "Uživatel je informován o načítání dat (loader)." },
      { text: "Nápověda je srozumitelná a bez chyb." },
      { text: "Aplikaci lze zálohovat." },
      { text: "Uživatel nemá přístup k originálním datům." },
      { text: "Je řešeno verzování a návrat k funkční verzi." },
      { text: "Aplikace odpovídá legislativním požadavkům." },
      { text: "Aplikace byla podrobena zátěžovým testům." }
    ]
  }
];


function Criteria() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [answers, setAnswers] = useState({});

  const setAnswer = (catId, index, value) => {
    const key = `${catId}-${index}`;
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const getResult = (cat) => {
    const total = cat.items.length;
    const yesCount = cat.items.filter(
      (_, i) => answers[`${cat.id}-${i}`] === true
    ).length;

    const percentage =
      total > 0 ? Math.round((yesCount / total) * 100) : 0;

    let color = "red";
    if (percentage >= 80) color = "green";
    else if (percentage >= 50) color = "orange";

    return { total, yesCount, percentage, color };
  };

  /* ============================= */
  /* ===== DETAIL KATEGORIE ===== */
  /* ============================= */

  if (selectedCategory) {
    const result = getResult(selectedCategory);

    return (
      <div className="criteria-container">

        {/* Navigace nahoře */}
        <div className="top-navigation">
          <Link to="/" className="home-button">
            ← Zpět na úvod
          </Link>
        </div>

        <button
          className="back-button"
          onClick={() => setSelectedCategory(null)}
        >
          ← Zpět na kategorie
        </button>

        <h1>{selectedCategory.title}</h1>
        <p className="criteria-intro">
          {selectedCategory.description}
        </p>

        <div className="criteria-items">
          {selectedCategory.items.map((item, index) => {
            const key = `${selectedCategory.id}-${index}`;

            return (
              <div key={index} className="criteria-item">
                <span className="criteria-text">
                  {item.text}
                </span>

                <div className="criteria-answer">
                  <button
                    className={`answer yes ${
                      answers[key] === true ? "selected" : ""
                    }`}
                    onClick={() =>
                      setAnswer(selectedCategory.id, index, true)
                    }
                  >
                    {answers[key] === true ? "✔ ANO" : "ANO"}
                  </button>

                  <button
                    className={`answer no ${
                      answers[key] === false ? "selected" : ""
                    }`}
                    onClick={() =>
                      setAnswer(selectedCategory.id, index, false)
                    }
                  >
                    {answers[key] === false ? "✖ NE" : "NE"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROGRESS BAR */}
        <div className="criteria-progress-bar">
          <div
            className={`criteria-progress-fill ${result.color}`}
            style={{ width: `${result.percentage}%` }}
          ></div>
        </div>

        <div className={`category-result ${result.color}`}>
          Splněno: {result.yesCount} / {result.total} (
          {result.percentage}%)
        </div>
      </div>
    );
  }

  /* ============================= */
  /* ===== PŘEHLED KATEGORIÍ ==== */
  /* ============================= */

  return (
    <div className="criteria-container">

      {/* Navigace nahoře */}
      <div className="top-navigation">
        <Link to="/" className="home-button">
          ← Zpět na úvod
        </Link>
      </div>

      <h1>Seznam hodnoticích kritérií</h1>
      <p className="criteria-intro">
        Vyber hodnoticí kategorii pro zobrazení kritérií.
      </p>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => setSelectedCategory(cat)}
          >
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Criteria;
