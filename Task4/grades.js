// Calculate Average
export function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Get Grade
export function getGrade(average) {
  if (average >= 80) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  return "F";
}

// Simulate API Call
export async function fetchStudentScores(studentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([70, 75, 80, 73]);
    }, 1000);
  });
}