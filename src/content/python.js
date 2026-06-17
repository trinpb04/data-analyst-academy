// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Block `code` để chuỗi chung; comment/print trong code dùng tiếng Anh cho trung lập.
export const pythonLessons = {

  // ─── MODULE 1: Python Basics ─────────────────────────────────────────────

  'py-jupyter': {
    cluster: 'MODULE 1: PYTHON BASICS',
    summary: {
      vi: 'Jupyter Notebook là môi trường lập trình tương tác — nơi code, văn bản, biểu đồ và kết quả sống cùng một chỗ. Đây là công cụ số 1 của Data Scientist toàn cầu.',
      en: 'Jupyter Notebook is an interactive coding environment — where code, text, charts and results all live in one place. It’s the #1 tool of data scientists worldwide.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Tại sao dùng Jupyter?', en: 'Why use Jupyter?' },
        p: { vi: 'Jupyter nổi tiếng vì tính linh hoạt: bạn vừa viết code, vừa thấy kết quả ngay lập tức, vừa viết ghi chú giải thích bằng Markdown — tất cả trong một file `.ipynb`.', en: 'Jupyter is famous for its flexibility: you write code, see results instantly, and add explanatory notes in Markdown — all in one `.ipynb` file.' } },
      { list: [
        [{ vi: 'Interactive Computing', en: 'Interactive computing' }, { vi: 'Chạy từng cell code riêng lẻ và thấy output ngay — lý tưởng để khám phá dữ liệu từng bước.', en: 'Run individual code cells and see output immediately — ideal for exploring data step by step.' }],
        [{ vi: 'Rich Output', en: 'Rich output' }, { vi: 'Hỗ trợ in ra bảng, biểu đồ, ảnh, video, HTML trực tiếp trong notebook.', en: 'Renders tables, charts, images, video and HTML right inside the notebook.' }],
        [{ vi: 'Tích hợp thư viện', en: 'Library integration' }, { vi: 'Tích hợp hoàn hảo với NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow.', en: 'Integrates seamlessly with NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow.' }],
        [{ vi: 'Chia sẻ dễ dàng', en: 'Easy sharing' }, { vi: 'File .ipynb có thể share qua email, GitHub, hoặc xem online qua Jupyter Viewer.', en: 'A .ipynb file can be shared by email, GitHub, or viewed online via Jupyter Viewer.' }],
      ]},
      { h: { vi: 'Cài đặt và Khởi chạy', en: 'Install and launch' },
        p: { vi: 'Cách nhanh nhất để bắt đầu là dùng Anaconda (đã kèm Jupyter) hoặc cài thẳng qua pip:', en: 'The fastest way to start is Anaconda (Jupyter included) or installing directly via pip:' } },
      { code: `# Install Jupyter via pip
pip install jupyter

# Launch Jupyter Notebook
jupyter notebook

# Or use JupyterLab (a more modern UI)
jupyter lab`, lang: 'bash' },
      { h: { vi: 'Các loại Cell trong Jupyter', en: 'Cell types in Jupyter' },
        p: { vi: 'Notebook gồm 2 loại cell chính:', en: 'A notebook has two main cell types:' } },
      { list: [
        [{ vi: 'Code Cell', en: 'Code cell' }, { vi: 'Chứa Python code. Nhấn Shift+Enter để chạy. Output hiển thị phía dưới cell.', en: 'Holds Python code. Press Shift+Enter to run. Output appears below the cell.' }],
        [{ vi: 'Markdown Cell', en: 'Markdown cell' }, { vi: 'Chứa văn bản định dạng, tiêu đề, công thức toán (LaTeX), ảnh. Dùng để ghi chú và giải thích.', en: 'Holds formatted text, headings, math (LaTeX) and images. Used for notes and explanation.' }],
      ]},
      { code: `# Code cell — a simple example
x = 10
y = 20
print(f"Sum: {x + y}")   # Output: Sum: 30

# Magic commands — Jupyter's special commands
%timeit sum(range(1000))     # Measure run time
%matplotlib inline            # Show charts inside the notebook
%%writefile hello.py          # Write this cell to a .py file`, lang: 'python' },
      { note: { vi: 'Shortcut hữu ích: Shift+Enter (chạy cell), Ctrl+Enter (chạy không xuống dòng), A (thêm cell phía trên), B (thêm cell phía dưới), DD (xóa cell), M (chuyển sang Markdown), Y (chuyển sang Code).', en: 'Handy shortcuts: Shift+Enter (run cell), Ctrl+Enter (run in place), A (add cell above), B (add cell below), DD (delete cell), M (switch to Markdown), Y (switch to Code).' } },
    ],
  },

  'py-basics': {
    cluster: 'MODULE 1: PYTHON BASICS',
    summary: {
      vi: 'Python Basics — nền tảng của mọi thứ: biến, kiểu dữ liệu, chuỗi, toán tử. Không có phần này, bạn không thể đọc bất kỳ code Python nào.',
      en: 'Python Basics — the foundation of everything: variables, data types, strings, operators. Without this, you can’t read any Python code.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Variables & Data Types', en: 'Variables & data types' },
        p: { vi: 'Python là ngôn ngữ dynamically typed — bạn không cần khai báo kiểu dữ liệu, Python tự suy ra.', en: 'Python is dynamically typed — you don’t declare a type, Python infers it.' } },
      { list: [
        [{ vi: 'int', en: 'int' }, { vi: 'Số nguyên. Ví dụ: `x = 7`, `age = 25`', en: 'Integer. e.g. `x = 7`, `age = 25`' }],
        [{ vi: 'float', en: 'float' }, { vi: 'Số thực (có phần thập phân). Ví dụ: `y = 12.4`, `pi = 3.14`', en: 'Real number (with decimals). e.g. `y = 12.4`, `pi = 3.14`' }],
        [{ vi: 'bool', en: 'bool' }, { vi: 'Giá trị đúng/sai: `True` hoặc `False` (viết hoa chữ cái đầu!)', en: 'True/false value: `True` or `False` (capitalised!)' }],
        [{ vi: 'str', en: 'str' }, { vi: 'Chuỗi ký tự, bao trong `""` hoặc `\'\'`. Ví dụ: `name = "Alice"`', en: 'A string of characters, wrapped in `""` or `\'\'`. e.g. `name = "Alice"`' }],
        [{ vi: 'NoneType', en: 'NoneType' }, { vi: 'Giá trị trống. Ví dụ: `result = None`', en: 'An empty value. e.g. `result = None`' }],
      ]},
      { code: `# Declaring variables — no 'var' or 'let' keyword
x = 7           # int
y = 12.4        # float
is_valid = True # bool
name = "Alice"  # str
nothing = None  # NoneType

# Check the data type
print(type(x))       # <class 'int'>
print(type(name))    # <class 'str'>

# Type casting
age_str = "25"
age_int = int(age_str)   # "25" -> 25
price = str(99.9)        # 99.9 -> "99.9"`, lang: 'python' },
      { h: { vi: 'Python Operators', en: 'Python operators' },
        p: { vi: 'Python có đầy đủ các toán tử số học, so sánh, và logic:', en: 'Python has a full set of arithmetic, comparison and logical operators:' } },
      { list: [
        [{ vi: 'Số học', en: 'Arithmetic' }, { vi: '`+`, `-`, `*`, `/` (chia lấy float), `//` (chia lấy nguyên), `%` (chia lấy dư), `**` (lũy thừa)', en: '`+`, `-`, `*`, `/` (float division), `//` (floor division), `%` (modulo), `**` (power)' }],
        [{ vi: 'So sánh', en: 'Comparison' }, { vi: '`==`, `!=`, `>`, `<`, `>=`, `<=` → trả về `True`/`False`', en: '`==`, `!=`, `>`, `<`, `>=`, `<=` → return `True`/`False`' }],
        [{ vi: 'Logic', en: 'Logical' }, { vi: '`and`, `or`, `not` — kết hợp điều kiện', en: '`and`, `or`, `not` — combine conditions' }],
        [{ vi: 'Gán kết hợp', en: 'Augmented assignment' }, { vi: '`+=`, `-=`, `*=`, `/=` — viết tắt thay vì `x = x + 1`', en: '`+=`, `-=`, `*=`, `/=` — shorthand for `x = x + 1`' }],
      ]},
      { code: `x = 9
y = 4

print(x + y)    # 13   — Addition
print(x - y)    # 5    — Subtraction
print(x * y)    # 36   — Multiplication
print(x / y)    # 2.25 — Division (float)
print(x // y)   # 2    — Floor division (int)
print(x % y)    # 1    — Modulo (remainder)
print(x ** y)   # 6561 — Exponent (9^4)`, lang: 'python' },
      { h: { vi: 'String Methods', en: 'String methods' },
        p: { vi: 'String (chuỗi) trong Python có rất nhiều phương thức tích hợp sẵn:', en: 'Strings in Python come with many built-in methods:' } },
      { code: `name = "  Hello, Alice!  "

# Cleaning
print(name.strip())          # "Hello, Alice!"
print(name.lower())          # "  hello, alice!  "
print(name.upper())          # "  HELLO, ALICE!  "

# Search and replace
print(name.replace("Alice", "Bob"))  # "  Hello, Bob!  "
print("Hello" in name)               # True

# Split and join
words = "apple,banana,orange"
print(words.split(","))    # ['apple', 'banana', 'orange']
print(" - ".join(["a", "b", "c"]))   # "a - b - c"

# F-string (the modern way to format strings)
age = 25
greeting = f"Hello {name.strip()}, you are {age}."
print(greeting)`, lang: 'python' },
      { note: { vi: 'String Indexing: Python index bắt đầu từ 0. `name[0]` = ký tự đầu tiên. Index âm: `name[-1]` = ký tự cuối cùng. Slicing: `name[2:5]` = lấy ký tự từ index 2 đến 4.', en: 'String indexing: Python indices start at 0. `name[0]` = first character. Negative index: `name[-1]` = last character. Slicing: `name[2:5]` = characters from index 2 to 4.' } },
    ],
  },

  'py-ds': {
    cluster: 'MODULE 1 & 2: DATA STRUCTURES',
    summary: {
      vi: 'Python có 4 cấu trúc dữ liệu tích hợp cốt lõi: List, Tuple, Dictionary, Set. Mỗi cái có ưu thế riêng — hiểu sự khác biệt là chìa khóa viết code Python tốt.',
      en: 'Python has 4 core built-in data structures: List, Tuple, Dictionary, Set. Each has its strengths — knowing the differences is key to writing good Python.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'List — Danh sách có thứ tự, có thể sửa', en: 'List — ordered and mutable' },
        p: { vi: 'List là cấu trúc linh hoạt nhất trong Python. Nó có thứ tự, có thể chứa bất kỳ kiểu dữ liệu nào, và có thể thay đổi (mutable).', en: 'A list is Python’s most flexible structure. It’s ordered, can hold any data type, and is mutable.' } },
      { img: '/pdf_images/p016_0.png', caption: { vi: 'List.append() — cú pháp list_name.append(element) với ví dụ fruits list', en: 'List.append() — syntax list_name.append(element) with the fruits-list example' } },
      { code: `# Create a list
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", True, 3.14]  # a list can hold mixed types

# Access elements (index starts at 0)
print(fruits[0])    # "apple"
print(fruits[-1])   # "orange" (negative index from the end)
print(fruits[1:3])  # ["banana", "orange"] (slicing)

# Add and remove
fruits.append("mango")       # add to the end
fruits.insert(1, "grape")    # insert at index 1
fruits.remove("banana")      # remove by value
popped = fruits.pop()        # remove and return the last element

# Useful operations
print(len(fruits))           # length
print("apple" in fruits)     # membership: True/False
fruits.sort()                # sort (in-place)
fruits_sorted = sorted(fruits)  # return a new sorted list`, lang: 'python' },
      { h: { vi: 'Tuple — Có thứ tự, KHÔNG thể sửa', en: 'Tuple — ordered but immutable' },
        p: { vi: 'Tuple giống List nhưng immutable (bất biến sau khi tạo). Dùng cho dữ liệu không nên thay đổi như tọa độ, config cố định.', en: 'A tuple is like a list but immutable once created. Use it for data that shouldn’t change, like coordinates or fixed config.' } },
      { code: `# Create a tuple — use parentheses ()
coordinates = (10.5, 20.3)
rgb = (255, 128, 0)

# Access like a list
print(coordinates[0])   # 10.5

# Tuple unpacking — very common
x, y = coordinates      # x = 10.5, y = 20.3
r, g, b = rgb           # r = 255, g = 128, b = 0

# Cannot modify:
# coordinates[0] = 99  -> TypeError!`, lang: 'python' },
      { h: { vi: 'Dictionary — Ánh xạ Key-Value', en: 'Dictionary — key-value mapping' },
        p: { vi: 'Dictionary lưu dữ liệu theo cặp key-value. Key phải unique. Tương đương JSON trong Python.', en: 'A dictionary stores data as key-value pairs. Keys must be unique. It’s Python’s equivalent of JSON.' } },
      { img: '/pdf_images/p019_0.png', caption: { vi: 'Dictionary — cú pháp {} key:value và các thao tác cơ bản', en: 'Dictionary — {} key:value syntax and basic operations' } },
      { code: `# Create a dictionary
student = {
    "name": "Alice",
    "age": 22,
    "gpa": 3.8,
    "courses": ["Math", "CS", "Physics"]
}

# Access values
print(student["name"])              # "Alice"
print(student.get("age", "N/A"))   # 22 (get() avoids KeyError)

# Add, update, delete
student["email"] = "alice@uni.edu"  # add a new key
student["gpa"] = 3.9                # update a value
del student["email"]                # delete a key

# Iterate a dictionary
for key, value in student.items():
    print(f"{key}: {value}")

# Dict comprehension — very Pythonic
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`, lang: 'python' },
      { h: { vi: 'Set — Tập hợp không trùng lặp', en: 'Set — a collection of unique items' },
        p: { vi: 'Set tự động loại bỏ các phần tử trùng. Hỗ trợ phép toán tập hợp như giao, hợp, hiệu.', en: 'A set automatically drops duplicates. It supports set operations like intersection, union and difference.' } },
      { code: `# Create a set
colors = {"red", "green", "blue", "red"}  # "red" appears only once
print(colors)   # {'red', 'green', 'blue'}

# Common use: remove duplicates
data = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(data))   # [1, 2, 3, 4]

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)   # {3, 4}        — intersection
print(a | b)   # {1,2,3,4,5,6} — union
print(a - b)   # {1, 2}        — difference`, lang: 'python' },
      { note: { vi: 'Tóm tắt chọn cấu trúc: Cần có thứ tự + sửa được? → List. Cần bất biến, có thứ tự? → Tuple. Cần tra cứu nhanh theo key? → Dictionary. Cần loại trùng lặp? → Set.', en: 'Choosing a structure: Need order + mutability? → List. Need immutable + ordered? → Tuple. Need fast key lookup? → Dictionary. Need to remove duplicates? → Set.' } },
    ],
  },

  // ─── MODULE 2-3: Programming Fundamentals ────────────────────────────────

  'py-control': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: {
      vi: 'Control Flow — điều khiển luồng chương trình với if/elif/else và các toán tử so sánh. Đây là bộ não ra quyết định của mọi chương trình.',
      en: 'Control flow — steering the program with if/elif/else and comparison operators. This is the decision-making brain of every program.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Cấu trúc If / Elif / Else', en: 'If / Elif / Else' },
        p: { vi: 'Python dùng indentation (thụt đầu dòng) thay vì dấu ngoặc {} để xác định khối code. Đây là điều đặc biệt nhất của Python!', en: 'Python uses indentation instead of {} braces to define a code block. This is Python’s most distinctive feature!' } },
      { img: '/pdf_images/p031_2.png', caption: { vi: 'Cấu trúc if-elif-else — code ví dụ điều kiện tuổi', en: 'if-elif-else structure — an age-condition example' } },
      { code: `# Basic syntax
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score {score}: Grade {grade}")  # Score 85: Grade B

# One-line condition (ternary / conditional expression)
status = "Pass" if score >= 60 else "Fail"`, lang: 'python' },
      { h: { vi: 'Comparison Operators', en: 'Comparison operators' },
        p: { vi: 'Các toán tử so sánh luôn trả về Boolean (True/False):', en: 'Comparison operators always return a Boolean (True/False):' } },
      { list: [
        [{ vi: '== (Equal)', en: '== (Equal)' }, { vi: '`a == b` — bằng nhau về giá trị', en: '`a == b` — equal in value' }],
        [{ vi: '!= (Not Equal)', en: '!= (Not Equal)' }, { vi: '`a != b` — khác nhau', en: '`a != b` — not equal' }],
        [{ vi: '> / <', en: '> / <' }, { vi: '`a > b` — lớn hơn / `a < b` — nhỏ hơn', en: '`a > b` — greater than / `a < b` — less than' }],
        [{ vi: '>= / <=', en: '>= / <=' }, { vi: '`a >= b` — lớn hơn hoặc bằng', en: '`a >= b` — greater than or equal' }],
        [{ vi: 'is', en: 'is' }, { vi: '`a is b` — cùng object trong bộ nhớ (khác ==)', en: '`a is b` — same object in memory (different from ==)' }],
        [{ vi: 'in', en: 'in' }, { vi: '`x in list` — kiểm tra x có thuộc list không', en: '`x in list` — check whether x is in the list' }],
      ]},
      { h: { vi: 'Logical Operators', en: 'Logical operators' },
        p: { vi: 'Kết hợp nhiều điều kiện:', en: 'Combine multiple conditions:' } },
      { img: '/pdf_images/p032_1.png', caption: { vi: 'Toán tử AND — cả hai điều kiện phải True', en: 'AND operator — both conditions must be True' } },
      { img: '/pdf_images/p033_0.png', caption: { vi: 'Toán tử NOT — đảo ngược giá trị Boolean', en: 'NOT operator — inverts the Boolean value' } },
      { img: '/pdf_images/p034_0.png', caption: { vi: 'Toán tử OR — chỉ cần một điều kiện True', en: 'OR operator — only one condition needs to be True' } },
      { code: `age = 25
income = 50000
has_job = True

# AND — all conditions must be True
if age >= 18 and income > 30000:
    print("Loan eligible")

# OR — at least one condition is True
if age < 18 or not has_job:
    print("Not eligible")

# NOT — invert
if not (age < 18):
    print("Is an adult")

# Complex combination
if (age >= 18 and has_job) or income > 100000:
    print("Approved")`, lang: 'python' },
      { note: { vi: 'Lỗi thường gặp: Nhầm `=` (gán) với `==` (so sánh). `if x = 5:` sẽ báo lỗi. Phải dùng `if x == 5:`.', en: 'Common mistake: confusing `=` (assignment) with `==` (comparison). `if x = 5:` raises an error. Use `if x == 5:`.' } },
    ],
  },

  'py-loops': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: {
      vi: 'Loops — tự động lặp lại thao tác. For loop khi biết số lần lặp, While loop khi lặp đến khi nào điều kiện sai. Kết hợp với List Comprehension để viết code Python cực ngắn gọn.',
      en: 'Loops — automate repetition. Use a for loop when you know the count, a while loop until a condition becomes false. Combine with list comprehensions for extremely concise Python.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'For Loop — Lặp qua từng phần tử', en: 'For loop — iterate over each element' },
        p: { vi: 'For loop trong Python cực kỳ tự nhiên — duyệt qua bất kỳ iterable nào (list, string, dict, range...).', en: 'Python’s for loop is wonderfully natural — it iterates over any iterable (list, string, dict, range...).' } },
      { img: '/pdf_images/p035_0.png', caption: { vi: 'For Loop — duyệt qua list với ví dụ thực tế', en: 'For loop — iterating a list with a real example' } },
      { code: `# Iterate a list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)   # print each colour

# Iterate with index — use enumerate()
for i, color in enumerate(colors):
    print(f"{i}: {color}")
# 0: red / 1: green / 2: blue

# Use range() to loop N times
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 10, 2): # 2, 4, 6, 8 (start, stop, step)
    print(i)

# Iterate a dictionary
student = {"name": "Alice", "gpa": 3.8}
for key, value in student.items():
    print(f"{key} = {value}")`, lang: 'python' },
      { img: '/pdf_images/p037_0.png', caption: { vi: 'For loop duyệt qua list màu sắc — ví dụ thực tế', en: 'For loop over a list of colours — a real example' } },
      { h: { vi: 'While Loop — Lặp khi điều kiện còn đúng', en: 'While loop — repeat while the condition holds' },
        p: { vi: 'While loop tiếp tục chạy cho đến khi điều kiện trở thành False. Cẩn thận: nếu điều kiện không bao giờ sai → infinite loop!', en: 'A while loop keeps running until the condition becomes False. Careful: if the condition never turns false → infinite loop!' } },
      { img: '/pdf_images/p038_2.png', caption: { vi: 'While loop syntax và ví dụ đếm từ 1 đến 10', en: 'While-loop syntax and a count-from-1-to-10 example' } },
      { code: `# Count from 1 to 10
count = 1
while count <= 10:
    print(count)
    count += 1   # IMPORTANT: must increment count, or it loops forever!

# With break and continue
while True:                    # infinite loop
    user_input = input("Enter a command (quit to exit): ")
    if user_input == "quit":
        break                  # exit the loop
    if user_input == "skip":
        continue               # skip the rest, loop again
    print(f"You entered: {user_input}")`, lang: 'python' },
      { h: { vi: 'List Comprehension — Python đặc sắc', en: 'List comprehension — quintessential Python' },
        p: { vi: 'Cách Python-ic nhất để tạo list mới từ iterable — ngắn gọn, hiệu quả, Pythonic!', en: 'The most Pythonic way to build a new list from an iterable — concise, efficient, idiomatic!' } },
      { code: `# The verbose way (4 lines)
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

# List comprehension — 1 line!
squares = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

# With a filter condition
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
# [4, 16, 36, 64, 100]

# Dict comprehension
word_lengths = {word: len(word) for word in ["apple", "banana", "cherry"]}
# {'apple': 5, 'banana': 6, 'cherry': 6}`, lang: 'python' },
      { note: { vi: 'For vs While: Dùng For khi biết trước số lần lặp hoặc duyệt qua collection. Dùng While khi lặp cho đến khi một điều kiện nào đó thay đổi (ví dụ: chờ user input, đọc đến hết file).', en: 'For vs While: use For when you know the count or are iterating a collection. Use While when looping until some condition changes (e.g. waiting for user input, reading to end of file).' } },
    ],
  },

  'py-functions': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: {
      vi: 'Functions — đóng gói logic có thể tái sử dụng. Python hỗ trợ default args, *args, **kwargs, lambda, và scope rules rõ ràng. Đây là bước đệm quan trọng sang OOP.',
      en: 'Functions — package reusable logic. Python supports default args, *args, **kwargs, lambda and clear scope rules. An important stepping stone to OOP.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Định nghĩa Function', en: 'Defining a function' },
        p: { vi: 'Function nhóm code thành một khối có tên, có thể gọi nhiều lần. Giúp code DRY (Don\'t Repeat Yourself).', en: 'A function groups code into a named block you can call many times. It keeps code DRY (Don’t Repeat Yourself).' } },
      { img: '/pdf_images/p042_0.png', caption: { vi: 'Functions — so sánh built-in function và user-defined function', en: 'Functions — built-in vs user-defined functions' } },
      { code: `# Basic syntax
def greet(name):
    """Docstring: describes what this function does."""
    return f"Hello, {name}!"

result = greet("Alice")
print(result)   # Hello, Alice!

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))     # 9  (exponent defaults to 2)
print(power(3, 3))  # 27`, lang: 'python' },
      { h: { vi: 'Flexible Arguments: *args và **kwargs', en: 'Flexible arguments: *args and **kwargs' },
        p: { vi: 'Python cho phép function nhận số lượng argument không xác định trước:', en: 'Python lets a function take an unknown number of arguments:' } },
      { code: `# *args — many positional arguments -> a tuple
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))          # 6
print(sum_all(1, 2, 3, 4, 5))   # 15

# **kwargs — many keyword arguments -> a dict
def show_info(**data):
    for key, value in data.items():
        print(f"{key}: {value}")

show_info(name="Alice", age=22, city="HCM")
# name: Alice / age: 22 / city: HCM`, lang: 'python' },
      { h: { vi: 'Scope: Local vs Global', en: 'Scope: local vs global' },
        p: { vi: 'Biến khai báo trong function là local — chỉ tồn tại bên trong function đó.', en: 'A variable declared inside a function is local — it only exists inside that function.' } },
      { img: '/pdf_images/p046_3.png', caption: { vi: 'Global vs Local variable scope — ví dụ minh họa', en: 'Global vs local variable scope — an illustration' } },
      { code: `x = "global"        # global variable

def my_function():
    x = "local"       # local variable — doesn't affect the global
    print(x)          # "local"

my_function()
print(x)              # "global" — the global is unchanged

# To modify a global var from inside a function:
count = 0
def increment():
    global count
    count += 1        # OK with the global keyword

increment()
print(count)          # 1`, lang: 'python' },
      { h: { vi: 'Lambda — Function ẩn danh', en: 'Lambda — anonymous functions' },
        p: { vi: 'Lambda là function ngắn gọn, một dòng, thường dùng với map(), filter(), sorted().', en: 'A lambda is a short, one-line function, often used with map(), filter(), sorted().' } },
      { code: `# Lambda syntax: lambda params: expression
square = lambda x: x ** 2
print(square(5))   # 25

# A common use with sorted()
students = [{"name": "Alice", "gpa": 3.8}, {"name": "Bob", "gpa": 3.5}]
sorted_students = sorted(students, key=lambda s: s["gpa"], reverse=True)

# With map() and filter()
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4, 6]
doubled = list(map(lambda x: x * 2, numbers))         # [2, 4, 6, 8, 10, 12]`, lang: 'python' },
      { h: { vi: 'Built-in Functions quan trọng', en: 'Important built-in functions' },
        p: { vi: 'Python có sẵn nhiều built-in function mạnh mẽ:', en: 'Python ships with many powerful built-in functions:' } },
      { img: '/pdf_images/p043_0.png', caption: { vi: 'Built-in functions: sum(), range(), sorted(), len(), enumerate()...', en: 'Built-in functions: sum(), range(), sorted(), len(), enumerate()...' } },
      { list: [
        [{ vi: 'len(x)', en: 'len(x)' }, { vi: 'Độ dài của list, string, dict, tuple...', en: 'Length of a list, string, dict, tuple...' }],
        [{ vi: 'range(start, stop, step)', en: 'range(start, stop, step)' }, { vi: 'Tạo dãy số. Hay dùng trong for loop.', en: 'Generate a sequence of numbers. Common in for loops.' }],
        [{ vi: 'sum(iterable)', en: 'sum(iterable)' }, { vi: 'Tính tổng các số.', en: 'Sum the numbers.' }],
        [{ vi: 'min() / max()', en: 'min() / max()' }, { vi: 'Giá trị nhỏ nhất / lớn nhất.', en: 'Smallest / largest value.' }],
        [{ vi: 'sorted(iterable)', en: 'sorted(iterable)' }, { vi: 'Trả về list mới đã sắp xếp (không sửa list gốc).', en: 'Return a new sorted list (leaves the original unchanged).' }],
        [{ vi: 'enumerate(iterable)', en: 'enumerate(iterable)' }, { vi: 'Trả về (index, value) — dùng trong for loop.', en: 'Return (index, value) — used in for loops.' }],
        [{ vi: 'zip(a, b)', en: 'zip(a, b)' }, { vi: 'Ghép 2 iterable theo từng cặp.', en: 'Pair up two iterables element by element.' }],
      ]},
      { note: { vi: 'Best Practice: Đặt tên function rõ nghĩa, dùng động từ: `calculate_total()`, `get_user_data()`, `filter_active_customers()`. Mỗi function nên chỉ làm 1 việc (Single Responsibility Principle).', en: 'Best practice: name functions clearly with verbs: `calculate_total()`, `get_user_data()`, `filter_active_customers()`. Each function should do one thing (Single Responsibility Principle).' } },
    ],
  },

  'py-oop': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: {
      vi: 'OOP (Object-Oriented Programming) — lập trình hướng đối tượng. Class là bản thiết kế, Object là sản phẩm từ bản thiết kế đó. Python là ngôn ngữ OOP hoàn toàn.',
      en: 'OOP (Object-Oriented Programming). A class is a blueprint, an object is the product made from it. Python is a fully object-oriented language.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Class và Object là gì?', en: 'What are classes and objects?' },
        p: { vi: 'Hãy nghĩ về Class như một bản thiết kế (blueprint) chiếc xe hơi. Object là chiếc xe thực tế được tạo ra từ bản thiết kế đó.', en: 'Think of a class as a car blueprint. An object is the actual car built from that blueprint.' } },
      { list: [
        [{ vi: 'Class', en: 'Class' }, { vi: 'Template/blueprint định nghĩa cấu trúc và hành vi. Ví dụ: class `Car`.', en: 'A template/blueprint defining structure and behaviour. e.g. class `Car`.' }],
        [{ vi: 'Object/Instance', en: 'Object/Instance' }, { vi: 'Một thực thể cụ thể từ class. Ví dụ: `my_car = Car("Toyota", "Camry")`.', en: 'A concrete instance of a class. e.g. `my_car = Car("Toyota", "Camry")`.' }],
        [{ vi: 'Attribute', en: 'Attribute' }, { vi: 'Dữ liệu thuộc về object. Ví dụ: `my_car.color`, `my_car.speed`.', en: 'Data belonging to an object. e.g. `my_car.color`, `my_car.speed`.' }],
        [{ vi: 'Method', en: 'Method' }, { vi: 'Function thuộc về class, thao tác trên object. Ví dụ: `my_car.accelerate()`.', en: 'A function belonging to a class that acts on the object. e.g. `my_car.accelerate()`.' }],
      ]},
      { h: { vi: 'Định nghĩa Class', en: 'Defining a class' },
        p: { vi: 'Dùng từ khóa `class`. Method `__init__` là constructor — chạy khi object được tạo.', en: 'Use the `class` keyword. The `__init__` method is the constructor — it runs when the object is created.' } },
      { img: '/pdf_images/p059_0.png', caption: { vi: 'Class Car — class attribute, __init__, methods: accelerate(), get_speed()', en: 'Class Car — class attribute, __init__, methods: accelerate(), get_speed()' } },
      { code: `class Car:
    # Class attribute — shared by every instance
    max_speed = 120

    # Constructor: __init__ runs when an object is created
    # 'self' refers to the object itself
    def __init__(self, make, model, color, speed=0):
        # Instance attributes — unique per object
        self.make = make
        self.model = model
        self.color = color
        self.speed = speed    # initial speed = 0

    # Method — an action of the object
    def accelerate(self, amount):
        if self.speed + amount <= Car.max_speed:
            self.speed += amount
        else:
            self.speed = Car.max_speed

    def get_speed(self):
        return self.speed

    # __str__ — shown when you print(object)
    def __str__(self):
        return f"{self.color} {self.make} {self.model}"`, lang: 'python' },
      { h: { vi: 'Tạo và dùng Object', en: 'Creating and using objects' },
        p: { vi: 'Gọi class như một function để tạo object (instantiation):', en: 'Call the class like a function to create an object (instantiation):' } },
      { img: '/pdf_images/p059_0.png', caption: { vi: 'Instantiating Car objects — tạo 2 xe với thuộc tính khác nhau', en: 'Instantiating Car objects — two cars with different attributes' } },
      { code: `# Create 2 objects from the Car class
car1 = Car("Toyota", "Camry", "White")
car2 = Car("Honda", "Civic", "Blue")

# Call a method
car1.accelerate(50)
print(car1.get_speed())    # 50

# Access attributes
print(car1.color)          # White
print(car1.make)           # Toyota
print(car1)                # White Toyota Camry (uses __str__)

# Modify an attribute directly
car2.color = "Red"`, lang: 'python' },
      { h: { vi: 'Kế thừa (Inheritance)', en: 'Inheritance' },
        p: { vi: 'Class con có thể kế thừa tất cả attribute và method của class cha, và mở rộng thêm.', en: 'A child class can inherit all attributes and methods of its parent and extend them.' } },
      { code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

# Child class inheriting Animal
class Dog(Animal):
    def speak(self):          # override the parent's method
        return f"{self.name} says: Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says: Meow!"

# Polymorphism — same method call, different behaviour
animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for animal in animals:
    print(animal.speak())`, lang: 'python' },
      { note: { vi: 'Trong Data Science, OOP giúp bạn hiểu các thư viện. Pandas DataFrame, Scikit-Learn Estimator, Matplotlib Figure đều là objects. Khi bạn gọi `df.groupby()` hay `model.fit()`, bạn đang gọi methods của những objects đó.', en: 'In data science, OOP helps you understand the libraries. A Pandas DataFrame, a Scikit-Learn estimator and a Matplotlib figure are all objects. When you call `df.groupby()` or `model.fit()`, you’re calling methods on those objects.' } },
    ],
  },

  'py-except': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: {
      vi: 'Exception Handling — xử lý lỗi thanh lịch thay vì để chương trình crash. Dùng try-except-else-finally để bắt và xử lý các tình huống ngoại lệ một cách chuyên nghiệp.',
      en: 'Exception handling — gracefully handle errors instead of letting the program crash. Use try-except-else-finally to catch and handle exceptional cases professionally.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Errors vs Exceptions', en: 'Errors vs Exceptions' },
        p: { vi: 'Có 2 loại vấn đề trong Python: Syntax Errors (lỗi cú pháp, code không chạy được) và Exceptions (lỗi xảy ra khi đang chạy).', en: 'There are two kinds of problems in Python: syntax errors (the code won’t run) and exceptions (errors that occur at runtime).' } },
      { img: '/pdf_images/p049_0.png', caption: { vi: 'Phân biệt Errors và Exceptions trong Python', en: 'Distinguishing errors from exceptions in Python' } },
      { list: [
        [{ vi: 'SyntaxError', en: 'SyntaxError' }, { vi: 'Lỗi cú pháp — code sai ngữ pháp. Ví dụ: thiếu dấu `:` sau `if`.', en: 'A grammar error in the code. e.g. a missing `:` after `if`.' }],
        [{ vi: 'TypeError', en: 'TypeError' }, { vi: 'Sai kiểu dữ liệu. Ví dụ: `"10" + 5` → không thể cộng str với int.', en: 'Wrong data type. e.g. `"10" + 5` → can’t add str to int.' }],
        [{ vi: 'ValueError', en: 'ValueError' }, { vi: 'Giá trị không hợp lệ. Ví dụ: `int("hello")`.', en: 'An invalid value. e.g. `int("hello")`.' }],
        [{ vi: 'KeyError', en: 'KeyError' }, { vi: 'Truy cập key không tồn tại trong Dict. Ví dụ: `d["nonexistent"]`.', en: 'Accessing a missing key in a dict. e.g. `d["nonexistent"]`.' }],
        [{ vi: 'IndexError', en: 'IndexError' }, { vi: 'Index vượt quá giới hạn List. Ví dụ: `lst[100]` nhưng lst chỉ có 3 phần tử.', en: 'Index out of range. e.g. `lst[100]` when lst has only 3 elements.' }],
        [{ vi: 'ZeroDivisionError', en: 'ZeroDivisionError' }, { vi: 'Chia cho 0. Ví dụ: `10 / 0`.', en: 'Division by zero. e.g. `10 / 0`.' }],
        [{ vi: 'FileNotFoundError', en: 'FileNotFoundError' }, { vi: 'File không tồn tại khi mở.', en: 'The file doesn’t exist when opened.' }],
        [{ vi: 'ImportError', en: 'ImportError' }, { vi: 'Module không được cài hoặc không tìm thấy.', en: 'A module isn’t installed or can’t be found.' }],
      ]},
      { img: '/pdf_images/p049_2.png', caption: { vi: 'Bảng liệt kê Common Exceptions và nguyên nhân', en: 'A table of common exceptions and their causes' } },
      { h: { vi: 'Try-Except-Else-Finally', en: 'Try-Except-Else-Finally' },
        p: { vi: 'Cấu trúc xử lý exception đầy đủ của Python:', en: 'Python’s full exception-handling structure:' } },
      { code: `# Full syntax
try:
    # code that might fail
    number = int(input("Enter a number: "))
    result = 100 / number

except ValueError:
    # raised when input is not a number
    print("Error: you must enter an integer!")

except ZeroDivisionError:
    # raised when the number is 0
    print("Error: cannot divide by zero!")

except Exception as e:
    # catch any other exception
    print(f"Unknown error: {e}")

else:
    # runs only when NO exception occurred
    print(f"Result: {result}")

finally:
    # ALWAYS runs, error or not (cleanup resources)
    print("Program finished.")`, lang: 'python' },
      { h: { vi: 'Ứng dụng thực tế — đọc file an toàn', en: 'Real-world use — reading a file safely' },
        p: { vi: 'Exception handling rất quan trọng khi làm Data Analysis — dữ liệu thực tế không bao giờ "sạch":', en: 'Exception handling is vital in data analysis — real-world data is never “clean”:' } },
      { code: `import pandas as pd

def load_data_safely(filepath):
    """Load a CSV with full error handling."""
    try:
        df = pd.read_csv(filepath)
        print(f"Loaded {len(df)} rows from {filepath}")
        return df

    except FileNotFoundError:
        print(f"File '{filepath}' does not exist.")
        return None

    except pd.errors.EmptyDataError:
        print("The CSV file is empty!")
        return None

    except Exception as e:
        print(f"Unknown error: {e}")
        return None

# Usage
df = load_data_safely("sales_data.csv")
if df is not None:
    print(df.head())`, lang: 'python' },
      { note: { vi: 'Nguyên tắc vàng: Không bao giờ dùng `except:` trần (không chỉ định loại exception) — nó sẽ bắt cả Ctrl+C (KeyboardInterrupt) và SystemExit, gây khó debug. Luôn chỉ định exception type cụ thể.', en: 'Golden rule: never use a bare `except:` (no exception type) — it also catches Ctrl+C (KeyboardInterrupt) and SystemExit, making debugging hard. Always specify the concrete exception type.' } },
    ],
  },

  // ─── MODULE 4: Working with Data ─────────────────────────────────────────

  'py-fileio': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'File I/O — đọc và ghi file là kỹ năng cơ bản. Python dùng hàm `open()` với context manager `with` để làm việc an toàn với file text, CSV, JSON.',
      en: 'File I/O — reading and writing files is a core skill. Python uses `open()` with the `with` context manager to work safely with text, CSV and JSON files.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Mở File với open()', en: 'Opening a file with open()' },
        p: { vi: 'Hàm `open()` nhận 2 tham số chính: đường dẫn file và mode (chế độ mở).', en: 'The `open()` function takes two main arguments: the file path and the mode.' } },
      { list: [
        [{ vi: "'r'  — Read", en: "'r'  — Read" }, { vi: 'Mở file để đọc (mặc định). Lỗi nếu file không tồn tại.', en: 'Open for reading (default). Errors if the file doesn’t exist.' }],
        [{ vi: "'w'  — Write", en: "'w'  — Write" }, { vi: 'Mở để ghi. TẠO file mới nếu chưa có, GHI ĐÈ nếu đã có.', en: 'Open for writing. CREATES a new file or OVERWRITES an existing one.' }],
        [{ vi: "'a'  — Append", en: "'a'  — Append" }, { vi: 'Mở để ghi thêm vào cuối file. Không xóa nội dung cũ.', en: 'Open to append to the end of the file. Keeps existing content.' }],
        [{ vi: "'r+' — Read+Write", en: "'r+' — Read+Write" }, { vi: 'Mở để đọc và ghi. File phải tồn tại.', en: 'Open for reading and writing. The file must exist.' }],
        [{ vi: "'x'  — Exclusive", en: "'x'  — Exclusive" }, { vi: 'Tạo file mới. Lỗi nếu file đã tồn tại.', en: 'Create a new file. Errors if it already exists.' }],
        [{ vi: "'b'  suffix", en: "'b'  suffix" }, { vi: "Binary mode — `'rb'`, `'wb'` — cho file ảnh, PDF, v.v.", en: "Binary mode — `'rb'`, `'wb'` — for images, PDFs, etc." }],
      ]},
      { h: { vi: 'Đọc File — Best Practice dùng with', en: 'Reading files — best practice with `with`' },
        p: { vi: 'Luôn dùng `with open()` — đảm bảo file được đóng tự động sau khi dùng xong, tránh memory leak.', en: 'Always use `with open()` — it auto-closes the file when done, avoiding memory leaks.' } },
      { img: '/pdf_images/p082_0.png', caption: { vi: 'Reading file với open() — read(), store to variable, print content', en: 'Reading a file with open() — read(), store to a variable, print content' } },
      { code: `# READ THE WHOLE FILE
with open('data.txt', 'r') as file:
    content = file.read()        # read everything -> one string
    print(content)

# READ LINE BY LINE
with open('data.txt', 'r') as file:
    lines = file.readlines()     # read all -> list of strings
    for line in lines:
        print(line.strip())      # .strip() removes the trailing \\n

# Most efficient — stream line by line (large files)
with open('big_file.txt', 'r') as file:
    for line in file:            # doesn't load it all into RAM
        process(line.strip())`, lang: 'python' },
      { img: '/pdf_images/p083_2.png', caption: { vi: 'readlines() — đọc từng dòng vào list', en: 'readlines() — read each line into a list' } },
      { h: { vi: 'Ghi File', en: 'Writing files' },
        p: { vi: 'Tạo hoặc ghi đè file bằng mode "w", thêm vào cuối bằng mode "a":', en: 'Create or overwrite with mode "w", append with mode "a":' } },
      { img: '/pdf_images/p086_0.png', caption: { vi: 'Writing file — write mode và append mode', en: 'Writing files — write mode and append mode' } },
      { code: `# WRITE A FILE (mode 'w' — create or overwrite)
with open('output.txt', 'w') as file:
    file.write("First line\\n")
    file.write("Second line\\n")

    # Write multiple lines at once
    lines = ["Alice,25,HCM", "Bob,30,HN", "Charlie,28,DN"]
    file.writelines([line + "\\n" for line in lines])

# APPEND TO THE END (mode 'a')
with open('output.txt', 'a') as file:
    file.write("A new line appended at the end\\n")`, lang: 'python' },
      { img: '/pdf_images/p087_0.png', caption: { vi: 'Append mode — thêm nội dung vào cuối file, không xóa nội dung cũ', en: 'Append mode — add content to the end without erasing existing content' } },
      { h: { vi: 'Làm việc với CSV và JSON', en: 'Working with CSV and JSON' },
        p: { vi: 'Data Analyst thường xuyên làm việc với CSV và JSON:', en: 'Analysts work with CSV and JSON constantly:' } },
      { code: `import csv
import json

# READ CSV
with open('sales.csv', 'r') as file:
    reader = csv.DictReader(file)   # header -> keys automatically
    for row in reader:
        print(row['product'], row['revenue'])

# WRITE CSV
headers = ['name', 'score', 'grade']
data = [['Alice', 95, 'A'], ['Bob', 82, 'B']]
with open('results.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(data)

# READ JSON
with open('config.json', 'r') as file:
    config = json.load(file)   # JSON -> Python dict

# WRITE JSON
data = {"name": "Alice", "scores": [90, 85, 92]}
with open('data.json', 'w') as file:
    json.dump(data, file, indent=2)   # indent for pretty formatting`, lang: 'python' },
      { note: { vi: 'Trong Data Science, hầu hết việc đọc dữ liệu đều qua Pandas (pd.read_csv, pd.read_excel, pd.read_json). Nhưng hiểu File I/O cơ bản giúp bạn xử lý được mọi định dạng file tùy chỉnh.', en: 'In data science most data loading goes through Pandas (pd.read_csv, pd.read_excel, pd.read_json). But understanding basic file I/O lets you handle any custom file format.' } },
    ],
  },

  'py-numpy': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'NumPy (Numerical Python) — thư viện tính toán số học nền tảng của toàn bộ Data Science stack. Nhanh hơn Python list từ 10-100x nhờ vectorization và C code bên dưới.',
      en: 'NumPy (Numerical Python) — the numerical-computing library underpinning the entire data-science stack. 10–100× faster than Python lists thanks to vectorization and C under the hood.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'Tại sao NumPy?', en: 'Why NumPy?' },
        p: { vi: 'Python list rất chậm với tính toán số học vì nó lưu mỗi phần tử ở vị trí bộ nhớ riêng biệt. NumPy array lưu liên tiếp, dùng C bên dưới → cực nhanh.', en: 'Python lists are slow at numeric work because each element lives in a separate memory location. NumPy arrays store data contiguously and use C underneath → very fast.' } },
      { list: [
        [{ vi: 'Vectorization', en: 'Vectorization' }, { vi: 'Không cần viết for loop — NumPy tự áp dụng thao tác cho toàn bộ array cùng lúc.', en: 'No for loop needed — NumPy applies an operation to the whole array at once.' }],
        [{ vi: 'Broadcasting', en: 'Broadcasting' }, { vi: 'Tự động mở rộng array nhỏ để khớp với array lớn hơn khi tính toán.', en: 'Automatically stretches a smaller array to match a larger one during computation.' }],
        [{ vi: 'Nền tảng', en: 'The foundation' }, { vi: 'Pandas, Matplotlib, Scikit-Learn đều xây dựng trên NumPy arrays.', en: 'Pandas, Matplotlib and Scikit-Learn are all built on NumPy arrays.' }],
      ]},
      { h: { vi: '1D Arrays — Vectors', en: '1D arrays — vectors' },
        p: { vi: 'Array 1 chiều trong NumPy giống vector toán học:', en: 'A 1D NumPy array is like a mathematical vector:' } },
      { img: '/pdf_images/p099_0.png', caption: { vi: 'Vector Addition và Vector Subtraction — NumPy 1D array operations', en: 'Vector addition and subtraction — NumPy 1D array operations' } },
      { code: `import numpy as np

# Create a NumPy array
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

# Vectorized operations — no for loop!
print(a + b)     # [11, 22, 33, 44]
print(a * 2)     # [2, 4, 6, 8]
print(a ** 2)    # [1, 4, 9, 16]
print(np.sqrt(a))# [1., 1.41, 1.73, 2.]

# Statistical operations
print(a.mean())  # 2.5
print(a.sum())   # 10
print(a.std())   # standard deviation
print(a.min(), a.max())`, lang: 'python' },
      { h: { vi: '2D Arrays — Matrices', en: '2D arrays — matrices' },
        p: { vi: 'Array 2 chiều là ma trận — cơ sở của Machine Learning và Linear Algebra:', en: 'A 2D array is a matrix — the basis of machine learning and linear algebra:' } },
      { img: '/pdf_images/p100_0.png', caption: { vi: '2D Array — Matrix representation với hàng và cột', en: '2D array — matrix representation with rows and columns' } },
      { img: '/pdf_images/p101_0.png', caption: { vi: 'Matrix Multiplication — phép nhân ma trận (dot product)', en: 'Matrix multiplication (dot product)' } },
      { code: `# Create a 2D array (matrix)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix.shape)    # (3, 3) — 3 rows, 3 cols
print(matrix.ndim)     # 2 — two dimensions
print(matrix.size)     # 9 — total elements

# Indexing — [row, col]
print(matrix[0, 1])    # 2 (row 0, col 1)
print(matrix[:, 1])    # [2, 5, 8] — whole column 1
print(matrix[1, :])    # [4, 5, 6] — whole row 1

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(A @ B)           # matrix multiplication (dot product)
print(A.T)             # transpose
print(np.linalg.det(A))# determinant`, lang: 'python' },
      { h: { vi: 'Tạo Array đặc biệt', en: 'Creating special arrays' },
        p: { vi: 'NumPy có nhiều hàm tạo array tiện lợi:', en: 'NumPy has many convenient array-creation functions:' } },
      { img: '/pdf_images/p103_2.png', caption: { vi: 'NumPy array creation — np.array(), arange, linspace, zeros, ones', en: 'NumPy array creation — np.array(), arange, linspace, zeros, ones' } },
      { code: `# Array-creation functions
np.zeros((3, 4))         # 3x4 matrix of zeros
np.ones((2, 3))          # 2x3 matrix of ones
np.eye(3)                # 3x3 identity matrix
np.random.rand(3, 3)     # 3x3 random matrix in [0,1)
np.random.randn(100)     # 100 random normally-distributed numbers

np.arange(0, 10, 2)      # [0, 2, 4, 6, 8] — like range()
np.linspace(0, 1, 5)     # [0, 0.25, 0.5, 0.75, 1.0] — evenly spaced`, lang: 'python' },
      { h: { vi: 'Broadcasting', en: 'Broadcasting' },
        p: { vi: 'NumPy tự động "mở rộng" array nhỏ để match với array lớn:', en: 'NumPy automatically “stretches” a small array to match a larger one:' } },
      { code: `a = np.array([1, 2, 3])   # shape (3,)
b = 10                    # scalar

# Broadcasting: b is "stretched" to [10, 10, 10]
print(a + b)   # [11, 12, 13]

# Broadcasting with 2D
matrix = np.ones((3, 3))
row = np.array([1, 2, 3])   # shape (3,)
print(matrix + row)   # each row of matrix adds row`, lang: 'python' },
      { note: { vi: 'NumPy là nền móng của cả Python Data Science stack. Pandas dùng NumPy arrays bên dưới. Scikit-Learn nhận input là NumPy arrays. Matplotlib vẽ từ NumPy arrays. Học NumPy = học ngôn ngữ chung của Data Science.', en: 'NumPy is the foundation of the whole Python data-science stack. Pandas uses NumPy arrays underneath. Scikit-Learn takes NumPy arrays as input. Matplotlib plots from NumPy arrays. Learning NumPy = learning the common language of data science.' } },
    ],
  },

  // ─── MODULE 5: APIs ──────────────────────────────────────────────────────

  'py-api': {
    cluster: 'MODULE 5: APIs AND DATA COLLECTION',
    summary: {
      vi: 'APIs (Application Programming Interfaces) — cách giao tiếp với các service bên ngoài qua internet. REST API là chuẩn phổ biến nhất, dùng thư viện `requests` để truy cập.',
      en: 'APIs (Application Programming Interfaces) — how to talk to external services over the internet. REST is the most common standard; use the `requests` library to access it.',
    },
    source: { vi: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).', en: 'Source: Python for Data Science, AI & Development — IBM (Coursera).' },
    body: [
      { h: { vi: 'APIs là gì?', en: 'What is an API?' },
        p: { vi: 'API là "cửa hàng" của một service: bạn gửi "đơn hàng" (request), service trả về "sản phẩm" (response). Dùng để lấy dữ liệu thời gian thực mà không cần scrape HTML.', en: 'An API is a service’s “shop”: you send an “order” (request) and it returns a “product” (response). Use it to get real-time data without scraping HTML.' } },
      { list: [
        [{ vi: 'REST API', en: 'REST API' }, { vi: 'Kiến trúc phổ biến nhất. Giao tiếp qua HTTP, data thường là JSON.', en: 'The most common architecture. Communicates over HTTP, usually with JSON data.' }],
        [{ vi: 'GET', en: 'GET' }, { vi: 'Lấy dữ liệu — an toàn, không thay đổi server.', en: 'Fetch data — safe, doesn’t change the server.' }],
        [{ vi: 'POST', en: 'POST' }, { vi: 'Gửi dữ liệu lên server (tạo mới).', en: 'Send data to the server (create).' }],
        [{ vi: 'PUT / PATCH', en: 'PUT / PATCH' }, { vi: 'Cập nhật dữ liệu.', en: 'Update data.' }],
        [{ vi: 'DELETE', en: 'DELETE' }, { vi: 'Xóa dữ liệu.', en: 'Delete data.' }],
        [{ vi: 'Status Codes', en: 'Status codes' }, { vi: '200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.', en: '200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.' }],
      ]},
      { h: { vi: 'Dùng thư viện requests', en: 'Using the requests library' },
        p: { vi: 'Thư viện `requests` là cách đơn giản nhất để gọi API từ Python:', en: 'The `requests` library is the simplest way to call an API from Python:' } },
      { code: `import requests

# Basic GET request
url = "https://api.github.com/users/octocat"
response = requests.get(url)

# Check the status
print(response.status_code)   # 200 = success

# Get the JSON data
data = response.json()
print(data["name"])       # Monalisa Octocat
print(data["followers"]) # follower count`, lang: 'python' },
      { h: { vi: 'Headers và Query Parameters', en: 'Headers and query parameters' },
        p: { vi: 'Nhiều API yêu cầu authentication (API key) và cho phép lọc dữ liệu qua query parameters:', en: 'Many APIs require authentication (an API key) and allow filtering via query parameters:' } },
      { code: `import requests

# Add headers (API-key authentication)
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

# Query parameters — filter the results
params = {
    "city": "Ho Chi Minh",
    "country": "VN",
    "limit": 10
}

url = "https://api.openweathermap.org/data/2.5/weather"
response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    weather = response.json()
    print(f"Temperature: {weather['main']['temp']}°C")
    print(f"Weather: {weather['weather'][0]['description']}")
else:
    print(f"Error: {response.status_code}")`, lang: 'python' },
      { h: { vi: 'Xử lý Response JSON', en: 'Handling JSON responses' },
        p: { vi: 'API thường trả về JSON — Python tự động convert thành dict/list:', en: 'APIs usually return JSON — Python auto-converts it to a dict/list:' } },
      { code: `import requests
import pandas as pd

# Example: fetch currency exchange rates
url = "https://api.exchangerate-api.com/v4/latest/USD"
data = requests.get(url).json()

# JSON -> DataFrame
rates = data['rates']
df = pd.DataFrame(list(rates.items()), columns=['Currency', 'Rate'])
df_filtered = df[df['Currency'].isin(['VND', 'EUR', 'GBP', 'JPY'])]
print(df_filtered)`, lang: 'python' },
      { note: { vi: 'Luôn lưu API key trong biến môi trường, không hard-code vào code: `import os; key = os.environ.get("API_KEY")`. Không bao giờ push API key lên GitHub! Kiểm tra file `.gitignore` trước khi commit.', en: 'Always store API keys in environment variables, never hard-code them: `import os; key = os.environ.get("API_KEY")`. Never push an API key to GitHub! Check your `.gitignore` before committing.' } },
    ],
  },

  // ─── MODULE 4 (existing, enhanced) ───────────────────────────────────────

  'py-pandas': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'Pandas là thư viện quan trọng nhất để thao tác dữ liệu dạng bảng — được ví như "SQL chạy trong RAM trên Python".',
      en: 'Pandas is the most important library for working with tabular data — think of it as “SQL running in RAM on Python”.',
    },
    source: { vi: 'Nguồn: Python for Data Analysis (Wes McKinney) & Python for Data Science, AI & Development (IBM).', en: 'Source: Python for Data Analysis (Wes McKinney) & Python for Data Science, AI & Development (IBM).' },
    body: [
      { h: { vi: 'DataFrame và Series', en: 'DataFrame and Series' },
        p: { vi: 'Pandas cung cấp hai cấu trúc dữ liệu cốt lõi giúp xử lý dữ liệu dễ dàng như Excel:', en: 'Pandas provides two core structures that make handling data as easy as Excel:' } },
      { list: [
        [{ vi: 'Series', en: 'Series' }, { vi: 'Mảng 1 chiều, giống như một cột trong Excel. Mỗi Series có một Index (nhãn).', en: 'A 1D array, like a column in Excel. Each Series has an index (labels).' }],
        [{ vi: 'DataFrame', en: 'DataFrame' }, { vi: 'Bảng 2 chiều, là tập hợp của nhiều Series ghép lại với nhau cùng chung một Index.', en: 'A 2D table — a collection of Series sharing one common index.' }],
      ]},
      { img: '/pdf_images/p092_0.png', caption: { vi: 'DataFrame vs Series — hai cấu trúc dữ liệu chính trong Pandas', en: 'DataFrame vs Series — the two main Pandas data structures' } },
      { code: `import pandas as pd

# Read a CSV into a DataFrame
df = pd.read_csv('orders.csv')

# Quick exploration
print(df.head())     # first 5 rows (SQL: LIMIT 5)
print(df.tail(3))    # last 3 rows
df.info()            # columns, dtypes, non-null counts
df.describe()        # quick stats: mean, std, min, max...

# Create a DataFrame from a dict
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'score': [95, 82, 78],
    'grade': ['A', 'B', 'C']
}
df = pd.DataFrame(data)`, lang: 'python' },
      { img: '/pdf_images/p093_0.png', caption: { vi: 'read_csv() — load dữ liệu từ file CSV vào DataFrame', en: 'read_csv() — load data from a CSV file into a DataFrame' } },
      { h: { vi: 'Data Manipulation cốt lõi', en: 'Core data manipulation' },
        p: { vi: 'Mọi thao tác SQL đều có bản dịch 1-1 sang Pandas:', en: 'Every SQL operation has a one-to-one translation in Pandas:' } },
      { list: [
        [{ vi: 'Lọc dòng (WHERE)', en: 'Filter rows (WHERE)' }, { vi: '`df[ df["sales"] > 100 ]` — Boolean Masking.', en: '`df[ df["sales"] > 100 ]` — boolean masking.' }],
        [{ vi: 'Chọn cột (SELECT)', en: 'Select columns (SELECT)' }, { vi: '`df[["product_name", "sales"]]` — chọn nhiều cột.', en: '`df[["product_name", "sales"]]` — select multiple columns.' }],
        [{ vi: 'Gom nhóm (GROUP BY)', en: 'Group (GROUP BY)' }, { vi: '`df.groupby("category")["sales"].sum()`', en: '`df.groupby("category")["sales"].sum()`' }],
        [{ vi: 'Nối bảng (JOIN)', en: 'Join tables (JOIN)' }, { vi: '`pd.merge(orders, customers, on="customer_id", how="left")`', en: '`pd.merge(orders, customers, on="customer_id", how="left")`' }],
        [{ vi: 'Sắp xếp (ORDER BY)', en: 'Sort (ORDER BY)' }, { vi: '`df.sort_values("sales", ascending=False)`', en: '`df.sort_values("sales", ascending=False)`' }],
      ]},
      { img: '/pdf_images/p096_0.png', caption: { vi: 'Finding unique elements với unique() và value_counts()', en: 'Finding unique elements with unique() and value_counts()' } },
      { code: `# Filter, select, group
top_sales = (
    df[df['status'] == 'completed']      # WHERE
    [['category', 'sales', 'quantity']]  # SELECT columns
    .groupby('category')['sales']        # GROUP BY
    .sum()                               # aggregation
    .sort_values(ascending=False)        # ORDER BY DESC
    .head(5)                             # LIMIT 5
)

# Handle missing values
print(df.isna().sum())                   # count NaN per column
df['age'].fillna(df['age'].median(), inplace=True)  # fill with the median
df.dropna(subset=['revenue'])            # drop rows missing revenue

# Merge (JOIN)
result = pd.merge(
    orders_df, customers_df,
    on='customer_id',
    how='left'   # 'inner', 'outer', 'left', 'right'
)`, lang: 'python' },
      { note: { vi: 'Method Chaining: Pandas hỗ trợ nối chuỗi hàm để code sạch hơn, tránh tạo ra hàng chục biến trung gian (df1, df2, df_final). Dùng dấu () bên ngoài toàn bộ chain.', en: 'Method chaining: Pandas lets you chain functions for cleaner code, avoiding dozens of intermediate variables (df1, df2, df_final). Wrap the whole chain in parentheses ().' } },
    ],
  },

  'py-eda': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'Exploratory Data Analysis (EDA) — Bước thám hiểm dữ liệu bắt buộc trước khi chạy bất kỳ mô hình phức tạp nào.',
      en: 'Exploratory Data Analysis (EDA) — the mandatory exploration step before running any complex model.',
    },
    body: [
      { h: { vi: 'Quy trình Khám phá dữ liệu (EDA)', en: 'The EDA process' },
        p: { vi: 'EDA là quá trình "làm quen" với dataset: tìm ra phân phối, phát hiện lỗi, và tìm kiếm tương quan.', en: 'EDA is the process of getting acquainted with a dataset: finding distributions, spotting errors, and looking for correlations.' } },
      { list: [
        [{ vi: '1. Đánh giá chất lượng', en: '1. Assess quality' }, { vi: 'Bao nhiêu dữ liệu bị thiếu (Missing values)? Có dòng trùng lặp (Duplicates) không?', en: 'How much data is missing? Are there duplicate rows?' }],
        [{ vi: '2. Phân tích Univariate', en: '2. Univariate analysis' }, { vi: 'Phân tích từng biến một. Nó có phân phối chuẩn không? Có bị lệch (skew) không?', en: 'Analyse one variable at a time. Is it normally distributed? Is it skewed?' }],
        [{ vi: '3. Phát hiện Outliers', en: '3. Detect outliers' }, { vi: 'Có giá trị nào vô lý không (ví dụ: tuổi = 999)?', en: 'Are there impossible values (e.g. age = 999)?' }],
        [{ vi: '4. Phân tích Bivariate', en: '4. Bivariate analysis' }, { vi: 'Tìm kiếm mối quan hệ (Correlation) giữa 2 biến, đặc biệt là quan hệ với biến Target.', en: 'Look for correlations between two variables, especially against the target.' }],
      ]},
      { code: `# 1. Check for missing data
missing_stats = df.isna().sum() / len(df) * 100

# 2. Handle missing values (imputation)
# Fill NaN with the median for a numeric column
df['age'].fillna(df['age'].median(), inplace=True)

# 3. Quick statistical summary
stats = df.describe()  # count, mean, std, min, 25%, 50%, 75%, max

# 4. Correlation matrix (numeric columns only)
corr_matrix = df.corr(numeric_only=True)`, lang: 'python' },
      { note: { vi: 'Nguyên tắc vàng: Đừng bao giờ vội vàng xóa (Drop) các dòng có chứa giá trị thiếu (NaN). Việc thiếu dữ liệu đôi khi chính nó mang ý nghĩa (ví dụ: khách hàng không điền ô khiếu nại nghĩa là họ hài lòng).', en: 'Golden rule: never rush to drop rows with missing values (NaN). Missingness itself can carry meaning (e.g. a customer leaving the complaint field blank may mean they’re satisfied).' } },
    ],
  },

  'py-viz': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'Trực quan hóa bằng Python: Dùng Matplotlib làm nền móng và Seaborn để vẽ các biểu đồ thống kê đẹp mắt một cách nhanh chóng.',
      en: 'Visualisation in Python: use Matplotlib as the foundation and Seaborn to draw beautiful statistical charts quickly.',
    },
    body: [
      { h: { vi: 'Matplotlib vs Seaborn', en: 'Matplotlib vs Seaborn' },
        p: { vi: 'Hệ sinh thái vẽ biểu đồ của Python khá đa dạng, nhưng 2 thư viện này là cốt lõi.', en: 'Python’s charting ecosystem is diverse, but these two libraries are the core.' } },
      { list: [
        [{ vi: 'Matplotlib (.pyplot)', en: 'Matplotlib (.pyplot)' }, { vi: 'Mạnh mẽ, kiểm soát chi tiết đến từng pixel, nhưng cú pháp dài dòng. Giống như xây nhà từ gạch.', en: 'Powerful, pixel-level control, but verbose syntax. Like building a house brick by brick.' }],
        [{ vi: 'Seaborn (sns)', en: 'Seaborn (sns)' }, { vi: 'Được xây dựng trên Matplotlib. Cung cấp các hàm vẽ biểu đồ thống kê phức tạp (heatmap, violin plot) chỉ bằng 1 dòng code, màu sắc mặc định rất đẹp.', en: 'Built on Matplotlib. Draws complex statistical charts (heatmaps, violin plots) in a single line, with beautiful defaults.' }],
      ]},
      { code: `import matplotlib.pyplot as plt
import seaborn as sns

# Set Seaborn's nice theme
sns.set_theme(style='whitegrid')

# 1. Plot a distribution
plt.figure(figsize=(10, 5))
sns.histplot(data=df, x='salary', hue='department', kde=True)
plt.title('Distribution of Salary by Department')
plt.show()

# 2. Plot a correlation matrix (heatmap)
plt.figure(figsize=(8, 6))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')
plt.show()`, lang: 'python' },
      { note: { vi: 'Mẹo EDA: Dùng `sns.pairplot(df)` để ngay lập tức in ra toàn bộ biểu đồ phân tán (scatter) cho mọi cặp biến số học trong dataset. Nó giúp bạn nhìn thấy các cụm (clusters) hoặc tương quan tuyến tính bằng mắt thường chỉ trong 3 giây.', en: 'EDA tip: use `sns.pairplot(df)` to instantly draw scatter plots for every pair of numeric variables. It lets you spot clusters or linear correlations by eye in 3 seconds.' } },
    ],
  },

  'py-ml': {
    cluster: 'MODULE 4-5: MACHINE LEARNING',
    summary: {
      vi: 'Bước đệm từ Data Analyst sang Data Scientist: Sử dụng Scikit-Learn để dự báo tương lai hoặc phân cụm dữ liệu tự động.',
      en: 'The bridge from data analyst to data scientist: use Scikit-Learn to predict the future or automatically cluster data.',
    },
    body: [
      { h: { vi: '2 Nhóm chính của Machine Learning', en: 'The two main families of machine learning' },
        p: { vi: 'Với Data Analytics, bạn giải quyết bài toán kinh doanh, không phải nghiên cứu thuật toán. Do đó, hiểu cách ứng dụng quan trọng hơn toán học bên dưới.', en: 'In analytics you solve business problems, not research algorithms. So understanding application matters more than the underlying math.' } },
      { list: [
        [{ vi: 'Supervised Learning (Học có giám sát)', en: 'Supervised learning' }, { vi: 'Bạn CÓ cột kết quả (Label/Target). Cố gắng tìm ra hàm f(x) ánh xạ dữ liệu (X) ra (Y). Nếu Y là số liên tục: Regression. Nếu Y là danh mục (Yes/No): Classification.', en: 'You HAVE a result column (label/target). You learn a function f(x) mapping data (X) to (Y). If Y is continuous: regression. If Y is categorical (Yes/No): classification.' }],
        [{ vi: 'Unsupervised Learning (Học không giám sát)', en: 'Unsupervised learning' }, { vi: 'Dữ liệu KHÔNG có kết quả mẫu. Thuật toán tự tìm ra cấu trúc ẩn. Ứng dụng số 1: Clustering (K-Means) để phân khúc khách hàng.', en: 'The data has NO labels. The algorithm finds hidden structure on its own. The #1 use: clustering (K-Means) for customer segmentation.' }],
      ]},
      { h: { vi: 'Quy trình huấn luyện cơ bản (Scikit-Learn API)', en: 'The basic training workflow (Scikit-Learn API)' },
        p: { vi: 'Thiết kế của thư viện `sklearn` là một kiệt tác. Mọi thuật toán đều theo đúng 3 bước: khởi tạo -> `.fit()` -> `.predict()`.', en: 'The `sklearn` library’s design is a masterpiece. Every algorithm follows the same 3 steps: initialise -> `.fit()` -> `.predict()`.' } },
      { code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. Split features (X) and target (y)
X = df[['age', 'income', 'visit_count']]
y = df['churn_status']

# 2. CLASSIC MISTAKE if forgotten: split into train/test sets!
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 3. Initialise and train (fit)
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# 4. Predict and evaluate
preds = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, preds))
print(classification_report(y_test, preds))`, lang: 'python' },
      { note: { vi: 'Leakage (Rò rỉ dữ liệu) là lỗi chết người nhất. Nếu bạn tính trung bình toàn bộ file dữ liệu (Cả Train và Test) rồi fillna TRƯỚC KHI chia Train/Test, dữ liệu từ Test (tương lai) đã rò rỉ vào Train (quá khứ). Luôn chia Train/Test đầu tiên!', en: 'Data leakage is the deadliest bug. If you compute a mean over the whole dataset (train AND test) and fillna BEFORE splitting train/test, data from the test set (the future) leaks into train (the past). Always split train/test first!' } },
    ],
  },

  'py-scrape': {
    cluster: 'MODULE 5: APIs AND DATA COLLECTION',
    summary: {
      vi: 'Thu thập dữ liệu tự động (Web Scraping) bằng BeautifulSoup và Requests khi không có sẵn file CSV hay API.',
      en: 'Automated data collection (web scraping) with BeautifulSoup and Requests when there’s no ready CSV or API.',
    },
    body: [
      { h: { vi: 'Khi nào cần Web Scraping?', en: 'When do you need web scraping?' },
        p: { vi: 'Data Analyst không phải lúc nào cũng được dọn sẵn dữ liệu. Đôi khi bạn phải tự đi lấy giá sản phẩm đối thủ từ website của họ.', en: 'Analysts aren’t always handed clean data. Sometimes you must collect a competitor’s product prices straight from their website.' } },
      { img: '/pdf_images/p131_0.png', caption: { vi: 'HTML Structure — title, URL, heading, paragraph, links, image trên trang Wikipedia IBM', en: 'HTML structure — title, URL, heading, paragraph, links, image on the IBM Wikipedia page' } },
      { list: [
        [{ vi: 'Requests', en: 'Requests' }, { vi: 'Thư viện dùng để "gõ cửa" một trang web và tải toàn bộ mã HTML về máy.', en: 'A library to “knock on” a web page and download its full HTML.' }],
        [{ vi: 'BeautifulSoup', en: 'BeautifulSoup' }, { vi: 'Thư viện dùng để "đọc" mã HTML đó và bóc tách ra các thẻ (tags) chứa dữ liệu bạn cần.', en: 'A library to “read” that HTML and extract the tags containing the data you need.' }],
      ]},
      { code: `import requests
from bs4 import BeautifulSoup

url = 'https://example-ecommerce.com/laptops'
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

# Find all tags containing a price
prices = soup.find_all('span', class_='product-price')
for p in prices:
    print(p.text)`, lang: 'python' },
      { img: '/pdf_images/p132_0.png', caption: { vi: 'HTML document tree — cách BeautifulSoup navigate cấu trúc HTML', en: 'HTML document tree — how BeautifulSoup navigates HTML structure' } },
      { h: { vi: 'Navigating HTML với BeautifulSoup', en: 'Navigating HTML with BeautifulSoup' },
        p: { vi: 'Sau khi parse HTML, dùng các method để tìm kiếm và navigate:', en: 'After parsing HTML, use methods to search and navigate:' } },
      { code: `soup = BeautifulSoup(html, 'html.parser')

# Find the first matching element
title = soup.find('h1')
print(title.text)

# Find ALL matching elements
all_links = soup.find_all('a', class_='product-link')

# Navigate the tree
parent = title.parent
children = list(soup.find('div', id='content').children)
siblings = title.next_siblings

# CSS selectors — the most powerful
products = soup.select('div.product-card > h2.title')`, lang: 'python' },
      { h: { vi: 'Scrape bảng HTML trực tiếp vào Pandas', en: 'Scrape HTML tables straight into Pandas' },
        p: { vi: '`pd.read_html()` là cách nhanh nhất để scrape bảng HTML:', en: '`pd.read_html()` is the fastest way to scrape HTML tables:' } },
      { img: '/pdf_images/p133_0.png', caption: { vi: 'Web Scraping workflow — từ URL đến parsed data', en: 'Web-scraping workflow — from URL to parsed data' } },
      { code: `import pandas as pd

# Read all HTML tables from a page
url = "https://en.wikipedia.org/wiki/List_of_countries_by_population"
tables = pd.read_html(url)

# Usually the first table is the one you want
df = tables[0]
print(df.head())`, lang: 'python' },
      { note: { vi: 'Đạo đức và Pháp lý: Luôn kiểm tra file `robots.txt` của website trước khi scrape. Tránh gửi quá nhiều request (hãy dùng time.sleep) để không làm sập server người khác (DDoS vô ý).', en: 'Ethics and legality: always check a site’s `robots.txt` before scraping. Avoid sending too many requests (use time.sleep) so you don’t accidentally crash someone’s server (an unintentional DDoS).' } },
    ],
  },

  'py-stats': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: {
      vi: 'Chạy các kiểm định thống kê chuyên sâu ngay trong Python bằng thư viện SciPy và Statsmodels.',
      en: 'Run rigorous statistical tests right in Python with SciPy and Statsmodels.',
    },
    body: [
      { h: { vi: 'Python cho Thống kê suy diễn', en: 'Python for inferential statistics' },
        p: { vi: 'Khác với Scikit-Learn (thiên về Machine Learning và Dự báo), SciPy và Statsmodels thiên về diễn giải nguyên nhân và kiểm định giả thuyết.', en: 'Unlike Scikit-Learn (geared toward machine learning and prediction), SciPy and Statsmodels lean toward explaining causes and testing hypotheses.' } },
      { list: [
        [{ vi: 'SciPy (.stats)', en: 'SciPy (.stats)' }, { vi: 'Chứa mọi kiểm định A/B Testing phổ biến: T-test, Chi-square, ANOVA.', en: 'Contains all the common A/B-testing tests: t-test, chi-square, ANOVA.' }],
        [{ vi: 'Statsmodels', en: 'Statsmodels' }, { vi: 'Chạy mô hình Hồi quy tuyến tính (Linear Regression) và in ra bảng tóm tắt OLS với đầy đủ p-value, R-squared y hệt như phần mềm R hay SPSS.', en: 'Runs linear regression and prints an OLS summary table with full p-values and R-squared, just like R or SPSS.' }],
      ]},
      { code: `from scipy import stats
import pandas as pd

# Revenue of 2 groups in an A/B test
group_a = [100, 102, 98, 105, 101]
group_b = [110, 115, 108, 112, 114]

# Run an independent t-test
t_stat, p_val = stats.ttest_ind(group_a, group_b)
print(f'P-value: {p_val}')

if p_val < 0.05:
    print('The difference is statistically significant!')`, lang: 'python' },
    ],
  },
};
