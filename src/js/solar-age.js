export default class Human {

  constructor(earthAge, earthDeathAge) {
    this.earthAge = earthAge;
    this.earthDeathAge = earthDeathAge;
    this.yearsPast = {};
    this.earth = {};
    this.mercury = {};
    this.venus = {};
    this.mars = {};
    this.jupiter = {};
  }
  
  calculateYearsPast() {
    // this.yearsPast = new Map();
    // if (this.earthAge >= this.earthDeathAge) {
    //   let mercuryYearsPast = (this.mercury.get("mercuryAge") - this.mercury.get("mercuryDeathAge")).toFixed(4);
    //   this.yearsPast.set("mercuryYearsPast", parseFloat(mercuryYearsPast));
    //   let venusYearsPast = (this.venus.get("venusAge") - this.venus.get("venusDeathAge")).toFixed(4);
    //   this.venus.set("venusYearsPast", parseFloat(venusYearsPast));
    //   let marsYearsPast = (this.mars.get("marsAge") - this.mars.get("marsDeathAge")).toFixed(4);
    //   this.mars.set("marsYearsPast", parseFloat(marsYearsPast));
    //   let jupiterYearsPast = (this.jupiter.get("jupiterAge") - this.jupiter.get("jupiterDeathAge")).toFixed(4);
    //   this.jupiter.set("jupiterYearsPast", parseFloat(jupiterYearsPast));
    // } else return;
  }

  mercuryConversion() {
    this.mercury = new Map();
    let mercuryAge = (this.earthAge / .24).toFixed(4);
    let mercuryDeathAge = (this.earthDeathAge / .24).toFixed(4);
    let mercuryYearsLeft = (mercuryDeathAge - mercuryAge).toFixed(4);
    this.mercury.set("mercuryAge", parseFloat(mercuryAge));
    this.mercury.set("mercuryDeathAge", parseFloat(mercuryDeathAge));
    this.mercury.set("mercuryYearsLeft", parseFloat(mercuryYearsLeft));
  }

  venusConversion() {
    this.venus = new Map();
    let venusAge = (this.earthAge / .62).toFixed(4);
    let venusDeathAge = (this.earthDeathAge / .62).toFixed(4);
    let venusYearsLeft = (venusDeathAge - venusAge).toFixed(4);
    this.venus.set("venusAge", parseFloat(venusAge));
    this.venus.set("venusDeathAge", parseFloat(venusDeathAge));
    this.venus.set("venusYearsLeft", parseFloat(venusYearsLeft));
  }

  marsConversion() {
    this.mars = new Map();
    let marsAge = (this.earthAge / 1.88).toFixed(4);
    let marsDeathAge = (this.earthDeathAge / 1.88).toFixed(4);
    let marsYearsLeft = (marsDeathAge - marsAge).toFixed(4);
    this.mars.set("marsAge", parseFloat(marsAge));
    this.mars.set("marsDeathAge", parseFloat(marsDeathAge));
    this.mars.set("marsYearsLeft", parseFloat(marsYearsLeft));
  }

  jupiterConversion() {
    this.jupiter = new Map();
    let jupiterAge = (this.earthAge / 1.88).toFixed(4);
    let jupiterDeathAge = (this.earthDeathAge / 1.88).toFixed(4);
    let jupiterYearsLeft = (jupiterDeathAge - jupiterAge).toFixed(4);
    this.jupiter.set("jupiterAge", parseFloat(jupiterAge));
    this.jupiter.set("jupiterDeathAge", parseFloat(jupiterDeathAge));
    this.jupiter.set("jupiterYearsLeft", parseFloat(jupiterYearsLeft));
  }
}