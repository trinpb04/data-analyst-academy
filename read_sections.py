"""
Smart PDF reader - collapse spaces and extract clean content by section.
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

reader = PdfReader('Python for Data Science, AI & Development.pdf')

def clean(text):
    # Collapse multiple spaces/newlines into single space, then cleanup
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# Define section boundaries based on page scan earlier
sections = {
    'Module 1: Python Basics': range(1, 10),         # pages 2-9 (0-indexed: 1-8)  
    'Module 1 Cheat Sheet': range(3, 8),              # pages 4-7
    'Module 2: Python Data Structures': range(9, 22), # pages 10-21
    'Module 3: Python Programming Fundamentals': range(22, 61),  # pages 23-60
    'Module 4: Working with Data in Python': range(78, 125),     # pages 79-124
    'Module 5: APIs and Data Collection': range(125, 161),       # pages 126-161
}

for section, page_range in sections.items():
    print(f'\n{"="*70}')
    print(f'SECTION: {section}')
    print(f'{"="*70}')
    for i in page_range:
        if i >= len(reader.pages):
            break
        page = reader.pages[i]
        text = page.extract_text()
        if text:
            c = clean(text)
            if len(c) > 30:
                print(f'\n-- Page {i+1} --')
                print(c[:1200])
