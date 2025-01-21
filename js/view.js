// View
class GameView {
  constructor() {
    this.gameImage = document.getElementById("game-image");
    this.optionsContainer = document.getElementById("options-container");
    this.scoreDisplay = document.getElementById("score-display");
  }

  displayGame(game) {
    this.gameImage.src = game.image;
    this.gameImage.alt = game.word;
  }

  displayOptions(options, handleAnswer) {
    this.optionsContainer.innerHTML = "";
    options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option-button";
      button.addEventListener("click", () => handleAnswer(option));
      this.optionsContainer.appendChild(button);
    });
  }

  updateScore(score) {
    this.scoreDisplay.innerHTML = "Your current score: " + score;
  }

  playSound(isCorrect) {
    const sound = new Audio(
      isCorrect ? "audio/correct.m4a" : "audio/incorrect.m4a"
    );
    sound.play();
  }

  showGameOver(score) {
    alert(`Game Over! Your score: ${score}`);
  }
}
