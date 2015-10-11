$( document ).ready(function() {
  var game = new Game();

  $('#item_a').click(function() {
    game.add_item('A');
    $('#items_box').text('A');
    $('#quantities_box').text('1');    
  });
}); 
