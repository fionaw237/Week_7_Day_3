const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready', (event) => {
    const selectedCountry = event.detail;
    this.render(selectedCountry);
  })
}

ResultView.prototype.render = function(country){
  this.container.innerHTML = "";

  const heading = this.createHeading(country);
  this.container.appendChild(heading);

  const image = this.getImage(country);
  this.container.appendChild(image);

  const regionDetails = this.getRegionDetails(country);
  this.container.appendChild(regionDetails);

  const languageDetails = this.getLanguageDetails(country);
  this.container.appendChild(languageDetails);
}

ResultView.prototype.createHeading = function(country){
  const heading = document.createElement('h1');
  heading.textContent = country.name;
  return heading;
}

ResultView.prototype.getImage = function(country){
  image = document.createElement('img');
  image.src = country.flag;
  image.width = 300;
  return image
}

ResultView.prototype.getRegionDetails = function(country){
  const regionDiv = document.createElement('div');
  const regionHeading = document.createElement('h2');
  regionHeading.textContent = 'Region:';
  regionDiv.appendChild(regionHeading);
  const regionParagraph = document.createElement('p');
  regionParagraph.textContent = country.region
  regionDiv.appendChild(regionParagraph);
  return regionDiv;
}

ResultView.prototype.getLanguageDetails = function(country){
  const languageDiv = document.createElement('div');
  const languageHeading = document.createElement('h2');
  languageHeading.textContent = "Language(s):"
  languageDiv.appendChild(languageHeading);
  const languagesList = this.getLanguagesList(country);
  languageDiv.appendChild(languagesList);
  return languageDiv;
}

ResultView.prototype.getLanguagesList = function(country){
  const languagesUl = document.createElement('ul');
  const languagesArray =  country.languages;
  languagesArray.forEach((language) => {
    const languageLi = document.createElement('li');
      languageLi.textContent = language.name;
    languagesUl.appendChild(languageLi);
  })
  return languagesUl;
}


module.exports = ResultView;
