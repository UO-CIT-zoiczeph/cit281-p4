/*
    CIT 281 Project 4
    Name: Zoe Turnbull
*/

/* VARIABLES & IMPORTS */

const projData = require("./p4-data"); 

/* FUNCTIONS */

function getQuestions() {
    // Returns an array of strings where each array element is a question.
    return [ 'Q1', 'Q2', 'Q3' ];
};

function getAnswers() {
    // Returns an array of strings where each array element is an answer.
    return [ 'A1', 'A2', 'A3' ];
};

function getQuestionAnswers() {
    // Returns a copy of the original data array of objects.
};

function getQuestion(number = '') {
    // Returns an object with question, number, error.
};

function getAnswer(number = '') {
    // Returns an object with answer, number, error.
};

function getQuestionAnswer(number = '') {
    // Returns an object with question, answer, number, error.
};


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit