function Game() {
  this.score = 0;
}

Game.prototype.add_item = function(item) {
  if (item === 'A') { this.score = this.score + 50 };
};