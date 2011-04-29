/**
 * Creates a basic QuestionSet object
 * 
 * @constructor
 * @this {QuestionSet}
 * @param {questions} an array of questions (Strings)
 * @param {responses} an array of response arrays (String arrays)
 * @param {solutions} an array of indices for which response is the solution to the current question
 */
function QuestionSet(questions, responses, solutions) { 
	 
	// track # of solutions user has selected.
	// increment w/ each solution selected and render in progress bar
	this.numberCorrect = 0;
	 
	// track # questions to render in progress bar
	this.numberQuestions = questions.length();
	 
	// e.g., ["1 + 1 = ?", "2 + 5 = ?", ...]
	this.questions = questions;
	 
	// e.g., [ ["2", "5", "1", "3"], ["1", "4", "3", "7"] ...]
	this.responses = responses;
	 
	// e.g., [0, 3, ...]
	this.solutions = solutions;
	 
} // end QuestionSet()


/**
 * Checks if user's response is correct. If so, increment questions correct
 * 
 * @this {QuestionSet}
 * 
 */
QuestionSet.prototype.checkAnswer(questionIndex, responseIndex) {

	response = responses[questionIndex][responseIndex];

	if (response == solution) {
		numberCorrect++;
	}

} // end QuestionSet.prototype.checkAnswer()