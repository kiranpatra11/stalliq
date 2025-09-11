let number = Math.floor(Math.random() * 10) + 1; // random number 1–10
let guess;

do {
    guess = parseInt(prompt('Enter a number between 1 and 10'));

    if (guess === number) {
        alert('🎉 Correct!');
        break;
    } else if (guess < number) {
        alert('Too low, try again.');
    } else if (guess > number) {
        alert('Too high, try again.');
    }
} while (true);
