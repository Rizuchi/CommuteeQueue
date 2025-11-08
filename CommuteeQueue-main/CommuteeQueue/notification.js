// ==================== notification.js ====================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");

  // === Add notification HTML dynamically ===
  const notificationHTML = `
    <div class="notification-container">
      <button class="notification-bell" id="notifyBell">
        <i class="fas fa-bell"></i>
        <span class="badge">0</span>
      </button>
      <div class="notification-box" id="notifyBox">
        <div class="notification-header">See what's up!</div>
        <div id="notification-list"></div>
      </div>
    </div>
  `;

  // Inject into the header
  header.insertAdjacentHTML("beforeend", notificationHTML);

  // === Toggle open/close ===
  const bell = document.getElementById("notifyBell");
  const box = document.getElementById("notifyBox");
  const badge = document.querySelector(".badge");
  const notificationList = document.getElementById("notification-list");

  bell.addEventListener("click", () => {
    box.classList.toggle("active");
  });

  // === Global function to add notifications dynamically ===
  window.pushNotification = function (message) {
    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const item = document.createElement("div");
    item.classList.add("notification-item");
    item.innerHTML = `
      <p>${message}</p>
      <small>${timeNow}</small>
    `;

    notificationList.prepend(item);

    // Update badge count
    const count = notificationList.children.length;
    badge.textContent = count;
  };
});
