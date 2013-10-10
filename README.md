# Vimeo Slides

This jQuery plugin is a helper for controlling vimeo videos. It requires jQuery and Vimeo's froogaloop library.

The froogaloop library can be found here: <a href='http://a.vimeocdn.com/js/froogaloop2.min.js'>http://a.vimeocdn.com/js/froogaloop2.min.js</a>.

## Getting Started

There are two ways to use the plugin: actions and callbacks.

## Actions

There are two action commands: pause and play. They can be called on your video like any other jQuery command.

`$('myvideo').vimeoslides('pause');`

or

`$('myvideo').vimeoslides('play');`

## Callbacks

This plugin can also receive a literal object of settings as the parameter. The selected item would be an element that contains all of the Vimeo videos.

    // Register the callback functions.
    $('#all-my-vidoes').vimeoslides({
      onPause: function(playerID){

        // The video has been paused. Do stuff.
        console.log("Video Paused. (Custom Callback)");

      },
      onPlay: function(playerID){

        // The video is playing. Now what?
        console.log("Video Playing. (Custom Callback)");

      },
      onFinish: function(playerID){

        // The video just finished. Yay!
        console.log("Video Finished. (Custom Callback)");

      }
    });

These callbacks will overwrite the existing callbacks which do nothing worthwhile. That are about as worthwhile as the custom callbacks written above.

## Warnings

For any of thise to work, each vimeo embedded iframe source needs to have two parameters: `&api=1` and `&player_id=some-player-id`. For my testing, I made each `player_id` parameter match the DOM ID of the iframe.
