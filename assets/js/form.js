
const form = document.getElementById("contact-form");
const successBox = document.getElementById("success-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (data.trim() === "OK") {

      form.style.display = "none";
      successBox.style.display = "block";

      form.reset();

      setTimeout(() => {
        successBox.style.display = "none";
        form.style.display = "block";
      }, 3000);

    } else {
      alert("Something went wrong.");
    }
  })
  .catch(() => {
    alert("Error sending message.");
  });
});


const shine = document.querySelector(".checkmark-shine");

// reset if it was used before
shine.classList.remove("animate");
void shine.offsetWidth; // force reflow

shine.classList.add("animate");








const mapContainer = document.querySelector('.contact-map');
const toggleBtn = document.getElementById('fullscreen-toggle');

toggleBtn.addEventListener('click', () => {
  mapContainer.classList.toggle('fullscreen');
  document.body.classList.toggle('map-is-fullscreen');
});

// Optional: allow Esc to exit fullscreen
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    mapContainer.classList.remove('fullscreen');
  }


});