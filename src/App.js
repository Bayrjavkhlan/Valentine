import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import cat from "./assets/CatWithRose.jpg";
var NoCounter = 1;

function btnNo() {
  console.log(NoCounter);

  let noBtn = document.querySelector(".btn-no");
  let yesBtn = document.querySelector(".btn-yes");

  if (NoCounter === 10) {
    NoCounter++;

    let computedStyle = window.getComputedStyle(yesBtn);
    let bgColor = computedStyle.getPropertyValue("background-color");
    noBtn.style.backgroundColor = bgColor;
    noBtn.style.borderColor = bgColor;

    noBtn.textContent = "Yes";
  } else if (NoCounter === 11) {
    let AfterAnswer = document.querySelector(".AfterAnswer");
    let BeforeAnswer = document.querySelector(".BeforeAnswer");

    BeforeAnswer.style.display = "none";
    AfterAnswer.style.display = "flex";
  } else {
    NoCounter++;
    let currentWidth = parseFloat(window.getComputedStyle(yesBtn).width);
    let currentHeight = parseFloat(window.getComputedStyle(yesBtn).height);
    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    let currentTop = parseFloat(window.getComputedStyle(yesBtn).top);
    let currentLeft = parseFloat(window.getComputedStyle(yesBtn).left);

    let newWidth = currentWidth + 10;
    let newHeight = currentHeight + 5;
    let newFontSize = currentFontSize + 1;
    let newTop = currentTop - 2.5;
    let newLeft = currentLeft - 5;

    yesBtn.style.width = `${newWidth}px`;
    yesBtn.style.height = `${newHeight}px`;
    yesBtn.style.fontSize = `${newFontSize}px`;
    yesBtn.style.top = `${newTop}px`;
    yesBtn.style.left = `${newLeft}px`;

    let newNoTop = Math.floor(Math.random() * (window.innerHeight - newHeight));
    let newNoLeft = Math.floor(Math.random() * (window.innerWidth - newWidth));
    noBtn.style.top = `${newNoTop}px`;
    noBtn.style.left = `${newNoLeft}px`;
  }
}
function btnYes() {
  let AfterAnswer = document.querySelector(".AfterAnswer");
  let BeforeAnswer = document.querySelector(".BeforeAnswer");

  BeforeAnswer.style.display = "none";
  AfterAnswer.style.display = "flex";
}

function App() {
  return (
    <div className="App">
      <div className="BeforeAnswer">
        <h1>Dear Masha will you be my Valentine?</h1>
        <br />
        <img src={cat} alt="CatWithRose" className="Cat" />
        <button className="btn-yes btn btn-success btn-lg" onClick={btnYes}>
          Yes
        </button>
        <button className="btn-no btn btn-danger btn-lg" onClick={btnNo}>
          No
        </button>
      </div>
      <div className="AfterAnswer">
        <p className="h1">I have little bit of server problem</p>
        <br />
        <p className="h1">Soooo can you send me your answer?</p>
      </div>
    </div>
  );
}

export default App;
