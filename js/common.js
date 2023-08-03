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

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2023
