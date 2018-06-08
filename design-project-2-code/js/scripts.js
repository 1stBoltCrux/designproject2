function splashClick() {
  let clickWrapper = document.getElementById('wrapper');
  let clickSplash = document.getElementById('splash');
  clickSplash.style.display = 'none';
  clickWrapper.style.display = 'block'
}

function  amenitiesClick() {
  let clickAmenities = document.getElementById('hideSite');
  let clickAmenitiesShowing = document.getElementById('amenitiesShowing');
  let linkFlavorBanner = document.getElementById('link-flavor-banner');
  let linkButton = document.getElementById('link-button');

  clickAmenities.style.display = 'none';
  clickAmenitiesShowing.style.display = 'block';
  linkButton.style.backgroundImage = 'url(imgs/amenitiesbutton.svg)';
  linkFlavorBanner.style.backgroundImage = 'url(imgs/shakehands.svg)';
}

function  activitiesClick() {
  let clickAmenities = document.getElementById('hideSite');
  let clickAmenitiesShowing = document.getElementById('amenitiesShowing');
  let linkFlavorBanner = document.getElementById('link-flavor-banner');
  let linkButton = document.getElementById('link-button');
  linkButton.style.backgroundImage = 'url(imgs/activitiesbutton.svg)';
  linkFlavorBanner.style.backgroundImage = 'url(imgs/drawinghands.svg)';
  clickAmenities.style.display = 'none';
  clickAmenitiesShowing.style.display = 'block';
}

function ourspaceClick() {
  let clickAmenities = document.getElementById('hideSite');
  let clickAmenitiesShowing = document.getElementById('amenitiesShowing');
  let linkFlavorBanner = document.getElementById('link-flavor-banner');
  let linkButton = document.getElementById('link-button');
  linkButton.style.backgroundImage = 'url(imgs/ourspacebutton.svg)'
  linkFlavorBanner.style.backgroundImage = 'url(imgs/fistgroup.svg)';
  clickAmenities.style.display = 'none';
  clickAmenitiesShowing.style.display = 'block';

}

function homeClick() {
  let clickAmenities = document.getElementById('hideSite');
  let clickAmenitiesShowing = document.getElementById('amenitiesShowing');
  clickAmenities.style.display = 'block';
  clickAmenitiesShowing.style.display = 'none';
}
