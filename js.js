var display_main = document.getElementById("main_display"),
	question_main = document.getElementById("main_question"),
	question_teacher = document.getElementById("question_save_input"),
	question_btn_teacher = document.getElementById("question_save_btn"),
	question_option_teacher = document.getElementById("optains"),
	question_teacher_inp1 = document.getElementById("optaions_inp1"),
	question_teacher_inp2 = document.getElementById("optaions_inp2"),
	question_teacher_inp3 = document.getElementById("optaions_inp3"),
	question_teacher_inp4 = document.getElementById("optaions_inp4"),
	question_teacher_btn = document.getElementById("option_btn"),
	correct_teacher = document.getElementById("correct_answer"),
	correct_teacher_answer = document.getElementById("correct_answer_inp"),
	techerSideQuestion = document.getElementById("counnt"),
	startTakingQuiz = document.getElementById("takeQuiz"),
	quizStartMain = document.getElementById("qizStartMain"),
	quizStartQuestion = document.getElementById("stdudentQuizQuestion"),
	qu = document.getElementById("stdudentQuiz"),
	qui = document.getElementById("studtndOption"),
	quizStartOptaion1 = document.getElementById("btnn1"),
	quizStartOptaion2 = document.getElementById("btnn2"),
	quizStartOptaion3 = document.getElementById("btnn3"),
	quizStartOptaion4 = document.getElementById("btnn4"),
	quizStartBtn = document.getElementById("df"),
	arr = [],
	ans = [],
	count = 1,
	index = 0,
	score = 0,
	i = 0,
	a = 1,
	z = 2,
	r = 3,
	question = [];
function display_hide_question_show() {
	display_main.style.position = "absolute";
	display_main.style.display = "none";
	question_main.style.display = "block";
}
function teacher_area() {
	question_teacher.style.display = "block";
	question_teacher.style.visibility = "visible";
	question_btn_teacher.style.display = "block";
	question_btn_teacher.style.visibility = "visible";
}
function teacher_area_op() {
	var qin = question_teacher.value;
	question.push(qin);
	question_option_teacher.style.visibility = "visible";
	question_teacher_btn.style.visibility = "visible";
}
function correctAnswer() {
	var inp1 = question_teacher_inp1.value;
	var inp2 = question_teacher_inp2.value;
	var inp3 = question_teacher_inp3.value;
	var inp4 = question_teacher_inp4.value;
	arr.push(inp1, inp2, inp3, inp4);
	console.log(arr);
	question_teacher_btn.style.visibility = "hidden";
	correct_teacher.style.visibility = "visible";
}
function teacherHideStudentStart() {
	var correct_optio = correct_teacher_answer.value;
	if (correct_optio > 0 && correct_optio < 5) {
		ans.push(eval(`question_teacher_inp${correct_optio}.value`));
		console.log(ans);
	} else {
		alert("Correct option can only be from 1 to 4");
	}
	// if (correct_optio == 2) {
	// 	ans.push(question_teacher_inp2.value);
	// 	console.log(ans);
	// }
	// if (correct_optio == 3) {
	// 	ans.push(question_teacher_inp3.value);
	// 	console.log(ans);
	// }
	// if (correct_optio == 4) {
	// 	ans.push(question_teacher_inp4.value);
	// 	console.log(ans);
	// }
	question_teacher.style.visibility = "hidden";
	question_btn_teacher.style.visibility = "hidden";
	question_option_teacher.style.visibility = "hidden";
	correct_teacher.style.visibility = "hidden";
	console.log(techerSideQuestion);
	techerSideQuestion.style.visibility = "visible";
	techerSideQuestion.innerHTML = `QUESTION:${count}`;
	startTakingQuiz.style.visibility = "visible";

	count++;
}
function quizStart() {
	question_main.style.position = "absolute";
	question_main.style.display = "none";
	startTakingQuiz.style.display = "none";
	techerSideQuestion.style.display = "none";
	quizStartMain.style.height = "100vh";
	quizStartBtn.style.visibility = "visible";
}
function str() {
	quizStartBtn.style.visibility = "hidden";
	qu.style.display = "block";
	qui.style.visibility = "visible";
	append();
}
function append() {
	stdudentQuizQuestion.innerHTML = question[`${index}`];
	quizStartOptaion1.innerHTML = arr[`${i}`];
	quizStartOptaion2.innerHTML = arr[`${a}`];
	quizStartOptaion3.innerHTML = arr[`${z}`];
	quizStartOptaion4.innerHTML = arr[`${r}`];
	index++;
	i += 4;
	a += 4;
	z += 4;
	r += 4;
}
function cli(e) {
	if (index < question.length) {
		if (ans[index - 1] === e.target.textContent) score += 1;
		append();
	} else {
		if (ans[index - 1] === e.target.textContent) score += 1;
		qu.style.display = "none";
		qui.style.visibility = "hidden";
		let examOver = document.getElementsByClassName("result")[0];
		let scoreText = document.querySelector(".result h2");
		scoreText.textContent = `Your Score Is ${score} out of ${count - 1}`;

		examOver.style.display = "flex";
	}
}
