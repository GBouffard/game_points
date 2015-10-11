describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  xit('has no collected items in the list when initialised', function(){
  });

  xit('outputs A in the player s items list (as well as quantity 1) when item A is clicked once', function(){
  });

  xit('updates score and quantities of the A items in the list when A is clicked multiple times', function(){
  });

  xit('outputs B, C and D in the player s items list (as well as quantities and scores) when clicked', function(){
  });

  xit('updates the total score as items are being added', function(){
  });

  xit('updates the total bonus as items are being added', function(){
  });

  xit('clears the whole table when the new game button is being clicked', function(){
  });
});
