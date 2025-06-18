document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "What is the largest planet in our Solar System?",
            choices: ["Earth", "Jupiter", "Saturn", "Mars"],
            answer: "Jupiter",
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Osmium", "Oxygen", "Gold", "Oganesson"],
            answer: "Oxygen",
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            choices: ["William Shakespeare", "Jane Austen", "Mark Twain", "Leo Tolstoy"],
            answer: "William Shakespeare",
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            choices: ["India", "Japan", "China", "Thailand"],
            answer: "Japan",
        },
        {
            question: "What is the boiling point of water at sea level in Celsius?",
            choices: ["90°C", "100°C", "110°C", "120°C"],
            answer: "100°C",
        },
        {
            question: "Which planet is closest to the Sun?",
            choices: ["Venus", "Earth", "Mercury", "Mars"],
            answer: "Mercury",
        },
        {
            question: "What is the currency of the United Kingdom?",
            choices: ["Euro", "Dollar", "Pound Sterling", "Franc"],
            answer: "Pound Sterling",
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "How many continents are there on Earth?",
            choices: ["5", "6", "7", "8"],
            answer: "7",
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    })

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })
    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "" // clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li);
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer) {
            score++;
        }
        // Disable further clicks
        Array.from(choicesList.children).forEach(li => {
            li.style.pointerEvents = "none";
            if (li.textContent === correctAnswer) {
                li.style.backgroundColor = "lightgreen";
            } else if (li.textContent === choice) {
                li.style.backgroundColor = "salmon";
            }
        });
        nextBtn.classList.remove("hidden");
    }


    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
})