

$(document).ready(function () {
  // Function to fetch district data
  function fetchDistricts() {
    $.ajax({
      url: "./districts.json",
      type: "GET",
      success: function ({ data }) {
        populateDistricts(data);
      },
    });
  }

  // Function to populate districts
  function populateDistricts(districts) {
    let districtDropdown = $(".district-field");
    districtDropdown.empty();
    districtDropdown.append('<option value="">Select District</option>');
    districts.forEach((district) => {
      let option = $("<option></option>")
        .attr("value", district.name)
        .text(district.name + " - " + district.bn_name);
      districtDropdown.append(option);
    });

    districtDropdown.change();
  }

  // Event handler for district change
  $(".district-field").on("change", function () {
    let selectedDistrict = $(this).val();
    // console.log({ selectedDistrict });
    fetchPostOffices(selectedDistrict);
  });

  // Function to fetch and populate post offices
  function fetchPostOffices(selectedDistrict) {
    $.ajax({
      url: "./postOffice.json",
      type: "GET",
      success: function ({ data }) {
        const singlePostOffice = data.map(
          (postOffice) =>
            postOffice.en?.district === selectedDistrict && postOffice
        );
        if (singlePostOffice.en != false) {
          // console.log({ singlePostOffice });
          populatePostOffices(singlePostOffice);
        }
      },
    });
  }

  // Function to populate post offices based on selected district
  function populatePostOffices(postOffices) {
    // console.log({ postOffices });
    let postOfficeDropdown = $(".post-office-field");
    postOfficeDropdown.empty();
    postOfficeDropdown.append('<option value="">Select Post Office</option>');

    if (postOffices) {
      postOffices.forEach((postOffice) => {
        let option = $("<option></option>")
          .attr("value", postOffice?.en?.postcode)
          .text(
            postOffice.en &&
              `${postOffice?.en?.postcode} -
            ${postOffice.en?.suboffice}, ${postOffice.en?.thana}, ${postOffice.en?.district}`
          );
        // console.log(postOffice);
        postOfficeDropdown.append(option);
      });
    }
  }

  fetchDistricts();

  function getDateOfSubmission() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate);
    $("#inputDateOfSubmission").text(`${currentDate}`);
  }
  getDateOfSubmission();

  $("#formSubmit").submit(function (e) {
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
});

/* const phoneInputField = document.querySelector("#mobileNo");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
 */