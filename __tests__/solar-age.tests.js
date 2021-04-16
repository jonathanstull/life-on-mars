import Human from './../src/js/solar-age.js';

describe('Human', () => {

  let jonathan;

  beforeEach(() => {
    jonathan = new Human(34, 80);
  });

  it('should construct an object human with current earthAge, desired earthDeathAge, mercuryAge, venusAge, marsAge, and jupiterAge', () => {
    expect(jonathan.earthAge).toEqual(34);
    expect(jonathan.earthDeathAge).toEqual(80);
    expect(jonathan.mercuryAge).toEqual(0);
    expect(jonathan.venusAge).toEqual(0);
    expect(jonathan.marsAge).toEqual(0);
    expect(jonathan.jupiterAge).toEqual(0);
  });

  it('should convert earthAge to mercuryAge and pass the value into the corresponding property', () => {
    jonathan.ageConversion();
    expect(jonathan.mercuryAge).toEqual(jonathan.earthAge/.24);  // toEqual value is an infinite decimal 141.6666..., meaning no test will pass when passing an approximate decimal
  });

  it('should convert earthAge to venusAge, marsAge, and jupiterAge and pass the value into the corresponding property', () => {
    jonathan.ageConversion();
    expect(jonathan.venusAge).toEqual(54.8387096774);
    expect(jonathan.marsAge).toEqual(18.085106383);
    expect(jonathan.jupiterAge).toEqual(2.8667790894);
  });
});