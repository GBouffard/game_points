$( document ).ready(function() {
  var game = new Game();

  function update_total() {
    $('#total_score').text(game.score);
    $('#total_bonus').text(game.bonus);
  };

  $('#item_a').click(function() {
    game.add_item('A');
    $('#a_quantity').text(game.a_items);
    $('#a_score').text(game.total_a);
    update_total();
  });

  $('#item_b').click(function() {
    game.add_item('B');
    $('#b_quantity').text(game.b_items);
    $('#b_score').text(game.total_b);
    update_total();
  });

  $('#item_c').click(function() {
    game.add_item('C');
    $('#c_quantity').text(game.c_items);
    $('#c_score').text(game.c_items * 20);
    update_total();
  });
}); 
