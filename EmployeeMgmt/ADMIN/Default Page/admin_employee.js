document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const newItemText = urlParams.get("newItem");

  if (newItemText) {
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;
    const itemList = document.getElementById("itemList");
    itemList.appendChild(newItem);
  }
});
