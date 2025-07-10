let students = []; // store all student records here

function getGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const marks = parseInt(document.getElementById("marks").value);

  if (!name || isNaN(marks)) {
    alert("Please enter a valid name and marks.");
    return;
  }

  // Check if student already exists
  const isDuplicate = students.some((student) => student.name.toLowerCase() === name.toLowerCase());
  if (isDuplicate) {
    alert("Student already exists!");
    return;
  }

  const grade = getGrade(marks);

  // Add to student list
  students.push({ name, marks, grade });

  const tableBody = document.getElementById("studentTableBody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${marks}</td>
    <td>${grade}</td>
  `;

  tableBody.appendChild(row);

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("marks").value = "";
}
