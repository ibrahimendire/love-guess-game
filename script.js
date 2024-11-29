document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let hasWon = false;

  const feedback = document.getElementById("feedback");
  const guessInput = document.getElementById("guess-input");
  const submitBtn = document.getElementById("submit-btn");
  const messageBox = document.getElementById("message-box");
  const loveMessage = document.getElementById("love-message");
  const restartBtn = document.getElementById("restart-btn");

  const lovePhrases = [
    "You're my sunshine on a cloudy day. ☀️",
    "Every moment with you feels magical. ✨",
    "You're more beautiful than the stars. 🌟",
    "You are my forever and always. 💞",
    "With you, my heart feels whole. ❤️",
    "You make my world brighter. 🌈",
    "I love you more than words can express. 💕",
    "You're my favorite person in the universe. 🌌",
    "Life is better with you by my side. 🌹",
    "I’m so lucky to have you in my life. 💖",
  ];

  submitBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      feedback.textContent = "Please enter a number between 1 and 10.";
      feedback.style.color = "#ffdddd";
      return;
    }

    if (guess === randomNumber) {
      feedback.textContent = "Correct! Here's your special message: 🎉";
      feedback.style.color = "#fff";
      loveMessage.textContent = lovePhrases[randomNumber - 1];
      messageBox.classList.remove("hidden");
      hasWon = true;
      endGame();
    } else if (guess < randomNumber) {
      feedback.textContent = "It's higher than that. Try again! 😊";
      feedback.style.color = "#fff";
    } else {
      feedback.textContent = "It's lower than that. You can do it! ❤️";
      feedback.style.color = "#fff";
    }

    guessInput.value = "";
  });

  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.classList.remove("hidden");
  }
});
