let text = document.querySelector(".multiText");

let writeText = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 500);

};

writeText();

setInterval(writeText, 12000);
