import Tester from './components/Core/_Tester.js';
import Game from './components/Core/_Game.js';

function initializeTester() {
  const game = window.game;
  window.tester = new Tester(game);
}

document.addEventListener('DOMContentLoaded', () => {

  window.game = new Game();
  
  // Wait for the next event loop tick to ensure the game is fully initialized
  // setTimeout(initializeTester, 0);
});