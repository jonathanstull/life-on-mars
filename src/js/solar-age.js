export default class Human {

  constructor(earthAge, earthDeathAge) {
    this.earthAge = earthAge;
    this.earthDeathAge = earthDeathAge;
    this.mercury = [];
    this.venus = [];
    this.mars = [];
    this.jupiter = [];
  }

  convertMercury() {
    let earthArray = [this.earthAge, this.earthDeathAge];
    let mercuryArray = [];
    earthArray.forEach((element) => {
      mercuryArray.push(parseInt(element / 0.24));
      return this.mercury = mercuryArray;
    })
  }

  convertVenus() {

  }

  convertMars() {

  }

  convertJupiter() {

  }
}

//   earthConversion() {
//     this.earth = new Map();
//     let earthYearsLeft = this.earthDeathAge - this.earthAge;
//     this.earth.set("yearsLeft", parseFloat(earthYearsLeft.toFixed(4)));
//   }

//   mercuryConversion() {
//     this.mercury = new Map();
//     let mercuryAge = this.earthAge / .24;
//     let mercuryDeathAge = this.earthDeathAge / .24;
//     let mercuryYearsLeft = mercuryDeathAge - mercuryAge;
//     // create a new variable yearsLeft passing the difference between death age and current age
//     // assign yearsLeft to mercury object
//     this.mercury.set("mercuryAge", parseFloat(mercuryAge.toFixed(4)));
//     this.mercury.set("mercuryDeathAge", parseFloat((mercuryDeathAge).toFixed(4)));
//     this.mercury.set("yearsLeftOnMercury", parseFloat((mercuryYearsLeft).toFixed(4)));
//   }

//   venusConversion() {
//     this.venus = new Map();
//     let venusAge = this.earthAge / .62;
//     let venusDeathAge = this.earthDeathAge / .62;
//     let venusYearsLeft = venusDeathAge - venusAge;
//     this.venus.set("venusAge", parseFloat(venusAge.toFixed(4)));
//     this.venus.set("venusDeathAge", parseFloat(venusDeathAge.toFixed(4)));
//     this.venus.set("yearsLeftOnVenus", parseFloat(venusYearsLeft.toFixed(4)));
//   }

//   marsConversion() {
//     this.mars = new Map();
//     let marsAge = this.earthAge / 1.88;
//     let marsDeathAge = this.earthDeathAge / 1.88;
//     let marsYearsLeft = marsDeathAge - marsAge;
//     this.mars.set("marsAge", parseFloat(marsAge.toFixed(4)));
//     this.mars.set("marsDeathAge", parseFloat(marsDeathAge.toFixed(4)));
//     this.mars.set("yearsLeftOnMars", parseFloat(marsYearsLeft.toFixed(4)));
//   }

//   jupiterConversion() {
//     this.jupiter = new Map();
//     let jupiterAge = this.earthAge / 11.86;
//     let jupiterDeathAge = this.earthDeathAge / 11.86;
//     let jupiterYearsLeft = jupiterDeathAge - jupiterAge;
//     this.jupiter.set("jupiterAge", parseFloat(jupiterAge.toFixed(4)));
//     this.jupiter.set("jupiterDeathAge", parseFloat(jupiterDeathAge.toFixed(4)));
//     this.jupiter.set("yearsLeftOnJupiter", parseFloat(jupiterYearsLeft.toFixed(4)));
//   };

//   yearsPast() {    
//     let earthYearsPast = this.earthAge - this.earthDeathAge;
//     let mercuryYearsPast = this.mercury.get("yearsLeftOnMercury");
//     let venusYearsPast = this.venus.get("yearsLeftOnVenus");
//     let marsYearsPast = this.mars.get("yearsLeftOnMars");
//     let jupiterYearsPast = this.jupiter.get("yearsLeftOnJupiter");
//     if (earthYearsPast < 0) {
//       return this.earthYearsPast = earthYearsPast;
//     } else if (mercuryYearsPast > 0) {
//       this.mercury.set("mercuryYearsPast", Math.abs(mercuryYearsPast));
//     } else if (venusYearsPast > 0) {
//       this.venus.set("venusYearsPast", Math.abs(venusYearsPast));
//     } else if (marsYearsPast > 0) {
//       this.mars.set("marsYearsPast", Math.abs(marsYearsPast));
//     } else if (jupiterYearsPast > 0) {
//       this.jupiter.set("jupiterYearsPast", Math.abs(jupiterYearsPast));
//     }
//   }
// }