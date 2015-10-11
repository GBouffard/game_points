describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('knows that a single item A adds 50 points', function() {
    game.add_item('A');
    expect(game.score).toEqual(50);
  });

  it('knows that a single item B adds 30 points', function() {
    game.add_item('B');
    expect(game.score).toEqual(30);
  });

  it('knows that a single item C adds 20 points', function() {
    game.add_item('C');
    expect(game.score).toEqual(20);
  });

  it('knows that a single item D adds 15 points', function() {
    game.add_item('D');
    expect(game.score).toEqual(15);
  });

  it('tracks the number of C items and adds 20 points to the score for each of them', function() {
    for(n=0;n<9;n++) { game.add_item('C'); }
    expect(game.score).toEqual(180);
    expect(game.c_items).toEqual(9);
  });

  it('tracks the number of D items and adds 15 points to the score for each of them', function() {
    for(n=0;n<11;n++) { game.add_item('D'); }
    expect(game.score).toEqual(165);
    expect(game.d_items).toEqual(11);
  });

  xit('knows that there is a bonus on A and adds 200 points for 3 A items', function() {
  });

  xit('knows that there is a bonus on B and adds 90 points for 2 B items', function() {
  });

  xit('tracks the number of A items and calculates the right accumulator of A items', function() {
  });

  xit('tracks the number of B items and calculates the right accumulator of B items', function() {
  });

  xit('calculates and knows the total score', function() {
  });

  xit('calculates and knows the total bonus', function() {
  });

  xit('has a reset button to start a new game', function() {
  });
});
