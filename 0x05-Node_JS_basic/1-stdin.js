process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  process.stdin.destroy();
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
