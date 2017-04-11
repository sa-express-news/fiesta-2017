$(function() {
  // btnHtml is used to override the default button HTML, firstImg randomly choses the first displayed img
  var btnHtml = '<span class="back">Back</span> | <span class="forward">Foward</span>', 
      firstImg = Math.floor(Math.random() * $('.slideshow div').length + 1),
      sliderOptions = { // Object containing all the options that can be passed to horizontalSlider
        rate: 500, // sliding speed (default: 1000)
        btnsInside: false, // Should the buttons go inside the slider wrapper (default: true)
        buttons: btnHtml, // A string that overrides default button HTML
        btnWrap: 'slideshow-buttons', // A classname for the DIV the will be wrapped around the buttons
        counter: firstImg, // Number that declares which slide should be shown first
        auto: 2000 // Number marking how frequently slider should auto-slide (default: 0)
      };
  
  $('.slideshow').horizontalSlider(sliderOptions);
});