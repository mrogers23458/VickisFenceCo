const btn = document.getElementById('button');
const formEl = document.getElementById('form')

formEl.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
