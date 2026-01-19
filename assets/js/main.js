(() => {
  const root = document.documentElement;
  const btn = document.getElementById("langBtn");
  const label = document.getElementById("langLabel");

  const languages = ["hy", "en", "ru"]; // порядок языков

  function showLang(lang) {
    languages.forEach(l => {
      document.querySelectorAll(`.${l}`).forEach(el => {
        el.style.display = (l === lang) ? "" : "none";
      });
    });
  }

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    showLang(lang);

    // кнопка показывает следующий язык
    const currentIndex = languages.indexOf(lang);
    const nextLang = languages[(currentIndex + 1) % languages.length];

    let labelText = nextLang === "hy" ? "Հայ" : nextLang.toUpperCase();
    label.textContent = labelText;

    localStorage.setItem("lang", lang);
  }

  // инициализация
  const saved = localStorage.getItem("lang");
  if (languages.includes(saved)) setLang(saved);
  else setLang("hy"); // по умолчанию армянский

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-lang") || "hy";
      const currentIndex = languages.indexOf(current);
      const nextLang = languages[(currentIndex + 1) % languages.length];
      setLang(nextLang);
    });
  }

  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

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
