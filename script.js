const welcome = document.getElementById("welcome");
const welcomeMessage = document.getElementById("welcomeMessage");
const welcomeNext = document.getElementById("welcomeNext");
const questionOne = document.getElementById("questionOne");
const questionOneAnswer = document.getElementById("questionOneAnswer");
const questionOneReturn = document.getElementById("questionOneReturn");
const questionOneNext = document.getElementById("questionOneNext");
const questionTwo = document.getElementById("questionTwo");
const questionTwoAnswer = document.getElementById("questionTwoAnswer");
const questionTwoReturn = document.getElementById("questionTwoReturn");
const questionTwoNext = document.getElementById("questionTwoNext");
const questionTwoPluto = document.getElementById("questionTwoPluto");
const questionThree = document.getElementById("questionThree");
const questionThreeAnswer = document.getElementById("questionThreeAnswer");
const questionThreeReturn = document.getElementById("questionThreeReturn");
const questionThreeNext = document.getElementById("questionThreeNext");
const questionFour = document.getElementById("questionFour");
const questionFourInput = document.querySelectorAll('input[name="questionFourInput"]')
const questionFourInputOne = document.getElementById("questionFourInputOne");
const questionFourInputTwo = document.getElementById("questionFourInputTwo");
const questionFourButton = document.getElementById("questionFourButton");

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("questionFourInput")) {
    if (urlParams.get("questionFourInput") == "correct") {
        welcomeMessage.textContent = "Well Done!";
        welcomeNext.textContent = "Restart";

        function clearText() {
            questionOneReturn.textContent = '';
            questionTwoReturn.textContent = '';
            questionTwoPluto.classList.add('hidden');
            questionThreeAnswer.textContent = "";
        }
        
        function goToQuestionOne() {
            welcome.classList.add("hidden");
            questionOne.classList.remove("hidden");
        }
        
        welcomeNext.onclick = goToQuestionOne;
        
        
        questionOneAnswer.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                if (questionOneAnswer.value == '0' || questionOneAnswer.value.toLowerCase() == 'zero') {
                    questionOneReturn.textContent = 'Correct!';
                    questionOneReturn.classList.add('correct');
                    questionOneReturn.classList.remove('wrong');
                    questionOneNext.classList.remove('hidden');
                } else {
                    questionOneReturn.textContent = 'Wrong!';
                    questionOneReturn.classList.add('wrong');
                    questionOneReturn.classList.remove('correct');
                }
            }
        });
        
        questionOneAnswer.oninput = clearText;
        
        
        function goToQuestionTwo() {
            questionOne.classList.add('hidden');
            questionTwo.classList.remove('hidden');
        }
        
        questionOneNext.onclick = goToQuestionTwo;
        
        questionTwoAnswer.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                if (questionTwoAnswer.value == '8' || questionTwoAnswer.value.toLowerCase() == 'eight') {
                    questionTwoReturn.textContent = 'Correct!';
                    questionTwoReturn.classList.add('correct');
                    questionTwoReturn.classList.remove('wrong');
                    questionTwoNext.classList.remove('hidden');
                    questionTwoReturn.classList.remove('maybe');
                } else if (questionTwoAnswer.value == '9' || questionTwoAnswer.value.toLowerCase() == 'nine') {
                    questionTwoPluto.classList.remove('hidden');
                    questionTwoPluto.classList.remove('correct');
                    questionTwoPluto.classList.remove('wrong');
                } else {
                    questionTwoReturn.textContent = 'Wrong!';
                    questionTwoReturn.classList.add('wrong');
                    questionTwoReturn.classList.remove('correct');
                    questionTwoReturn.classList.remove('maybe');
                }
            }
        });
        
        questionTwoAnswer.oninput = clearText;
        
        function goToQuestionThree() {
            questionTwo.classList.add('hidden');
            questionThree.classList.remove('hidden');
        }
        
        questionTwoNext.onclick = goToQuestionThree;
        
        questionThreeAnswer.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                if (questionThreeAnswer.value.toLowerCase().includes('milky way')) {
                    questionThreeReturn.textContent = 'Correct!';
                    questionThreeReturn.classList.add('correct');
                    questionThreeReturn.classList.remove('wrong');
                    questionThreeNext.classList.remove('hidden');
                } else {
                    questionThreeReturn.textContent = 'Wrong!';
                    questionThreeReturn.classList.add('wrong');
                    questionThreeReturn.classList.remove('correct');
                }
            }
        });
        
        function goToQuestionFour() {
            questionThree.classList.add('hidden');
            questionFour.classList.remove('hidden');
        }
        
        questionThreeNext.onclick = goToQuestionFour;
        
        function questionFourCheck() {
            for (const radioButton of questionFourInput) {
                if (radioButton.checked) {
                    if (radioButton.value = 'correct') {
                        questionFourAnswer.textContent = "Correct!";
                        break;
                    } else {
                        questionFourAnswer.textContent = "Wrong!";
                    }
                }
            }
        }
        
        questionFourButton.onclick = questionFourCheck;
        
        } else {
            welcomeMessage.textContent = "You got it wrong!";
            welcomeNext.textContent = "Retry";

            function goToQuestionFour() {
                welcome.classList.add("hidden");
                questionFour.classList.remove("hidden");
            }

            welcomeNext.onclick = goToQuestionFour;

            function questionFourCheck() {
                for (const radioButton of questionFourInput) {
                    if (radioButton.checked) {
                        if (radioButton.value = 'correct') {
                            questionFourAnswer.textContent = "Correct!";
                            break;
                        } else {
                            questionFourAnswer.textContent = "Wrong!";
                        }
                    }
                }
            }
            
            questionFourButton.onclick = questionFourCheck;
        }
} else {



function clearText() {
    questionOneReturn.textContent = '';
    questionTwoReturn.textContent = '';
    questionTwoPluto.classList.add('hidden');
    questionThreeAnswer.textContent = "";
}

function goToQuestionOne() {
    welcome.classList.add("hidden");
    questionOne.classList.remove("hidden");
}

welcomeNext.onclick = goToQuestionOne;


questionOneAnswer.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (questionOneAnswer.value == '0' || questionOneAnswer.value.toLowerCase() == 'zero') {
            questionOneReturn.textContent = 'Correct!';
            questionOneReturn.classList.add('correct');
            questionOneReturn.classList.remove('wrong');
            questionOneNext.classList.remove('hidden');
        } else {
            questionOneReturn.textContent = 'Wrong!';
            questionOneReturn.classList.add('wrong');
            questionOneReturn.classList.remove('correct');
        }
    }
});

questionOneAnswer.oninput = clearText;


function goToQuestionTwo() {
    questionOne.classList.add('hidden');
    questionTwo.classList.remove('hidden');
}

questionOneNext.onclick = goToQuestionTwo;

questionTwoAnswer.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (questionTwoAnswer.value == '8' || questionTwoAnswer.value.toLowerCase() == 'eight') {
            questionTwoReturn.textContent = 'Correct!';
            questionTwoReturn.classList.add('correct');
            questionTwoReturn.classList.remove('wrong');
            questionTwoNext.classList.remove('hidden');
            questionTwoReturn.classList.remove('maybe');
        } else if (questionTwoAnswer.value == '9' || questionTwoAnswer.value.toLowerCase() == 'nine') {
            questionTwoPluto.classList.remove('hidden');
            questionTwoPluto.classList.remove('correct');
            questionTwoPluto.classList.remove('wrong');
        } else {
            questionTwoReturn.textContent = 'Wrong!';
            questionTwoReturn.classList.add('wrong');
            questionTwoReturn.classList.remove('correct');
            questionTwoReturn.classList.remove('maybe');
        }
    }
});

questionTwoAnswer.oninput = clearText;

function goToQuestionThree() {
    questionTwo.classList.add('hidden');
    questionThree.classList.remove('hidden');
}

questionTwoNext.onclick = goToQuestionThree;

questionThreeAnswer.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (questionThreeAnswer.value.toLowerCase().includes('milky way')) {
            questionThreeReturn.textContent = 'Correct!';
            questionThreeReturn.classList.add('correct');
            questionThreeReturn.classList.remove('wrong');
            questionThreeNext.classList.remove('hidden');
        } else {
            questionThreeReturn.textContent = 'Wrong!';
            questionThreeReturn.classList.add('wrong');
            questionThreeReturn.classList.remove('correct');
        }
    }
});

function goToQuestionFour() {
    questionThree.classList.add('hidden');
    questionFour.classList.remove('hidden');
}

questionThreeNext.onclick = goToQuestionFour;

function questionFourCheck() {
    for (const radioButton of questionFourInput) {
        if (radioButton.checked) {
            if (radioButton.value = 'correct') {
                questionFourAnswer.textContent = "Correct!";
                break;
            } else {
                questionFourAnswer.textContent = "Wrong!";
            }
        }
    }
}

questionFourButton.onclick = questionFourCheck;

}