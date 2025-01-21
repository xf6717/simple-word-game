// Initialize the app
const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);
controller.init();

// TODO:
// create a modal to use instead of the popup at the end of the Game
// Give player a second chance to click for the correct answer
// actually keep a board of right or wrong instead of stars
