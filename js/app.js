document.addEventListener("DOMContentLoaded", () => {
  let body = document.body;
  let imgs = [];
  let counter = 0;
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let gameDisplay = document.getElementById("wrapper");
  const animateclasses = ["animateleft", "animateright"];
  let imgUrls = [
    "images/indications/g1.png?" + Math.random(),
    "images/indications/g2.png?" + Math.random(),
    "images/indications/g3.png?" + Math.random(),
    "images/indications/g4.png?" + Math.random(),
    "images/indications/g5.png?" + Math.random(),
    "images/indications/g6.png?" + Math.random(),
    "images/indications/g7.png?" + Math.random(),
    "images/indications/g8.png?" + Math.random(),
    "images/indications/g9.png?" + Math.random(),
    "images/indications/g10.png?" + Math.random(),
    "images/indications/b1.png?" + Math.random(),
    "images/indications/b2.png?" + Math.random(),
    "images/indications/b3.png?" + Math.random(),
    "images/indications/b4.png?" + Math.random(),
    "images/indications/b5.png?" + Math.random(),
    "images/indications/b6.png?" + Math.random(),
  ];
  for (let i = 0; i < imgUrls.length; i++) {
    imgs.push(new Image());
    imgs[i].src = imgUrls[i];
    incrementCounter();
  }
  function incrementCounter() {
    counter++;
    if (counter === imgUrls.length) {
      init();
      console.log("All images loaded!");
    }
  }

  function init() {
    const data = [
      {
        id: 0,
        name: "Impetigo",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 1,
        name: "Pyoderma",
        status: "good",
        point: 1,
        img: imgs[1],
      },
      {
        id: 2,
        name: "Cellulitis",
        status: "good",
        point: 1,
        img: imgs[2],
      },
      {
        id: 3,
        name: "Cuts",
        status: "good",
        point: 1,
        img: imgs[3],
      },
      {
        id: 4,
        name: "Wounds",
        status: "good",
        point: 1,
        img: imgs[4],
      },
      {
        id: 5,
        name: "Burns",
        status: "good",
        point: 1,
        img: imgs[5],
      },
      {
        id: 6,
        name: "Abscess",
        status: "good",
        point: 1,
        img: imgs[6],
      },
      {
        id: 7,
        name: "Primary Skin Infections",
        status: "good",
        point: 1,
        img: imgs[7],
      },
      {
        id: 8,
        name: "Secondary Skin Infections",
        status: "good",
        point: 1,
        img: imgs[8],
      },
      {
        id: 9,
        name: "SSIs",
        status: "good",
        point: 1,
        img: imgs[9],
      },
      {
        id: 10,
        name: "IDSA accredited",
        status: "bad",
        point: 1,
        img: imgs[10],
      },
      {
        id: 11,
        name: "AAFP accredited",
        status: "bad",
        point: 1,
        img: imgs[11],
      },
      {
        id: 12,
        name: "High cure rate",
        status: "bad",
        point: 1,
        img: imgs[12],
      },
      {
        id: 13,
        name: "Most prefered mupirocin",
        status: "bad",
        point: 1,
        img: imgs[13],
      },
      {
        id: 14,
        name: "40 countries",
        status: "bad",
        point: 1,
        img: imgs[14],
      },
      {
        id: 15,
        name: "2 decades trust",
        status: "bad",
        point: 1,
        img: imgs[15],
      },
    ];

    function isCollapsed() {
      var object_1 = mousePointer.getBoundingClientRect();
      var object_2 = box.getBoundingClientRect();
      if (
        object_1.left < object_2.left + object_2.width &&
        object_1.left + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height &&
        object_1.top + object_1.height > object_2.top
      ) {
        box.remove();
      }
    }

    function generateObstacle() {
      let randomX = Math.floor(Math.random() * (winWidth - 80));
      let createObs = data[Math.floor(Math.random() * data.length)];
      let obstacleLeft = randomX;
      let obstacleTop = winHeight;
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      gameDisplay.appendChild(obstacle);
      obstacle.style.left = `${obstacleLeft}px`;
      obstacle.setAttribute("data-id", createObs.id);
      obstacle.appendChild(createObs.img);

      let randClass =
        animateclasses[Math.floor(Math.random() * animateclasses.length)];
      function moveObstacle() {
        obstacle.classList.add(randClass);
      }

      let obstacleTimerId = setInterval(moveObstacle, 20);

      setTimeout(generateObstacle, 1500);

      let mousePointer = document.createElement("div");
      mousePointer.classList.add("mousePointer");
      body.addEventListener("touchstart", startTouch);
      body.addEventListener("mousedown", startTouch);
      body.addEventListener("touchend", removeTouch);
      body.addEventListener("mouseup", removeTouch);

      function startTouch(e) {
        body.append(mousePointer);
        body.addEventListener("touchmove", move);
        body.addEventListener("mousemove", move);
        move(e);
      }
      function removeTouch(e) {
        body.removeEventListener("touchmove", move);
        body.removeEventListener("mousemove", move);
        mousePointer.remove();
      }

      function move(e) {
        mousePointer.style.left = e.touches[0].pageX - 1 + "px";
        mousePointer.style.top = e.touches[0].pageY - 1 + "px";
        mousePointer.style.cursor = "pointer";
        isCollapsed();
      }
      function isCollapsed() {
        var object_1 = mousePointer.getBoundingClientRect();
        var object_2 = obstacle.getBoundingClientRect();
        if (
          object_1.left < object_2.left + object_2.width &&
          object_1.left + object_1.width > object_2.left &&
          object_1.top < object_2.top + object_2.height &&
          object_1.top + object_1.height > object_2.top
        ) {
          obstacle.remove();
        }
      }
      setTimeout(() => {
        clearInterval(obstacleTimerId);
        console.log(obstacle);
        if (gameDisplay.hasChildNodes()) {
          obstacle.remove();
        }
      }, 2000);
    }

    generateObstacle();
  }
});
