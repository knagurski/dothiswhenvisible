// register `doThisWhenVisable` jQuery plugin
$.fn.doThisWhenVisable = function(callback) {
  // grab the window as a jQuery object
  var $window = $(window);
    
  // for each of the selected elements, do this
  this.each(function(){
    // grab a jQuery object of the specific element
    var $el = $(this);

    // create a handler for the scroll event
    var scrollHandler = function(){
      // if the top of the element is higher than the bottom of the window
      if ($window.scrollTop() + $window.height() > $el.offset().top) {
        // unbind the scroll handler so we only execute the callback once
        $window.unbind('scroll', scrollHandler);
            
        // execute the callback, passing the specific element
        callback($el);
      }
    };

    // register the scroll event handler
    $window.scroll(scrollHandler);
  });
};
