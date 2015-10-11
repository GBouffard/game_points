function Game() {
  this.score = 0;
  this.a_items = 0;
  this.total_a = 0;
  this.b_items = 0;
  this.total_b = 0;
  this.c_items = 0;
  this.d_items = 0;
  this.bonus = 0;
}

Game.prototype.add_item = function(item) {
  if (item === 'A') { this.add_A_items(); }
  else if (item === 'B') { this.add_B_items(); }
  else if (item === 'C') { this.add_C_items(); }
  else if (item === 'D') { this.add_D_items(); }
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
  this.total_a = this.total_a + 50;
  if (this.a_items % 3 === 0) { this.bonus_A(); }
  else { this.score = this.score + 50; }
};

Game.prototype.add_B_items = function() {
  this.b_items ++; 
  this.total_b = this.total_b + 30;
  if (this.b_items % 2 === 0) { this.bonus_B(); }
  else { this.score = this.score + 30; }
};

Game.prototype.bonus_A = function() {
  this.score = this.score + 100;
  this.total_a = this.total_a + 50;
  this.bonus = this.bonus + 50;
};

Game.prototype.bonus_B = function() {
  this.score = this.score + 60;
  this.total_b = this.total_b + 30;
  this.bonus = this.bonus + 30;
};

Game.prototype.reset_game = function() {
  this.score = 0;
  this.a_items = 0;
  this.total_a = 0;
  this.b_items = 0;
  this.total_b = 0;
  this.c_items = 0;
  this.d_items = 0;
  this.bonus = 0;
};