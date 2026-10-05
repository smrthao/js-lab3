(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  var output = document.getElementById("greetings");

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var message;

    // Використання методів charAt() та toLowerCase()
    if (name.charAt(0).toLowerCase() === "j") {
      message = byeSpeaker.speak(name);
    } else {
      message = helloSpeaker.speak(name);
    }

    // Вивід на екран для index.html
    if (output) {
      var item = document.createElement("li");
      item.textContent = message;
      output.appendChild(item);
    }
  }

  console.log("--- Додатковий функціонал: імена, що закінчуються на 'a' ---");
  for (var k = 0; k < names.length; k++) {
    var currentName = names[k];
    if (currentName.charAt(currentName.length - 1).toLowerCase() === "a") {
      console.log("Особливе вітання для: " + currentName);
    }
  }
})();