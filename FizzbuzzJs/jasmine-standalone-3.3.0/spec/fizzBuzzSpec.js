describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('fizzbuzzes for multiples of 15', function() {
    it ('fizzbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it ('fizzbuzzes for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it ('returns 4 if 4', function() {
      expect(fizzBuzz.play(4)).toEqual(4);
    });
    it ('returns 26 if 26', function() {
      expect(fizzBuzz.play(26)).toEqual(26);
    });
  });
});
