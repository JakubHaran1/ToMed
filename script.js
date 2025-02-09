const burgerBtn = document.querySelector(".nav-burger");

const side = document.querySelector(".side");
const bgc = document.querySelector(".bgc");
const closeBtn = document.querySelector(".nav-close");
let nav = document.querySelector(".nav-desktop");

const typingHeader = document.querySelector(".main h2");
const adventages = document.querySelectorAll(".adventage");
const sections = document.querySelectorAll(".section");

const mobileQuery = window.matchMedia("(max-width:724px)");

// Side
const sideClose = () => {
  side.classList.remove("active");
  bgc.classList.remove("active");
};

const windowChange = (e) => {
  if (e.matches) {
    // Nav Mobile - burger,slider
    nav = document.querySelector(".nav-mobile");
    burgerBtn.addEventListener("click", () => {
      side.classList.add("active");
      bgc.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sideClose();
    });

    bgc.addEventListener("click", () => {
      sideClose();
    });
  }
};

// Main section
const typing = () => {
  typingHeader.textContent = "";
  const typingTxt = "Precyzyjna diagnostyka, nowoczesna technologia.";
  let txt = "";
  typingTxt.split("").forEach((l, i) => {
    setTimeout(() => {
      txt += l;
      typingHeader.textContent = txt;
    }, 90 * i);
  });
};

// Section move
const moveOptions = {
  root: null,
  threshold: 0.2,
};

const moveCallback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hidden");
    moveObserver.unobserve(entry.target);
  });
};

const moveObserver = new IntersectionObserver(moveCallback, moveOptions);

const main = function () {
  windowChange(mobileQuery);
  mobileQuery.addEventListener("change", windowChange);
  typing();

  adventages.forEach((adventage) => {
    adventage.classList.add("hidden");
    moveObserver.observe(adventage);
  });

  sections.forEach((section) => {
    section.classList.add("hidden");
    moveObserver.observe(section);
  });
};

main();
