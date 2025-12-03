// GrovePortal-Dev — Uberman Counter Module

let startTime = localStorage.getItem('grove_start_time');
if (!startTime) {
  startTime = Date.now();
  localStorage.setItem('grove_start_time', startTime);
}

export function updateCounter() {
  const display = document.getElementById('counter-display');
  const liveTimer = document.getElementById('live-timer');

  if (!display || !liveTimer) return;

  const now = Date.now();
  const elapsed = now - startTime;

  const day = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const time = new Date(elapsed).toISOString().substr(11, 12);

  display.textContent = day;
  liveTimer.textContent = time;

  requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(updateCounter);
});
