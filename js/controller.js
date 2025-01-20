// Controller
class LessonController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.showLesson();
  }

  showLesson() {
    const currentLesson = this.model.getCurrentLesson();
    this.view.displayLesson(currentLesson);
    const options = this.model.getOptions();
    this.view.displayOptions(options, this.handleAnswer.bind(this));
    this.view.updateScore(this.model.score);
  }

  handleAnswer(selectedWord) {
    const isCorrect = this.model.checkAnswer(selectedWord);
    this.view.playSound(isCorrect);
    this.view.updateScore(this.model.score);

    if (this.model.nextLesson()) {
      this.showLesson();
    } else {
      this.view.showGameOver(this.model.score);
      this.model.resetGame();
      this.showLesson();
    }
  }
}
