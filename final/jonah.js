document.getElementById('progressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const progressType = document.getElementById('progressType').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;
    const lessons = document.getElementById('lessons').value;
    const reflection = document.getElementById('reflection').value;

    const formData = {
        progressType,
        date,
        activity,
        lessons,
        reflection
    };

  
    alert(`Progress form submitted successfully!
          \nCategory: ${formData.progressType}
          \nDate: ${formData.date}
          \nActivity: ${formData.activity}
          \nLessons Learned: ${formData.lessons}
          \nReflection: ${formData.reflection}`);

    document.getElementById('progressForm').reset();

  
    sendData(formData);
    console.log("Form data sent to server:", formData);

    const xhr = new XMLHttpRequest();
xhr.open("GET", "response.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.body.innerHTML = `<h2>${response.message}</h2>`;
    }
};
xhr.send();
});


    function sendData(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "your-server-endpoint-here", true); // Change to your server endpoint
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Data sent successfully:", xhr.responseText);
            } else {
                console.error("Error sending data:", xhr.status, xhr.statusText);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}


