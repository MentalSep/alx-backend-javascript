import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

async function readDatabase(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
module.exports = readDatabase;
