import "../scss/_index.scss";

const langSwitcherBtn = document.getElementById("language-picker");
const langSwitcherLangs = document.getElementById("language-picker-list");

if (langSwitcherBtn && langSwitcherLangs) {
  langSwitcherBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    langSwitcherBtn.classList.toggle("language-picker-active");
    langSwitcherLangs.classList.toggle("language-picker-list-active");
  });

  document.addEventListener("click", (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;

    if (!langSwitcherBtn.contains(targetElement)) {
      langSwitcherBtn.classList.remove("language-picker-active");
      langSwitcherLangs.classList.remove("language-picker-list-active");
    }
  });
}
