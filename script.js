document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const responseMessage = document.getElementById('form-response');
        responseMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        
        this.reset();
    });
});