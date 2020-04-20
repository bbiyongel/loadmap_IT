const cardTitles = document.getElementsByClassName("cardTitle"),
  linkBtns = document.getElementsByClassName("linkBtn");

function showBoxes(event) {
  const cardView = event.target.parentNode.parentNode,
    commentsBox = cardView.childNodes[3];

  commentsBox.classList.toggle("deactivation");
}

function moveSite(event) {
  const cardView = event.target.parentNode.parentNode,
    commentsBox = cardView.childNodes[3],
    link = commentsBox.childNodes[1];
  location.href = link.href;
}

function init() {
  Array.from(cardTitles).forEach((cardTitle) => {
    cardTitle.addEventListener("click", showBoxes);
  });

  Array.from(linkBtns).forEach((linkBtn) => {
    linkBtn.addEventListener("click", moveSite);
  });
}

init();