document.getElementById("authorizeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const patientId = document.getElementById("patientId").value;
    const doctorId = document.getElementById("doctorId").value;

    const data = { patientId, doctorId };

    fetch("http://localhost:3000/authorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Doctor authorized successfully!");
            console.log(data);
        })
        .catch((error) => console.error("Error:", error));
});

document.getElementById("updateForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const recordId = document.getElementById("recordId").value;
    const patientId = document.getElementById("patientIdUpdate").value;
    const doctorId = document.getElementById("doctorIdUpdate").value;
    const description = document.getElementById("description").value;

    const data = { recordId, patientId, doctorId, description };

    fetch("http://localhost:3000/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Record updated successfully!");
            console.log(data);
        })
        .catch((error) => console.error("Error:", error));
});
