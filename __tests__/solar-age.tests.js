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

  it('should set and convert Mercury age, Mercury death age, and Mercury years left from Earth values', () => {
    jonathan.mercuryConversion();
    expect(jonathan.mercury.get("mercuryAge")).toEqual(141.6667);
    expect(jonathan.mercury.get("mercuryDeathAge")).toEqual(333.3333);
  });

  it('should calculate and convert Mercury years left from Earth years', () => {
    jonathan.mercuryConversion();
    expect(jonathan.mercury.get("mercuryYearsLeft")).toEqual(191.6666);
  })

  it('should calculate and convert Mercury years past from Earth years', () => {
    jonathan.mercuryConversion();
    expect(jonathan.mercury.get("mercuryYearsPast")).toEqual(-191.6666);
  })

  it('should convert Mercury values to Mercury years', () => {
    jonathan.mercuryConversion();
    expect(jonathan.mercury.get("mercuryAge")).toEqual(141.6667);
    expect(jonathan.mercury.get("mercuryDeathAge")).toEqual(333.3333);
    expect(jonathan.mercury.get("mercuryYearsLeft")).toEqual(191.6666);
    expect(jonathan.mercury.get("mercuryYearsPast")).toEqual(-191.6666);
  })

  it('should set and convert Venus values to Venus years', () => {
    jonathan.venusConversion();
    expect(jonathan.venus.get("venusAge")).toEqual(54.8387);
    expect(jonathan.venus.get("venusDeathAge")).toEqual(129.0323);
    expect(jonathan.venus.get("venusYearsLeft")).toEqual(74.1936);
    expect(jonathan.venus.get("venusYearsPast")).toEqual(-74.1936);
  })

  it('should set and convert Mars values to Mars years', () => {
    jonathan.marsConversion();
    expect(jonathan.mars.get("marsAge")).toEqual(18.0851);
    expect(jonathan.mars.get("marsDeathAge")).toEqual(42.5532);
    expect(jonathan.mars.get("marsYearsLeft")).toEqual(24.4681);
    expect(jonathan.mars.get("marsYearsPast")).toEqual(-24.4681);
  })

  it('should set and convert Jupiter values to Jupiter years', () => {
    jonathan.jupiterConversion();
    expect(jonathan.jupiter.get("jupiterAge")).toEqual(18.0851);
    expect(jonathan.jupiter.get("jupiterDeathAge")).toEqual(42.5532);
    expect(jonathan.jupiter.get("jupiterYearsLeft")).toEqual(24.4681);
    expect(jonathan.jupiter.get("jupiterYearsPast")).toEqual(-24.4681);
  })

  // it('should convert Mercury age to)

  // it('should convert earthAge to mercuryAge and pass the property into a new map object Mercury', () => {
  //   jonathan.lifespanConversion();
  //   expect(jonathan.mercury.get("mercuryAge")).toEqual(141.6667);
  // });

  // it('should convert earthAge to venusAge, marsAge, and jupiterAge and pass the value into the corresponding new map objects', () => {
  //   jonathan.lifespanConversion();
  //   expect(jonathan.venus.get("venusAge")).toEqual(54.8387);
  //   expect(jonathan.mars.get("marsAge")).toEqual(18.0851);
  //   expect(jonathan.jupiter.get("jupiterAge")).toEqual(2.8668);
  // });

  // it('should pass the difference yearsLeft between earthAge and earthDeath into an earth map object', () => {
  //   jonathan.lifespanConversion();
  //   expect(jonathan.earth.get("yearsLeft")).toEqual(46);
  // });

  // it('should pass the years left difference for Mercury, Venus, Mars, and Jupiter', () => {
  //   jonathan.lifespanConversion();
  //   expect(jonathan.mercury.get("yearsLeftOnMercury")).toEqual(191.6667);
  //   expect(jonathan.venus.get("yearsLeftOnVenus")).toEqual(74.1935);
  //   expect(jonathan.mars.get("yearsLeftOnMars")).toEqual(24.4681);
  //   expect(jonathan.jupiter.get("yearsLeftOnJupiter")).toEqual(3.8786);
  // });

  // it('should return the years lived past life expectancy on Earth', () => {
  //   jonathan = new Human(95, 80);
  //   jonathan.lifespanConversion();
  //   expect(jonathan.earthYearsPast).toEqual(15);
  // });
});