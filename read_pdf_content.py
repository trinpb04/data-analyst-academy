"""
Read full content of Python PDF by module/section.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

reader = PdfReader('Python for Data Science, AI & Development.pdf')

# Read pages 1-125 (Module 1 to Module 4) in full
all_text = []
for i in range(min(125, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text and text.strip():
        all_text.append(f'\n\n===== PAGE {i+1} =====\n{text}')

full = '\n'.join(all_text)
with open('pdf_content.txt', 'w', encoding='utf-8') as f:
    f.write(full)

print(f'Written {len(full)} chars to pdf_content.txt')
print('Pages processed:', len(all_text))
