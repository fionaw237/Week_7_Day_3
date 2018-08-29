const InstrumentFamilies = require('./models/instrument_families.js');
const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {

  // const select = document.querySelector('#instrument-families');
  // const inputView = new InputView(select);
  // inputView.bindEvents();

  const menuItems = document.querySelectorAll('li.instrument-family-item');
  const inputView = new InputView(menuItems);
  inputView.bindEvents();

  const resultSection = document.querySelector('#result-section')
  const resultView = new ResultView(resultSection);
  resultView.bindEvents();


  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();





});
