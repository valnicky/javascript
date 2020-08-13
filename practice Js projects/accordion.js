const accordions = Array.from(document.querySelectorAll(".accordion__fruit"));
const accordion_hide_all = Array.from(
  document.querySelectorAll(".accordion.hide")
);

accordions.forEach(item => {
  let icon = item.querySelector(".accordion__span");
  let accordion_hide = item.querySelector(".accordion__hide");
  let accordion_p = item.querySelector(".accordion__p");

  item.addEventListener("click", e => {
    accordion_hide.classList.toggle("display_none");
    icon.classList.toggle("display_none");

    if (accordion_hide.classList.contains("display_none")) {
      accordion_p.classList.remove("minus");
    } else {
      accordion_p.classList.add("minus");
    }

    accordion_hide.addEventListener("click", e => {
      e.stopPropagation();
    });
  });
});
