// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  let employees = [];

  let addEmployees = true;
  //prompts the user to add the information into the table
  while (addEmployees) {
    const firstName = prompt("what is your first name?");
    const lastName = prompt("what is your last name?");
    const salary = prompt("what is your salary?");
    // console.log(firstName);
    // console.log(lastName);
    // console.log(salary);

    // create employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    // console.log(employee);
    employees.push(employee);
    addEmployees = confirm("would you like to add another?");

    // console.log(employees)
    //use a while loop to determine if user wants to add employees
  }
  return employees;
  //use a while loop to determine if user wants to add employees
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  console.log(employeesArray);
  //find the average by adding all salaries and divide by length of array
  let sum = 0;
  //for loop: add salary into total salary
  for (let i = 0; i < employeesArray.length; i++) {
    sum += parseFloat(employeesArray[i].salary);
  }
  console.log(sum);
  const avgSalary = sum / employeesArray.length;
  console.log(avgSalary);
  return avgSalary;
  //return average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  //use Math.random() to select random integer from the array and return it to the function -LN
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(employeesArray.length-1);
  const randomNum = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  ); // The maximum is inclusive and the minimum is inclusive -LN
  // console.log(randomNum);
  const randomFirst = employeesArray[randomNum].firstName;
  const randomLast = employeesArray[randomNum].lastName;


  console.log(`Congratulations to ${randomFirst} ${randomLast}, our random drawing winner!`);

  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
