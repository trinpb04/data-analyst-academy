"""
Convert RAW pixel data from PDF to PNG using Pillow.
Each image is stored as RGB, 8-bit per channel.
We already know width x height from the PDF extraction.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader
from PIL import Image
import io, os

reader = PdfReader('Python for Data Science, AI & Development.pdf')
os.makedirs('public/pdf_images', exist_ok=True)

saved = []

for page_num, page in enumerate(reader.pages):
    if '/Resources' not in page:
        continue
    resources = page['/Resources']
    if '/XObject' not in resources:
        continue
    xobjects = resources['/XObject']
    
    img_on_page = 0
    for obj_name in xobjects:
        obj = xobjects[obj_name]
        if obj.get('/Subtype') != '/Image':
            continue
        
        try:
            width = int(obj['/Width'])
            height = int(obj['/Height'])
            bits = int(obj.get('/BitsPerComponent', 8))
            
            filter_type = str(obj.get('/Filter', ''))
            
            if hasattr(obj, 'get_data'):
                data = obj.get_data()
            else:
                continue
            
            fname = f'public/pdf_images/p{page_num+1:03d}_{img_on_page}.png'
            
            if 'DCTDecode' in filter_type or 'DCTD' in filter_type:
                # JPEG data
                img = Image.open(io.BytesIO(data))
                img.save(fname)
                print(f'p{page_num+1:03d}_{img_on_page}: JPEG {width}x{height} -> {fname}')
                saved.append(fname)
            else:
                # Raw RGB data
                cs = str(obj.get('/ColorSpace', ''))
                if width * height * 3 == len(data):
                    img = Image.frombytes('RGB', (width, height), data)
                    img.save(fname)
                    print(f'p{page_num+1:03d}_{img_on_page}: RAW RGB {width}x{height} -> {fname}')
                    saved.append(fname)
                elif width * height == len(data):
                    img = Image.frombytes('L', (width, height), data)
                    img.save(fname)
                    print(f'p{page_num+1:03d}_{img_on_page}: RAW Gray {width}x{height} -> {fname}')
                    saved.append(fname)
                elif width * height * 4 == len(data):
                    img = Image.frombytes('RGBA', (width, height), data)
                    img.save(fname)
                    print(f'p{page_num+1:03d}_{img_on_page}: RAW RGBA {width}x{height} -> {fname}')
                    saved.append(fname)
                else:
                    print(f'p{page_num+1:03d}_{img_on_page}: SKIP - data={len(data)} != {width}x{height}x3={width*height*3}')
            img_on_page += 1
        except Exception as e:
            print(f'p{page_num+1:03d}: ERROR - {e}')

print(f'\nSaved {len(saved)} images to public/pdf_images/')
