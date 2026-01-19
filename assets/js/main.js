(() => {
  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // language toggle (default EN, stores preference)
  const root = document.documentElement;
  const btn = document.getElementById("langBtn");
  const label = document.getElementById("langLabel");

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    // Button shows the language you can switch to
    label.textContent = (lang === "en") ? "Հայ" : "EN";
    localStorage.setItem("lang", lang);
  }

  const saved = localStorage.getItem("lang");
  if (saved === "hy" || saved === "en") setLang(saved);
  else setLang("en");

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-lang") || "en";
      setLang(current === "en" ? "hy" : "en");
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
})();
