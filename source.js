

function submitAnswers() {
    var totalQuestions = 5;
    var score = 0;


    var quizForm = document.forms["quizForm"];

    // Getting user's input
    var q1Answer = quizForm["q1"].value;
    var q2Answer = quizForm["q2"].value;
    var q3Answer = quizForm["q3"].value;
    var q4Answer = quizForm["q4"].value;
    var q5Answer = quizForm["q5"].value;

    // Validating that user selected answers
    for (var i = 1; i <= totalQuestions; i++) {
        if (!eval("q" + i + "Answer")) { // -- NEVER USER eval() --
            alert("Missed question " + i);
            return false;
        }
    }


    // Correct answers
    var answers = ["b", "a", "d", "b", "d"];

    // Check the answers
    for (var i = 1; i <= totalQuestions; i++) {
        if (eval("q" + i + "Answer") === answers[i])
            score++;
    }


    var result = document.getElementById("result");
    result.innerHTML = "<p>You scored <span> " + score +
        "</span> out of <span >" + totalQuestions + "</span>.</p>";

    return false;


}