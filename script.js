'use strict';
const filters = [...document.querySelectorAll('.filter')];
const papers = [...document.querySelectorAll('.paper')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  papers.forEach(paper => {
    paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter;
    if (!paper.hidden) count++;
  });
  document.querySelector('#result-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, {passive:true});

const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    const source = link.querySelector('img');
    image.src = link.href;
    image.alt = source ? source.alt : '';
    caption.textContent = link.dataset.caption || '';
    lightbox.showModal();
  }));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
}

if ('IntersectionObserver' in window) {
  const nav = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) nav.forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin:'-10% 0px -65% 0px', threshold:0});
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const item = entry.target;
      item.classList.add('visible');
      reveal.unobserve(item);
      setTimeout(() => item.classList.remove('reveal', 'visible'), 700);
    });
  }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.paper, .project-card, .career-row, .education-card, .pipeline').forEach(item => {
    if (item.getBoundingClientRect().top > window.innerHeight) {
      item.classList.add('reveal');
      reveal.observe(item);
    }
  });
}
