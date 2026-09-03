const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const enquiryForm = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('#form-status');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(enquiryForm);
  const firstName = data.get('firstName').trim();
  const surname = data.get('surname').trim();
  const schoolYear = data.get('schoolYear');
  const question = data.get('question').trim();

  const message = [
    'Hello Chemistry Corner Malta!',
    '',
    `My name is ${firstName} ${surname}.`,
    `Student year/pathway: ${schoolYear}`,
    '',
    `Enquiry: ${question}`
  ].join('\n');

  const url = `https://wa.me/35679637563?text=${encodeURIComponent(message)}`;
  formStatus.textContent = 'Opening WhatsApp with your enquiry…';
  window.open(url, '_blank', 'noopener,noreferrer');
});
