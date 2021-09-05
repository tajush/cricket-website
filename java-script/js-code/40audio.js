for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".bt")[i].addEventListener("click", function () {
    var txt = this.innerHTML;
    console.log(txt);

    switch (txt) {
      case "a":
        var audio = new Audio("sounds/a.m4a");
        audio.play();
        break;
        case "b":
        var audio = new Audio("sounds/b.m4a");
        audio.play();
        break;

        case "c":
        var audio = new Audio("sounds/c.m4a");
        audio.play();
        break;
    }
  });
}

