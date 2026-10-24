# Xintong Guo — AI Research

Live site: https://guoxintong.github.io/
Repository: https://github.com/GUOXINTONG/GUOXINTONG.github.io

Research focus: **Streaming Video Understanding** with multimodal large language models.

Selected work: AURA (ICLR 2027 submission), PhoStream (ICML 2026), X-Stream (ECCV 2026), FastBench (ICLR 2027 submission; not an acceptance claim).

## Editing

- `content.js`: verified paper metadata, authors, summaries, and links.
- Run `node build.mjs` after changing paper metadata. This generates the publication section in `index.html`, so all papers remain readable without JavaScript and can be indexed.
- `index.html`: biography, navigation, research focus, updates, and contact.
- `style.css`: responsive academic layout, typography, and colors.
- `script.js`: progressive enhancement for publication filters and navigation.
- `portrait.jpg`: owner-supplied original photo, converted from HEIC and resized proportionally. Metadata is not retained. No generative modification or cropping.

No dependencies are required. Preview with `python3 -m http.server 8000`.

## Publishing

GitHub Pages serves `main / (root)`. Upload `index.html`, `style.css`, `script.js`, `content.js`, `build.mjs`, `favicon.svg`, `portrait.jpg`, and this README to update the website. The optional `.nojekyll` disables Jekyll processing.

External Google Fonts have local fallbacks. No tokens or credentials belong in this repository.

## Content provenance

Paper titles, author order, and technical summaries were checked against the supplied arXiv pages on 2026-10-24. Conference labels follow the owner; ICML and ECCV labels are also present on the linked project resources. AURA and FastBench ICLR 2027 submission statuses were supplied by the owner; neither implies acceptance. Paper figures are owner-supplied aura.jpg, phostream.jpg, xstream.jpg, and fastbench.png, displayed without cropping. Experience and education were read from the owner’s LinkedIn profile on 2026-10-24: https://www.linkedin.com/in/xintong-terry-guo/. Biography uses the supplied Chinese name 郭欣桐 and English name Terry.

Include all four paper images when publishing. Click a paper figure to view the full-resolution original.

AURA co-first authors are marked with * per the owner: Xudong Lu, Yang Bo, Jinpeng Chen, Shuhan Li, Xintong Guo, Huankang Guan.
University marks are used to identify education: McMaster official brand asset (https://brand.mcmaster.ca/app/uploads/2024/03/McMaster-logo.png), Beihang official emblem (https://www.buaa.edu.cn/xygk/jrbh0116old/bhxh.htm). Publish mcmaster-logo.png and beihang-logo.jpg alongside the site files.
