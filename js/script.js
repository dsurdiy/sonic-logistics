"use strict"

document.addEventListener("click", actions);

function actions(e) {
   const targetEl = e.target;

   if (targetEl.closest(".menu-icon")) {
      document.body.classList.toggle("menu-open");
   }
}