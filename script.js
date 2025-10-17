document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    if (timeElement) {
      const currentTimeMillis = Date.now();
      timeElement.textContent = currentTimeMillis;
    }
  }

  updateTime();
  setInterval(updateTime, 100);
});
