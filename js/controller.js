// Controller

class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.showGame();
  }

  showGame() {
    const currentGame = this.model.getCurrentGame();
    this.view.displayGame(currentGame);
    const options = this.model.getOptions();
    this.view.displayOptions(options, this.handleAnswer.bind(this));
    this.view.updateScore(this.model.score);
  }

  handleAnswer(selectedWord) {
    const isCorrect = this.model.checkAnswer(selectedWord);
    this.view.playSound(isCorrect);
    this.view.updateScore(this.model.score);

    if (this.model.nextGame()) {
      this.showGame();
    } else {
      this.view.showGameOver(this.model.score);
      this.model.resetGame();
      this.showGame();
    }
  }
}
