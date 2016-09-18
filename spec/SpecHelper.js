describe ("Calculator", function(){


  beforeAll(function() {
    console.log(this);
  });

  it("shd add 2 nums", function(){
      expect(calc.add(1,2)).toBe(3);
  });

  it("shd div 2 nums", function(){
      expect(calc.div(4,2)).toBe(2);
  });

  xit("shd check percentage", function(){
      expect(calc.percentage(2,4)).toBeLessThan(51);
  });

  afterAll(function() {
    console.log('Finish');
  });
});

describe ("Salary", function(){
  it("gross salary", function(){
      $('#div1').text('salary');
       console.log($('#div1'));
       var t = $('#div1')[0].innerHTML;

      expect(t).toBe("salary");
  });
})
