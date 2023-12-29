import "../scss/_index.scss";

const langSwitcherBtn = document.getElementById("lang-switcher");
const langSwitcherLangs = document.getElementById("lang-switcher-langs");

if (langSwitcherBtn && langSwitcherLangs) {
  langSwitcherBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    langSwitcherBtn.classList.toggle("lang-switcher__current-lang-btn_active");
    langSwitcherLangs.classList.toggle("lang-switcher__list_show");
  });

  document.addEventListener("click", (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;

    if (!langSwitcherBtn.contains(targetElement)) {
      langSwitcherBtn.classList.remove(
        "lang-switcher__current-lang-btn_active",
      );
      langSwitcherLangs.classList.remove("lang-switcher__list_show");
    }
  });
}
