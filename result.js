function checkMarks(examiner1Marks, examiner2Marks, fullMarks) {

  const difference = Math.abs(examiner1Marks - examiner2Marks);

  if (difference >= 4 && (examiner1Marks >= 8 || examiner2Marks >= 8)) {
    if (fullMarks === 25 && difference > 8) {
      return "Refer to the third examiner";
    } else if (fullMarks === 50 && difference >= 8) {
      return "Refer to the third examiner";
    } else if (fullMarks === 75 && difference >= 12) {
      return "Refer to the third examiner";
    } else if (fullMarks === 100 && difference >= 15) {
    } else {
      return "Marks are within acceptable range.";
    }
  } else {
    return "Marks are within acceptable range.";
  }
}


const examiner1Marks = 67;
const examiner2Marks = 64;
const fullMarks = 75;

const result = checkMarks(examiner1Marks, examiner2Marks, fullMarks);
console.log(result);
