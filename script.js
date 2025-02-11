const burgerBtn = document.querySelector(".nav-burger");

const side = document.querySelector(".side");
const bgc = document.querySelector(".bgc");
const closeBtn = document.querySelector(".nav-close");
let nav = document.querySelector(".nav-desktop");

const typingHeader = document.querySelector(".main h2");
const sections = document.querySelectorAll(".section");

const adventages = document.querySelectorAll(".adventage");

const scrollWrapper = document.querySelector(".examinations-scroll");
let examinationContent = document.querySelector(".examinations-view p");

const sliderEl = document.querySelectorAll(".slider-el");
const references = document.querySelector(".references");

const faqCol = document.querySelector(".faq-col");
const faqEl = faqCol.querySelectorAll(".faq-el");

const mobileQuery = window.matchMedia("(max-width:724px)");
const dataExaminations = {
  "USG jamy brzusznej":
    "Badanie obrazowe oceniające narządy wewnętrzne, takie jak wątroba, trzustka, śledziona, nerki i pęcherzyk żółciowy. Pomaga w diagnostyce schorzeń układu pokarmowego i moczowego.",
  "USG tarczycy":
    "Służy do oceny struktury tarczycy, wykrywania guzków, torbieli i stanów zapalnych. Pomaga w diagnostyce chorób tarczycy, takich jak Hashimoto czy nadczynność tarczycy.",
  "USG Doppler naczyń krwionośnych":
    "Specjalistyczne badanie oceniające przepływ krwi w tętnicach i żyłach. Wykorzystywane do wykrywania zwężeń, zakrzepicy i oceny ukrwienia narządów.",
  "USG ciąży":
    "Nieinwazyjna metoda obrazowania pozwalająca monitorować rozwój płodu, ocenić jego wielkość, położenie oraz stan łożyska i wód płodowych.",
  "USG stawów i mięśni":
    "Badanie oceniające struktury układu mięśniowo-szkieletowego. Pomaga w diagnostyce urazów, stanów zapalnych oraz zwyrodnień stawów i mięśni.",
  "USG węzłów chłonnych":
    "Pozwala na ocenę wielkości i struktury węzłów chłonnych, co jest istotne przy wykrywaniu infekcji, stanów zapalnych oraz nowotworów.",
  "USG prostaty (transrektalne TRUS)":
    "Szczegółowe badanie prostaty wykonywane przez odbyt. Pomaga w diagnostyce przerostu prostaty, stanów zapalnych oraz nowotworów gruczołu krokowego.",
  "USG jąder i moszny":
    " Badanie pozwalające ocenić wielkość, strukturę i ukrwienie jąder oraz moszny. Pomaga w diagnostyce nieprawidłowości, takich jak wodniaki, żylaki powrózka nasiennego czy nowotwory.",
  "USG ginekologiczne przezpochwowe":
    "Badanie umożliwiające dokładną ocenę macicy, jajników i endometrium. Wykorzystywane w diagnostyce niepłodności, torbieli, mięśniaków i innych schorzeń ginekologicznych.",
  "USG stawów biodrowych u niemowląt":
    " Profilaktyczne badanie oceniające rozwój stawów biodrowych u noworodków i niemowląt, pozwalające na wczesne wykrycie dysplazji stawu biodrowego.",
  "USG serca (ECHO serca)":
    "Badanie oceniające budowę i funkcję serca. Pomaga w diagnostyce wad serca, niewydolności oraz innych schorzeń kardiologicznych.",
  "USG nerek i pęcherza moczowego":
    " Służy do oceny kształtu, wielkości i struktury nerek oraz pęcherza moczowego. Pomaga wykryć kamicę nerkową, torbiele, guzy czy zaleganie moczu.",
};
// Side
const sideClose = () => {
  side.classList.remove("active");
  bgc.classList.remove("active");
};

const examinationViewer = (e) => {
  if (!e.target.classList.contains("scroll-el")) return;
  examinationContent.textContent =
    dataExaminations[`${e.target.textContent.trim()}`];
};

const windowChange = (e) => {
  if (e.matches) {
    // Nav Mobile - burger,slider
    nav = document.querySelector(".nav-mobile");

    const examinationSection = document.querySelector(".examinations");
    const examinationBgc = examinationSection.querySelector(".bgc");
    const popUp = examinationSection.querySelector(".examination-pop-up");
    const popUpHeader = examinationSection.querySelector(".pop-up-header h3");
    examinationContent = popUp.querySelector(".pop-up-content");

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

    examinationSection.addEventListener("click", (e) => {
      if (e.target.classList.contains("scroll-el")) {
        popUpHeader.textContent = e.target.textContent;
        examinationViewer(e);
        popUp.classList.add("active");
        examinationBgc.classList.add("active");
      } else if (e.target.classList.contains("close")) {
        popUp.classList.remove("active");
        examinationBgc.classList.remove("active");
      }
    });
  } else {
    scrollWrapper.addEventListener("click", examinationViewer);
    nav.addEventListener("mouseover", (e) => {
      if (e.target.closest(".nav-item"))
        e.target.closest(".nav-item").style.opacity = 1;
    });
    nav.addEventListener("mouseout", (e) => {
      if (e.target.closest(".nav-item"))
        e.target.closest(".nav-item").style.opacity = 0.6;
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

const sliderFunction = (value) => {
  sliderEl.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - value)}%)`;
  });
};

const faqFuntion = (faq, blockVal, opacityVal) => {
  faq.style.display = blockVal;
  setTimeout(() => {
    faq.style.opacity = opacityVal;
  }, 60);
};

const main = function () {
  let currentSlider = 0;
  windowChange(mobileQuery);
  mobileQuery.addEventListener("change", windowChange);
  typing();
  sliderFunction(currentSlider);
  faqEl.forEach((el, i) => {
    if (i != 0) el.classList.add("hidden");
  });

  adventages.forEach((adventage) => {
    adventage.classList.add("hidden");
    moveObserver.observe(adventage);
  });

  sections.forEach((section) => {
    section.classList.add("hidden");
    moveObserver.observe(section);
  });

  references.addEventListener("click", (e) => {
    maxLength = sliderEl.length - 1;
    if (e.target.classList.contains("fa-arrow-right")) {
      currentSlider += 1;
      if (currentSlider > maxLength) currentSlider = 0;
      sliderFunction(currentSlider);
    } else if (e.target.classList.contains("fa-arrow-left")) {
      currentSlider -= 1;
      if (currentSlider < 0) currentSlider = maxLength;
      sliderFunction(currentSlider);
    }
  });

  faqCol.addEventListener("click", (e) => {
    if (!e.target.closest(".faq-header")) return;

    const faqContent = e.target
      .closest(".faq-el")
      .querySelector(".faq-content");

    if (faqContent.style.display == "block") {
      faqFuntion(faqContent, "none", "0");
    } else {
      faqFuntion(faqContent, "block", "1");
    }
  });
};

main();
