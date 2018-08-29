const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:data-loaded', (event) => {
    const countriesData = event.detail
    this.populate(countriesData);
  })

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value
    PubSub.publish('SelectView:change', selectedIndex);
  })
}

SelectView.prototype.populate = function(countriesData){
  countriesData.forEach((country, index) => {
    const option = document.createElement('option');
      option.value = index;
      option.textContent = country.name;
      this.element.appendChild(option);
  })
}

module.exports = SelectView;
