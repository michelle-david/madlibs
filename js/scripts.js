$(document).ready(function () {
  $("#form0ne").submit(function (event) {

    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verb1Input = $("input#verb").val();
    const noun1Input = $("input#noun").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verb1Input);
    $(".noun").append(noun1Input);

    $("#story").show();

    event.preventDefault();
  });
});