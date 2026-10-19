'use strict';
const data = window.siteContent;
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const art = {
  stream: '<g fill="none" stroke="#739073"><rect x="38" y="38" width="78" height="62" rx="3"/><rect x="61" y="48" width="78" height="62" rx="3"/><rect x="84" y="58" width="78" height="62" rx="3"/><path d="M125 87h69m-8-7 8 7-8 7"/><circle cx="187" cy="43" r="8" fill="#b6c79c" stroke="none"/></g>',
  dialogue: '<g fill="none" stroke="#9e8871"><circle cx="91" cy="75" r="40"/><circle cx="142" cy="75" r="40"/><path d="M68 75h7l5-17 8 33 8-39 8 42 7-19h8m7 0h5l5-12 7 26 7-31 8 17h10"/></g>',
  efficient: '<g fill="none" stroke="#688590"><rect x="88" y="46" width="60" height="60" rx="7"/><rect x="99" y="57" width="38" height="38" rx="3"/><path d="M100 32v14m18-14v14m18-14v14M100 106v14m18-14v14m18-14v14M74 58h14m-14 18h14m-14 18h14m60-36h14m-14 18h14m-14 18h14"/><path d="m109 77 7 7 13-17" stroke-width="2"/></g>',
  benchmark: '<g stroke="#99956a" fill="none"><path d="M61 39v72h122"/><path d="m73 98 25-17 24 6 24-35 25 10" stroke-width="2"/><circle cx="73" cy="98" r="4" fill="#e7e5d6"/><circle cx="98" cy="81" r="4" fill="#e7e5d6"/><circle cx="122" cy="87" r="4" fill="#e7e5d6"/><circle cx="146" cy="52" r="4" fill="#e7e5d6"/><circle cx="171" cy="62" r="4" fill="#e7e5d6"/><path d="M61 74h122M61 50h122" opacity=".25"/></g>'
};
$('#role').textContent = data.role;
$('#intro').textContent = data.intro;
$('#interests').innerHTML = data.interests.map(x => `<span>${escapeHtml(x)}</span>`).join('');
function renderPublications(filter = 'all') {
  const items = data.publications.filter(p => filter === 'all' || p.category === filter);
  $('#result-count').textContent = `${String(items.length).padStart(2, '0')} projects`;
  $('#publications').innerHTML = items.map(p => `<article class="publication"><div class="pub-art ${escapeHtml(p.art)}" aria-hidden="true"><svg viewBox="0 0 236 156">${art[p.art] || art.stream}</svg><span class="art-label">ILLUSTRATIVE RESEARCH FIGURE</span></div><div><div class="pub-meta">${escapeHtml(p.type)} &nbsp; / &nbsp; ${escapeHtml(p.year)} &nbsp; / &nbsp; SAMPLE</div><h3>${escapeHtml(p.title)}</h3><p class="pub-description">${escapeHtml(p.description)}</p><p class="pub-authors">${escapeHtml(p.authors)}</p><p class="pub-venue">${escapeHtml(p.venue)}</p><div class="pub-bottom">${p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div></div><button class="project-open" data-project="${escapeHtml(p.id)}" aria-label="View details: ${escapeHtml(p.title)}">↗</button></article>`).join('');
}
renderPublications();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  renderPublications(button.dataset.filter);
}));
const newsRow = n => `<div class="news-row"><time class="news-date">${escapeHtml(n.date)}</time><span class="news-label">${escapeHtml(n.label)}</span><p class="news-text">${escapeHtml(n.text)}</p></div>`;
$('#news').innerHTML = data.news.slice(0,3).map(newsRow).join('') + `<div id="older-news" hidden>${data.news.slice(3).map(newsRow).join('')}</div>`;
$('#news-toggle').hidden = data.news.length <= 3;
$('#news-toggle').addEventListener('click', () => {
  const expanded = $('#news-toggle').getAttribute('aria-expanded') !== 'true';
  $('#news-toggle').setAttribute('aria-expanded', String(expanded));
  $('#older-news').hidden = !expanded;
  $('#news-toggle').innerHTML = expanded ? 'Show fewer updates <span>−</span>' : 'View earlier updates <span>+</span>';
});
for (const key of ['work','education']) {
  $(`#${key}`).innerHTML = data[key].map(e => `<article class="experience-item"><p class="experience-date">${escapeHtml(e.date)}</p><h4>${escapeHtml(e.title)}</h4><p class="experience-org">${escapeHtml(e.organization)}</p><p class="experience-desc">${escapeHtml(e.description)}</p></article>`).join('');
}
$('#year').textContent = new Date().getFullYear();
$('#publications').addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const project = data.publications.find(p => p.id === button.dataset.project);
  $('#dialog-title').textContent = project.title;
  $('#dialog-description').textContent = project.description;
  $('#dialog-links').replaceChildren();
  for (const type of ['paper', 'code']) {
    if (!project[type]) continue;
    try { const url = new URL(project[type], location.href); if (!['https:', 'http:'].includes(url.protocol)) continue; } catch { continue; }
    const link = document.createElement('a');
    link.href = project[type]; link.textContent = `${type === 'paper' ? 'Read paper' : 'View code'} ↗`; link.className = 'button'; link.target = '_blank'; link.rel = 'noopener noreferrer';
    $('#dialog-links').append(link);
  }
  $('#project-dialog').showModal();
});
$('#close-dialog').addEventListener('click', () => $('#project-dialog').close());
$('#project-dialog').addEventListener('click', event => { if (event.target === $('#project-dialog')) { const r = event.target.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) event.target.close(); } });
const sections = [...document.querySelectorAll('main > section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`)); });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
