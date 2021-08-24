document.addEventListener("DOMContentLoaded", () => {
  let imgs = [];
  let counter = 0;
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let gameDisplay = document.getElementById("wrapper");
  const animateclasses = ["animateleft", "animateright"];
  let imgUrls = [
    "images/indications/g1.png",
    "images/indications/g2.png",
    "images/indications/g3.png",
    "images/indications/g4.png",
    "images/indications/g5.png",
    "images/indications/g6.png",
    "images/indications/g7.png",
    "images/indications/g8.png",
    "images/indications/g9.png",
    "images/indications/g10.png",
    "images/indications/b1.png",
    "images/indications/b2.png",
    "images/indications/b3.png",
    "images/indications/b4.png",
    "images/indications/b5.png",
    "images/indications/b6.png",
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
        img: imgs[0],
      },
      {
        id: 2,
        name: "Cellulitis",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 3,
        name: "Cuts",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 4,
        name: "Wounds",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 5,
        name: "Burns",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 6,
        name: "Abscess",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 7,
        name: "Primary Skin Infections",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 8,
        name: "Secondary Skin Infections",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 9,
        name: "SSIs",
        status: "good",
        point: 1,
        img: imgs[0],
      },
      {
        id: 10,
        name: "IDSA accredited",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
      {
        id: 11,
        name: "AAFP accredited",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
      {
        id: 12,
        name: "High cure rate",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
      {
        id: 13,
        name: "Most prefered mupirocin",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
      {
        id: 14,
        name: "40 countries",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
      {
        id: 15,
        name: "2 decades trust",
        status: "bad",
        point: 1,
        img: imgs[0],
      },
    ];

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
      // let obsImg = document.createElement("img");
      // obsImg.setAttribute("src", `images/indications/${createObs.img}`);
      obstacle.appendChild(createObs.img);

      let randClass =
        animateclasses[Math.floor(Math.random() * animateclasses.length)];
      function moveObstacle() {
        obstacle.classList.add(randClass);
      }
      setTimeout(() => {
        clearInterval(obstacleTimerId);
        gameDisplay.removeChild(obstacle);
      }, 2000);

      // move obstacle top to top
      let obstacleTimerId = setInterval(moveObstacle, 20);

      setTimeout(generateObstacle, 1500);
    }

    generateObstacle();
  }
});
