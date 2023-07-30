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
  // _.throttle(함수, 시간) : 시간에 따라 함수가 실행되는 것을 제한한다.
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

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션) : 요소를 지속시간동안 옵션에 따라 애니메이션을 실행한다.
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1, // 1번째 0.7초, 2번째 1.4초, 3번째 2.1초, 4번째 2.8초
  });
});

// JS 생성자(클래스) new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper", {
  // direction: "horizontal" : 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 이전 슬라이드 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 슬라이드 버튼 선택자
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // 반대값을 넣어준다.
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

function floatingObject(selector) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(selector, 1, {
    y: 20,
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
  });
}
floatingObject(".floating");
