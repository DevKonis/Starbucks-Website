const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// searchEl을 클릭하면 searchInputEl에 focus가 된다.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// searchInputEl에 focus가 되면 searchEl에 focused라는 클래스를 추가해준다.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "Search"); // setAttribute는 속성을 지정해준다.
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", ""); // setAttribute는 속성을 지정해준다.
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수, 시간) : 시간에 따라 함수가 실행되는 것을 제한한다.
