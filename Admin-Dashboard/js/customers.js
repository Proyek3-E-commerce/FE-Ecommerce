// customers.js
const customerForm = document.getElementById('customer-form');
const customerTable = document.getElementById('customer-table').getElementsByTagName('tbody')[0];
let editingRow = null;

// Handle form submission to add or update customer
customerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    const phone = document.getElementById('customer-phone').value;

    if (editingRow) {
        // Update the existing row
        editingRow.cells[0].innerText = name;
        editingRow.cells[1].innerText = email;
        editingRow.cells[2].innerText = phone;

        // Reset editing mode
        editingRow = null;
        customerForm.reset();
        document.querySelector('#customer-form button').innerText = 'Add Customer';
    } else {
        // Create new row
        const newRow = customerTable.insertRow();
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        // Add event listeners for editing and deleting
        addEventListeners(newRow);
        customerForm.reset();
    }
});

// Add event listeners to edit and delete buttons
function addEventListeners(row) {
    const editBtn = row.querySelector('.edit');
    const deleteBtn = row.querySelector('.delete');

    // Edit functionality
    editBtn.addEventListener('click', function() {
        const cells = row.getElementsByTagName('td');
        document.getElementById('customer-name').value = cells[0].innerText;
        document.getElementById('customer-email').value = cells[1].innerText;
        document.getElementById('customer-phone').value = cells[2].innerText;

        // Set the row being edited
        editingRow = row;
        document.querySelector('#customer-form button').innerText = 'Update Customer';
    });

    // Delete functionality
    deleteBtn.addEventListener('click', function() {
        row.remove();
    });
}

// Initial setup: Add event listeners to existing rows (if any)
[...customerTable.rows].forEach(addEventListeners);
