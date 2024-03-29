describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('has no collected items in the list and score and bonus of 0 when initialised', function(){
    expect("#a_quantity").toBeEmpty();
    expect("#a_score").toBeEmpty();
    expect("#b_quantity").toBeEmpty();
    expect("#b_score").toBeEmpty();
    expect("#c_quantity").toBeEmpty();
    expect("#c_score").toBeEmpty();
    expect("#d_quantity").toBeEmpty();
    expect("#d_score").toBeEmpty();
    expect("#total_bonus").toHaveText(0);
    expect("#total_score").toHaveText(0);
  });

  it('outputs 1 in the A quantity when item A is clicked once', function(){
    $('#item_a').click();
    expect($('#a_quantity')).toHaveText('1');
  });

  it('updates score and quantities of the A items in the list when A is clicked multiple times', function(){
    for(n=0;n<7;n++){ $('#item_a').click(); }
    expect($('#a_quantity')).toHaveText('7');
    expect($('#a_score')).toHaveText('450');
  });

  it('updates total score and total bonus when A is clicked multiple times', function(){
    for(n=0;n<6;n++){ $('#item_a').click(); }
    expect($('#total_bonus')).toHaveText('100');  
    expect($('#total_score')).toHaveText('400');  
  });

  it('like done for A, outputs the right quantity, score, bonus and total score for B when B is clicked multiple times', function(){
    for(n=0;n<7;n++){ $('#item_b').click(); }
    expect($('#b_quantity')).toHaveText('7');
    expect($('#b_score')).toHaveText('300');
    expect($('#total_bonus')).toHaveText('90');  
    expect($('#total_score')).toHaveText('300');  
  });

  it('outputs the right quantity, score, bonus and total score for C when C is clicked multiple times', function(){
    for(n=0;n<12;n++){ $('#item_c').click(); }
    expect($('#c_quantity')).toHaveText('12');
    expect($('#c_score')).toHaveText('240'); 
    expect($('#total_score')).toHaveText('240');
  });

  it('outputs the right quantity, score, bonus and total score for D when D is clicked multiple times', function(){
    for(n=0;n<11;n++){ $('#item_d').click(); }
    expect($('#d_quantity')).toHaveText('11');
    expect($('#d_score')).toHaveText('165'); 
    expect($('#total_score')).toHaveText('165');
  });

  it('clears the whole table when the new game button is being clicked', function(){
    $('#item_a').click();
    $('#item_b').click();
    $('#item_c').click();
    $('#item_d').click();
    $('#new_game').click();
    expect("#a_quantity").toBeEmpty();
    expect("#a_score").toBeEmpty();
    expect("#b_quantity").toBeEmpty();
    expect("#b_score").toBeEmpty();
    expect("#c_quantity").toBeEmpty();
    expect("#c_score").toBeEmpty();
    expect("#d_quantity").toBeEmpty();
    expect("#d_score").toBeEmpty();
    expect("#total_bonus").toHaveText(0);
    expect("#total_score").toHaveText(0);    
  });
});
