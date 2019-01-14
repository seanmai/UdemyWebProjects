//Check off specific To Do elements by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Delete To Do elements by clicking X
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();//this targets li from fadeOut
  });
  event.stopPropagation();//Passing event argument and using stopPropagtion prevents click listener from bubbling into parent elements
});

//Add event listener on textbox
$("input[type='text']").keypress(function(event){
  //When that keypress is enter (ascii = 13), grab text from input and create new li
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
 });
