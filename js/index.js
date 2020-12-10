const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Background(ctx);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    
    startGame();
  };

  function startGame() {
    background.draw()
  }
};
