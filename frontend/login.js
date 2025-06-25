async function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await  fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (data.message === "Login successful") {
      // Optionally redirect to dashboard or success page
      window.location.href = "welcome.html";
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("Something went wrong. Try again!");
  }
}
