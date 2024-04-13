`use strict`
let submitButton = document.getElementById('submit-btn')

let form = document.getElementById("form");
let table = document.getElementById('table')
const searchInput = document.querySelector('[data-search]')
let allData = [];

searchInput.addEventListener('input', (e) => {
  const value = e.target.value;
  console.log(value);

  // Get all the rows in the table
  const rows = table.getElementsByTagName('tr');

  allData.forEach((user, index) => {
    const isVisible = user.userName.includes(value) || user.userEmail.includes(value) || user.age.includes(value) || user.gender.includes(value) || user.number.includes(value)

    console.log(`isVisible`, isVisible, user, index);

    // If the row is not visible, hide it
    if (!isVisible && rows[index + 1]) {
      rows[index + 1].style.display = 'none';
    } else if (rows[index + 1]) {
      // If the row is visible, show it
      rows[index + 1].style.display = '';
    }

  });

})

const addValue = function (e) {
  e.preventDefault();

  const userName = document.getElementById('userid').value;
  const userEmail = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const number = document.getElementById('number').value;

  let rowData = { userName, userEmail, age, gender, number };

  //add to anoother obj 
  allData.push(rowData);
  console.log(`obj`, allData);

  var row = table.insertRow(1);

  Object.values(rowData).map((value, index) => {
    var rowCell = row.insertCell(index);
    rowCell.innerHTML = value;
  });
}

form.addEventListener('submit', addValue);


//search 
