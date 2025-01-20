// View
class LessonView {
  constructor() {
    this.lessonImage = document.getElementById("lesson-image");
    this.optionsContainer = document.getElementById("options-container");
    this.scoreDisplay = document.getElementById("score-display");
  }

  displayLesson(lesson) {
    this.lessonImage.src = lesson.image;
    this.lessonImage.alt = lesson.word;
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
    this.scoreDisplay.innerHTML = "★".repeat(score);
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
