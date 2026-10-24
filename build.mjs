// Optional content renderer: node build.mjs. No dependencies; outputs static HTML.
import fs from 'node:fs';
import vm from 'node:vm';
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(new URL('content.js', import.meta.url),'utf8'),context);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const papers=context.window.siteContent.publications;
const renderAuthors = p => p.authors.split(', ').map(name => {
  const label = name === 'Xintong Guo' ? `<strong>${esc(name)}</strong>` : esc(name);
  return label + (p.equalContribution?.includes(name) ? '<sup class="equal-marker" aria-label="co-first author">*</sup>' : '');
}).join(', ');
const cards=papers.map((p,i)=>`<article class="paper" data-category="${esc(p.category)}" id="${esc(p.id)}">
<figure class="paper-figure"><a href="${esc(p.image)}" target="_blank" rel="noopener noreferrer" aria-label="View ${esc(p.name)} figure at full size"><img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy"><figcaption><span>${esc(p.name)}</span><span>View figure ↗</span></figcaption></a></figure>
<div class="paper-content"><div class="paper-top"><span class="venue ${esc(p.status)}">${esc(p.venue)}</span><span class="paper-category">${p.category==='systems'?'MODEL & SYSTEM':'BENCHMARK'}</span></div><h3><a href="${esc(p.paper)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a></h3><p class="authors">${renderAuthors(p)}</p>${p.equalContribution?.length?'<p class="contribution-note">* Equal contribution · Co-first authors</p>':''}<p class="paper-description">${esc(p.description)}</p><div class="paper-links"><a href="${esc(p.paper)}" target="_blank" rel="noopener noreferrer">Paper ↗</a>${p.code?`<a href="${esc(p.code)}" target="_blank" rel="noopener noreferrer">Code ↗</a>`:''}${p.project?`<a href="${esc(p.project)}" target="_blank" rel="noopener noreferrer">Project ↗</a>`:''}<span class="paper-tags">${p.tags.map(esc).join(' / ')}</span></div><details><summary>Research summary</summary><p>${esc(p.detail)}</p></details></div></article>`).join('\n');
const file=new URL('index.html',import.meta.url);
const html=fs.readFileSync(file,'utf8');
fs.writeFileSync(file,html.replace(/<!-- PUBLICATIONS_START -->[\s\S]*?<!-- PUBLICATIONS_END -->/,'<!-- PUBLICATIONS_START -->\n'+cards+'\n<!-- PUBLICATIONS_END -->'));
console.log(`Rendered ${papers.length} publications into static HTML.`);
