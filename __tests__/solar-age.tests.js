import Human from './../src/js/solar-age.js';

describe('Human', () => {

  let jonathan;

  beforeEach(() => {
    jonathan = new Human(34, 80);
  });

  it('should construct an object human with current earthAge, earthDeathAge, and empty objects for years past, Mercury, Venus, Mars, and Jupiter', () => {
    expect(jonathan.earthAge).toEqual(34);
    expect(jonathan.earthDeathAge).toEqual(80);
    expect(jonathan.yearsPast).toEqual({});
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

  it('should convert Mercury values to Mercury years', () => {
    jonathan.mercuryConversion();
    expect(jonathan.mercury.get("mercuryAge")).toEqual(141.6667);
    expect(jonathan.mercury.get("mercuryDeathAge")).toEqual(333.3333);
    expect(jonathan.mercury.get("mercuryYearsLeft")).toEqual(191.6666);
  })
  
  it('should set and convert Venus values to Venus years', () => {
    jonathan.venusConversion();
    expect(jonathan.venus.get("venusAge")).toEqual(54.8387);
    expect(jonathan.venus.get("venusDeathAge")).toEqual(129.0323);
    expect(jonathan.venus.get("venusYearsLeft")).toEqual(74.1936);
  })
  
  it('should set and convert Mars values to Mars years', () => {
    jonathan.marsConversion();
    expect(jonathan.mars.get("marsAge")).toEqual(18.0851);
    expect(jonathan.mars.get("marsDeathAge")).toEqual(42.5532);
    expect(jonathan.mars.get("marsYearsLeft")).toEqual(24.4681);
  })
  
  it('should set and convert Jupiter values to Jupiter years', () => {
    jonathan.jupiterConversion();
    expect(jonathan.jupiter.get("jupiterAge")).toEqual(2.8668);
    expect(jonathan.jupiter.get("jupiterDeathAge")).toEqual(6.7454);
    expect(jonathan.jupiter.get("jupiterYearsLeft")).toEqual(3.8786);
  })
  
  it('should convert all years past if Earth age is greater than life expectancy', () => {
    let jonathan = new Human(90, 80);
    jonathan.mercuryConversion();
    jonathan.venusConversion();
    jonathan.marsConversion();
    jonathan.jupiterConversion();
    jonathan.calculateYearsPast();
    expect(jonathan.yearsPast.get("mercuryYearsPast")).toEqual(41.6667);
    expect(jonathan.yearsPast.get("venusYearsPast")).toEqual(16.1290);
    expect(jonathan.yearsPast.get("marsYearsPast")).toEqual(5.3191);
    expect(jonathan.yearsPast.get("jupiterYearsPast")).toEqual(0.8431);
  })
});