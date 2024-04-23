const toggleBtn = document.getElementById("button");

const mobileMenu = document.getElementById("mobileMenu");
const modal = document.getElementById("myModal");

const close = document.getElementById("close");

let isValid = true;

(function () {
  emailjs.init("9dCHF7MkEU0YpwGz6");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_bja7v3h", "template_7db087q", this).then(
        function () {
          modal.style.display = "block";
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

close.addEventListener("click", function () {
  modal.style.display = "none";
});

toggleBtn.addEventListener("click", function () {
  //   console.log("clicked");
  if (!isValid) {
    console.log("here");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    isValid = true;
  } else {
    console.log("here");
    mobileMenu.classList.add("flex");
    mobileMenu.classList.remove("hidden");
    isValid = false;
  }

  //   console.log("clicked2");
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
