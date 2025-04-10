document.getElementById('progressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const progressType = document.getElementById('progressType').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;
    const lessons = document.getElementById('lessons').value;
    const reflection = document.getElementById('reflection').value;

    const formData = {
        progressType: progressType,
        date: date,
        activity: activity,
        lessons: lessons,
        reflection: reflection
    };

    alert('Progress form submitted successfully!\n' +
          'Category: ' + formData.progressType + '\n' +
          'Date: ' + formData.date + '\n' +
          'Activity: ' + formData.activity + '\n' +
          'Lessons Learned: ' + formData.lessons + '\n' +
          'Reflection: ' + formData.reflection);


    document.getElementById('progressForm').reset();
});