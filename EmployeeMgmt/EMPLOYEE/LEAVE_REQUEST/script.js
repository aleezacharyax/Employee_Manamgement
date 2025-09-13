document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const itemList = document.getElementById("itemTable");

  addButton.addEventListener("click", function () {
    window.open("form.html", "_blank");
  });

  function addRowToTable(leaveID, userID, description, from_date, to_date) {
    const newRow = itemList.insertRow();

    newRow.innerHTML = `
        <td>${leaveID}</td>
        <td>${userID}</td>
        <td>${description}</td>
        <td>${from_date}</td>
        <td>${to_date}</td>
        <td><button class="pending-btn">Pending</button></td>
        <td><button class="delete-btn">Delete</button></td>
        `;

    newRow.querySelector(".delete-btn").addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this request?")) {
        newRow.remove();
      }
    });
  }

  window.addEventListener("message", function (event) {
    const formData = event.data;
    addRowToTable(
      formData.leaveID,
      formData.userID,
      formData.description,
      formData.from_date,
      formData.to_date
    );
  });
});
