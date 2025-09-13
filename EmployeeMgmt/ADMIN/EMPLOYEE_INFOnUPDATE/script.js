document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const itemList = document.getElementById("itemTable");

  addButton.addEventListener("click", function () {
    window.open("form.html", "_blank");
  });

  function addRowToTable(
    name,
    userID,
    email,
    phoneNo,
    dob,
    department,
    position,
    address
  ) {
    const newRow = itemList.insertRow();

    newRow.innerHTML = `
          <td>${name}</td>
          <td>${userID}</td>
          <td>${email}</td>
          <td>${phoneNo}</td>
          <td>${dob}</td>
          <td>${department}</td>
          <td>${position}</td> <!-- Display Position -->
          <td>${address}</td>
          <td><button class="delete-btn">Delete</button></td>
          <td><button class="update-btn">Update</button></td>
      `;

    newRow.querySelector(".delete-btn").addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this employee?")) {
        newRow.remove();
      }
    });

    newRow.querySelector(".update-btn").addEventListener("click", function () {
      const updateFormURL = `form.html?name=${encodeURIComponent(
        name
      )}&userID=${encodeURIComponent(userID)}&email=${encodeURIComponent(
        email
      )}&phoneNo=${encodeURIComponent(phoneNo)}&dob=${encodeURIComponent(
        dob
      )}&department=${encodeURIComponent(
        department
      )}&address=${encodeURIComponent(address)}&position=${encodeURIComponent(
        position
      )}`;
      const updateWindow = window.open(updateFormURL, "_blank");

      window.addEventListener("message", function (event) {
        const updatedData = event.data;
        newRow.cells[0].textContent = updatedData.name;
        newRow.cells[1].textContent = updatedData.userID;
        newRow.cells[2].textContent = updatedData.email;
        newRow.cells[3].textContent = updatedData.phoneNo;
        newRow.cells[4].textContent = updatedData.dob;
        newRow.cells[5].textContent = updatedData.department;
        newRow.cells[6].textContent = updatedData.position;
        newRow.cells[7].textContent = updatedData.address;

        updateWindow.close();
      });
    });
  }

  window.addEventListener("message", function (event) {
    const formData = event.data;
    addRowToTable(
      formData.name,
      formData.userID,
      formData.email,
      formData.phoneNo,
      formData.dob,
      formData.department,
      formData.position,
      formData.address
    );
  });
});
