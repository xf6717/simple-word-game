// View
class GameView {
  constructor() {
    this.gameImage = document.getElementById("game-image");
    this.optionsContainer = document.getElementById("options-container");
    this.scoreDisplay = document.getElementById("score-display");
    this.modalText = document.getElementById("modal-text");
    this.modal = document.getElementById("modal");
    this.modalBtn = document.getElementById("modal-btn");
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
    this.modal.style.display = "flex"; // shows the modal
    this.modalText.innerHTML = "You scored " + score + "!";
    this.closeModal();
  }

  closeModal() {
    this.modalBtn.addEventListener("click", () => {
      console.log("Close button clicked!");
      this.modal.style.display = "none";
    });
  }
}
