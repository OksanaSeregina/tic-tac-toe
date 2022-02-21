console.log(`1.Вёрстка +10
2.Кнопка Play/Pause на панели управления +10
3.Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10
4.При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10
5.При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10
6.Кнопка Play/Pause в центре видео +10
7.Дополнительный не предусмотренный в задании функционал (ТЕКУЩЕЕ ВРЕМЯ ПРОИГРЫВАНИЯ И ПОЛНОЭКРАННЫЙ ПРОСМОТР ВИДЕО)


Итого: 60`);

const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.getElementsByClassName("nav-list")[1];

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    navbar.classList.remove("change");
  }
}
navList.addEventListener("click", closeMenu);

window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st > 0 && !menuIcon.parentElement.classList.contains("change")) {
    menuIcon.classList.add("hide");
  } else {
    menuIcon.classList.remove("hide");
  }
});

window.addEventListener("click", (e) => {
  let st = document.documentElement.scrollTop;
  if (
    e.target.closest(".hamburger-menu") &&
    st > 0 &&
    !navbar.classList.contains("change")
  ) {
    menuIcon.classList.add("hide");
  }
});

//Changing images in the Portfolio section
const groupBtn = document.querySelector(".group-btn");
const itemsPortfolio = document.querySelectorAll(".item-portfolio");
const btnPortfolioTransp = document.querySelectorAll(".btn-portfolio-transp");

function changeClassActive(event, cl, allElem) {
  allElem.forEach((elem) => {
    elem.classList.remove(cl);
  });

  event.target.classList.add(cl);
}

function changeImage(event) {
  if (event.target.classList.contains("btn-portfolio-transp")) {
    let season = event.target.dataset.season;

    itemsPortfolio.forEach(
      (img, index) =>
        (img.innerHTML = `<img src="./assets/img/${season}/${
          index + 1
        }.jpg" alt="foto" /> `)
    );
    changeClassActive(event, "active", btnPortfolioTransp);
  }
}
groupBtn.addEventListener("click", changeImage);

//Image Caching
const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  seasons.forEach((elem) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${elem}/${i}.jpg`;
    }
  });
}
preloadImages();

//Page translation
const langElements = document.querySelectorAll("[data-lang]");

function getTranslate(lang) {
  const dataElem = document.querySelectorAll("[data-i18]");
  dataElem.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];

    if (elem.placeholder) {
      elem.placeholder = i18Obj[lang][elem.dataset.i18];
      elem.textContent = "";
    }
  });
}

document.querySelector(".language").addEventListener("click", (e) => {
  let lang = e.target.dataset.lang;
  getTranslate(lang);
  localStorage.setItem("langStorage", lang);
  changeClassActive(e, "active-lang", langElements);
});

//Switching themes
const classesSwitching = [
  document.querySelector(".wrapper"),
  document.querySelector(".header"),
  document.querySelector(".hero"),
  document.querySelector(".skills"),
  document.querySelector(".portfolio"),
  document.querySelector(".video"),
  document.querySelector(".price"),
  document.querySelector(".contacts"),
  document.querySelector(".footer"),
];

const elemWrapper = document.querySelector(".wrapper");

function changeSwitcher() {
  classesSwitching.forEach((elem) => {
    elem.classList.toggle(`${elem.className.split(" ", 1)[0]}-light-theme`);
  });
  if (elemWrapper.classList.contains("wrapper-light-theme")) {
    localStorage.setItem("themeStorage", "light");
  } else {
    localStorage.setItem("themeStorage", "dark");
  }
}
document.querySelector(".switcher").addEventListener("click", changeSwitcher);

//local storage
function getLocalStorage() {
  if (localStorage.getItem("langStorage")) {
    const langStorage = localStorage.getItem("langStorage");
    getTranslate(langStorage);
    langElements.forEach((elem) => {
      elem.classList.remove("active-lang");
      if (elem.dataset.lang === langStorage) {
        elem.classList.add("active-lang");
      }
    });
  }
  if (localStorage.getItem("themeStorage")) {
    const themeStorage = localStorage.getItem("themeStorage");
    if (themeStorage === "light") {
      changeSwitcher();
    }
  }
}
window.addEventListener("load", getLocalStorage);

//Custom video
const video = document.querySelector(".viewer");
const btnPlay = document.querySelector(".btn-play");
const play = document.querySelector(".play");
var currTime = document.querySelector(".current-time");
var durationTime = document.querySelector(".duration-time");
const progressControls = document.querySelector(".progress");
const volumOn = document.querySelector(".volum-on");
const volumeControls = document.querySelector(".volume");
const screensaver = document.querySelector(".screensaver");
const fullscreen = document.querySelector(".fullscreen");

function tooglePlay() {
  if (video.paused) {
    screensaver.style.display = "none";
    video.play();
    play.classList.add("pause");
    btnPlay.style.display = "none";
  } else {
    video.pause();
    play.classList.remove("pause");
    btnPlay.style.display = "inline-block";
  }
}

function videoTime(time) {
  time = Math.floor(time);
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minutesVal = minutes;
  let secondsVal = seconds;
  if (minutes < 10) {
    minutesVal = `0${minutes}`;
  }
  if (seconds < 10) {
    secondsVal = `0${seconds}`;
  }
  return `${minutesVal}:${secondsVal}`;
}
function videoProgressTime() {
  progress = Math.floor(video.currentTime) / (Math.floor(video.duration) / 100);
  progressControls.value = progress;
  currTime.innerHTML = videoTime(video.currentTime);
}

function playbackTime() {
  let timeDurution = videoTime(video.duration);
  durationTime.innerHTML = timeDurution;
}

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressControls.style.background = `linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${percent}%, #fff ${percent}%, #fff 100%)`;
  endedTime();
}

function slidingProgress() {
  progressControls.value =
    (video.currentTime / video.duration) * progressControls.max;
  handleProgressBar();
}

const scrub = (e) => {
  const time = (e.offsetX / progressControls.offsetWidth) * video.duration;
  video.currentTime = time;
};

function endedTime() {
  if (video.ended) {
    video.currentTime = 0;
    play.classList.remove("pause");
    btnPlay.style.display = "inline-block";
  }
}

function updateControls() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${value}%, rgb(200, 200, 200) ${value}%, rgb(200, 200, 200) 100%)`;
}

function handleRangeUpdate() {
  video.volume = volumeControls.value / 100;
  if (video.volume === 0) {
    volumOn.classList.add("volum-off");
  } else {
    volumOn.classList.remove("volum-off");
  }
}

function toogleMute() {
  volumOn.classList.toggle("volum-off");
  if (volumOn.classList.contains("volum-off")) {
    video.volume = 0;
  } else {
    video.volume = volumeControls.value / 100;
  }
  if (video.volume === 0) {
    volumOn.classList.add("volum-off");
  }
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

video.addEventListener("fullscreenchange", () => {
  play.classList.add("pause");
  btnPlay.style.display = "none";
});
play.addEventListener("click", tooglePlay);
video.addEventListener("click", tooglePlay);
btnPlay.addEventListener("click", tooglePlay);
screensaver.addEventListener("click", tooglePlay);
video.addEventListener("timeupdate", handleProgressBar);
video.addEventListener("timeupdate", slidingProgress);
video.addEventListener("change", slidingProgress);
video.addEventListener("timeupdate", videoProgressTime);
video.addEventListener("loadedmetadata", playbackTime);
progressControls.addEventListener("click", scrub);
progressControls.addEventListener("input", updateControls);
volumeControls.addEventListener("input", updateControls);
volumOn.addEventListener("click", toogleMute);
volumeControls.addEventListener("input", handleRangeUpdate);
fullscreen.addEventListener("click", openFullscreen);
