const arrShap = [
  {
    id: 1,
    idBrands: 1,
    icon: '<i class="fa-brands fa-steam"></i>',
  },
  {
    id: 2,
    idBrands: 2,
    icon: '<i class="fa-brands fa-google-play"></i>',
  },
  {
    id: 3,
    idBrands: 3,
    icon: '<i  class="fa-brands fa-windows"></i>',
  },
  {
    id: 4,
    idBrands: 4,
    icon: '<i  class="fa-brands fa-linkedin"></i>',
  },
  {
    id: 5,
    idBrands: 5,
    icon: '<i  class="fa-brands fa-square-instagram"></i>',
  },
  {
    id: 6,
    idBrands: 6,
    icon: ' <i  class="fa-brands fa-facebook"></i>',
  },
  {
    id: 7,
    idBrands: 7,
    icon: ' <i class="fa-brands fa-tiktok"></i>',
  },
  {
    id: 8,
    idBrands: 8,
    icon: '<i class="fa-brands fa-youtube"></i>',
  },
  {
    id: 9,
    idBrands: 9,
    icon: '<i class="fa-brands fa-paypal"></i>',
  },
  {
    id: 10,
    idBrands: 10,
    icon: '<i class="fa-brands fa-shopify"></i>',
  },
  {
    id: 11,
    idBrands: 11,
    icon: '<i class="fa-brands fa-twitter"></i>',
  },
  {
    id: 12,
    idBrands: 12,
    icon: '<i class="fa-brands fa-discord"></i>',
  },
  {
    id: 13,
    idBrands: 13,
    icon: '<i class="fa-brands fa-apple"></i>',
  },
  {
    id: 14,
    idBrands: 14,
    icon: '<i class="fa-brands fa-google"></i>',
  },
  {
    id: 15,
    idBrands: 15,
    icon: '<i class="fa-brands fa-telegram"></i>',
  },
  {
    id: 16,
    idBrands: 16,
    icon: '<i class="fa-brands fa-android"></i>',
  },
  {
    id: 17,
    idBrands: 17,
    icon: '<i class="fa-brands fa-react"></i>',
  },
  {
    id: 18,
    idBrands: 18,
    icon: '<i class="fa-brands fa-square-js"></i>',
  },
  {
    id: 19,
    idBrands: 19,
    icon: '<i class="fa-brands fa-skype"></i>',
  },
  {
    id: 20,
    idBrands: 20,
    icon: '<i class="fa-brands fa-twitch"></i>',
  },
  //
];

const QuickLookButton = document.querySelector(".styled-button");
QuickLookButton.onclick = () => {
  //Take a Quick look at the pictures
  var parentElement = document.getElementById("containerMemoryGameBoxs");
  var childrenToRemoveClass = parentElement.querySelectorAll(".Box");

  childrenToRemoveClass.forEach(function (child) {
    child.classList.add("quickLook");
  });
  setTimeout(() => {
    childrenToRemoveClass.forEach(function (child) {
      child.classList.remove("quickLook");
    });
  }, 2000);
};

const startGameButton = document.querySelector(".startButton");
const levelGameButton = document.querySelector(".levelGame .levelButton");
levelGameButton.innerHTML = `  
  <div>
    <button onclick="handleClickLevel(${1})" data-level="1">Easy</button>
  </div>
  <div>
    <button  onclick="handleClickLevel(${2})" data-level="2">Intermediate</button>
  </div>
  <div>
    <button  onclick="handleClickLevel(${3})" data-level="3">Hard</button>
  </div>
`;
// `<div class="Box" data-brands=${i.idBrands} onclick="handleClick(${index})" style=${i.id} key=${index} id=${index} data-animal="cat"></div>`

const handleClickLevel = (i) => {
  //show modal name
  var userName = prompt("Please enter your name:");
  //get html code name
  var element = document.querySelector(".userName");
  // Set text content
  if (userName == null || userName == "") {
    element.textContent = "unknown";
  } else {
    element.textContent = userName;
  }

  // Remove the element
  var elementToRemove = document.querySelector(".levelGame");
  elementToRemove.remove(elementToRemove);

  const FirstshuffleArray = shuffleArray(arrShap);
  const arrBox = FirstshuffleArray.slice(0, 0 + i == 1 ? 10 : i == 2 ? 15 : 50);
  // let blocks = Array.from(parentElement.children);
  //create boxs
  const randomlyMappedArray = shuffleArray([
    ...arrBox,
    ...arrBox.map((i) => ({
      ...i,
      id: i.id * 10,
    })),
  ]);

  const dataHtml = randomlyMappedArray.map(
    (i, index) =>
      `<div class="Box" data-brands=${i.idBrands} onclick="handleClick(${index})" style=${i.id} key=${index} id=${index} data-animal="cat"><div class="face frontBox">  <i class="fa-solid fa-question"></i></div><div class="face BackBox">${i.icon} </div></div>`
  );

  var arr = "";
  for (let x = 0; x < dataHtml.length; x++) {
    arr = arr + dataHtml[x];
  }
  MemoryGameBoxs.innerHTML = arr;

  //Take a look at the pictures
  var parentElement = document.getElementById("containerMemoryGameBoxs");
  var childrenToRemoveClass = parentElement.querySelectorAll(".Box");
  let blocks = Array.from(parentElement.children);

  if (blocks.length > 0) {
    setTimeout(() => {
      childrenToRemoveClass.forEach(function (child) {
        child.classList.add("isFlipped");
      });
    }, 500);
    setTimeout(() => {
      childrenToRemoveClass.forEach(function (child) {
        child.classList.remove("isFlipped");
      });
    }, 4500);
  }
};

const Duration = 1000;
const MemoryGameBoxs = document.querySelector(".MemoryGameBoxs");

function shuffleArray(originalArray) {
  const array = [...originalArray]; // Create a shallow copy to avoid modifying the original array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const handleClick = (i) => {
  let blocks = Array.from(MemoryGameBoxs.children);

  const Box = document.getElementById(i);
  Box.classList.add("isFlipped");

  //mack arr from html code
  //filter arr if there is more 2 has isFlipped  class
  let allFlippedBlocks = blocks.filter((x) =>
    x.classList.contains("isFlipped")
  );

  if (allFlippedBlocks.length == 2) {
    // Stop Clicking Function
    stopClickingFunction();

    // Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
};
const stopClickingFunction = () => {
  //add class no clicking in box

  MemoryGameBoxs.classList.add("noClicking");
  //remove class no clicking in box
  setTimeout(() => {
    MemoryGameBoxs.classList.remove("noClicking");
  }, Duration);
};
const checkMatchedBlocks = (box1, box2) => {
  let triesElement = document.querySelector(".infoGamerTries span");

  if (box1.dataset.brands === box2.dataset.brands) {
    box1.classList.remove("isFlipped");
    box2.classList.remove("isFlipped");

    box1.classList.add("Matched");
    box2.classList.add("Matched");
    // const MemoryGameBoxs = document.querySelector(".MemoryGameBoxs");

    let blocks = Array.from(MemoryGameBoxs.children);
    let allFlippedBlocks = blocks.filter((x) =>
      x.classList.contains("Matched")
    );

    // Reload the current page
    if (allFlippedBlocks.length == Array.from(MemoryGameBoxs.children).length) {
      const Winner = document.querySelector(".Winner");
      setTimeout(() => {
        Winner.innerHTML = `<div class="win">
  <span class="ButtonWin">Winner
  </span>
  </div>`;
      }, 1000);
      setTimeout(() => {
        location.reload();
      }, 4000);
    }
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      box1.classList.remove("isFlipped");
      box2.classList.remove("isFlipped");
    }, Duration);
  }
};
