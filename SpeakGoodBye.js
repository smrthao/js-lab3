(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
      var message = speakWord + " " + name;
      console.log(message);
      return message;
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);