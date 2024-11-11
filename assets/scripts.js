function initMap() {
    const mapOptions = {
        center: { lat: -26.1076, lng: 28.0567 },
        zoom: 10,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const locations = [
        { name: "Mall of the South", position: { lat: -26.2820, lng: 28.0155 } },
        { name: "Newtown Junction", position: { lat: -26.2035, lng: 28.0345 } },
        { name: "Mall of Africa", position: { lat: -26.0164, lng: 28.1079 } },
        { name: "Sandton City", position: { lat: -26.1076, lng: 28.0567 } },
    ];

    locations.forEach(loc => {
        new google.maps.Marker({
            position: loc.position,
            map,
            title: loc.name,
        });
    });
}



//booking
const firebaseUrl = 'https://barber-1ac3b-default-rtdb.firebaseio.com/Bookings.json';

function submitBooking() {
    const bookingData = {
        barber: document.getElementById('barber').value,
        date: document.getElementById('date').value,
        location: document.getElementById('location').value,
        services: [
            {
                description: document.getElementById('title').value,
                price: "50", // Placeholder; replace with dynamic data if needed
                title: document.getElementById('title').value,
            }
        ],
        time: document.getElementById('time').value,
        userId: localStorage.getItem('userId') // Adjust as needed for your authentication method
    };

    fetch(firebaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Booking created successfully in Firebase:', data);
        alert('Booking successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    });
}













/*
// Define the getCurrentUserId function
function getCurrentUserId() {
    return localStorage.getItem('userId'); // Adjust this based on your method of storing the user ID
}

// Define the getSelectedServices function
function getSelectedServices() {
    return document.getElementById('service').value; 
}

const firebaseUrl = 'https://barber-1ac3b-default-rtdb.firebaseio.com/Bookings.json';

function submitBooking() {
    // Collect data from form fields
    const bookingData = {
        barber: document.getElementById('barber').value,
        date: document.getElementById('date').value,
        location: document.getElementById('location').value,
        services: [
            {
                title: document.getElementById('title').value,
                // Assuming price and description are not needed; remove if not in HTML
            }
        ],
        time: document.getElementById('time').value,
        userId: getCurrentUserId()  // or another way to get the user ID
    };

    // Send data to Firebase
    fetch(firebaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Booking created successfully in Firebase:', data);
        alert('Booking successful!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}*/








