$( document ).ready(function() {
  var game = new Game();

  function update_total() {
    $('#total_score').text(game.score);
    $('#total_bonus').text(game.bonus);
  };

 function reset_all_items() {
    $("#a_quantity").text('');
    $("#a_score").text('');
    $("#b_quantity").text('');
    $("#b_score").text('');
    $("#c_quantity").text('');
    $("#c_score").text('');
    $("#d_quantity").text('');
    $("#d_score").text('');
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

  $('#item_d').click(function() {
    game.add_item('D');
    $('#d_quantity').text(game.d_items);
    $('#d_score').text(game.d_items * 15);
    update_total();
  });

  $('#new_game').click(function() {
    game.reset_game();
    reset_all_items();
    update_total();
  });
}); 
