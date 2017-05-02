$(function() {
  $("#userSentence").submit(function(event) {
    var userInput = $("input#sentence").val();
    var letters = userInput.split("");


    var noVowels = letters.map(function(letter) {
      return letter.replace("a", "-").replace("e", "-").replace("i", "-").replace("o", "-").replace("u", "-");

      });

    var noVowelSentence = noVowels.join("");

    $('.newSentence').text(noVowelSentence);

    event.preventDefault();
  });
});
