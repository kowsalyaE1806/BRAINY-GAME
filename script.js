// =====================================================
//                  BRAINY GAME
//                     SPARKI
// =====================================================


// ================= QUESTIONS =================

const questions = [

    {
        category: "HISTORY",
        question: "Who founded the Maurya Empire?",
        options: [
            "Ashoka",
            "Chandragupta Maurya",
            "Bindusara",
            "Harsha"
        ],
        answer: "Chandragupta Maurya"
    },

    {
        category: "HISTORY",
        question: "The Battle of Plassey was fought in which year?",
        options: [
            "1757",
            "1857",
            "1764",
            "1947"
        ],
        answer: "1757"
    },

    {
        category: "HISTORY",
        question: "Who built the Taj Mahal?",
        options: [
            "Akbar",
            "Shah Jahan",
            "Jahangir",
            "Humayun"
        ],
        answer: "Shah Jahan"
    },

    {
        category: "HISTORY",
        question: "Who founded the Mughal Empire?",
        options: [
            "Akbar",
            "Babur",
            "Aurangzeb",
            "Shah Jahan"
        ],
        answer: "Babur"
    },

    {
        category: "HISTORY",
        question: "Who was the first woman ruler of the Delhi Sultanate?",
        options: [
            "Razia Sultan",
            "Nur Jahan",
            "Jahanara",
            "Rani Durgavati"
        ],
        answer: "Razia Sultan"
    },

    {
        category: "HISTORY",
        question: "Who gave the slogan 'Give me blood and I will give you freedom'?",
        options: [
            "Bhagat Singh",
            "Subhas Chandra Bose",
            "Mahatma Gandhi",
            "Bal Gangadhar Tilak"
        ],
        answer: "Subhas Chandra Bose"
    },

    {
        category: "HISTORY",
        question: "The Revolt of 1857 began at which place?",
        options: [
            "Delhi",
            "Meerut",
            "Mumbai",
            "Kolkata"
        ],
        answer: "Meerut"
    },


    // ================= POLITICS =================

    {
        category: "POLITICS",
        question: "Who is known as the chief architect of the Indian Constitution?",
        options: [
            "Jawaharlal Nehru",
            "Dr. B. R. Ambedkar",
            "Sardar Patel",
            "Rajendra Prasad"
        ],
        answer: "Dr. B. R. Ambedkar"
    },

    {
        category: "POLITICS",
        question: "How many houses does the Parliament of India have?",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        answer: "Two"
    },

    {
        category: "POLITICS",
        question: "What is the lower house of Parliament called?",
        options: [
            "Rajya Sabha",
            "Lok Sabha",
            "Vidhan Sabha",
            "Gram Sabha"
        ],
        answer: "Lok Sabha"
    },

    {
        category: "POLITICS",
        question: "What is the upper house of Parliament called?",
        options: [
            "Lok Sabha",
            "Rajya Sabha",
            "Vidhan Sabha",
            "Gram Sabha"
        ],
        answer: "Rajya Sabha"
    },

    {
        category: "POLITICS",
        question: "What is the minimum voting age in India?",
        options: [
            "16",
            "18",
            "21",
            "25"
        ],
        answer: "18"
    },

    {
        category: "POLITICS",
        question: "Which body conducts elections in India?",
        options: [
            "Supreme Court",
            "Election Commission of India",
            "Parliament",
            "UPSC"
        ],
        answer: "Election Commission of India"
    },

    {
        category: "POLITICS",
        question: "Who is the constitutional head of India?",
        options: [
            "Prime Minister",
            "President",
            "Chief Justice",
            "Home Minister"
        ],
        answer: "President"
    },


    // ================= GENERAL GK =================

    {
        category: "GENERAL GK",
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],
        answer: "Mars"
    },

    {
        category: "GENERAL GK",
        question: "Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean"
    },

    {
        category: "GENERAL GK",
        question: "How many continents are there?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7"
    },

    {
        category: "GENERAL GK",
        question: "Which is the largest planet in our Solar System?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        answer: "Jupiter"
    },

    {
        category: "GENERAL GK",
        question: "What is the national animal of India?",
        options: [
            "Lion",
            "Elephant",
            "Tiger",
            "Peacock"
        ],
        answer: "Tiger"
    },

    {
        category: "GENERAL GK",
        question: "What is the currency of Japan?",
        options: [
            "Won",
            "Yuan",
            "Yen",
            "Dollar"
        ],
        answer: "Yen"
    },

    {
        category: "GENERAL GK",
        question: "Which gas do plants absorb?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ],
        answer: "Carbon dioxide"
    },

    {
        category: "GENERAL GK",
        question: "What is the capital of Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Perth"
        ],
        answer: "Canberra"
    }

];


// =====================================================
//                    GAME SETTINGS
// =====================================================

const TOTAL_QUESTIONS = 10;
const QUESTION_TIME = 15;

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let streak = 0;

let bestStreak =
    Number(localStorage.getItem("brainyBest")) || 0;

let coins =
    Number(localStorage.getItem("brainyCoins")) || 0;

let roundCoins = 0;
let lives = 3;
let fiftyUsed = false;
let locked = false;


// TIMER + LEVEL

let timeLeft = QUESTION_TIME;
let timerInterval = null;
let currentLevel = 1;


// =====================================================
//                    ELEMENTS
// =====================================================

const homeScreen =
    document.getElementById("homeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const resultScreen =
    document.getElementById("resultScreen");


const startBtn =
    document.getElementById("startBtn");

const againBtn =
    document.getElementById("againBtn");

const homeBtn =
    document.getElementById("homeBtn");

const fiftyBtn =
    document.getElementById("fiftyBtn");


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const categoryElement =
    document.getElementById("category");


const scoreElement =
    document.getElementById("score");

const streakElement =
    document.getElementById("streak");

const coinsElement =
    document.getElementById("coins");

const questionNumber =
    document.getElementById("questionNumber");

const progressFill =
    document.getElementById("progressFill");

const livesElement =
    document.getElementById("lives");


// TIMER + LEVEL ELEMENTS

const timerElement =
    document.getElementById("timer");

const levelElement =
    document.getElementById("level");


const sparkiComment =
    document.getElementById("sparkiComment");

const gameSparki =
    document.getElementById("gameSparki");


// =====================================================
//                    HOME STATS
// =====================================================

function updateHome() {

    document.getElementById("homeBest")
        .textContent = bestStreak;

    document.getElementById("homeCoins")
        .textContent = coins;
}

updateHome();


// =====================================================
//                    START GAME
// =====================================================

startBtn.addEventListener(
    "click",
    startGame
);


function startGame() {

    clearInterval(timerInterval);

    score = 0;
    streak = 0;
    roundCoins = 0;
    lives = 3;
    currentQuestion = 0;

    currentLevel = 1;

    fiftyUsed = false;
    locked = false;


    gameQuestions =
        shuffle(questions)
            .slice(0, TOTAL_QUESTIONS);


    scoreElement.textContent = score;

    streakElement.textContent = streak;

    coinsElement.textContent = coins;

    if (levelElement) {

        levelElement.textContent =
            currentLevel;

    }


    updateLives();


    fiftyBtn.disabled = false;


    homeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    speak(
        "Alright! Sparki is ready. Let's challenge your brain!"
    );


    showQuestion();
}


// =====================================================
//                  SHOW QUESTION
// =====================================================

function showQuestion() {

    locked = false;


    const q =
        gameQuestions[currentQuestion];


    questionNumber.textContent =
        currentQuestion + 1;


    categoryElement.textContent =
        q.category;


    questionElement.textContent =
        q.question;


    progressFill.style.width =
        ((currentQuestion + 1) / TOTAL_QUESTIONS * 100) + "%";


    answersElement.innerHTML = "";


    const options =
        shuffle(q.options);


    options.forEach(
        option => {

            const button =
                document.createElement("button");


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        button,
                        option,
                        q.answer
                    );

                }
            );


            answersElement.appendChild(button);

        }
    );


    setComment(
        getRandom([
            "Think carefully... 👀",
            "You've got this! 🧠",
            "Let's see what you know!",
            "Take your best shot! 🎯",
            "Sparki is watching! 🤖"
        ])
    );


    speak(
        `Question ${currentQuestion + 1}. ${q.question}`
    );


    startTimer();
}


// =====================================================
//                    TIMER
// =====================================================

function startTimer() {

    clearInterval(timerInterval);

    timeLeft = QUESTION_TIME;


    if (timerElement) {

        timerElement.textContent =
            timeLeft;

    }


    timerInterval =
        setInterval(
            () => {

                timeLeft--;


                if (timerElement) {

                    timerElement.textContent =
                        timeLeft;

                }


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );

                    timeUp();

                }

            },
            1000
        );

}


function stopTimer() {

    clearInterval(
        timerInterval
    );

}


function timeUp() {

    if (locked) return;

    locked = true;


    const q =
        gameQuestions[currentQuestion];


    const buttons =
        answersElement.querySelectorAll(
            "button"
        );


    buttons.forEach(
        button => {

            button.disabled = true;


            if (
                button.textContent ===
                q.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    streak = 0;

    lives--;


    streakElement.textContent =
        streak;


    updateLives();


    // WRONG EXPRESSION ONLY

    gameSparki.classList.remove(
        "sparki-correct"
    );

    gameSparki.classList.add(
        "sparki-wrong"
    );


    setComment(
        "⏰ Time's up! Don't worry, try the next one!"
    );


    speak(
        "Time's up! Let's try the next question."
    );


    if (lives <= 0) {

        setTimeout(
            finishGame,
            1200
        );

        return;

    }


    setTimeout(
        nextQuestion,
        1400
    );

}


// =====================================================
//                  CHECK ANSWER
// =====================================================

function checkAnswer(
    selectedButton,
    selectedAnswer,
    correctAnswer
) {

    if (locked) return;

    locked = true;


    stopTimer();


    const buttons =
        answersElement.querySelectorAll("button");


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    if (
        selectedAnswer === correctAnswer
    ) {

        correctAnswerReaction(
            selectedButton
        );

    } else {

        wrongAnswerReaction(
            selectedButton,
            correctAnswer
        );

    }

}


// =====================================================
//                CORRECT ANSWER
// =====================================================

function correctAnswerReaction(
    selectedButton
) {

    selectedButton.classList.add(
        "correct"
    );


    score++;

    streak++;


    // LEVEL UPDATE
    // Every 3 correct answers = next level

    currentLevel =
        Math.floor(score / 3) + 1;


    if (currentLevel > 4) {

        currentLevel = 4;

    }


    if (levelElement) {

        levelElement.textContent =
            currentLevel;

    }


    let earnedCoins = 10;


    // STREAK BONUS

    if (streak >= 3) {

        earnedCoins += 5;

    }

    if (streak >= 5) {

        earnedCoins += 10;

    }


    roundCoins += earnedCoins;

    coins += earnedCoins;


    scoreElement.textContent =
        score;

    streakElement.textContent =
        streak;

    coinsElement.textContent =
        coins;


    if (streak > bestStreak) {

        bestStreak =
            streak;

        localStorage.setItem(
            "brainyBest",
            bestStreak
        );

    }


    localStorage.setItem(
        "brainyCoins",
        coins
    );


    // CORRECT EXPRESSION

    gameSparki.classList.remove(
        "sparki-wrong"
    );

    gameSparki.classList.add(
        "sparki-correct"
    );


    if (streak >= 5) {

        setComment(
            `🔥 ${streak} STREAK! SPARKI OVERDRIVE!`
        );

        speak(
            `${streak} in a row! You are absolutely on fire!`
        );

    } else {

        setComment(
            getRandom([
                "YES! Brilliant answer! 🔥",
                "Correct! You're getting stronger! ⚡",
                "Amazing! Sparki approves! 🤖",
                "Nailed it! Keep going! 🎯"
            ])
        );


        speak(
            getRandom([
                "Yes! Brilliant answer!",
                "Correct! You're getting stronger!",
                "Amazing! Sparki approves!",
                "Nailed it! Keep going!"
            ])
        );

    }


    createParticles();


    setTimeout(
        nextQuestion,
        1400
    );
}


// =====================================================
//                  WRONG ANSWER
// =====================================================

function wrongAnswerReaction(
    selectedButton,
    correctAnswer
) {

    selectedButton.classList.add(
        "wrong"
    );


    const buttons =
        answersElement.querySelectorAll("button");


    buttons.forEach(
        button => {

            if (
                button.textContent ===
                correctAnswer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    streak = 0;

    lives--;


    streakElement.textContent =
        streak;


    updateLives();


    // IMPORTANT:
    // REMOVE HAPPY FACE BEFORE ADDING WRONG FACE

    gameSparki.classList.remove(
        "sparki-correct"
    );

    gameSparki.classList.add(
        "sparki-wrong"
    );


    setComment(
        getRandom([
            "Oops! Don't give up! 💪",
            "Close! Next one is yours!",
            "Not quite! Keep fighting! 🔥",
            "Even Sparki gets things wrong sometimes! 😅"
        ])
    );


    speak(
        getRandom([
            "Oops! Don't give up!",
            "Close! Next one is yours!",
            "Not quite! Keep fighting!"
        ])
    );


    if (lives <= 0) {

        setTimeout(
            finishGame,
            1200
        );

        return;
    }


    setTimeout(
        nextQuestion,
        1400
    );
}


// =====================================================
//                    NEXT QUESTION
// =====================================================

function nextQuestion() {

    stopTimer();


    gameSparki.classList.remove(
        "sparki-correct",
        "sparki-wrong"
    );


    currentQuestion++;


    if (
        currentQuestion >= TOTAL_QUESTIONS
    ) {

        finishGame();

        return;

    }


    showQuestion();
}


// =====================================================
//                    50 / 50
// =====================================================

fiftyBtn.addEventListener(
    "click",
    useFifty
);


function useFifty() {

    if (
        fiftyUsed ||
        locked
    ) {
        return;
    }


    fiftyUsed = true;

    fiftyBtn.disabled = true;


    const q =
        gameQuestions[currentQuestion];


    const buttons =
        Array.from(
            answersElement.querySelectorAll("button")
        );


    const wrongButtons =
        buttons.filter(
            button =>
                button.textContent !== q.answer
        );


    shuffle(wrongButtons)
        .slice(0, 2)
        .forEach(
            button => {

                button.style.visibility =
                    "hidden";

                button.disabled =
                    true;

            }
        );


    setComment(
        "⚡ Power-up activated! Easy mode!"
    );


    speak(
        "Power-up activated! I've removed two wrong answers."
    );

}


// =====================================================
//                    LIVES
// =====================================================

function updateLives() {

    let result = "";


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        if (i < lives) {

            result += "❤️ ";

        } else {

            result += "🖤 ";

        }

    }


    livesElement.textContent =
        result;
}


// =====================================================
//                    FINISH
// =====================================================

function finishGame() {

    stopTimer();


    gameScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const percentage =
        Math.round(
            score /
            TOTAL_QUESTIONS *
            100
        );


    document.getElementById(
        "finalScore"
    ).textContent =
        `${score} / ${TOTAL_QUESTIONS}`;


    document.getElementById(
        "finalProgress"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "finalStreak"
    ).textContent =
        streak;


    document.getElementById(
        "finalCoins"
    ).textContent =
        roundCoins;


    let level;

    let title;

    let message;


    if (score === 10) {

        level = "GENIUS";

        title =
            "PERFECT SCORE! 🧠🔥";

        message =
            "You absolutely destroyed that challenge! Sparki is impressed!";

    }

    else if (score >= 8) {

        level =
            "BRAIN MASTER";

        title =
            "INCREDIBLE! 🏆";

        message =
            "Your knowledge is seriously impressive!";

    }

    else if (score >= 6) {

        level =
            "QUICK THINKER";

        title =
            "GREAT JOB! ⚡";

        message =
            "You've got some serious brain power. Keep the streak alive!";

    }

    else if (score >= 4) {

        level =
            "RISING BRAIN";

        title =
            "NICE WORK! 💪";

        message =
            "You're getting stronger. One more round and you'll go even higher!";

    }

    else {

        level =
            "EXPLORER";

        title =
            "KEEP LEARNING! 🌱";

        message =
            "Every wrong answer is another thing you've learned.";

    }


    document.getElementById(
        "finalLevel"
    ).textContent =
        level;


    document.getElementById(
        "resultTitle"
    ).textContent =
        title;


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    document.getElementById(
        "resultDescription"
    ).textContent =
        `You answered ${score} questions correctly and earned ${roundCoins} coins.`;


    speak(
        `Challenge complete! You scored ${score} out of ${TOTAL_QUESTIONS}. ${message}`
    );


    if (score >= 7) {

        createParticles();

        setTimeout(
            createParticles,
            400
        );

    }


    updateHome();
}


// =====================================================
//                    PLAY AGAIN
// =====================================================

againBtn.addEventListener(
    "click",
    startGame
);


// =====================================================
//                    HOME
// =====================================================

homeBtn.addEventListener(
    "click",
    () => {

        stopTimer();


        resultScreen.classList.add(
            "hidden"
        );

        gameScreen.classList.add(
            "hidden"
        );

        homeScreen.classList.remove(
            "hidden"
        );

        updateHome();

    }
);


// =====================================================
//                    SPARKI COMMENT
// =====================================================

function setComment(text) {

    sparkiComment.textContent =
        text;


    const bubble =
        document.getElementById(
            "speechBubble"
        );


    bubble.style.animation =
        "none";


    void bubble.offsetWidth;


    bubble.style.animation =
        "bubbleIn .4s ease";
}


// =====================================================
//                    VOICE
// =====================================================

function speak(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        return;

    }


    window.speechSynthesis.cancel();


    const voice =
        new SpeechSynthesisUtterance(
            text
        );


    voice.rate =
        1.08;


    voice.pitch =
        1.2;


    voice.volume =
        1;


    window.speechSynthesis.speak(
        voice
    );
}


// =====================================================
//                    SHUFFLE
// =====================================================

function shuffle(array) {

    return [...array].sort(
        () =>
            Math.random() - 0.5
    );

}


// =====================================================
//                    RANDOM
// =====================================================

function getRandom(array) {

    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


// =====================================================
//                    PARTICLES
// =====================================================

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.background =
            getRandom([
                "#60a5fa",
                "#a78bfa",
                "#22d3ee",
                "#fbbf24",
                "#34d399",
                "#fb7185"
            ]);


        particle.style.animationDelay =
            Math.random() * .5 + "s";


        container.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            3000
        );

    }

}


// =====================================================
//                 INITIAL HOME UPDATE
// =====================================================

updateHome();