const container = document.querySelector("main");
let active = null;
container.addEventListener("click", (event) => {
  const questionDiv = event.target.closest(".question-div");
  if (questionDiv) {
    const answer = questionDiv.children[1];
    const question = questionDiv.querySelector(".question");
    const arrow = questionDiv.querySelector(".arrow");

    if (active) {
      active.children[1].style.display = "none";
      active.querySelector(".question").style.fontWeight = "normal";
      active.querySelector(".arrow").style.transform = "rotate(0deg)";
    }
    if (questionDiv === active) {
      answer.style.display = "none";
      question.style.fontWeight = "normall";
      arrow.style.transform = "rotate(0deg)";
      active = null;
    } else {
      answer.style.display = "block";
      answer.style.fontSize = "12px";
      answer.style.marginBottom = "16px";
      answer.style.lineHeight = "1.5";
      answer.style.color = "#787887";
      question.style.fontWeight = "bold";
      arrow.style.transform = "rotate(180deg)";
      active = questionDiv;
    }
  }
});
