import {
  calculateAverage,
  getGrade,
  fetchStudentScores,
} from "./grades.js";

function print(message) {
  console.log(message);
  if (typeof document !== "undefined") {
    const output = document.getElementById("output");
    if (output) {
      output.textContent += `${message}\n`;
    }
  }
}

async function showStudentGrade(studentId) {
  try {
    const scores = await fetchStudentScores(studentId);

    const average = calculateAverage(scores);

    const grade = getGrade(average);

    print(
      `Student ${studentId} — Average: ${average.toFixed(
        1
      )} — Grade: ${grade}`
    );
  } catch (error) {
    print(`Error: ${error.message}`);
  }
}

showStudentGrade(101);