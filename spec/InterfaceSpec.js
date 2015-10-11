describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('has no collected items in the list & 0 as score and bonus when initialised', function(){
      expect("#items_box").toBeEmpty();
      expect("#quantities_box").toBeEmpty();
      expect("#scores_box").toBeEmpty();
      expect("#total_bonus").toHaveText(0);
      expect("#total_score").toHaveText(0);
  });

  it('outputs A in the player s items list (as well as quantity 1) when item A is clicked once', function(){
    $('#item_a').click();
    expect($('#items_box')).toHaveText('A');
    expect($('#quantities_box')).toHaveText('1');
  });

  it('updates score and quantities of the A items in the list when A is clicked multiple times', function(){
    for(n=0;n<7;n++){ $('#item_a').click(); }
    expect($('#quantities_box')).toHaveText('7');
    expect($('#scores_box')).toHaveText('450');
  });

  it('updates total score and total bonus when A is clicked multiple times', function(){
    for(n=0;n<6;n++){ $('#item_a').click(); }
    expect($('#total_bonus')).toHaveText('100');  
    expect($('#total_score')).toHaveText('400');  
  });

  xit('outputs B, C and D in the player s items list (as well as well as their quantities and scores) when clicked', function(){
  });

  xit('updates the total score as items are being added', function(){
  });

  xit('updates the total bonus as items are being added', function(){
  });

  xit('clears the whole table when the new game button is being clicked', function(){
  });
});
