const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function(){
  this.countriesData = null
}

Countries.prototype.bindEvents = function(){
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.countriesData = data;
    PubSub.publish('Countries:data-loaded', this.countriesData);
  })

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  })
}

Countries.prototype.publishCountryDetail = function(index){
  const selectedCountry = this.countriesData[index]
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
}

module.exports = Countries;
