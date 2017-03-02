$(document).ready(function(event) {

  var items = ["#item1", "#item2", "#item3", "#item4"]
  $("form").submit(function(event){
    event.preventDefault();
    var updatedItems = items.map(function(item) {
      return $("input" + item).val().toUpperCase();
    });
    console.log(updatedItems);
    updatedItems.sort().forEach(function(item) {
      $("#output1").text(updatedItems[0]);
      $("#output2").text(updatedItems[1]);
      $("#output3").text(updatedItems[2]);
      $("#output4").text(updatedItems[3]);
      $("#list").show();
      $("#form").hide();
    });
    // items.forEach(function(item){
    //   var input =
    //   var upInput = input.toUpperCase();
    // upInput.
    //   var sortUpInput = upInput.sort();
    //   $("#output").append(upInput);
    // });
  });
});
