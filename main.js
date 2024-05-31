document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Thank you for signing up, ${email}!`);
});
