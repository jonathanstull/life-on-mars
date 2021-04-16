import Human from './../src/js/solar-age.js';

describe('Human', () => {

  let jonathan;

  beforeEach(() => {
    jonathan = new Human(34, 80);
  });

  it('should construct an object human with current earthAge, earthDeathAge, and empty objects for Mercury, Venus, Mars, and Jupiter', () => {
    expect(jonathan.earthAge).toEqual(34);
    expect(jonathan.earthDeathAge).toEqual(80);
    expect(jonathan.mercury).toEqual({});
    expect(jonathan.venus).toEqual({});
    expect(jonathan.mars).toEqual({});
    expect(jonathan.jupiter).toEqual({});
  });

  it('should convert earthAge to mercuryAge and pass the property into a new map object Mercury', () => {
    jonathan.lifespanConversion();
    expect(jonathan.mercury.get("mercuryAge")).toEqual(141.6667);
  });

  it('should convert earthAge to venusAge, marsAge, and jupiterAge and pass the value into the corresponding new map objects', () => {
    jonathan.lifespanConversion();
    expect(jonathan.venus.get("venusAge")).toEqual(54.8387);
    expect(jonathan.mars.get("marsAge")).toEqual(18.0851);
    expect(jonathan.jupiter.get("jupiterAge")).toEqual(2.8668);
  });

  it('should pass the difference yearsLeft between earthAge and earthDeath into an earth map object', () => {
    jonathan.lifespanConversion();
    expect(jonathan.earth.get("yearsLeft")).toEqual(46);
  });

  it('should pass the years left difference for Mercury, Venus, Mars, and Jupiter', () => {
    jonathan.lifespanConversion();
    expect(jonathan.mercury.get("yearsLeft")).toEqual(191.6666);
    expect(jonathan.venus.get("yearsLeft")).toEqual(75.1936);
    expect(jonathan.mars.get("yearsLeft")).toEqual(27.4681);
    expect(jonathan.jupiter.get("yearsLeft")).toEqual(3.8786);
  });
});