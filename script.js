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
}
