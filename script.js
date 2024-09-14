const questions = [
    {
        question: "The number that is greater than zero is always a_________.",
        answers: [
            {Text: "Positive", correct: true},
            {Text: "Negative", correct: false},
            {Text: "Both", correct: false},
            {Text: "None of these", correct: false},
        ]
    },
    {
        question: " If a negative number is multiplied by a positive number, the resultant number is______.",
        answers: [
            {Text: "Positive", correct: false},
            {Text: "Negative", correct: true},
            {Text: "Sometimes Positive Sometimes Negative ", correct: false},
            {Text: "Zero", correct: false},
        ]
    },
    {
        question: "There are___ possibilities of a number.",
        answers: [
            {Text: "1", correct: false},
            {Text: "2", correct: false},
            {Text: "3", correct: true},
            {Text: "4", correct: false},
        ]
    },
    {
        question: " Which of the following symbols can be used for the expression 2___3?       I. > II. < III. ≤ IV. ≥ ",
        answers: [
            {Text: "Only II", correct: true},
            {Text: "Only II & III", correct: false},
            {Text: "Only III", correct: false},
            {Text: "All of these", correct: false},
        ]
    },
    {
        question: " 7.99999______ 8.00000 ",
        answers: [
            {Text: " = ", correct: false},
            {Text: "≠ ", correct: false},
            {Text: "≈", correct: true},
            {Text: "≡ ", correct: false},
        ]
    },
    {
        question: "When two like signs are multiplied to each other, the resultant sign would be what? ",
        answers: [
            {Text: "Positive", correct: true},
            {Text: "Negative", correct: false},
            {Text: "Both", correct: false},
            {Text: "None of These", correct: false},
        ]
    },
    {
        question: " How many two digit numbers can be formed by 2 digits?",
        answers: [
            {Text: " 90 ", correct: true},
            {Text: "91", correct: false},
            {Text: "99", correct: false},
            {Text: "89", correct: false},
        ]
    },
    {
        question: "We represent the real numbers on___. ",
        answers: [
            {Text: "Real Number Line", correct: true},
            {Text: "Plane ", correct: false},
            {Text: "Plane ", correct: false},
            {Text: "None of these ", correct: false},
        ]
    },
    {
        question: "Which statement is correct?",
        answers: [
            {Text: "Zero can be Positive or Negative ", correct: false},
            {Text: "Zero is neither positive nor negative", correct: true},
            {Text: "Both ", correct: false},
            {Text: "None of these ", correct: false},
        ]
    },
    {
        question: "Right side of the number line contains_____. ",
        answers: [
            {Text: " Positive Numbers ", correct: true},
            {Text: " Negative Numbers", correct: false},
            {Text: "Both ", correct: false},
            {Text: "Zero", correct: false},
        ]
    },
    {
        question: "Those numbers which contain______ is called negative numbers. ",
        answers: [
            {Text: "Negative sign", correct: true},
            {Text: "Positive sign", correct: false},
            {Text: "Both ", correct: false},
            {Text: "None of these ", correct: false},
        ]
    },
    {
        question: "Zero is always greater than_______.",
        answers: [
            {Text: "Positive Numbers", correct: false},
            {Text: "Negative Numbers", correct: true},
            {Text: "Both", correct: false},
            {Text: "None of these ", correct: false},
        ]
    },
    {
        question: " 5! =___.",
        answers: [
            {Text: "50 ", correct: false},
            {Text: "120 ", correct: true},
            {Text: "720 ", correct: false},
            {Text: "5040", correct: false},
        ]
    },
    {
        question: "2 + 2 + 3 – 1 =____.",
        answers: [
            {Text: "7", correct: false},
            {Text: "6", correct: true},
            {Text: "5", correct: false},
            {Text: "4", correct: false},
        ]
    },
    {
        question: "2 × (-2 + 3) + 1 =____. ",
        answers: [
            {Text: "1", correct: false},
            {Text: "2", correct: false},
            {Text: "3", correct: true},
            {Text: "-1", correct: false},
        ]
    },
    {
        question: " -2 × (2 - 3) - 1 =____. ",
        answers: [
            {Text: "1", correct: true},
            {Text: "2", correct: false},
            {Text: "3", correct: false},
            {Text: "-1", correct: false},
        ]
    },
    {
        question: " The name of symbol (∞) is______",
        answers: [
            {Text: "Infinity", correct: true},
            {Text: "Greatest Number", correct: false},
            {Text: "It’s a number", correct: false},
            {Text: "None of these", correct: false},
        ]
    }
    
];

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-button");
    const nextButton = document.getElementById("next-btn");

    let currentQuesttionIndex = 0;
    let scrore = 0;

    function startQuiz(){
        currentQuesttionIndex = 0;
        scrore = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuesttion = questions[currentQuesttionIndex];
        let questionNo = currentQuesttionIndex + 1;
        questionElement.innerHTML = questionNo + " . " + currentQuesttion.question;

        currentQuesttion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.Text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        })

    }


    function resetState(){
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            scrore++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = "ture";
        });
        nextButton.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${scrore} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

    function handleNextButton(){
        currentQuesttionIndex++;
        if(currentQuesttionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuesttionIndex <  questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
    startQuiz();