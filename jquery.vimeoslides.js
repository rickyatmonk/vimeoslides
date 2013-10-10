(function ( $ ) {
  'use strict';

  // Define the action methods that a user can call to control the videos.
  var methods = {
    play: function () {

      var iframe = $(this)[0],
          player = $f(iframe);
  
      player.api('play');
      return player;

    },
    pause: function () {

      var iframe = $(this)[0],
          player = $f(iframe);

      player.api('pause');

    }
  };

  // The main plugin function.
  $.fn.vimeoslides = function (method) {

    // Add the apprpriate events to a vimeo video when ready.
    function ready(playerID){
      Froogaloop(playerID).addEvent('play', function(){
        settings.onPlay(playerID);
      });
      
      Froogaloop(playerID).addEvent('pause', function(){
        settings.onPause(playerID);
      });

      Froogaloop(playerID).addEvent('finish', function(){
        settings.onFinish(playerID);
      });
    }

    // Procedural code begins here:

    // Determine if a user is registering a video or giving a command.
    if (methods[method]) {
      // Look for functions (commands)
      var player = methods[method].apply(this, Array.prototype.slice.call( arguments, 1 ));

    }
    else{
      // Look for settings (registering callbacks) and extend the default settings with them
      var settings = {};
      var defaults = {
        onPlay: function(playerID){
          console.log('Video playing (default callback)');
        },
        onPause: function(playerID) {
          console.log('Video paused (default callback)');
        },
        onFinish: function(playerID){
          console.log('Video finished (default callback)');
        }  
      };
      $.extend(settings, defaults, arguments[0] || {});

      // Enable the API on each Vimeo video
      $(this).find('iframe[src*="player.vimeo"]').each(function(){
        Froogaloop(this).addEvent('ready', ready);
      });

    }

    return this;

  };

}( jQuery ));