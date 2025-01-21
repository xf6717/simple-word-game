// Model - data & business logic

class GameModel {
  constructor() {
    this.games = [
      { word: "Cat", image: "images/cat.jpeg" },
      { word: "Dog", image: "images/dog.jpeg" },
      { word: "Ball", image: "images/ball.jpeg" },
      { word: "Apple", image: "images/apple.jpeg" },
    ];
    this.currentGame = 0;
    this.score = 0;
    this.popup = document.getElementById("popup");
  }

  getCurrentGame() {
    return this.games[this.currentGame];
  }

  getOptions() {
    const correctAnswer = this.getCurrentGame().word;
    const otherOptions = this.games
      .filter((game) => game.word !== correctAnswer)
      .map((game) => game.word);
    return this.shuffleArray([correctAnswer, ...otherOptions.slice(0, 2)]);
  }

  checkAnswer(selectedWord) {
    const isCorrect = selectedWord === this.getCurrentGame().word;
    if (isCorrect) {
      this.score++;
    }
    // TODO: add the try again logic here?
    // this.popup.style.display = "flex"; // Show the popup

    // // Automatically hide the popup after 1 second
    // setTimeout(() => {
    //   popup.style.display = "none"; // Hide the popup
    // }, 1000); // 1000 ms = 1 second

    return isCorrect;
  }

  nextGame() {
    if (this.currentGame < this.games.length - 1) {
      this.currentGame++;
      return true;
    }
    return false;
  }

  resetGame() {
    this.currentGame = 0;
    this.score = 0;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
