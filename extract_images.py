import sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader
import os

reader = PdfReader('Python for Data Science, AI & Development.pdf')

# Extract images
os.makedirs('pdf_images', exist_ok=True)
img_count = 0

for page_num, page in enumerate(reader.pages):
    if '/Resources' in page and '/XObject' in page['/Resources']:
        xobjects = page['/Resources']['/XObject']
        for obj_name in xobjects:
            obj = xobjects[obj_name]
            if obj.get('/Subtype') == '/Image':
                img_count += 1
                try:
                    width = obj.get('/Width', 0)
                    height = obj.get('/Height', 0)
                    color_space = obj.get('/ColorSpace', 'Unknown')
                    bits = obj.get('/BitsPerComponent', 'Unknown')
                    print(f'Page {page_num+1}: Image {obj_name} - {width}x{height} - CS:{color_space} - Bits:{bits}')
                    
                    # Try to extract image data
                    if hasattr(obj, 'get_data'):
                        data = obj.get_data()
                        
                        # Save based on filter type
                        filter_type = obj.get('/Filter', '')
                        if str(filter_type) in ['/DCTDecode', 'DCTDecode']:
                            fname = f'pdf_images/p{page_num+1:03d}_{obj_name.replace("/","")}.jpg'
                            with open(fname, 'wb') as f:
                                f.write(data)
                            print(f'  -> Saved as JPEG: {fname}')
                        elif str(filter_type) in ['/FlateDecode', 'FlateDecode']:
                            # Raw pixel data
                            fname = f'pdf_images/p{page_num+1:03d}_{obj_name.replace("/","")}.raw'
                            with open(fname, 'wb') as f:
                                f.write(data)
                            print(f'  -> Saved as RAW: {fname} ({len(data)} bytes)')
                        else:
                            print(f'  -> Filter: {filter_type} (skipping)')
                except Exception as e:
                    print(f'  -> Error: {e}')

print(f'\nTotal images found: {img_count}')
