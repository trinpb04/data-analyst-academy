import sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

reader = PdfReader('Python for Data Science, AI & Development.pdf')
print(f'Total pages: {len(reader.pages)}')

# Print ALL page first lines to understand structure
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    if text and text.strip():
        lines = [l.strip() for l in text.strip().split('\n') if l.strip()]
        if lines:
            first = lines[0]
            print(f'P{i+1:03d}: {first[:120]}')
