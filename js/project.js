document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('response').innerHTML = 'Vielen Dank für Ihre Nachricht, ' + name + '!';
  } else {
    document.getElementById('response').innerHTML = 'Bitte füllen Sie alle Felder aus.';
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  document.getElementById('response').innerHTML = ''; // Optional: Auch die Antwortnachricht leeren
});
