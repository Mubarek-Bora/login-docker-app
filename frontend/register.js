async function register(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const res = await fetch("http://13.221.66.34:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.message === "User registered") {
      alert("✅ Registration successful! Redirecting to login...");
      document.querySelector("form").reset();
      setTimeout(() => {
        window.location.href = "login.html"; // change this if needed
      }, 1000);
    } else {
      alert("⚠️ " + data.message);
    }
  } catch (err) {
    console.error("Registration failed:", err);
    alert("❌ Something went wrong. Please try again.");
  }
}
