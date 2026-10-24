// Optional content renderer: node build.mjs. No dependencies; outputs static HTML.
import fs from 'node:fs';
import vm from 'node:vm';
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(new URL('content.js', import.meta.url),'utf8'),context);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const papers=context.window.siteContent.publications;
const cards=papers.map((p,i)=>`<article class="paper" data-category="${esc(p.category)}" id="${esc(p.id)}">
<div class="paper-figure" aria-label="${esc(p.name)} conceptual overview"><div class="figure-heading"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(p.name)}</strong></div><div class="mini-diagram">${p.diagram.map((s,j)=>`<span class="diagram-node node-${j}">${esc(s)}</span>${j<2?'<b aria-hidden="true">↓</b>':''}`).join('')}</div><div class="figure-foot">CONCEPTUAL SUMMARY</div></div>
<div class="paper-content"><div class="paper-top"><span class="venue ${esc(p.status)}">${esc(p.venue)}</span><span class="paper-category">${p.category==='systems'?'MODEL & SYSTEM':'BENCHMARK'}</span></div><h3><a href="${esc(p.paper)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a></h3><p class="authors">${esc(p.authors).replace('Xintong Guo','<strong>Xintong Guo</strong>')}</p><p class="paper-description">${esc(p.description)}</p><div class="paper-links"><a href="${esc(p.paper)}" target="_blank" rel="noopener noreferrer">Paper ↗</a>${p.code?`<a href="${esc(p.code)}" target="_blank" rel="noopener noreferrer">Code ↗</a>`:''}${p.project?`<a href="${esc(p.project)}" target="_blank" rel="noopener noreferrer">Project ↗</a>`:''}<span class="paper-tags">${p.tags.map(esc).join(' / ')}</span></div><details><summary>Research summary</summary><p>${esc(p.detail)}</p></details></div></article>`).join('\n');
const file=new URL('index.html',import.meta.url);
const html=fs.readFileSync(file,'utf8');
fs.writeFileSync(file,html.replace(/<!-- PUBLICATIONS_START -->[\s\S]*?<!-- PUBLICATIONS_END -->/,'<!-- PUBLICATIONS_START -->\n'+cards+'\n<!-- PUBLICATIONS_END -->'));
console.log(`Rendered ${papers.length} publications into static HTML.`);
