export default class Human {

  constructor(earthAge, earthDeathAge) {
    this.earthAge = earthAge;
    this.earthDeathAge = earthDeathAge;
    this.earthYearsPast = 0;
    this.earth = {};
    this.mercury = {};
    this.venus = {};
    this.mars = {};
    this.jupiter = {};
  }

  mercuryConversion() {
    this.mercury = new Map();
    let mercuryAge = (this.earthAge / .24).toFixed(4);
    let mercuryDeathAge = (this.earthDeathAge / .24).toFixed(4);
    let mercuryYearsLeft = (mercuryDeathAge - mercuryAge).toFixed(4);
    let mercuryYearsPast = (mercuryAge - mercuryDeathAge).toFixed(4);
    this.mercury.set("mercuryAge", parseFloat(mercuryAge));
    this.mercury.set("mercuryDeathAge", parseFloat(mercuryDeathAge));
    this.mercury.set("mercuryYearsLeft", parseFloat(mercuryYearsLeft));
    this.mercury.set("mercuryYearsPast", parseFloat(mercuryYearsPast));
  }

  venusConversion() {
    // this.venus = new Map();
    // let venusAge = (this.earthAge / .62).toFixed(4);
    // let venusDeathAge = (this.earthDeathAge / .62).toFixed(4);
    // let venusYearsLeft = (venusDeathAge - venusAge).toFixed(4);
    // let venusYearsPast = (venusAge - venusDeathAge).toFixed(4);
    // this.venus.set("venusAge", parseFloat(venusAge));
    // this.venus.set("venusDeathAge", parseFloat(venusDeathAge));
    // this.venus.set("venusYearsLeft", parseFloat(venusYearsLeft));
    // this.venus.set("venusYearsPast", parseFloat(venusYearsPast));
  }

  // lifespanConversion() {
  //   this.earth = new Map();
  //   let earthYearsLeft = this.earthDeathAge - this.earthAge;
  //   this.earth.set("yearsLeft", parseFloat(earthYearsLeft.toFixed(4)));

  //   this.mercury = new Map();
  //   let mercuryAge = this.earthAge / .24;
  //   let mercuryDeathAge = this.earthDeathAge / .24;
  //   let mercuryYearsLeft = mercuryDeathAge - mercuryAge;
  //   this.mercury.set("mercuryAge", parseFloat(mercuryAge.toFixed(4)));
  //   this.mercury.set("mercuryDeathAge", parseFloat((mercuryDeathAge).toFixed(4)));
  //   this.mercury.set("yearsLeftOnMercury", parseFloat((mercuryYearsLeft).toFixed(4)));

  //   this.venus = new Map();
  //   let venusAge = this.earthAge / .62;
  //   let venusDeathAge = this.earthDeathAge / .62;
  //   let venusYearsLeft = venusDeathAge - venusAge;
  //   this.venus.set("venusAge", parseFloat(venusAge.toFixed(4)));
  //   this.venus.set("venusDeathAge", parseFloat(venusDeathAge.toFixed(4)));
  //   this.venus.set("yearsLeftOnVenus", parseFloat(venusYearsLeft.toFixed(4)));

  //   this.mars = new Map();
  //   let marsAge = this.earthAge / 1.88;
  //   let marsDeathAge = this.earthDeathAge / 1.88;
  //   let marsYearsLeft = marsDeathAge - marsAge;
  //   this.mars.set("marsAge", parseFloat(marsAge.toFixed(4)));
  //   this.mars.set("marsDeathAge", parseFloat(marsDeathAge.toFixed(4)));
  //   this.mars.set("yearsLeftOnMars", parseFloat(marsYearsLeft.toFixed(4)));

  //   this.jupiter = new Map();
  //   let jupiterAge = this.earthAge / 11.86;
  //   let jupiterDeathAge = this.earthDeathAge / 11.86;
  //   let jupiterYearsLeft = jupiterDeathAge - jupiterAge;
  //   this.jupiter.set("jupiterAge", parseFloat(jupiterAge.toFixed(4)));
  //   this.jupiter.set("jupiterDeathAge", parseFloat(jupiterDeathAge.toFixed(4)));
  //   this.jupiter.set("yearsLeftOnJupiter", parseFloat(jupiterYearsLeft.toFixed(4)));
  // }
}