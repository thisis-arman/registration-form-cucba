// alert("Owah");

// $("#test").text("Hello world from jquery");

$(document).ready(function () {
  $.ajax({
    url: "./districts.json",
    type: "GET",
    success: function ({ data }) {
      $(".district-field").focus(function () {
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

$("#registrationForm").validate({
  rules: {
    mobile: {
      required: true,
      phoneInput: true,
    },
    name: { required: true },
    email: {
      required: true,
      email: true,
    },
  },

  messages: {
    name: "Please enter your name",
  },
  mobile: {
    required: "Please enter your phone number",
    phoneInput: "Please enter valid phone number",
  },
  email: {
    required: "Please enter your email",
    email: "Please enter valid email",
  },
  bloodGroup: "Please select your blood group",
  academicDept: "Please select your department",
  batch: {
    required: "Please Enter your Batch",
    max: "must be in between 60 ",
  },
  submitHandler: function (form) {
    form.submit();
  },
});



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
    $("#showStudentIdError").text("student id must be eight number");
  }
  let passingYear = $("#passingYear").val();
  let homeAddress = $("#homeAddress").val();
  let presentDistrict = $("#presentDistrict").val();
  let presentPostOffice = $("#presentPostOffice").val();
  let permanentHouseAddress = $("#permanentHouseAddress").val();
  let permanentDistrict = $("#permanentDistrict").val();
  let permanentPostOffice = $("#permanentPostOffice").val();
  let profession = $("#profession").val();
  let designation = $("#designation").val();
  let organization = $("#organization").val();
  let professionalAddress = $("#professionalAddress").val();
  let telephoneNo = $("#telephoneNo").val();
  let professionalEmail = $("#professionalEmail").val();
  let registrationFee = $("#registrationFee").text();

  console.log({
    registrationFee: parseInt(registrationFee),
    personalInfo: {
      mobile,
      name,
      fatherName,
      motherName,
      dateOfBirth,
      bloodGroup,
      email,
      facebookId,
    },
    educationalInfo: [
      {
        studentId,
        academicDept,
        certificateFile,
        session,
        batch,
        passingYear,
      },
    ],

    presentAddress: {
      homeAddress,
      presentDistrict,
      presentPostOffice,
    },
    permanentAddress: {
      permanentHouseAddress,
      permanentDistrict,
      permanentPostOffice,
    },
    professionalInfo: {
      profession,
      designation,
      organization,
      telephoneNo,
      professionalAddress,
      professionalEmail,
    },
  });
});

const phoneInputField = document.querySelector("#mobileNo");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
