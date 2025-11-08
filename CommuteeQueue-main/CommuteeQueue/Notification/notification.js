document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");

  // ✅ Add notification HTML dynamically
  const notificationHTML = `
    <div class="notification-container">
      <button class="notification-bell" id="notifyBell">
        <i class="fas fa-bell"></i>
        <span class="badge">3</span>
      </button>
      <div class="notification-box" id="notifyBox">
        <div class="notification-header">Notifications</div>
        <div class="notification-item">
            <p>🚐 <strong>Balanga - Orani Jeep</strong> will depart soon. Make sure you’re ready!</p>
            <small>10 mins ago</small>
        </div>
        <div class="notification-item">
            <p>🚌 <strong>Balanga - Mariveles Bus</strong> is now boarding passengers.</p>
            <small>30 mins ago</small>
        </div>
        <div class="notification-item">
            <p>👋 <strong>Welcome to the site!</strong> Check out available trips now!</p>
            <small>2 hours ago</small>        
        </div>
      </div>
    </div>
  `;



  // Inject into the header
  header.insertAdjacentHTML("beforeend", notificationHTML);

  // ✅ Toggle open/close
  const bell = document.getElementById("notifyBell");
  const box = document.getElementById("notifyBox");
  bell.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
