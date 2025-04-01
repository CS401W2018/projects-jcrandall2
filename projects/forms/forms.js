document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            password: document.getElementById("password").value.trim(),
            comments: document.getElementById("comments").value.trim(),
            terms: document.getElementById("terms").checked,
            terms2: document.getElementById("terms2").checked,
            gender: document.querySelector("input[name='gender']:checked")?.value || "Not specified",
            country: document.getElementById("country").value
        };

        let errors = [];
        if (!formData.name) errors.push("Name is required.");
        if (!formData.email.includes("@")) errors.push("Enter a valid email.");
        if (formData.password.length < 6) errors.push("Password must be at least 6 characters.");
        if (formData.phone && formData.phone.length < 10) errors.push("Phone number should be at least 10 digits.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        console.log("Form Data:", formData);

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "response.json", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.body.innerHTML = `<h2>${response.message}</h2>`;
            }
        };
        xhr.send();

        form.reset();
    });
});
