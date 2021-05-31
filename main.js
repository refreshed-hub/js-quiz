// First, let's store the HTML elements in variables.

const quizStorer = document.getElementById("quiz");
const answersStorer = document.getElementById("answers");
const submitButton = document.getElementById("submit");

//Now let's make functions for bulding the quizing and displaying the results.

function quizBuilder() {
  // This variable will store the HTML output.
  const output = [];
}

function displayAnswers() {}

quizBuilder();

submitButton.addEventListener("click", displayAnswers);

const theQuestions = [
  {
    question: "Who was the second actor that played the role of James Bond?",
    choices: {
      A: "Sean Connery",
      B: "Roger Moore",
      C: "Mike Myers",
      D: "George Lazenby",
    },
    rightChoice: "D",
  },
  {
    question: "Which album of Lou Reed contains the song Perfect Day?",
    choices: {
      A: "Transformer",
      B: "Berlin",
      C: "Coney Island Baby",
      D: "New York",
    },
    rightChoice: "A",
  },
  {
    question: "Which of these anime is about Sensha-dō, a sport with tanks?",
    choices: {
      A: "Girls und Panzer",
      B: "K-On!",
      C: "Upotte!!",
      D: "Neon Genesis Evangelion",
    },
    rightChoice: "A",
  },
  {
    question:
      "What is the name of the antagonist of the cartoon series Gravity Falls?",
    choices: {
      A: "Sean Cipher",
      B: "Dean Cypher",
      C: "James Cypher",
      D: "Bill Cipher",
    },
    rightChoice: "C",
  },
  {
    question:
      "What is the name of the Doctor's time machine in the British TV series Doctor Who?",
    choices: {
      A: "LORDIS",
      B: "MADRIS",
      C: "HADRIS",
      D: "TARDIS",
    },
    rightChoice: "D",
  },
  {
    question: "Who wrote the book titled 1984?",
    choices: {
      A: "Isaac Asimov",
      B: "George Orwell",
      C: "J.R.R. Tolkien",
      D: "G.R.R. Martin",
    },
    rightChoice: "B",
  },
];
