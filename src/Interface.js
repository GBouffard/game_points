$( document ).ready(function() {
  var game = new Game();

  function update_total() {
    $('#total_score').text(game.score);
    $('#total_bonus').text(game.bonus);
  };

  $('#item_a').click(function() {
    game.add_item('A');
    $('#items_box').text('A');
    $('#quantities_box').text(game.a_items);
    $('#scores_box').text(game.total_a);
    update_total();
  });
}); 
