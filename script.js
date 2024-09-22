document.getElementById('installationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Data saved successfully!');
        } else {
            alert('Error saving data.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving data.');
    }
});
