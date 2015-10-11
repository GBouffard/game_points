function Game() {
  this.score = 0;
  this.a_items = 0;
  this.c_items = 0;
  this.d_items = 0;
}

Game.prototype.add_item = function(item) {
  if (item === 'A') { this.add_A_items(); }
  else if (item === 'B') { this.score = this.score + 30 }
  else if (item === 'C') { this.add_C_items(); }
  else if (item === 'D') { this.add_D_items();};
};

Game.prototype.add_C_items = function() {
  this.c_items ++; 
  this.score = this.score + 20;
};

Game.prototype.add_D_items = function() {
  this.d_items ++; 
  this.score = this.score + 15;
};

Game.prototype.add_A_items = function() {
  this.a_items ++; 
  if (this.a_items % 3 === 0) { this.score = this.score + 100; }
  else { this.score = this.score + 50; }
};