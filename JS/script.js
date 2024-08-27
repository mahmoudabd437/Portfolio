let navA = document.querySelectorAll(".nav-link");
let footer = document.querySelector(".footer");
console.log(footer);

navA.forEach((nav) => {
  nav.addEventListener("click", () => {
    navA.forEach((nav) => {
      nav.classList.remove("active");
    });
    nav.classList.add("active");
  });
});

let date = new Date();
let footerText = ` <p class="text-center text-white">
          &copy; ${date.getFullYear()} Mahmoud Abd. All Rights Reserved.
        </p>`;
footer.innerHTML = footerText;
