// Initialize the app
const model = new LessonModel();
const view = new LessonView();
const controller = new LessonController(model, view);
controller.init();
