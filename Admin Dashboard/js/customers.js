document.addEventListener("DOMContentLoaded", () => {
    const customersTable = document.querySelector(".customers-container tbody");
  
    customersTable.addEventListener("click", (event) => {
      if (event.target.classList.contains("view")) {
        handleView(event.target);
      } else if (event.target.classList.contains("edit")) {
        handleEdit(event.target);
      } else if (event.target.classList.contains("delete")) {
        handleDelete(event.target);
      }
    });
  
    function handleView(button) {
      const row = button.closest("tr");
      const name = row.querySelector("td:nth-child(1)").textContent;
      const email = row.querySelector("td:nth-child(2)").textContent;
      const status = row.querySelector("td:nth-child(3)").textContent;
  
      alert(`View Customer\nName: ${name}\nEmail: ${email}\nStatus: ${status}`);
    }
  
    function handleEdit(button) {
      const row = button.closest("tr");
      const nameCell = row.querySelector("td:nth-child(1)");
      const emailCell = row.querySelector("td:nth-child(2)");
  
      const currentName = nameCell.textContent;
      const currentEmail = emailCell.textContent;
  
      const newName = prompt("Edit Name:", currentName);
      const newEmail = prompt("Edit Email:", currentEmail);
  
      if (newName !== null && newName.trim() !== "") {
        nameCell.textContent = newName;
      }
  
      if (newEmail !== null && newEmail.trim() !== "") {
        emailCell.textContent = newEmail;
      }
  
      alert("Customer information updated successfully.");
    }
  
    function handleDelete(button) {
      const row = button.closest("tr");
      const name = row.querySelector("td:nth-child(1)").textContent;
  
      const confirmation = confirm(`Are you sure you want to delete ${name}?`);
      if (confirmation) {
        row.remove();
        alert(`${name} has been deleted.`);
      }
    }
  });
  