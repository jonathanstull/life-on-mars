For an audio explanation of this whiteboard, refer to the file whiteboard.m4a, exported from a video file created for the purpose of practice
To see the original video, please reach out to Jonathan Stull at jonathan.d.stull@gmail.com

Super Galactic Age Calculator

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a test before writing the corresponding method. This way, you'll be following the Red, Green, Refactor workflow. Remember that typically we'll only want one expectation per test.

The business logic of your application should:

Take a person's age in years and create a class that does the following:

--Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
--Returns their age in Venus years. (A Venus year is .62 Earth years.)
--Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
--Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
--Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
--If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

// create a class for a lifespan object with a constructor with a parameter of earthYears and a desired lifespan and properties for earthYears, mercuryYears, venusYears, marsYears, and jupiterYears
// return a lifespan in Earth years--return the user's age in Earth years expressed as a constant
  --this.age = age;
  --let earthYears = this.age;
// write a method that converts the user's age in Earth years to Mercury years
  --return this.mercuryYears = this.earthYears / .24;
// write another method that converts the user's age in Earth years to Venus years
  --return venusYears = earthYears / .62;
// write another method that converts the user's age in Earth years to Mars years
  --return marsYears = earthYears / 1.88;
// write another method that converts the user's age in Earth years to Jupiter years
  --return jupiterYears = earthYears / 11.86;
// write another method that takes a user's desired lifespan and tells them how many years they have left to live or have exceeded their desired lifespan
  --on Earth: timeLeft = earthYears - lifespan
  --on another planet: timeLeft = (earthYears * conversion rate) - (lifespan * conversion rate)
  --include in this method a way to differentiate between positive and negative values and a different return that converts a negative into a positive without losing the implication


End-of-day reframe:

(everything below is pseudo-code)

export default class Human {

  constructor(earthAgeInput, earthDeathAgeInput) {
    this.earthAge = earthAgeInput;
    this.earthDeathAge = earthDeathAgeInput;
    this.earthYearsLeft = earthDeathAgeInput - earthAgeInput;
    this.earthYearsPast = earthAgeInput - earthDeathAgeInput;
  }

  earthArray() {
    
  }
}