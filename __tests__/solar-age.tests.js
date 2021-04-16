import Human from './../src/js/solar-age.js';

describe('Human', () => {

  let jonathan;

  beforeEach(() => {
    jonathan = new Human(34, 80);
  });

  it('should construct an object human with current earthAge, desired earthDeathAge, mercuryAge, venusAge, marsAge, and jupiterAge', () => {
    expect(this.earthAge).toEqual(34);
    expect(this.earthDeathAge).toEqual(80);
    expect(this.mercuryAge).toEqual(0);
    expect(this.venusAge).toEqual(0);
    expect(this.marsAge).toEqual(0);
    expect(this.jupiterAge).toEqual(0);
  });


});