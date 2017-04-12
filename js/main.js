(function () {
  var allTheFunStuff = {
    getSliderOptions: function () {
      // btnHtml is used to override the default button HTML, firstImg randomly choses the first displayed img
      var btnHtml = '<span class="back">Back</span> | <span class="forward">Foward</span>', 
          firstImg = Math.floor(Math.random() * $('.slideshow img').length + 1);
      return { // Object containing all the options that can be passed to horizontalSlider
        rate: 500, // sliding speed (default: 1000)
        btnsInside: false, // Should the buttons go inside the slider wrapper (default: true)
        buttons: btnHtml, // A string that overrides default button HTML
        btnWrap: 'slideshow-buttons', // A classname for the DIV the will be wrapped around the buttons
        counter: firstImg, // Number that declares which slide should be shown first
        auto: 5000, // Number marking how frequently slider should auto-slide (default: 0)
        setWrapDimensions: false,
      };
    },

    init: function () {
      var sliderOptions = this.getSliderOptions(),
          that = this;
      if (jQuery) {
        jQuery(function ($) {
          $('.slideshow').horizontalSlider(sliderOptions);
        });
      }
    }
  };

  allTheFunStuff.init();
}());