// Model
class LessonModel {
  constructor() {
    this.lessons = [
      { word: "Cat", image: "images/cat.jpeg" },
      { word: "Dog", image: "images/dog.jpeg" },
      { word: "Ball", image: "images/ball.jpeg" },
      { word: "Apple", image: "images/apple.jpeg" },
    ];
    this.currentLesson = 0;
    this.score = 0;
  }

  getCurrentLesson() {
    return this.lessons[this.currentLesson];
  }

  getOptions() {
    const correctAnswer = this.getCurrentLesson().word;
    const otherOptions = this.lessons
      .filter((lesson) => lesson.word !== correctAnswer)
      .map((lesson) => lesson.word);
    return this.shuffleArray([correctAnswer, ...otherOptions.slice(0, 2)]);
  }

  checkAnswer(selectedWord) {
    const isCorrect = selectedWord === this.getCurrentLesson().word;
    if (isCorrect) {
      this.score++;
    }
    return isCorrect;
  }

  nextLesson() {
    if (this.currentLesson < this.lessons.length - 1) {
      this.currentLesson++;
      return true;
    }
    return false;
  }

  resetGame() {
    this.currentLesson = 0;
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
