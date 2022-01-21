console.log(`1.Вёрстка соответствует макету. Ширина экрана 768px(ПРИ ИСПОЛЬЗОВАНИИ DEVICE TOOLBAR БРАУЗЕРА GOOGLE CHROME В РЕЖИМЕ RESPONSIVE, ПРИ УСТАНОВЛЕННОМ РАЗРЕШЕНИИ ЭКРАНА 768px, В БРАУЗЕРЕ И ОПЕРАЦИОННОЙ СИСТЕМЕ - МАСШТАБ 100%, И ВЫСТАВЛЕНИИ В РАСШИРЕНИИ PerfectPixel МАСШТАБА 1, И ВЫРАВНИВАНИИ ПО ОСЯМ X=0, Y=0, СУЩЕСТВЕННЫХ РАСХОЖДЕНИЙ С МАКЕТОМ НЕ ВИЖУ) +48
- блок <header> +6
- секция hero +6
- секция skills +6
- секция portfolio +6
- секция video +6
- секция price +6
- секция contacts +6
- блок <footer> +6
2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
- нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
- нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
- нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22
- при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
- при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
- высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
- при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
- бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
- при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4
    
    Итого: 85`);

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
