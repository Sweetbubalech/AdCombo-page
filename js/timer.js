let timerInterval;
let totalTime = 10 * 60; // 10 минут в секундах

function startTimer() {
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const millisecondsElement = document.getElementById('milliseconds');

  timerInterval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      totalTime = 10 * 60; // Сброс таймера на 10 минут
      startTimer(); // Перезапуск таймера
      return;
    }

    totalTime--;

    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const milliseconds = 0; // Миллисекунды не используются, но можно добавить

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
  }, 1000); // Обновление каждую секунду
}

// Запуск таймера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  startTimer();
});