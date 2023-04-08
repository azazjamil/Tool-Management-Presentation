let Data = [
  // {
  //   headingOne: "BESTPASS DICOVERY FRAMEWORK",
  //   headingTwo: "CIRCUMSTANCE: TOLL MANAGEMENT",
  // },
  {
    name: "1. Circumstances ",
    description: "Things we can't control",
  },
  {
    name: "2. Thoughts ",
    description: "Are things we tell ourselves",
  },
  {
    name: "3. Feelings ",
    description: "Emotions we feel",
  },
  {
    name: "4. Actions ",
    description: "Plan you follow",
  },
  {
    name: "5. Results ",
    description: "Are the effects of our actions",
  },
];

// let wordsArray = [
//   {
//     id: "thoughts-left",
//     text1: "thoughts",
//     text2: "left",
//   },
//   {
//     id: "feelings-left",
//     text1: "feelings",
//     text2: "left",
//   },
//   {
//     id: "actions-left",
//     text1: "actions",
//     text2: "left",
//   },
//   {
//     id: "results-left",
//     text1: "results",
//     text2: "left",
//   },
//   {
//     id: "thoughts-right",
//     text1: "thoughts",
//     text2: "right",
//   },
//   {
//     id: "feelings-right",
//     text1: "feelings",
//     text2: "right",
//   },
//   {
//     id: "actions-right",
//     text1: "actions",
//     text2: "right",
//   },
//   {
//     id: "results-right",
//     text1: "results",
//     text2: "right",
//   },
// ];

var headerLeft = document.querySelector(".span-left");
var headerright = document.querySelector(".span-right");
var divs = document.querySelector(".data");
var mainSection = document.querySelector(".list-section");
var spanBlue = document.querySelector(".blue");
var flex = document.querySelector(".span-bold-two");
var clicker = document.querySelectorAll(".empty-img");
var cc2 = document.querySelector(".c-c-2");
var cc = document.querySelector(".c-c");
var cContent = document.querySelector(".c-content");
var container = document.querySelector(".container");
var relativeClass = document.querySelectorAll(".relative-class");
let blue = document.querySelector(".blue");
let words = document.querySelectorAll(".words");
let inputLeft = document.querySelectorAll(".inputs-left");
let inputRight = document.querySelectorAll(".inputs-right");
//reset button
document.querySelector("#reset").addEventListener("click", () => {
  headerLeft.style.display = "none";
  headerright.style.display = "none";
  mainSection.innerHTML = "";
  blue.style.display = "none";
  cc.style.display = "none";
  cc2.innerHTML = "";
  cContent.innerHTML = "";
  relativeClass.forEach((x) => {
    x.style.display = "none";
  });
  words.forEach((x) => {
    x.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
  });
  step = 0;
});

//password protection
$(document).ready(function () {
  $("#password-modal").modal("show");
});

document
  .getElementById("password-submit")
  .addEventListener("click", function () {
    var input = document.getElementById("password-input").value;
    var correctPassword = "secret";
    if (input === correctPassword) {
      $("#password-modal").modal("hide");
    } else {
      alert("Incorrect password. Please try again.");
    }
  });

const passwordInput = document.getElementById("password-input");
passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var input = document.getElementById("password-input").value;
    var correctPassword = "secret";
    if (input === correctPassword) {
      $("#password-modal").modal("hide");
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
});

//download button
function drawScreen() {
  html2canvas(document.querySelector(".container")).then((canvas) => {
    $("#screen").prepend(canvas);
    $("#screen > canvas").attr("id", "sv_img");
  });
}
function getImage(canvas) {
  var imageData = canvas.toDataURL();
  var image = new Image();
  image.src = imageData;
  return image;
}
function saveCanvasAsImageFile(e) {
  e.preventDefault();
  drawScreen();

  setTimeout(function () {
    var image = getImage(document.getElementById("sv_img"));
    saveImage(image);
  }, 1000); //1sec
}

function saveImage(image) {
  var link = document.createElement("a");
  link.href = image.src;
  link.download = "image.jpg";
  link.click();
}

$("#download").click(saveCanvasAsImageFile);

//content display
function content(x) {
  if (x == 0) {
    headerLeft.style.display = "none";
  } else if (x == 1) {
    headerLeft.style.display = "block";
    headerright.style.display = "none";
  } else if (x == 2) {
    headerright.style.display = "block";
    mainSection.innerHTML = "";
  } else if (x >= 3 && x <= 7) {
    let template = `
      <div class="data border-none">
          <div class="span-bold-two">
            <span class="span-bold style="font-size:36px;">${
              Data[x - 3].name
            }</span>
            <div class="desc-f">${Data[x - 3].description}</div>
          </div>
        </div>
      `;
    mainSection.innerHTML = template;
  } else if (x == 8) {
    mainSection.innerHTML = "";
    mainSection.style.fontSize = "18px";
    mainSection.classList.add("grid");
    for (var i = 0; i < 5; i++) {
      if (i == 4) {
        var template = `
      <p class="data" style="display: flex; padding-bottom:unset; font-size: 18px;border-bottom:none">
      <span class="span-bold span-bold-small">${Data[i].name}&nbsp;</span>- ${Data[i].description}</p>
    `;
      } else {
        var template = `
      <p class="data" style="display: flex; padding-bottom:unset; font-size: 18px;border-bottom:1px solid #97979f">
      <span class="span-bold span-bold-small">${Data[i].name}&nbsp;</span>- ${Data[i].description}</p>
    `;
      }
      mainSection.innerHTML += template;
    }
    spanBlue.style.display = "none";
  } else if (x == 9) {
    spanBlue.style.display = "block";
    relativeClass[0].style.display = "none";
  } else if (x >= 10 && x <= 12) {
    if (x == 10) {
      relativeClass[0].style.display = "block";
      relativeClass[0].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    } else if (x == 11) {
      relativeClass[0].nextElementSibling.innerHTML = "thoughts, ";
    } else if (x == 12) {
      relativeClass[0].nextElementSibling.innerHTML = "thoughts, left";
      relativeClass[1].style.display = "none";
    }
  } else if (x >= 13 && x <= 15) {
    if (x == 13) {
      relativeClass[1].style.display = "block";
      relativeClass[1].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 14) {
      relativeClass[1].nextElementSibling.innerHTML = "feelings, ";
    }
    if (x == 15) {
      relativeClass[1].nextElementSibling.innerHTML = "feelings, left";
      relativeClass[2].style.display = "none";
    }
  } else if (x >= 16 && x <= 18) {
    if (x == 16) {
      relativeClass[2].style.display = "block";
      relativeClass[2].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 17) {
      relativeClass[2].nextElementSibling.innerHTML = "actions, ";
    }
    if (x == 18) {
      relativeClass[2].nextElementSibling.innerHTML = "actions, left";
      relativeClass[3].style.display = "none";
    }
  } else if (x >= 19 && x <= 21) {
    if (x == 19) {
      relativeClass[3].style.display = "block";
      relativeClass[3].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 20) {
      relativeClass[3].nextElementSibling.innerHTML = "results, ";
    }
    if (x == 21) {
      relativeClass[3].nextElementSibling.innerHTML = "results, left";
      cc.style.display = "none";
      cContent.innerHTML = "";
    }
  } else if (x >= 22 && x <= 24) {
    if (x == 22) {
      cc.style.display = "block";
      cContent.innerHTML = "CLARITY - ";
    } else if (x === 23) {
      cContent.innerHTML = "CLARITY - CONFIDENCE - ";
    } else if (x === 24) {
      cContent.innerHTML = "CLARITY - CONFIDENCE - EXPERTISE";
      relativeClass[4].style.display = "none";
    }
  } else if (x >= 25 && x <= 27) {
    if (x == 25) {
      relativeClass[4].style.display = "block";
      relativeClass[4].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 26) {
      relativeClass[4].nextElementSibling.innerHTML = "thoughts, ";
    }
    if (x == 27) {
      relativeClass[4].nextElementSibling.innerHTML = "thoughts, right";
      relativeClass[5].style.display = "none";
    }
  } else if (x >= 28 && x <= 30) {
    if (x == 28) {
      relativeClass[5].style.display = "block";
      relativeClass[5].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 29) {
      relativeClass[5].nextElementSibling.innerHTML = "feelings, ";
    }
    if (x == 30) {
      relativeClass[5].nextElementSibling.innerHTML = "feelings, right";
      relativeClass[6].style.display = "none";
    }
  } else if (x >= 31 && x <= 33) {
    if (x == 31) {
      relativeClass[6].style.display = "block";
      relativeClass[6].nextElementSibling.innerHTML = `<span style="visibility: hidden;">AAAAA</span>`;
    }
    if (x == 32) {
      relativeClass[6].nextElementSibling.innerHTML = "actions, ";
    }
    if (x == 33) {
      relativeClass[6].nextElementSibling.innerHTML = "actions, right";
      relativeClass[7].style.display = "none";
    }
  } else if (x >= 34 && x <= 36) {
    if (x == 34) {
      relativeClass[7].style.display = "block";
      relativeClass[7].nextElementSibling.innerHTML = `<span style="visibility: hidden">AAAAA</span>`;
    }
    if (x == 35) {
      relativeClass[7].nextElementSibling.innerHTML = "results, ";
    }
    if (x == 36) {
      relativeClass[7].nextElementSibling.innerHTML = "results, right";
    }
  }
}

//backward and forward button
const backwardBtn = document.querySelector("#backward-btn");
const forwardBtn = document.querySelector("#forward-btn");
var step = 0;
backwardBtn.addEventListener("click", function () {
  if (step == 0) {
    content(step);
  } else {
    step--;
    content(step);
  }
});

forwardBtn.addEventListener("click", function () {
  if (step == 37) {
    content(step);
  } else {
    // debugger;
    step++;
    content(step);
  }
});

inputLeft.forEach((x) => {
  x.addEventListener("change", function (e) {
    target = e.target;
    if (target.value !== "") {
      target.style.backgroundColor = "rgb(174, 212, 97)";
    }
  });
});
inputRight.forEach((x) => {
  x.addEventListener("change", function (e) {
    target = e.target;
    if (target.value !== "") {
      target.style.backgroundColor = "rgb(174, 212, 97)";
    }
  });
});
//dragable functionality
interact(".floating-buttons")
  .draggable({
    listeners: {
      start(event) {},
      move(event) {},
      end(event) {},
    },
  })

  .on("dragmove", function (event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  });
