const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();

  const select = document.querySelector('#countries');
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const resultDiv = document.querySelector('#country');
  const resultView = new ResultView(resultDiv);
  resultView.bindEvents();

});
