function addCatName() {
    const catNameInput = document.getElementById("catNameInput");
    const catName = catNameInput.value.trim();

    if (catName !== "") {
      const catList = document.getElementById("catNameList");
      const listItem = document.createElement("li");
      listItem.textContent = catName;
      catList.appendChild(listItem);

      // Clear the input field after adding the name
      catNameInput.value = "";
    }
  }