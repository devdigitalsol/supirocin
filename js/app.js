document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const startScreen = document.getElementById("startScreen");
  const loginScreen = document.getElementById("loginScreen");
  const playBtn = document.getElementById("playBtn");
  const loginForm = document.querySelector(".loginForm");
  const introLayout = document.querySelector(".introLayout");
  const gameDisplay = document.getElementById("wrapper");
  const loginBtn = document.getElementById("loginBtn");

  // form data

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const stateData = [
    { state: "Andaman and Nicobar Islands", zone: "east" },
    { state: "Andhra Pradesh", zone: "south" },
    { state: "Arunachal Pradesh", zone: "east" },
    { state: "Assam", zone: "east" },
    { state: "Bihar", zone: "east" },
    { state: "Chandigarh", zone: "north" },
    { state: "Chhattisgarh", zone: "east" },
    { state: "Dadra and Nagar Haveli", zone: "west" },
    { state: "Delhi", zone: "north" },
    { state: "Goa", zone: "west" },
    { state: "Gujarat", zone: "west" },
    { state: "Haryana", zone: "north" },
    { state: "Himachal Pradesh", zone: "north" },
    { state: "Jammu and Kashmir", zone: "north" },
    { state: "Jharkhand", zone: "east" },
    { state: "Karnataka", zone: "south" },
    { state: "Kerala", zone: "south" },
    { state: "Madhya Pradesh", zone: "west" },
    { state: "Maharashtra", zone: "west" },
    { state: "Manipur", zone: "east" },
    { state: "Meghalaya", zone: "east" },
    { state: "Mizoram", zone: "east" },
    { state: "Nagaland", zone: "east" },
    { state: "Odisha", zone: "east" },
    { state: "Puducherry", zone: "east" },
    { state: "Punjab", zone: "north" },
    { state: "Rajasthan", zone: "north" },
    { state: "Tamil Nadu", zone: "south" },
    { state: "Telangana", zone: "south" },
    { state: "Tripura", zone: "east" },
    { state: "Uttar Pradesh", zone: "north" },
    { state: "Uttarakhand", zone: "north" },
    { state: "West Bengal", zone: "east" },
  ];
  for (let i = 0; i < stateData.length; i++) {
    let opt = document.createElement("option");
    opt.value = stateData[i].state;
    opt.innerHTML = stateData[i].state;
    state.appendChild(opt);
  }
  let data = [],
    allObs = [],
    setTime = 60,
    setCount = 10,
    score = 0,
    imgs = [],
    counter = 0,
    winWidth = window.innerWidth,
    range,
    bodyBg = "images/sceenBg.jpg",
    bodImg = new Image();

  bodImg.addEventListener("load", function () {
    body.style.backgroundImage = "url(" + bodyBg + ")";
  });
  bodImg.src = bodyBg;

  let imgUrls = [
    "images/indications/pink-1.png?" + Math.random(),
    "images/indications/pink-1-left.png?" + Math.random(),
    "images/indications/pink-1-right.png?" + Math.random(),
    "images/indications/red-1.png?" + Math.random(),
    "images/indications/red-1-left.png?" + Math.random(),
    "images/indications/red-1-right.png?" + Math.random(),
  ];
  for (let i = 0; i < imgUrls.length; i++) {
    imgs.push(new Image());
    imgs[i].src = imgUrls[i];
    incrementCounter();
  }

  window.addEventListener("load", function () {
    startScreen.classList.add("hide");
    loginScreen.style.opacity = 1;

    loginBtn.addEventListener("click", function () {
      if (
        name.value.trim().length > 0 &&
        email.value.trim().length > 0 &&
        state.value.trim().length > 0 &&
        city.value.trim().length > 0
      ) {
        loginForm.classList.add("hide");
        introLayout.classList.add("show");
      }
    });
  });
  playBtn.addEventListener("click", function () {
    gameDisplay.style.opacity = 1;
    startScreen.remove();
    loginScreen.remove();
    init();
  });

  function incrementCounter() {
    counter++;
    if (counter === imgUrls.length) {
      console.log("done");
    }
  }
  function init() {
    data = [
      {
        id: 0,
        name: "Impetigo",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 1,
        name: "Pyoderma",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 2,
        name: "Cellulitis",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 3,
        name: "Cuts",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 4,
        name: "Wounds",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 5,
        name: "Burns",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 6,
        name: "Abscess",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 7,
        name: "Primary Skin Infections",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 8,
        name: "Secondary Skin Infections",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 9,
        name: "SSIs",
        status: "bad",
        point: 1,
        img: imgs[3],
        img1: imgs[4],
        img2: imgs[5],
      },
      {
        id: 10,
        name: "IDSA accredited",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
      {
        id: 11,
        name: "AAFP accredited",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
      {
        id: 12,
        name: "High cure rate",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
      {
        id: 13,
        name: "Most prefered mupirocin",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
      {
        id: 14,
        name: "40 countries",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
      {
        id: 15,
        name: "2 decades trust",
        status: "good",
        point: 1,
        img: imgs[0],
        img1: imgs[1],
        img2: imgs[2],
      },
    ];
    let generateObs = setInterval(() => {
      generateObstacle();
    }, 2000);
    startTimer();
    let mousePointer = document.createElement("div");
    mousePointer.classList.add("mousePointer");
    body.addEventListener("touchstart", startTouch);
    body.addEventListener("touchend", removeTouch);

    function startTouch(e) {
      body.append(mousePointer);
      body.addEventListener("touchmove", move);
      move(e);
    }
    function removeTouch(e) {
      body.removeEventListener("touchmove", move);
      mousePointer.remove();
    }
    function move(e) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${e.touches[0].pageX - 1}px`;
      dot.style.top = `${e.touches[0].pageY - 1}px`;
      body.append(dot);
      setTimeout(() => {
        dot.remove();
      }, 150);
      mousePointer.style.left = e.touches[0].pageX - 1 + "px";
      mousePointer.style.top = e.touches[0].pageY - 1 + "px";
      mousePointer.style.cursor = "pointer";
      isCollapsed(mousePointer);
    }
    function generateObstacle() {
      let randomX = Math.floor(Math.random() * (winWidth - 160));
      if (randomX < 80) {
        randomX = 80;
      }
      let createObs = data[Math.floor(Math.random() * data.length)];
      let obstacleLeft = randomX;
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      obstacle.style.left = `${obstacleLeft}px`;
      obstacle.innerHTML = `
        <img src="${createObs.img1.src}" class="leftImg" />
        <img src="${createObs.img2.src}" class="rightImg" />
        <img src="${createObs.img.src}" class="mainImg" data-id="${
        createObs.id
      }" data-status="${createObs.status}" data-point="${createObs.point}" />
        <div class="point">${createObs.status === "good" ? "-" : "+"}${
        createObs.point
      }</div>
      `;

      gameDisplay.appendChild(obstacle);
      allObs.push(obstacle);

      setTimeout(() => {
        if (gameDisplay.hasChildNodes()) {
          obstacle.remove();
        }
      }, 4000);
    }
    function isCollapsed(mousePointer) {
      var object_1 = mousePointer.getBoundingClientRect();
      allObs.forEach((item) => {
        var object_2 = item.getBoundingClientRect();
        if (
          object_1.left < object_2.left + object_2.width &&
          object_1.left + object_1.width > object_2.left &&
          object_1.top < object_2.top + object_2.height &&
          object_1.top + object_1.height > object_2.top
        ) {
          item.childNodes.forEach((obs) => {
            if (obs.className === "leftImg") {
              obs.classList.add("remove");
            }
            if (obs.className === "rightImg") {
              obs.classList.add("remove");
            }
            if (obs.className === "point") {
              setTimeout(() => {
                obs.classList.add("hide");
              }, 500);
            }
            if (obs.className === "mainImg") {
              let getPoint = obs.getAttribute("data-point");
              let getStaus = obs.getAttribute("data-status");
              if (getStaus === "bad") {
                score = score + parseInt(getPoint);
              } else {
                score = score - parseInt(getPoint);
              }
              range = (score * 100) / setCount;
              document.querySelector(".range").style.width = 100 - range + "%";
              if (range >= 100) {
                clearInterval(generateObs);
                clearInterval(timer);
                document.querySelectorAll(".obstacle").forEach((item) => {
                  item.remove();
                });
              }
              obs.remove();
              if (score > 0) {
                document.getElementById("scoreTxt").innerHTML = score;
              } else {
                score = 0;
                document.getElementById("scoreTxt").innerHTML = score;
              }
            }
          });
          setTimeout(() => {
            item.remove();
          }, 3000);
        }
      });
    }
    function startTimer() {
      let count = setTime;
      timer = setInterval(function () {
        document.getElementById("timer").textContent = count--;
        if (count < 0) {
          clearInterval(timer);
          clearInterval(generateObs);
        }
      }, 1000);
    }
  }
});
