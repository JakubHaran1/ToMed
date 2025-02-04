const burgerBtn = document.querySelector(".nav-burger");
const navMobile = document.querySelector(".nav-mobile");
const side = document.querySelector(".side");
const bgc = document.querySelector(".bgc");
const closeBtn = document.querySelector(".nav-close");
const typingHeader = document.querySelector(".main h2");

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

burgerBtn.addEventListener("click", () => {
  side.classList.add("active");
  bgc.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  side.classList.remove("active");
  bgc.classList.remove("active");
});

bgc.addEventListener("click", (e) => {
  side.classList.remove("active");
  e.target.classList.remove("active");
});

typing();
