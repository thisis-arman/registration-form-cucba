$(document).ready(function () {
  // Function to fetch district data

  function fetchDistricts() {
    $.get("./districts.json", {}, function (data, status) {
      // console.log({ data });
      populateDistricts(data);
      // console.log(status);
    }).fail(function (error) {
      // console.error("Error:", error);
    }),
      JSON;
  }

  // Function to populate districts
  function populateDistricts({ data }) {
    // console.log("Populating", data);
    let districtDropdown = $(".district-field");
    districtDropdown.empty();
    districtDropdown.append('<option value="">Select District</option>');
    data.forEach((district) => {
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
    // console.log({ selectedDistrict });

    $.get("./postOffice.json", function ({ data }, status) {
      const singlePostOffice = data.map(
        (postOffice) => postOffice?.district === selectedDistrict && postOffice
      );
      if (singlePostOffice != false) {
        // console.log({ singlePostOffice });
        populatePostOffices(singlePostOffice);
      }
    }).fail(function (error) {
      // console.error("Error:", error);
    });
  }

  // Function to populate post offices based on selected district

  function populatePostOffices(postOffices) {
    let postOfficeDropdown = $(".post-office-field");
    postOfficeDropdown.empty();
    postOfficeDropdown.append('<option value="">select post office </option>');

    const filteredPostOffices = $.grep(postOffices, function (postOffice) {
      return postOffice && postOffice;
    });

    $.each(filteredPostOffices, function (i, postOffice) {
      // console.log({ postOffice });
      let option = $("<option></option>")
        .attr("value", postOffice?.postcode)
        .text(
          postOffice &&
            `${postOffice?.postcode} -
        ${postOffice?.suboffice}, ${postOffice?.thana}, ${postOffice?.district}`
        );
      postOfficeDropdown.append(option);
    });
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

  // For international Contacts
  const phoneInputField = document.querySelector("#mobileNo");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  // Handling Profile Image

  /*  $("#image").on("change", function () {

    const image = $(this).val();
    console.log({image})

  }) */
  

   var previewDummy = document.getElementById('previewDummy');
        var imageInput = document.getElementById('imageInput');
        var cropImage = document.getElementById('cropImage');
        var cropButton = document.getElementById('cropButton');
        var cropper;

        // Click event on the preview dummy image
        $(previewDummy).click(function () {
            // Clear input file
            imageInput.value = '';

            // Show the Bootstrap modal
            $('#cropModal').modal('show');
        });

        // Change event on the input file
        $(imageInput).change(function (event) {
            var file = event.target.files[0];

            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    // Display selected image in modal for cropping
                    $('#cropImage').attr('src', e.target.result);

                    // Initialize Cropper.js after image loaded
                    cropper = new Cropper(cropImage, {
                        aspectRatio: 1, // Set 1:1 aspect ratio for square cropping
                        viewMode: 1, // Set to restrict the crop box to the container
                        autoCropArea: 1 // Automatically set crop box to cover the whole image
                    });
                };

                reader.readAsDataURL(file);
            }
        });

        // Click event on the crop button
        $(cropButton).click(function () {
            // Get the cropped data (base64 encoded)
            var croppedDataUrl = cropper.getCroppedCanvas().toDataURL();

            // Now you can use 'croppedDataUrl' as needed
            console.log('Cropped Image Data URL:', croppedDataUrl);

            // Reset Cropper for the next use
            cropper.destroy();
            cropper = null;

            // Close the modal
            $('#cropModal').modal('hide');

            // Display the cropped image as a preview on your page
            previewDummy.src = croppedDataUrl;
        });

        // Hide the modal event (cleanup)
        $('#cropModal').on('hidden.bs.modal', function () {
            // Reset input file value
            imageInput.value = '';

            // Reset Cropper for the next use
            if (cropper) {
                cropper.destroy();
                cropper = null;
            }
        });
  // TESTING THE POST METHOD
});
