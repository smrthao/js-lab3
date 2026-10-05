(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: function (name) {
      var message = speakWord + " " + name;
      console.log(message);
      return message;
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);