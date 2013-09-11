;(function(root, undefined) {
  
  "use strict";

  

  /* init image carousel */
  function initImageCarousel(id) {
    var el = document.getElementById(id); 

    function updateTitle (title) {
      var textTitle = title;

      if (title.length > 20) {
        textTitle = title.substring(20,0) + '...';
      }

      $(el).find('.' + id + '-controls').find('h5').attr('title',title).text(textTitle);
    }

    var imageCarousel = new Swipe(el, {
      auto: 5000,
      continuous: true,
      callback: function (index, imgContainer) {
        var imgTitle = $(imgContainer).find('img').attr('title');
        updateTitle(imgTitle);

        var num = index + 1,
          numSlides = imageCarousel.getNumSlides();
          
        $(el).find('.current').text(num);
      }
    });

    var firstImgTitle = $(el).first('div').find('img').attr('title');
    updateTitle(firstImgTitle);

    $(el).find('.total').text(imageCarousel.getNumSlides());

    $(el).find('.previous').on('click', imageCarousel.prev);
    $(el).find('.next').on('click', imageCarousel.next);
  }

  initImageCarousel('image-carousel');

})(window);
