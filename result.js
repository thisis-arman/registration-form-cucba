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



// --------------------------------


const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};



const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};


const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }


  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }


  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }


  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};



// GARBAGE



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

$("#formSubmit").on("change", function (e) {
  e.preventDefault();
});

const validateInputs = () => {
  let mobile = $("#mobileNo").val();
  let name = $("#name").val();
  let fatherName = $("#fatherName").val();
  let motherName = $("#motherName").val();
  let dateOfBirth = $("#dateOfBirth").val();
  let bloodGroup = $("#bloodGroup").val();
  let email = $("#email").val();
  let facebookId = $("#facebookID").val();

  const arrOfMobileNo = mobile.split("");
  if (arrOfMobileNo.length >= 11) {
    if (arrOfMobileNo[0] == 0 && arrOfMobileNo[1] == 1) {
      setSuccess(mobile);
    } else {
      setError(mobile, "Invalid Mobile Number");
    }
  }
};