

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  document.getElementById('response').innerHTML = ''; // Optional: Auch die Antwortnachricht leeren
});
