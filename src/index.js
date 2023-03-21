/* Bio script */
const btnBioShort = document.getElementById("button-short");
const btnBioMedium = document.getElementById("button-medium");
const btnBioLong = document.getElementById("button-long");
const bios = document.querySelectorAll("#bio");
const buttons = document.querySelectorAll(".about__button");

function removeBios() {
  bios.forEach((element) => element.classList.remove("about__bio--active"));
}
function removeBtnStyles() {
  buttons.forEach((element) =>
    element.classList.remove("about__button--active")
  );
}

btnBioShort.addEventListener("click", function (event) {
  removeBios();
  removeBtnStyles();
  event.target.classList.add("about__button--active");
  bios[0].classList.add("about__bio--active");
});

btnBioMedium.addEventListener("click", function (event) {
  removeBios();
  removeBtnStyles();
  event.target.classList.add("about__button--active");
  bios[1].classList.add("about__bio--active");
});

btnBioLong.addEventListener("click", function (event) {
  removeBios();
  removeBtnStyles();
  event.target.classList.add("about__button--active");
  bios[2].classList.add("about__bio--active");
});

/* Form script */
var form = document.getElementById("my-form");
const textarea = document.getElementById("textarea");
textarea.textContent = "";

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);


/* paste this line in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/xzbqpgrj",
  title: "How can I help you?",
  fields: [
    {
      type: "text",
      label: "Name:",
      name: "firstName",
      required: true,
      placeholder: "Jane Appel",
    },
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "appel@gmail.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "gray",
    },
    button: {
      backgroundColor: "#565a5d",
    },
  },
});