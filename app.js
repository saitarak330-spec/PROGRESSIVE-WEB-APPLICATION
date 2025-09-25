// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("SW registration failed:", err));
}

// Notification Setup
const notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello from PWA 🎉", {
        body: "This is a push-style notification!",
        icon: "icon-192.png"
      });
    }
  });
});