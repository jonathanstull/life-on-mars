import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/solar-age.js';

$(document).ready(function() {
  $('#age-input').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#earth-age').val();
    const earthDeathAge = $('#life-expectancy').val();
    let human = new Human(earthAge, earthDeathAge);
    human.mercuryConversion();
    human.venusConversion();
    human.marsConversion();
    human.jupiterConversion();
    human.calculateYearsPast();
  });
});