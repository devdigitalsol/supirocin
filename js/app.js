document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      id: 0,
      name: "Impetigo",
      status: "good",
      point: 1,
      img: "g1.png",
    },
    {
      id: 1,
      name: "Pyoderma",
      status: "good",
      point: 1,
      img: "g2.png",
    },
    {
      id: 2,
      name: "Cellulitis",
      status: "good",
      point: 1,
      img: "g3.png",
    },
    {
      id: 3,
      name: "Cuts",
      status: "good",
      point: 1,
      img: "g4.png",
    },
    {
      id: 4,
      name: "Wounds",
      status: "good",
      point: 1,
      img: "g5.png",
    },
    {
      id: 5,
      name: "Burns",
      status: "good",
      point: 1,
      img: "g6.png",
    },
    {
      id: 6,
      name: "Abscess",
      status: "good",
      point: 1,
      img: "g7.png",
    },
    {
      id: 7,
      name: "Primary Skin Infections",
      status: "good",
      point: 1,
      img: "g8.png",
    },
    {
      id: 8,
      name: "Secondary Skin Infections",
      status: "good",
      point: 1,
      img: "g9.png",
    },
    {
      id: 9,
      name: "SSIs",
      status: "good",
      point: 1,
      img: "g10.png",
    },
    {
      id: 10,
      name: "IDSA accredited",
      status: "bad",
      point: 1,
      img: "b1.png",
    },
    {
      id: 11,
      name: "AAFP accredited",
      status: "bad",
      point: 1,
      img: "b2.png",
    },
    {
      id: 12,
      name: "High cure rate",
      status: "bad",
      point: 1,
      img: "b3.png",
    },
    {
      id: 13,
      name: "Most prefered mupirocin",
      status: "bad",
      point: 1,
      img: "b4.png",
    },
    {
      id: 14,
      name: "40 countries",
      status: "bad",
      point: 1,
      img: "b5.png",
    },
    {
      id: 15,
      name: "2 decades trust",
      status: "bad",
      point: 1,
      img: "b6.png",
    },
  ];
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let gameDisplay = document.getElementById("wrapper");
  let colors = ["blue", "pink", "yellow", "green"];
  let randColor = colors[Math.floor(Math.random() * colors.length)];
  const animateclasses = ["animateleft", "animateright"];

  function init() {
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
      let obsImg = document.createElement("img");
      obsImg.setAttribute("src", `images/indications/${createObs.img}`);
      obstacle.appendChild(obsImg);

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

  init();
});
