// 'use strict';
// //NOTE what is documet.querySelector()
// console.log(document.querySelector('.message').textContent);

// //NOTE change value of the textContent
// document.querySelector('.message').textContent = 'Correct Number!🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess ').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// console.log(typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //NOTE when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number😥!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number🎉!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = 'red';

    //NOTE the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //NOTE : refactoring code: the dry princple
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😫!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//     //NOTE when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game 😫!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //NOTE when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game 😫!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//

//NOTE again button
document.querySelector('.again').addEventListener('click', function () {
  //NOTE restore the value of score and number variables
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = secretNumber;
  //NOTE restore message, score and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //NOTE restore the background color and number width, number color
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#222';
});
