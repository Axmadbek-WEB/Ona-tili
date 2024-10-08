function toggleAnswer(id) {
    var answer = document.getElementById(id);
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
}
function toggleAllAnswers() {
    var answers = document.getElementsByClassName("answer");
    var allVisible = true;

    // Check if all answers are currently visible
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].style.display === "none") {
            allVisible = false;
            break;
        }
    }

    // Toggle all answers based on current state
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = allVisible ? "none" : "block";
    }
}