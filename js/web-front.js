const cardTitles = document.getElementsByClassName("title");

function showBoxes(event) {
  const cardView = event.target.parentNode.parentNode,
    commentsBox = cardView.childNodes[3];

  commentsBox.classList.toggle("deactivation");
}



function init() {
  Array.from(cardTitles).forEach((cardTitle) => {
    cardTitle.addEventListener("click", showBoxes);
  })
}

init();