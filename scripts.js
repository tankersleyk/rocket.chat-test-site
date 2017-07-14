function unhide(button, id) {
    var x = document.getElementById(id);
    if (x) {
      if (x.className == "hidden") {
        x.className = "unhidden";
        button.value = "X";
        if (window.location.href.search("admin")!=-1) {
          button.className = "button-open-chat-admin";
        } 
        else {
          button.className = "button-open-chat";
        }
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