import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function setupRoutes(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default setupRoutes;
