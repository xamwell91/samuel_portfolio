
const sendEmail = (e) => {
    // const form = useRef();
    e.preventDefault();
    // Set your service ID, template ID, and public key from your emailjs account
    emailjs.sendForm('service_kmijikh', 'template_xc7t1wu', form.current, 'CXQXbtIZGoX6FCh6J')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
    
    document.getElementById('contactForm').addEventListener('submit', sendEmail);
};
