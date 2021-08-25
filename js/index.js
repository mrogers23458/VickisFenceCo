const btn = document.getElementById('button');
const formEl = document.getElementById('form')
const estimateBtnEl = document.getElementById('download-button')
const estimateMessageEl = document.getElementById('message')

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

estimateBtnEl.addEventListener('click', function(){
  estimateMessageEl.value = `I'm interested in a FREE estimate for my fencing project. Please contact me ASAP!`
  console.log('clicked')
})

formEl.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)

    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
      formEl.reset();
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
