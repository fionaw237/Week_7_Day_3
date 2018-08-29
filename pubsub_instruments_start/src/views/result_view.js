const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:family-ready', (event) => {
    const familyObject = event.detail;
    this.container.textContent = `Selected family: ${familyObject.name}`;
  })
}

module.exports = ResultView;
