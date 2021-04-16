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
    let earthYearsLeft = this.earthDeathAge - this.earthAge;
    this.earth = new Map();
    this.earth.set("yearsLeft", parseFloat(earthYearsLeft.toFixed(4)));

    this.mercury = new Map();
    let mercuryAge = this.earthAge / .24;
    let mercuryDeathAge = this.earthDeathAge / .24;
    let mercuryYearsLeft = mercuryDeathAge - mercuryAge;
    // create a new variable yearsLeft passing the difference between death age and current age
    // assign yearsLeft to mercury object
    this.mercury.set("mercuryAge", parseFloat(mercuryAge.toFixed(4)));
    this.mercury.set("deathAge", parseFloat((mercuryDeathAge).toFixed(4)));
    this.mercury.set("yearsLeftOnMercury", parseFloat((mercuryYearsLeft).toFixed(4)));

    this.venus = new Map();
    let venusAge = this.earthAge / .62;
    this.venus.set("venusAge", parseFloat(venusAge.toFixed(4)));

    let marsAge = this.earthAge / 1.88;
    this.mars = new Map();
    this.mars.set("marsAge", parseFloat(marsAge.toFixed(4)));

    let jupiterAge = this.earthAge / 11.86;
    this.jupiter = new Map();
    this.jupiter.set("jupiterAge", parseFloat(jupiterAge.toFixed(4)));
  }
}