document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init('CXQXbtIZGoX6FCh6J'); // Replace with your EmailJS public key

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_kmijikh', 'template_xc7t1wu', this)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                document.getElementById('msgSubmit').classList.remove('hidden');
                document.getElementById('msgSubmit').innerText = "Message sent successfully!";
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
                document.getElementById('msgSubmit').classList.remove('hidden');
                document.getElementById('msgSubmit').innerText = "Failed to send the message, please try again.";
            });

        form.reset();
    });
});
