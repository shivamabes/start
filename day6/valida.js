document.getElementById('registrationForm').addEventListener('submit', function(event) {
  let userId = document.getElementById('usr').value;
  let password = document.getElementById('pss').value;
  let name = document.getElementById('nme').value;
  let country = document.getElementById('cntry').value;
  let zip = document.getElementById('zpp').value;
  let email = document.getElementById('eml').value;
  let sex = document.querySelector('input[name="sex"]:checked');
  let language = document.querySelector('input[name="language"]:checked');

  if (userId.length < 5 || userId.length > 12) {
      alert("User ID must be between 5 and 12 characters.");
      event.preventDefault();
  } else if (password.length < 7 || password.length > 12) {
      alert("Password must be between 7 and 12 characters.");
      event.preventDefault();
  } else if (name === "") {
      alert("Name must be filled out.");
      event.preventDefault();
  } else if (country === "") {
      alert("Country must be selected.");
      event.preventDefault();
  } else if (zip === "" || isNaN(zip)) {
      alert("Zip Code must be a number.");
      event.preventDefault();
  } else if (email === "") {
      alert("Email must be filled out.");
      event.preventDefault();
  } else if (!sex) {
      alert("Please select your sex.");
      event.preventDefault();
  } else if (!language) {
      alert("Please select your language.");
      event.preventDefault();
  }
});
