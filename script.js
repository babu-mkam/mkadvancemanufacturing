const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('[data-capability]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#capability-select');
    if (select) select.value = link.dataset.capability;
  });
});

document.querySelector('#rfq-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const success = form.querySelector('.form-success');
  const company = form.company.value.trim();
  const capability = form.capability.value || 'the selected capability';
  success.textContent = `RFQ enquiry prepared for ${company} — ${capability}. This demo does not transmit the form.`;
  form.reset();
});
