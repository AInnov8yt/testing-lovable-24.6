// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Select the button using its ID
  var btnChange = document.getElementById('btnChange');

  // Add a click event listener to the button
  btnChange.addEventListener('click', function() {
    // Update the text of the paragraph with ID 'message'
    document.getElementById('message').textContent = 'You clicked the button!';
  });
});