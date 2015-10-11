function Game() {
  this.score = 0;
}

Game.prototype.add_item = function(item) {
  if (item === 'A') { this.score = this.score + 50 }
  else if (item === 'B') { this.score = this.score + 30 }
  else if (item === 'C') { this.score = this.score + 20 }
  else if (item === 'D') { this.score = this.score + 15 };
};