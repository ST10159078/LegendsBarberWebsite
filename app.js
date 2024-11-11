/* Registration
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("registerEmail").value;
    const name = document.getElementById("registerName").value;
    const password = document.getElementById("registerPassword").value;

    // Basic validation
    if (!email || !name || !password) {
        alert("Please fill in all fields.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection("Users").doc(user.uid).set({ name, email });
        })
        .then(() => {
            // Redirect to homepage after successful registration
            window.location.href = "homepage.html"; 
        })
        .catch((error) => {
            console.error(error.message);
            alert("Registration failed: " + error.message); // Show error to user
        });
});

// Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Basic validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to homepage after successful login
            window.location.href = "homepage.html";
        })
        .catch((error) => {
            console.error(error.message);
            alert("Login failed: " + error.message); // Show error to user
        });
});

// Displaying user’s name on the homepage
auth.onAuthStateChanged((user) => {
    if (user) {
        db.collection("Users").doc(user.uid).get()
            .then((doc) => {
                if (doc.exists) {
                    document.getElementById("greeting").innerText = `Hello, ${doc.data().name}`;
                } else {
                    console.error("No such user document!");
                }
            })
            .catch((error) => {
                console.error("Error getting user document:", error);
            });
    }
});
*/