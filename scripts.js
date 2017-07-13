function unhide(button, id) {
    var x = document.getElementById(id);
    if (x) {
      if (x.className == "hidden") {
        x.className = "unhidden";
        button.value = "Hide chat";
        button.className = "button-open-chat";
        document.getElementsByClassName("info-text-no-chat")[0].className = "info-text-show-chat";
      }
      else {
        x.className = "hidden";
        button.value = "Show chat";
        button.className = "button-hidden-chat";
        document.getElementsByClassName("info-text-show-chat")[0].className = "info-text-no-chat";
      }
    }
  }