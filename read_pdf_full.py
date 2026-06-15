import sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader
import os

reader = PdfReader('Python for Data Science, AI & Development.pdf')
print(f'Total pages: {len(reader.pages)}')
print('='*60)

# Read ALL text content page by page
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    if text and text.strip():
        print(f'\n===== PAGE {i+1} =====')
        print(text[:2000])
