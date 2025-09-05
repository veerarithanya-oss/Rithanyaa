// Navigation switching

const navLinks = document.querySelectorAll(".nav-link, .btn[data-page]");

const sections = document.querySelectorAll("section");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    const target = link.getAttribute("data-page");

    if(target){

      sections.forEach(sec => sec.classList.remove("active"));

      document.getElementById(target).classList.add("active");

      document.querySelectorAll(".nav a").forEach(nav => nav.classList.remove("active"));

      const navTarget = document.querySelector(`.nav a[data-page='${target}']`);

      if(navTarget) navTarget.classList.add("active");

    }

  });

});