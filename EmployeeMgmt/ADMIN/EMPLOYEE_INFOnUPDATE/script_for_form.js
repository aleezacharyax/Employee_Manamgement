document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addItemForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const userID = document.getElementById("userID").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNo = document.getElementById("phoneNo").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const department = document.getElementById("department").value.trim();
    const address = document.getElementById("address").value.trim();
    const position = document.getElementById("position").value.trim();

    if (
      name !== "" &&
      userID !== "" &&
      dob !== "" &&
      department !== "" &&
      position !== ""
    ) {
      window.opener.postMessage(
        {
          name: name,
          userID: userID,
          email: email,
          phoneNo: phoneNo,
          dob: dob,
          department: department,
          address: address,
          position: position,
        },
        "*"
      );

      window.close();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
