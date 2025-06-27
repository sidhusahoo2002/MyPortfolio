// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Back to top button (optional, if you add one)
const topButton = document.createElement("button");
topButton.textContent = "↑ Top";
topButton.id = "backToTop";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "10px 15px";
topButton.style.display = "none";
topButton.style.backgroundColor = "#004aad";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function openModal() {
  document.getElementById("hireModal").style.display = "block";
}

function closeModal() {
  document.getElementById("hireModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hireForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Hiring Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Siddheswar,\n\n${message}\n\nFrom: ${name} (${email})`);

    const mailtoLink = `mailto:sidhusahoo2002@gmail.com?subject=${subject}&body=${body}`;

    // Open user's mail app
    window.location.href = mailtoLink;

    // Close the modal after a slight delay (optional)
    setTimeout(() => closeModal(), 1000);
  });
});
// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

