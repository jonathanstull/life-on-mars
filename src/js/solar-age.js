export default class Human {

  constructor(earthAge, earthDeathAge) {
    this.earthAge = earthAge;
    this.earthDeathAge = earthDeathAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  ageConversion() {
    let mercuryAge = this.earthAge / .24;
    let venusAge = this.earthAge / .62;
    let marsAge = this.earthAge / 1.88;
    let jupiterAge = this.earthAge / 11.86;
    this.mercuryAge = parseFloat(mercuryAge.toFixed(4));
    this.venusAge = parseFloat(venusAge.toFixed(4));
    this.marsAge = parseFloat(marsAge.toFixed(4));
    this.jupiterAge = parseFloat(jupiterAge.toFixed(4));
  }
}