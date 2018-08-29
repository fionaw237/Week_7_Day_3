const PubSub = require('../helpers/pub_sub.js');

// const InputView = function(element){
//   this.element = element;
// }

const InputView = function(items){
  this.items = items;
}

InputView.prototype.bindEvents = function(){
  // PubSub.subscribe('InstrumentFamilies:data-ready', (event) => {
  //   const allInstrumentFamilies = event.detail;
  //   this.populate(allInstrumentFamilies);
  //})
  // this.element.addEventListener('change') etc;

  this.items.forEach((item) => {
    item.addEventListener('click', (event) => {
      const selectedItemId = event.target.id;
      PubSub.publish('InputView:item-clicked', selectedItemId)
    })
  })
}

// InputView.prototype.populate = function(instrumentFamilies){
//   instrumentFamilies.forEach((family, index) => {
//     const option = document.createElement('option');
//     // use document because every element is attached to the DOM
//     option.value = index;
//     option.textContent = family.name;
//     this.element.appendChild(option);
//   })
// }

module.exports = InputView;
