import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fields = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(fields).sort()) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const fields = await readDatabase(process.argv[2]);
        const names = fields[major] || [];
        response.status(200).send(`List: ${names.join(', ')}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
