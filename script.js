// alert("Owah");

// $("#test").text("Hello world from jquery");

$(document).ready(function () {
  $.ajax({
    url: "./districts.json",
    type: "GET",
    success: function ({ data }) {
      $("#inputState").focus(function () {
        let dropdown = $(".district-field");
        dropdown.empty();
        dropdown.append('<option value="">Select District</option>');
        data.forEach((district) => {
          let option = $("<option></option>")
            .attr("value", district.name)
            .text(district.name);
          dropdown.append(option);
        });
      });
    },
  });
});

function getDateOfSubmission() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate);
  let dateOfSubmission = $("#inputDateOfSubmission").text(`${currentDate}`);
}
getDateOfSubmission();

$("#formSubmit").click(function (e) {
  e.preventDefault();

  let mobile = $("#mobileNo").val();
  let name = $("#name").val();
  let fatherName = $("#fatherName").val();
  let motherName = $("#motherName").val();
  let dateOfBirth = $("#dateOfBirth").val();
  let bloodGroup = $("#bloodGroup").val();
  let email = $("#email").val();
  let facebookId = $("#facebookID").val();
  let academicDept = $("#academicDept").val();
  let certificateFile = $("#certificateFile").val();
  let session = $("#session").val();
  let batch = $("#batch").val();

  // student id validation
  let studentId = $("#studentId").val();
  const arrOfStudentId = studentId.split("");
  if (arrOfStudentId.length != 8) {
    console.log("student id must be eight number");
  }

  let passingYear = $("#passingYear").val();
  let homeAddress = $("#homeAddress").val();
  let presentDistrict = $("#presentDistrict").val();
  let presentPostOffice = $("#presentPostOffice").val();

  console.log({
    mobile,
    name,
    fatherName,
    motherName,
    dateOfBirth,
    bloodGroup,
    email,
    facebookId,
    academicDept,
    certificateFile,
    session,
    batch,
    studentId,
    passingYear,
    homeAddress,
    presentDistrict,
    presentPostOffice,
  });
});


 const phoneInputField = document.querySelector("#mobileNo");
 const phoneInput = window.intlTelInput(phoneInputField, {
   utilsScript:
     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
 });

/* 
$(document).ready(function () {
  $.ajax({
    url: "./districts.json",
    type: "GET",
    success: function ({ data }) {
      $("#inputState").focus(function () {
        let districts = data.map((district) => {
         let options =  $("<option></option>").append(`${district.name}`)
         console.log(options)
         
         
        });
        // console.log(districts);
      });
    },
  });
});
 */
/* 


getDistricts();

function getDistricts() {
  $.post(
    "./districts.json",
    {},
    (response) => {
      if (response.error) {
        toastr.error(response.message);
      } else {
        showDistricts(response.data);
      }
    },
    "json"
  );
}

function showDistricts(data) {
  console.log(data);
}
 */
