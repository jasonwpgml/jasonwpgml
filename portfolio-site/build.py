"""Subset fonts to the page's own characters, then emit two builds:
dist/pages/  index.html + fonts/ + img/  (for GitHub Pages)
dist/portfolio.html                      (single file, everything inlined)"""
import base64, pathlib, re, shutil, subprocess, html
SRC = pathlib.Path(__file__).parent / 'src'
DIST = pathlib.Path(__file__).parent / 'dist'
FONTS = pathlib.Path('/root/.claude/skills/synced/0279ac4a-68ba-49ca-bcfa-4ca45580d898_a8f5457d-b024-454d-b76e-445bd69486f7/jason-docs-design/assets/fonts')
FACES = ['MaruBuri-Regular', 'MaruBuri-SemiBold', 'MaruBuri-Bold', 'WantedSans-Regular', 'WantedSans-SemiBold']

page = (SRC / 'index.html').read_text()
chars = set(html.unescape(re.sub(r'<[^>]+>', ' ', page))) | set(page)
chars |= {chr(c) for c in range(0x20, 0x7f)} | set('‘’“”–—…·')
text = ''.join(sorted(chars))
if DIST.exists(): shutil.rmtree(DIST)
(DIST / 'pages' / 'fonts').mkdir(parents=True)
shutil.copytree(SRC / 'img', DIST / 'pages' / 'img')
for f in FACES:
    subprocess.run(['pyftsubset', str(FONTS / f'{f}.ttf'), f'--text={text}', '--flavor=woff2',
                    '--layout-features=*', f'--output-file={DIST / "pages" / "fonts" / (f + ".woff2")}'], check=True)
(DIST / 'pages' / 'index.html').write_text('<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    + page.replace('<header class="head">', '</head>\n<body>\n<header class="head">', 1) + '\n</body>\n</html>\n')

def inline(m):
    p = DIST / 'pages' / m.group(1)
    mime = {'.woff2': 'font/woff2', '.webp': 'image/webp'}[p.suffix]
    return f'data:{mime};base64,' + base64.b64encode(p.read_bytes()).decode()
single = re.sub(r'(?<=["(])((?:fonts|img)/[^")]+)(?=[")])', inline, page)
(DIST / 'portfolio.html').write_text(single)
for p in sorted((DIST / 'pages').rglob('*.*')): print(f'{p.stat().st_size // 1024:5d} KB  {p.relative_to(DIST)}')
print(f'{(DIST / "portfolio.html").stat().st_size // 1024:5d} KB  portfolio.html  ({len(text)} glyphs)')
