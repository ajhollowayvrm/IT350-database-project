document.ready(function() {
  $('.menu .item').tab();
})

function move(tileName) {
  moveToTile(tileName);
  $(this).activate();
}



/*---------------------Utilites--------------------*/

(function($) {
  $.fn.activate = function() {
      $('nav .item').each(() => {
        this.removeClass('active');
      });
      this.addClass('active')
  };
}(jQuery));