export default class Human {

  constructor(earthAge, earthDeathAge) {
    this.earthAge = earthAge;
    this.earthDeathAge = earthDeathAge;
    this.earth = {};
    this.mercury = {};
    this.venus = {};
    this.mars = {};
    this.jupiter = {};
  }

  lifespanConversion() {
    let mercuryAge = this.earthAge / .24;
    let venusAge = this.earthAge / .62;
    let marsAge = this.earthAge / 1.88;
    let jupiterAge = this.earthAge / 11.86;
    let earthYearsLeft = this.earthDeathAge - this.earthAge;
    this.earth = new Map();
    this.earth.set("yearsLeft", parseFloat(earthYearsLeft.toFixed(4)));
    this.mercury = new Map();
    this.mercury.set("mercuryAge", parseFloat(mercuryAge.toFixed(4)));
    this.venus = new Map();
    this.venus.set("venusAge", parseFloat(venusAge.toFixed(4)));
    this.mars = new Map();
    this.mars.set("marsAge", parseFloat(marsAge.toFixed(4)));
    this.jupiter = new Map();
    this.jupiter.set("jupiterAge", parseFloat(jupiterAge.toFixed(4)));
  }
}