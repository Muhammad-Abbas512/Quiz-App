const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {Text: "Shark", correct: false},
            {Text: "Blue Whale", correct: true},
            {Text: "Elephant", correct: false},
            {Text: "Girafee", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {Text: "Vatrican City", correct: true},
            {Text: "Bhutan", correct: false},
            {Text: "Nepal", correct: false},
            {Text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the Largest Desert in the world?",
        answers: [
            {Text: "Kalahari", correct: false},
            {Text: "Gobi", correct: false},
            {Text: "Sahara", correct: false},
            {Text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the Smallest Continent in the world?",
        answers: [
            {Text: "Asia", correct: false},
            {Text: "Australia", correct: true},
            {Text: "Arctic", correct: false},
            {Text: "Africa", correct: false},
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