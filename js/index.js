$(function () {
  
  var die = ["R.I.P", "May mah soul rest in peace", "Good joke lame a*s","Is it no problem , if I shutdown ??"];
  var close=3;
  
  var machineName = "Lol";
  $(".status-text").hide();
  function addMessage(message, author, machine) {
    $("#messages").append('<li style="display: none;"><strong title="' + author + '">' + author + ': </strong><span>' + message +  '</span></li>');
    if (typeof machine == "boolean")
      $(".status-text").fadeOut();
    else
      $("textarea").val("");
    $("#messages li:last").fadeIn();
    if (typeof machine != "boolean")
      setTimeout(function () {
        
        switch (message.toLowerCase()) {
          case "book":
            
            addMessage("Hqllo, " + localStorage.username + "! How are you?", machineName, true);
          
        $(".but_1").show();
            
            break;
          case "hello":
          case "ff":
            addMessage("aa, ", machineName, true);
            break;
          case "die":
            var randomNumber = Math.floor(Math.random()*die.length);
            addMessage(die[randomNumber], machineName, true);
            close--;
            if (close==0)
              {
                window.close();
              }
            
            break;
          case "help":
          case "manual":
            addMessage("You can use the following commands:", machineName, true);
            break;
          case "time":
            addMessage("The time now is: see the bottom right clock is there, ha ha.", machineName, true);
            break;
          case "what is your name?":
          case "what is your name":
            addMessage("My name is " + machineName + ". I thought you knew it already!", machineName, true);
            break;
          default:
            addMessage("What are you blabbering?", machineName, true);
            break;
        }
      }, 500);
  }
  if (typeof localStorage != "undefined")
    if (typeof localStorage.username == "undefined")
      localStorage.username = prompt("What is your good name?");
  $("#chatInput").submit(function (e) {
    e.preventDefault();
    addMessage($("textarea").val(), localStorage.username);
  });
  $("textarea").keydown(function (e) {
    if (e.which == 13) {
      addMessage($(this).val(), localStorage.username);
      return false;
    }
  });
});
