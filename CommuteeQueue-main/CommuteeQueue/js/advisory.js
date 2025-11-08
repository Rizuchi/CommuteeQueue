document.addEventListener("DOMContentLoaded", () => {
  const advisories = [
    "🚧 Road maintenance along Roman Highway — expect 10-min delay.",
    "🌧️ Light rain expected near Balanga terminal — drive safely.",
    "🚍 Heavy passenger volume at Orani — arrive early.",
    "🛠️ Minor repair at Mariveles stop — temporary reroute active."
  ];

  const advisoryText = document.getElementById("advisoryText");
  const modal = document.getElementById("advisoryModal");
  const viewDetails = document.getElementById("viewDetails");
  const closeBtn = document.querySelector(".modal .close");

  let index = 0;
  function showAdvisory() {
    advisoryText.classList.remove("fade");
    void advisoryText.offsetWidth; // restart animation
    advisoryText.textContent = advisories[index];
    advisoryText.classList.add("fade");
    index = (index + 1) % advisories.length;
  }

  showAdvisory();
  setInterval(showAdvisory, 5000);

  // modal handlers
  viewDetails.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    modal.classList.add("fade");
  });
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("fade");
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("fade");
      modal.style.display = "none";
    }
  });
});
