export const pythonLessons = {

  // ─── MODULE 1: Python Basics ─────────────────────────────────────────────

  'py-jupyter': {
    cluster: 'MODULE 1: PYTHON BASICS',
    summary: 'Jupyter Notebook là môi trường lập trình tương tác — nơi code, văn bản, biểu đồ và kết quả sống cùng một chỗ. Đây là công cụ số 1 của Data Scientist toàn cầu.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Tại sao dùng Jupyter?', p: 'Jupyter nổi tiếng vì tính linh hoạt: bạn vừa viết code, vừa thấy kết quả ngay lập tức, vừa viết ghi chú giải thích bằng Markdown — tất cả trong một file `.ipynb`.' },
      { list: [
        ['Interactive Computing', 'Chạy từng cell code riêng lẻ và thấy output ngay — lý tưởng để khám phá dữ liệu từng bước.'],
        ['Rich Output', 'Hỗ trợ in ra bảng, biểu đồ, ảnh, video, HTML trực tiếp trong notebook.'],
        ['Tích hợp thư viện', 'Tích hợp hoàn hảo với NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow.'],
        ['Chia sẻ dễ dàng', 'File .ipynb có thể share qua email, GitHub, hoặc xem online qua Jupyter Viewer.'],
      ]},
      { h: 'Cài đặt và Khởi chạy', p: 'Cách nhanh nhất để bắt đầu là dùng Anaconda (đã kèm Jupyter) hoặc cài thẳng qua pip:' },
      { code: `# Cài Jupyter qua pip
pip install jupyter

# Khởi chạy Jupyter Notebook
jupyter notebook

# Hoặc dùng JupyterLab (UI hiện đại hơn)
jupyter lab`, lang: 'bash' },
      { h: 'Các loại Cell trong Jupyter', p: 'Notebook gồm 2 loại cell chính:' },
      { list: [
        ['Code Cell', 'Chứa Python code. Nhấn Shift+Enter để chạy. Output hiển thị phía dưới cell.'],
        ['Markdown Cell', 'Chứa văn bản định dạng, tiêu đề, công thức toán (LaTeX), ảnh. Dùng để ghi chú và giải thích.'],
      ]},
      { code: `# Cell Code — ví dụ đơn giản
x = 10
y = 20
print(f"Tổng: {x + y}")   # Output: Tổng: 30

# Magic commands — lệnh đặc biệt của Jupyter
%timeit sum(range(1000))     # Đo thời gian chạy
%matplotlib inline            # Hiện biểu đồ trong notebook
%%writefile hello.py          # Ghi cell này ra file .py`, lang: 'python' },
      { note: 'Shortcut hữu ích: Shift+Enter (chạy cell), Ctrl+Enter (chạy không xuống dòng), A (thêm cell phía trên), B (thêm cell phía dưới), DD (xóa cell), M (chuyển sang Markdown), Y (chuyển sang Code).' },
    ],
  },

  'py-basics': {
    cluster: 'MODULE 1: PYTHON BASICS',
    summary: 'Python Basics — nền tảng của mọi thứ: biến, kiểu dữ liệu, chuỗi, toán tử. Không có phần này, bạn không thể đọc bất kỳ code Python nào.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Variables & Data Types', p: 'Python là ngôn ngữ dynamically typed — bạn không cần khai báo kiểu dữ liệu, Python tự suy ra.' },
      { list: [
        ['int', 'Số nguyên. Ví dụ: `x = 7`, `age = 25`'],
        ['float', 'Số thực (có phần thập phân). Ví dụ: `y = 12.4`, `pi = 3.14`'],
        ['bool', 'Giá trị đúng/sai: `True` hoặc `False` (viết hoa chữ cái đầu!)'],
        ['str', 'Chuỗi ký tự, bao trong `""` hoặc `\'\'`. Ví dụ: `name = "Alice"`'],
        ['NoneType', 'Giá trị trống. Ví dụ: `result = None`'],
      ]},
      { code: `# Khai báo biến — không cần từ khóa 'var' hay 'let'
x = 7           # int
y = 12.4        # float
is_valid = True # bool
name = "Alice"  # str
nothing = None  # NoneType

# Kiểm tra kiểu dữ liệu
print(type(x))       # <class 'int'>
print(type(name))    # <class 'str'>

# Chuyển đổi kiểu (Type Casting)
age_str = "25"
age_int = int(age_str)   # "25" → 25
price = str(99.9)        # 99.9 → "99.9"`, lang: 'python' },
      { h: 'Python Operators', p: 'Python có đầy đủ các toán tử số học, so sánh, và logic:' },

      { list: [
        ['Số học', '`+`, `-`, `*`, `/` (chia lấy float), `//` (chia lấy nguyên), `%` (chia lấy dư), `**` (lũy thừa)'],
        ['So sánh', '`==`, `!=`, `>`, `<`, `>=`, `<=` → trả về `True`/`False`'],
        ['Logic', '`and`, `or`, `not` — kết hợp điều kiện'],
        ['Gán kết hợp', '`+=`, `-=`, `*=`, `/=` — viết tắt thay vì `x = x + 1`'],
      ]},
      { code: `x = 9
y = 4

print(x + y)    # 13  — Addition
print(x - y)    # 5   — Subtraction
print(x * y)    # 36  — Multiplication
print(x / y)    # 2.25 — Division (float)
print(x // y)   # 2   — Floor Division (int)
print(x % y)    # 1   — Modulo (remainder)
print(x ** y)   # 6561 — Exponent (9^4)`, lang: 'python' },
      { h: 'String Methods', p: 'String (chuỗi) trong Python có rất nhiều phương thức tích hợp sẵn:' },

      { code: `name = "  Hello, Alice!  "

# Làm sạch
print(name.strip())          # "Hello, Alice!"
print(name.lower())          # "  hello, alice!  "
print(name.upper())          # "  HELLO, ALICE!  "

# Tìm kiếm và thay thế
print(name.replace("Alice", "Bob"))  # "  Hello, Bob!  "
print("Hello" in name)               # True

# Tách và ghép
words = "apple,banana,orange"
print(words.split(","))    # ['apple', 'banana', 'orange']
print(" - ".join(["a", "b", "c"]))   # "a - b - c"

# F-string (cách hiện đại nhất để format chuỗi)
age = 25
greeting = f"Xin chào {name.strip()}, bạn {age} tuổi."
print(greeting)`, lang: 'python' },
      { note: 'String Indexing: Python index bắt đầu từ 0. `name[0]` = ký tự đầu tiên. Index âm: `name[-1]` = ký tự cuối cùng. Slicing: `name[2:5]` = lấy ký tự từ index 2 đến 4.' },
    ],
  },

  'py-ds': {
    cluster: 'MODULE 1 & 2: DATA STRUCTURES',
    summary: 'Python có 4 cấu trúc dữ liệu tích hợp cốt lõi: List, Tuple, Dictionary, Set. Mỗi cái có ưu thế riêng — hiểu sự khác biệt là chìa khóa viết code Python tốt.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'List — Danh sách có thứ tự, có thể sửa', p: 'List là cấu trúc linh hoạt nhất trong Python. Nó có thứ tự, có thể chứa bất kỳ kiểu dữ liệu nào, và có thể thay đổi (mutable).' },
      { img: '/pdf_images/p016_0.png', caption: 'List.append() — syntax: list_name.append(element) và ví dụ với fruits list' },
      { code: `# Tạo List
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", True, 3.14]  # List có thể chứa nhiều kiểu

# Truy cập phần tử (Index bắt đầu từ 0)
print(fruits[0])    # "apple"
print(fruits[-1])   # "orange" (index âm từ cuối)
print(fruits[1:3])  # ["banana", "orange"] (slicing)

# Thêm và xóa
fruits.append("mango")       # thêm vào cuối
fruits.insert(1, "grape")    # thêm vào vị trí index 1
fruits.remove("banana")      # xóa theo giá trị
popped = fruits.pop()        # xóa và lấy phần tử cuối

# Các thao tác hữu ích
print(len(fruits))           # độ dài
print("apple" in fruits)     # kiểm tra tồn tại: True/False
fruits.sort()                # sắp xếp (in-place)
fruits_sorted = sorted(fruits)  # trả về list mới đã sort`, lang: 'python' },
      { h: 'Tuple — Danh sách có thứ tự, KHÔNG thể sửa', p: 'Tuple giống List nhưng immutable (bất biến sau khi tạo). Dùng cho dữ liệu không nên thay đổi như tọa độ, config cố định.' },
      { code: `# Tạo Tuple — dùng ngoặc tròn ()
coordinates = (10.5, 20.3)
rgb = (255, 128, 0)

# Truy cập giống List
print(coordinates[0])   # 10.5

# Tuple unpacking — rất hay dùng
x, y = coordinates      # x = 10.5, y = 20.3
r, g, b = rgb           # r = 255, g = 128, b = 0

# Không thể sửa:
# coordinates[0] = 99  → TypeError!`, lang: 'python' },
      { h: 'Dictionary — Ánh xạ Key-Value', p: 'Dictionary lưu dữ liệu theo cặp key-value. Key phải unique. Tương đương JSON trong Python.' },
      { img: '/pdf_images/p019_0.png', caption: 'Dictionary — cú pháp {} key:value và các thao tác cơ bản' },
      { code: `# Tạo Dictionary
student = {
    "name": "Alice",
    "age": 22,
    "gpa": 3.8,
    "courses": ["Math", "CS", "Physics"]
}

# Truy cập giá trị
print(student["name"])              # "Alice"
print(student.get("age", "N/A"))   # 22 (get() tránh KeyError)

# Thêm, sửa, xóa
student["email"] = "alice@uni.edu"  # thêm key mới
student["gpa"] = 3.9                # sửa giá trị
del student["email"]                # xóa key

# Duyệt dictionary
for key, value in student.items():
    print(f"{key}: {value}")

# Dict Comprehension — rất Python
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`, lang: 'python' },
      { h: 'Set — Tập hợp không trùng lặp', p: 'Set tự động loại bỏ các phần tử trùng. Hỗ trợ phép toán tập hợp như giao, hợp, hiệu.' },
      { code: `# Tạo Set
colors = {"red", "green", "blue", "red"}  # "red" chỉ xuất hiện 1 lần
print(colors)   # {'red', 'green', 'blue'}

# Ứng dụng phổ biến: loại bỏ trùng lặp
data = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(data))   # [1, 2, 3, 4]

# Phép toán tập hợp
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)   # {3, 4}      — giao (intersection)
print(a | b)   # {1,2,3,4,5,6} — hợp (union)
print(a - b)   # {1, 2}      — hiệu (difference)`, lang: 'python' },
      { note: 'Tóm tắt chọn cấu trúc: Cần có thứ tự + sửa được? → List. Cần bất biến, có thứ tự? → Tuple. Cần tra cứu nhanh theo key? → Dictionary. Cần loại trùng lặp? → Set.' },
    ],
  },

  // ─── MODULE 2-3: Programming Fundamentals ────────────────────────────────

  'py-control': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: 'Control Flow — điều khiển luồng chương trình với if/elif/else và các toán tử so sánh. Đây là bộ não ra quyết định của mọi chương trình.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Cấu trúc If / Elif / Else', p: 'Python dùng indentation (thụt đầu dòng) thay vì dấu ngoặc {} để xác định khối code. Đây là điều đặc biệt nhất của Python!' },
      { img: '/pdf_images/p031_2.png', caption: 'Cấu trúc if-elif-else — code ví dụ điều kiện tuổi' },
      { code: `# Cú pháp cơ bản
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Điểm {score}: Hạng {grade}")  # Điểm 85: Hạng B

# Điều kiện trên 1 dòng (Ternary / Conditional Expression)
status = "Pass" if score >= 60 else "Fail"`, lang: 'python' },
      { h: 'Comparison Operators', p: 'Các toán tử so sánh luôn trả về Boolean (True/False):' },
      { list: [
        ['== (Equal)', '`a == b` — bằng nhau về giá trị'],
        ['!= (Not Equal)', '`a != b` — khác nhau'],
        ['> / <', '`a > b` — lớn hơn / `a < b` — nhỏ hơn'],
        ['>= / <=', '`a >= b` — lớn hơn hoặc bằng'],
        ['is', '`a is b` — cùng object trong bộ nhớ (khác ==)'],
        ['in', '`x in list` — kiểm tra x có thuộc list không'],
      ]},
      { h: 'Logical Operators', p: 'Kết hợp nhiều điều kiện:' },
      { img: '/pdf_images/p032_1.png', caption: 'AND operator — cả hai điều kiện phải True' },
      { img: '/pdf_images/p033_0.png', caption: 'NOT operator — đảo ngược giá trị Boolean' },
      { img: '/pdf_images/p034_0.png', caption: 'OR operator — chỉ cần một điều kiện True' },
      { code: `age = 25
income = 50000
has_job = True

# AND — tất cả điều kiện phải True
if age >= 18 and income > 30000:
    print("Đủ điều kiện vay")

# OR — ít nhất 1 điều kiện True
if age < 18 or not has_job:
    print("Không đủ điều kiện")

# NOT — đảo ngược
if not (age < 18):
    print("Đã là người lớn")

# Kết hợp phức tạp
if (age >= 18 and has_job) or income > 100000:
    print("Được chấp thuận")`, lang: 'python' },
      { note: 'Lỗi thường gặp: Nhầm `=` (gán) với `==` (so sánh). `if x = 5:` sẽ báo lỗi. Phải dùng `if x == 5:`.' },
    ],
  },

  'py-loops': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: 'Loops — tự động lặp lại thao tác. For loop khi biết số lần lặp, While loop khi lặp đến khi nào điều kiện sai. Kết hợp với List Comprehension để viết code Python cực ngắn gọn.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'For Loop — Lặp qua từng phần tử', p: 'For loop trong Python cực kỳ tự nhiên — duyệt qua bất kỳ iterable nào (list, string, dict, range...).' },
      { img: '/pdf_images/p035_0.png', caption: 'For Loop — duyệt qua list với ví dụ thực tế' },
      { code: `# Duyệt qua List
colors = ["red", "green", "blue"]
for color in colors:
    print(color)   # In từng màu

# Duyệt với index — dùng enumerate()
for i, color in enumerate(colors):
    print(f"{i}: {color}")
# 0: red / 1: green / 2: blue

# Dùng range() để lặp N lần
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 10, 2): # 2, 4, 6, 8 (start, stop, step)
    print(i)

# Duyệt Dictionary
student = {"name": "Alice", "gpa": 3.8}
for key, value in student.items():
    print(f"{key} = {value}")`, lang: 'python' },
      { img: '/pdf_images/p037_0.png', caption: 'For loop duyệt qua List màu sắc — ví dụ thực tế' },
      { h: 'While Loop — Lặp khi điều kiện còn đúng', p: 'While loop tiếp tục chạy cho đến khi điều kiện trở thành False. Cẩn thận: nếu điều kiện không bao giờ sai → infinite loop!' },
      { img: '/pdf_images/p038_2.png', caption: 'While loop syntax và ví dụ đếm từ 1 đến 10' },
      { code: `# Đếm từ 1 đến 10
count = 1
while count <= 10:
    print(count)
    count += 1   # QUAN TRỌNG: phải tăng count, không sẽ loop vô tận!

# Với break và continue
while True:                    # Vòng lặp vô hạn
    user_input = input("Nhập lệnh (quit để thoát): ")
    if user_input == "quit":
        break                  # Thoát vòng lặp
    if user_input == "skip":
        continue               # Bỏ qua phần còn lại, lặp lại
    print(f"Bạn nhập: {user_input}")`, lang: 'python' },
      { h: 'List Comprehension — Python đặc sắc', p: 'Cách Python-ic nhất để tạo list mới từ iterable — ngắn gọn, hiệu quả, Pythonic!' },
      { code: `# Cách thông thường (4 dòng)
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

# List Comprehension — 1 dòng!
squares = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

# Với điều kiện lọc
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
# [4, 16, 36, 64, 100]

# Dict Comprehension
word_lengths = {word: len(word) for word in ["apple", "banana", "cherry"]}
# {'apple': 5, 'banana': 6, 'cherry': 6}`, lang: 'python' },
      { note: 'For vs While: Dùng For khi biết trước số lần lặp hoặc duyệt qua collection. Dùng While khi lặp cho đến khi một điều kiện nào đó thay đổi (ví dụ: chờ user input, đọc đến hết file).' },
    ],
  },

  'py-functions': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: 'Functions — đóng gói logic có thể tái sử dụng. Python hỗ trợ default args, *args, **kwargs, lambda, và scope rules rõ ràng. Đây là bước đệm quan trọng sang OOP.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Định nghĩa Function', p: 'Function nhóm code thành một khối có tên, có thể gọi nhiều lần. Giúp code DRY (Don\'t Repeat Yourself).' },
      { img: '/pdf_images/p042_0.png', caption: 'Functions — so sánh built-in function và user-defined function' },
      { code: `# Cú pháp cơ bản
def greet(name):
    """Docstring: mô tả function này làm gì."""
    return f"Xin chào, {name}!"

result = greet("Alice")
print(result)   # Xin chào, Alice!

# Default Parameters — giá trị mặc định
def power(base, exponent=2):
    return base ** exponent

print(power(3))     # 9  (exponent mặc định = 2)
print(power(3, 3))  # 27`, lang: 'python' },
      { h: 'Flexible Arguments: *args và **kwargs', p: 'Python cho phép function nhận số lượng argument không xác định trước:' },
      { code: `# *args — nhận nhiều positional arguments → thành Tuple
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))          # 6
print(sum_all(1, 2, 3, 4, 5))   # 15

# **kwargs — nhận nhiều keyword arguments → thành Dict
def show_info(**data):
    for key, value in data.items():
        print(f"{key}: {value}")

show_info(name="Alice", age=22, city="HCM")
# name: Alice / age: 22 / city: HCM`, lang: 'python' },
      { h: 'Scope: Local vs Global', p: 'Biến khai báo trong function là local — chỉ tồn tại bên trong function đó.' },
      { img: '/pdf_images/p046_3.png', caption: 'Global vs Local variable scope — ví dụ minh họa' },
      { code: `x = "global"        # Biến global

def my_function():
    x = "local"       # Biến local — không ảnh hưởng global
    print(x)          # "local"

my_function()
print(x)              # "global" — biến global không đổi

# Muốn sửa global var từ trong function:
count = 0
def increment():
    global count
    count += 1        # OK khi dùng global keyword

increment()
print(count)          # 1`, lang: 'python' },
      { h: 'Lambda — Function ẩn danh', p: 'Lambda là function ngắn gọn, một dòng, thường dùng với map(), filter(), sorted().' },
      { code: `# Lambda syntax: lambda params: expression
square = lambda x: x ** 2
print(square(5))   # 25

# Ứng dụng phổ biến với sorted()
students = [{"name": "Alice", "gpa": 3.8}, {"name": "Bob", "gpa": 3.5}]
sorted_students = sorted(students, key=lambda s: s["gpa"], reverse=True)

# Với map() và filter()
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4, 6]
doubled = list(map(lambda x: x * 2, numbers))         # [2, 4, 6, 8, 10, 12]`, lang: 'python' },
      { h: 'Built-in Functions quan trọng', p: 'Python có sẵn nhiều built-in function mạnh mẽ:' },
      { img: '/pdf_images/p043_0.png', caption: 'Built-in functions: sum(), range(), sorted(), len(), enumerate()...' },
      { list: [
        ['len(x)', 'Độ dài của list, string, dict, tuple...'],
        ['range(start, stop, step)', 'Tạo dãy số. Hay dùng trong for loop.'],
        ['sum(iterable)', 'Tính tổng các số.'],
        ['min() / max()', 'Giá trị nhỏ nhất / lớn nhất.'],
        ['sorted(iterable)', 'Trả về list mới đã sắp xếp (không sửa list gốc).'],
        ['enumerate(iterable)', 'Trả về (index, value) — dùng trong for loop.'],
        ['zip(a, b)', 'Ghép 2 iterable theo từng cặp.'],
      ]},
      { note: 'Best Practice: Đặt tên function rõ nghĩa, dùng động từ: `calculate_total()`, `get_user_data()`, `filter_active_customers()`. Mỗi function nên chỉ làm 1 việc (Single Responsibility Principle).' },
    ],
  },

  'py-oop': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: 'OOP (Object-Oriented Programming) — lập trình hướng đối tượng. Class là bản thiết kế, Object là sản phẩm từ bản thiết kế đó. Python là ngôn ngữ OOP hoàn toàn.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Class và Object là gì?', p: 'Hãy nghĩ về Class như một bản thiết kế (blueprint) chiếc xe hơi. Object là chiếc xe thực tế được tạo ra từ bản thiết kế đó.' },
      { list: [
        ['Class', 'Template/blueprint định nghĩa cấu trúc và hành vi. Ví dụ: class `Car`.'],
        ['Object/Instance', 'Một thực thể cụ thể từ class. Ví dụ: `my_car = Car("Toyota", "Camry")`.'],
        ['Attribute', 'Dữ liệu thuộc về object. Ví dụ: `my_car.color`, `my_car.speed`.'],
        ['Method', 'Function thuộc về class, thao tác trên object. Ví dụ: `my_car.accelerate()`.'],
      ]},
      { h: 'Định nghĩa Class', p: 'Dùng từ khóa `class`. Method `__init__` là constructor — chạy khi object được tạo.' },
      { img: '/pdf_images/p059_0.png', caption: 'Class Car — class attribute, __init__, methods: accelerate(), get_speed()' },
      { code: `class Car:
    # Class attribute — dùng chung cho mọi instance
    max_speed = 120

    # Constructor: __init__ chạy khi tạo object
    # 'self' là tham chiếu đến chính object đó
    def __init__(self, make, model, color, speed=0):
        # Instance attributes — riêng từng object
        self.make = make
        self.model = model
        self.color = color
        self.speed = speed    # Tốc độ ban đầu = 0

    # Method — hành động của object
    def accelerate(self, amount):
        if self.speed + amount <= Car.max_speed:
            self.speed += amount
        else:
            self.speed = Car.max_speed

    def get_speed(self):
        return self.speed

    # __str__ — hiển thị khi print(object)
    def __str__(self):
        return f"{self.color} {self.make} {self.model}"`, lang: 'python' },
      { h: 'Tạo và dùng Object', p: 'Gọi class như một function để tạo object (instantiation):' },
      { img: '/pdf_images/p059_0.png', caption: 'Instantiating Car objects — tạo 2 xe với thuộc tính khác nhau' },
      { code: `# Tạo 2 objects từ class Car
car1 = Car("Toyota", "Camry", "White")
car2 = Car("Honda", "Civic", "Blue")

# Gọi method
car1.accelerate(50)
print(car1.get_speed())    # 50

# Truy cập attribute
print(car1.color)          # White
print(car1.make)           # Toyota
print(car1)                # White Toyota Camry (dùng __str__)

# Sửa attribute trực tiếp
car2.color = "Red"`, lang: 'python' },
      { h: 'Kế thừa (Inheritance)', p: 'Class con có thể kế thừa tất cả attribute và method của class cha, và mở rộng thêm.' },
      { code: `# Class cha
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

# Class con kế thừa Animal
class Dog(Animal):
    def speak(self):          # Override method của cha
        return f"{self.name} says: Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says: Meow!"

# Polymorphism — gọi cùng method, hành vi khác nhau
animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for animal in animals:
    print(animal.speak())`, lang: 'python' },
      { note: 'Trong Data Science, OOP giúp bạn hiểu các thư viện. Pandas DataFrame, Scikit-Learn Estimator, Matplotlib Figure đều là objects. Khi bạn gọi `df.groupby()` hay `model.fit()`, bạn đang gọi methods của những objects đó.' },
    ],
  },

  'py-except': {
    cluster: 'MODULE 3: PROGRAMMING FUNDAMENTALS',
    summary: 'Exception Handling — xử lý lỗi thanh lịch thay vì để chương trình crash. Dùng try-except-else-finally để bắt và xử lý các tình huống ngoại lệ một cách chuyên nghiệp.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Errors vs Exceptions', p: 'Có 2 loại vấn đề trong Python: Syntax Errors (lỗi cú pháp, code không chạy được) và Exceptions (lỗi xảy ra khi đang chạy).' },
      { img: '/pdf_images/p049_0.png', caption: 'Phân biệt Errors và Exceptions trong Python' },
      { list: [
        ['SyntaxError', 'Lỗi cú pháp — code sai ngữ pháp. Ví dụ: thiếu dấu `:` sau `if`.'],
        ['TypeError', 'Sai kiểu dữ liệu. Ví dụ: `"10" + 5` → không thể cộng str với int.'],
        ['ValueError', 'Giá trị không hợp lệ. Ví dụ: `int("hello")`.'],
        ['KeyError', 'Truy cập key không tồn tại trong Dict. Ví dụ: `d["nonexistent"]`.'],
        ['IndexError', 'Index vượt quá giới hạn List. Ví dụ: `lst[100]` nhưng lst chỉ có 3 phần tử.'],
        ['ZeroDivisionError', 'Chia cho 0. Ví dụ: `10 / 0`.'],
        ['FileNotFoundError', 'File không tồn tại khi mở.'],
        ['ImportError', 'Module không được cài hoặc không tìm thấy.'],
      ]},
      { img: '/pdf_images/p049_2.png', caption: 'Bảng liệt kê Common Exceptions và nguyên nhân' },
      { h: 'Try-Except-Else-Finally', p: 'Cấu trúc xử lý exception đầy đủ của Python:' },
      { code: `# Cú pháp đầy đủ
try:
    # Code có thể gây lỗi
    number = int(input("Nhập một số: "))
    result = 100 / number

except ValueError:
    # Xảy ra khi input không phải số
    print("Lỗi: Phải nhập số nguyên!")

except ZeroDivisionError:
    # Xảy ra khi số = 0
    print("Lỗi: Không thể chia cho 0!")

except Exception as e:
    # Bắt mọi exception khác
    print(f"Lỗi không xác định: {e}")

else:
    # Chỉ chạy khi KHÔNG có exception
    print(f"Kết quả: {result}")

finally:
    # LUÔN chạy, dù có lỗi hay không (dọn dẹp resources)
    print("Kết thúc chương trình.")`, lang: 'python' },
      { h: 'Ứng dụng thực tế — đọc file an toàn', p: 'Exception handling rất quan trọng khi làm Data Analysis — dữ liệu thực tế không bao giờ "sạch":' },
      { code: `import pandas as pd

def load_data_safely(filepath):
    """Load CSV với xử lý lỗi đầy đủ."""
    try:
        df = pd.read_csv(filepath)
        print(f"Đã load {len(df)} dòng từ {filepath}")
        return df

    except FileNotFoundError:
        print(f"File '{filepath}' không tồn tại.")
        return None

    except pd.errors.EmptyDataError:
        print("File CSV rỗng!")
        return None

    except Exception as e:
        print(f"Lỗi không xác định: {e}")
        return None

# Dùng
df = load_data_safely("sales_data.csv")
if df is not None:
    print(df.head())`, lang: 'python' },
      { note: 'Nguyên tắc vàng: Không bao giờ dùng `except:` trần (không chỉ định loại exception) — nó sẽ bắt cả Ctrl+C (KeyboardInterrupt) và SystemExit, gây khó debug. Luôn chỉ định exception type cụ thể.' },
    ],
  },

  // ─── MODULE 4: Working with Data ─────────────────────────────────────────

  'py-fileio': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'File I/O — đọc và ghi file là kỹ năng cơ bản. Python dùng hàm `open()` với context manager `with` để làm việc an toàn với file text, CSV, JSON.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Mở File với open()', p: 'Hàm `open()` nhận 2 tham số chính: đường dẫn file và mode (chế độ mở).' },
      { list: [
        ["'r'  — Read", 'Mở file để đọc (mặc định). Lỗi nếu file không tồn tại.'],
        ["'w'  — Write", 'Mở để ghi. TẠO file mới nếu chưa có, GHI ĐÈ nếu đã có.'],
        ["'a'  — Append", 'Mở để ghi thêm vào cuối file. Không xóa nội dung cũ.'],
        ["'r+' — Read+Write", 'Mở để đọc và ghi. File phải tồn tại.'],
        ["'x'  — Exclusive", 'Tạo file mới. Lỗi nếu file đã tồn tại.'],
        ["'b'  suffix", "Binary mode — `'rb'`, `'wb'` — cho file ảnh, PDF, v.v."],
      ]},
      { h: 'Đọc File — Best Practice dùng with', p: 'Luôn dùng `with open()` — đảm bảo file được đóng tự động sau khi dùng xong, tránh memory leak.' },
      { img: '/pdf_images/p082_0.png', caption: 'Reading file với open() — read(), store to variable, print content' },
      { code: `# ĐỌC TOÀN BỘ FILE
with open('data.txt', 'r') as file:
    content = file.read()        # Đọc tất cả → 1 string
    print(content)

# ĐỌC TỪNG DÒNG
with open('data.txt', 'r') as file:
    lines = file.readlines()     # Đọc tất cả → list of strings
    for line in lines:
        print(line.strip())      # .strip() xóa \\n cuối dòng

# Cách hiệu quả nhất — stream từng dòng (file lớn)
with open('big_file.txt', 'r') as file:
    for line in file:            # Không load hết vào RAM
        process(line.strip())`, lang: 'python' },
      { img: '/pdf_images/p083_2.png', caption: 'readlines() — đọc từng dòng vào list' },
      { h: 'Ghi File', p: 'Tạo hoặc ghi đè file bằng mode "w", thêm vào cuối bằng mode "a":' },
      { img: '/pdf_images/p086_0.png', caption: 'Writing file — write mode và append mode' },
      { code: `# GHI FILE (mode 'w' — tạo mới hoặc ghi đè)
with open('output.txt', 'w') as file:
    file.write("Dòng đầu tiên\\n")
    file.write("Dòng thứ hai\\n")

    # Ghi nhiều dòng cùng lúc
    lines = ["Alice,25,HCM", "Bob,30,HN", "Charlie,28,DN"]
    file.writelines([line + "\\n" for line in lines])

# THÊM VÀO CUỐI (mode 'a' — append)
with open('output.txt', 'a') as file:
    file.write("Dòng mới được thêm vào cuối\\n")`, lang: 'python' },
      { img: '/pdf_images/p087_0.png', caption: 'Append mode — thêm nội dung vào cuối file, không xóa nội dung cũ' },
      { h: 'Làm việc với CSV và JSON', p: 'Data Analyst thường xuyên làm việc với CSV và JSON:' },
      { code: `import csv
import json

# ĐỌC CSV
with open('sales.csv', 'r') as file:
    reader = csv.DictReader(file)   # Header → key tự động
    for row in reader:
        print(row['product'], row['revenue'])

# GHI CSV
headers = ['name', 'score', 'grade']
data = [['Alice', 95, 'A'], ['Bob', 82, 'B']]
with open('results.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(data)

# ĐỌC JSON
with open('config.json', 'r') as file:
    config = json.load(file)   # JSON → Python dict

# GHI JSON
data = {"name": "Alice", "scores": [90, 85, 92]}
with open('data.json', 'w') as file:
    json.dump(data, file, indent=2)   # indent để format đẹp`, lang: 'python' },
      { note: 'Trong Data Science, hầu hết việc đọc dữ liệu đều qua Pandas (pd.read_csv, pd.read_excel, pd.read_json). Nhưng hiểu File I/O cơ bản giúp bạn xử lý được mọi định dạng file tùy chỉnh.' },
    ],
  },

  'py-numpy': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'NumPy (Numerical Python) — thư viện tính toán số học nền tảng của toàn bộ Data Science stack. Nhanh hơn Python list từ 10-100x nhờ vectorization và C code bên dưới.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'Tại sao NumPy?', p: 'Python list rất chậm với tính toán số học vì nó lưu mỗi phần tử ở vị trí bộ nhớ riêng biệt. NumPy array lưu liên tiếp, dùng C bên dưới → cực nhanh.' },
      { list: [
        ['Vectorization', 'Không cần viết for loop — NumPy tự áp dụng thao tác cho toàn bộ array cùng lúc.'],
        ['Broadcasting', 'Tự động mở rộng array nhỏ để khớp với array lớn hơn khi tính toán.'],
        ['Nền tảng', 'Pandas, Matplotlib, Scikit-Learn đều xây dựng trên NumPy arrays.'],
      ]},
      { h: '1D Arrays — Vectors', p: 'Array 1 chiều trong NumPy giống vector toán học:' },
      { img: '/pdf_images/p099_0.png', caption: 'Vector Addition và Vector Subtraction — NumPy 1D array operations' },
      { code: `import numpy as np

# Tạo NumPy array
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

# Vectorized operations — không cần for loop!
print(a + b)     # [11, 22, 33, 44]
print(a * 2)     # [2, 4, 6, 8]
print(a ** 2)    # [1, 4, 9, 16]
print(np.sqrt(a))# [1., 1.41, 1.73, 2.]

# Thao tác thống kê
print(a.mean())  # 2.5
print(a.sum())   # 10
print(a.std())   # độ lệch chuẩn
print(a.min(), a.max())`, lang: 'python' },
      { h: '2D Arrays — Matrices', p: 'Array 2 chiều là ma trận — cơ sở của Machine Learning và Linear Algebra:' },
      { img: '/pdf_images/p100_0.png', caption: '2D Array — Matrix representation với hàng và cột' },
      { img: '/pdf_images/p101_0.png', caption: 'Matrix Multiplication — phép nhân ma trận (dot product)' },
      { code: `# Tạo 2D array (ma trận)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix.shape)    # (3, 3) — 3 hàng, 3 cột
print(matrix.ndim)     # 2 — 2 chiều
print(matrix.size)     # 9 — tổng số phần tử

# Indexing — [hàng, cột]
print(matrix[0, 1])    # 2 (hàng 0, cột 1)
print(matrix[:, 1])    # [2, 5, 8] — toàn bộ cột 1
print(matrix[1, :])    # [4, 5, 6] — toàn bộ hàng 1

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(A @ B)           # Matrix multiplication (dot product)
print(A.T)             # Transpose (chuyển vị)
print(np.linalg.det(A))# Determinant`, lang: 'python' },
      { h: 'Tạo Array đặc biệt', p: 'NumPy có nhiều hàm tạo array tiện lợi:' },
      { img: '/pdf_images/p103_2.png', caption: 'NumPy array creation — np.array(), arange, linspace, zeros, ones' },
      { code: `# Các hàm tạo array
np.zeros((3, 4))         # Ma trận 3x4 toàn số 0
np.ones((2, 3))          # Ma trận 2x3 toàn số 1
np.eye(3)                # Ma trận đơn vị 3x3
np.random.rand(3, 3)     # Ma trận random 0-1
np.random.randn(100)     # 100 số random phân phối chuẩn

np.arange(0, 10, 2)      # [0, 2, 4, 6, 8] — giống range()
np.linspace(0, 1, 5)     # [0, 0.25, 0.5, 0.75, 1.0] — chia đều`, lang: 'python' },
      { h: 'Broadcasting', p: 'NumPy tự động "mở rộng" array nhỏ để match với array lớn:' },
      { code: `a = np.array([1, 2, 3])   # shape (3,)
b = 10                    # scalar

# Broadcasting: b được "mở rộng" thành [10, 10, 10]
print(a + b)   # [11, 12, 13]

# Broadcasting với 2D
matrix = np.ones((3, 3))
row = np.array([1, 2, 3])   # shape (3,)
print(matrix + row)   # Mỗi hàng của matrix cộng với row`, lang: 'python' },
      { note: 'NumPy là nền móng của cả Python Data Science stack. Pandas dùng NumPy arrays bên dưới. Scikit-Learn nhận input là NumPy arrays. Matplotlib vẽ từ NumPy arrays. Học NumPy = học ngôn ngữ chung của Data Science.' },
    ],
  },

  // ─── MODULE 5: APIs ──────────────────────────────────────────────────────

  'py-api': {
    cluster: 'MODULE 5: APIs AND DATA COLLECTION',
    summary: 'APIs (Application Programming Interfaces) — cách giao tiếp với các service bên ngoài qua internet. REST API là chuẩn phổ biến nhất, dùng thư viện `requests` để truy cập.',
    source: 'Nguồn: Python for Data Science, AI & Development — IBM (Coursera).',
    body: [
      { h: 'APIs là gì?', p: 'API là "cửa hàng" của một service: bạn gửi "đơn hàng" (request), service trả về "sản phẩm" (response). Dùng để lấy dữ liệu thời gian thực mà không cần scrape HTML.' },
      { list: [
        ['REST API', 'Kiến trúc phổ biến nhất. Giao tiếp qua HTTP, data thường là JSON.'],
        ['GET', 'Lấy dữ liệu — an toàn, không thay đổi server.'],
        ['POST', 'Gửi dữ liệu lên server (tạo mới).'],
        ['PUT / PATCH', 'Cập nhật dữ liệu.'],
        ['DELETE', 'Xóa dữ liệu.'],
        ['Status Codes', '200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.'],
      ]},
      { h: 'Dùng thư viện requests', p: 'Thư viện `requests` là cách đơn giản nhất để gọi API từ Python:' },
      { code: `import requests

# GET request cơ bản
url = "https://api.github.com/users/octocat"
response = requests.get(url)

# Kiểm tra status
print(response.status_code)   # 200 = thành công

# Lấy data JSON
data = response.json()
print(data["name"])       # Monalisa Octocat
print(data["followers"]) # số followers`, lang: 'python' },
      { h: 'Headers và Query Parameters', p: 'Nhiều API yêu cầu authentication (API key) và cho phép lọc dữ liệu qua query parameters:' },
      { code: `import requests

# Thêm Headers (API Key authentication)
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

# Query Parameters — lọc kết quả
params = {
    "city": "Ho Chi Minh",
    "country": "VN",
    "limit": 10
}

url = "https://api.openweathermap.org/data/2.5/weather"
response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    weather = response.json()
    print(f"Nhiệt độ: {weather['main']['temp']}°C")
    print(f"Thời tiết: {weather['weather'][0]['description']}")
else:
    print(f"Lỗi: {response.status_code}")`, lang: 'python' },
      { h: 'Xử lý Response JSON', p: 'API thường trả về JSON — Python tự động convert thành dict/list:' },
      { code: `import requests
import pandas as pd

# Ví dụ: Lấy tỉ giá tiền tệ
url = "https://api.exchangerate-api.com/v4/latest/USD"
data = requests.get(url).json()

# JSON → DataFrame
rates = data['rates']
df = pd.DataFrame(list(rates.items()), columns=['Currency', 'Rate'])
df_filtered = df[df['Currency'].isin(['VND', 'EUR', 'GBP', 'JPY'])]
print(df_filtered)`, lang: 'python' },
      { note: 'Luôn lưu API key trong biến môi trường, không hard-code vào code: `import os; key = os.environ.get("API_KEY")`. Không bao giờ push API key lên GitHub! Kiểm tra file `.gitignore` trước khi commit.' },
    ],
  },

  // ─── MODULE 4 (existing, enhanced) ───────────────────────────────────────

  'py-pandas': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'Pandas là thư viện quan trọng nhất để thao tác dữ liệu dạng bảng — được ví như "SQL chạy trong RAM trên Python".',
    source: 'Nguồn: Python for Data Analysis (Wes McKinney) & Python for Data Science, AI & Development (IBM).',
    body: [
      { h: 'DataFrame và Series', p: 'Pandas cung cấp hai cấu trúc dữ liệu cốt lõi giúp xử lý dữ liệu dễ dàng như Excel:' },
      { list: [
        ['Series', 'Mảng 1 chiều, giống như một cột trong Excel. Mỗi Series có một Index (nhãn).'],
        ['DataFrame', 'Bảng 2 chiều, là tập hợp của nhiều Series ghép lại với nhau cùng chung một Index.'],
      ]},
      { img: '/pdf_images/p092_0.png', caption: 'DataFrame vs Series — hai cấu trúc dữ liệu chính trong Pandas' },
      { code: `import pandas as pd

# Đọc file CSV thành DataFrame
df = pd.read_csv('orders.csv')

# Khám phá nhanh
print(df.head())     # 5 dòng đầu (SQL: LIMIT 5)
print(df.tail(3))    # 3 dòng cuối
df.info()            # cột, kiểu dữ liệu, non-null count
df.describe()        # thống kê nhanh: mean, std, min, max...

# Tạo DataFrame từ dict
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'score': [95, 82, 78],
    'grade': ['A', 'B', 'C']
}
df = pd.DataFrame(data)`, lang: 'python' },
      { img: '/pdf_images/p093_0.png', caption: 'read_csv() — load dữ liệu từ file CSV vào DataFrame' },
      { h: 'Data Manipulation cốt lõi', p: 'Mọi thao tác SQL đều có bản dịch 1-1 sang Pandas:' },
      { list: [
        ['Lọc dòng (WHERE)', '`df[ df["sales"] > 100 ]` — Boolean Masking.'],
        ['Chọn cột (SELECT)', '`df[["product_name", "sales"]]` — chọn nhiều cột.'],
        ['Gom nhóm (GROUP BY)', '`df.groupby("category")["sales"].sum()`'],
        ['Nối bảng (JOIN)', '`pd.merge(orders, customers, on="customer_id", how="left")`'],
        ['Sắp xếp (ORDER BY)', '`df.sort_values("sales", ascending=False)`'],
      ]},
      { img: '/pdf_images/p096_0.png', caption: 'Finding unique elements với unique() và value_counts()' },
      { code: `# Lọc, chọn, gom nhóm
top_sales = (
    df[df['status'] == 'completed']      # WHERE
    [['category', 'sales', 'quantity']]  # SELECT columns
    .groupby('category')['sales']        # GROUP BY
    .sum()                               # aggregation
    .sort_values(ascending=False)        # ORDER BY DESC
    .head(5)                             # LIMIT 5
)

# Xử lý missing values
print(df.isna().sum())                   # đếm NaN theo cột
df['age'].fillna(df['age'].median(), inplace=True)  # fill bằng median
df.dropna(subset=['revenue'])            # xóa dòng thiếu revenue

# Merge (JOIN)
result = pd.merge(
    orders_df, customers_df,
    on='customer_id',
    how='left'   # 'inner', 'outer', 'left', 'right'
)`, lang: 'python' },
      { note: 'Method Chaining: Pandas hỗ trợ nối chuỗi hàm để code sạch hơn, tránh tạo ra hàng chục biến trung gian (df1, df2, df_final). Dùng dấu () bên ngoài toàn bộ chain.' },
    ],
  },

  'py-eda': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'Exploratory Data Analysis (EDA) — Bước thám hiểm dữ liệu bắt buộc trước khi chạy bất kỳ mô hình phức tạp nào.',
    body: [
      { h: 'Quy trình Khám phá dữ liệu (EDA)', p: 'EDA là quá trình "làm quen" với dataset: tìm ra phân phối, phát hiện lỗi, và tìm kiếm tương quan.' },
      { list: [
        ['1. Đánh giá chất lượng', 'Bao nhiêu dữ liệu bị thiếu (Missing values)? Có dòng trùng lặp (Duplicates) không?'],
        ['2. Phân tích Univariate', 'Phân tích từng biến một. Nó có phân phối chuẩn không? Có bị lệch (skew) không?'],
        ['3. Phát hiện Outliers', 'Có giá trị nào vô lý không (ví dụ: tuổi = 999)?'],
        ['4. Phân tích Bivariate', 'Tìm kiếm mối quan hệ (Correlation) giữa 2 biến, đặc biệt là quan hệ với biến Target.'],
      ]},
      { code: `# 1. Kiểm tra thiếu dữ liệu
missing_stats = df.isna().sum() / len(df) * 100

# 2. Xử lý giá trị thiếu (Imputation)
# Điền NaN bằng giá trị Median cho cột số
df['age'].fillna(df['age'].median(), inplace=True)

# 3. Phân tích thống kê nhanh
stats = df.describe()  # Trả về count, mean, std, min, 25%, 50%, 75%, max

# 4. Ma trận tương quan (chỉ trên cột số)
corr_matrix = df.corr(numeric_only=True)`, lang: 'python' },
      { note: 'Nguyên tắc vàng: Đừng bao giờ vội vàng xóa (Drop) các dòng có chứa giá trị thiếu (NaN). Việc thiếu dữ liệu đôi khi chính nó mang ý nghĩa (ví dụ: khách hàng không điền ô khiếu nại nghĩa là họ hài lòng).' },
    ],
  },

  'py-viz': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'Trực quan hóa bằng Python: Dùng Matplotlib làm nền móng và Seaborn để vẽ các biểu đồ thống kê đẹp mắt một cách nhanh chóng.',
    body: [
      { h: 'Matplotlib vs Seaborn', p: 'Hệ sinh thái vẽ biểu đồ của Python khá đa dạng, nhưng 2 thư viện này là cốt lõi.' },
      { list: [
        ['Matplotlib (.pyplot)', 'Mạnh mẽ, kiểm soát chi tiết đến từng pixel, nhưng cú pháp dài dòng. Giống như xây nhà từ gạch.'],
        ['Seaborn (sns)', 'Được xây dựng trên Matplotlib. Cung cấp các hàm vẽ biểu đồ thống kê phức tạp (heatmap, violin plot) chỉ bằng 1 dòng code, màu sắc mặc định rất đẹp.'],
      ]},
      { code: `import matplotlib.pyplot as plt
import seaborn as sns

# Đặt theme đẹp của seaborn
sns.set_theme(style='whitegrid')

# 1. Vẽ phân phối (Distribution)
plt.figure(figsize=(10, 5))
sns.histplot(data=df, x='salary', hue='department', kde=True)
plt.title('Distribution of Salary by Department')
plt.show()

# 2. Vẽ ma trận tương quan (Heatmap)
plt.figure(figsize=(8, 6))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')
plt.show()`, lang: 'python' },
      { note: 'Mẹo EDA: Dùng `sns.pairplot(df)` để ngay lập tức in ra toàn bộ biểu đồ phân tán (scatter) cho mọi cặp biến số học trong dataset. Nó giúp bạn nhìn thấy các cụm (clusters) hoặc tương quan tuyến tính bằng mắt thường chỉ trong 3 giây.' },
    ],
  },

  'py-ml': {
    cluster: 'MODULE 4-5: MACHINE LEARNING',
    summary: 'Bước đệm từ Data Analyst sang Data Scientist: Sử dụng Scikit-Learn để dự báo tương lai hoặc phân cụm dữ liệu tự động.',
    body: [
      { h: '2 Nhóm chính của Machine Learning', p: 'Với Data Analytics, bạn giải quyết bài toán kinh doanh, không phải nghiên cứu thuật toán. Do đó, hiểu cách ứng dụng quan trọng hơn toán học bên dưới.' },
      { list: [
        ['Supervised Learning (Học có giám sát)', 'Bạn CÓ cột kết quả (Label/Target). Cố gắng tìm ra hàm f(x) ánh xạ dữ liệu (X) ra (Y). Nếu Y là số liên tục: Regression. Nếu Y là danh mục (Yes/No): Classification.'],
        ['Unsupervised Learning (Học không giám sát)', 'Dữ liệu KHÔNG có kết quả mẫu. Thuật toán tự tìm ra cấu trúc ẩn. Ứng dụng số 1: Clustering (K-Means) để phân khúc khách hàng.'],
      ]},
      { h: 'Quy trình huấn luyện cơ bản (Scikit-Learn API)', p: 'Thiết kế của thư viện `sklearn` là một kiệt tác. Mọi thuật toán đều theo đúng 3 bước: khởi tạo -> `.fit()` -> `.predict()`.' },
      { code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. Tách Features (X) và Target (y)
X = df[['age', 'income', 'visit_count']]
y = df['churn_status']

# 2. LỖI KINH ĐIỂN nếu quên: Phải chia Train/Test set!
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 3. Khởi tạo và Huấn luyện (Fit)
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# 4. Dự báo và Đánh giá (Predict & Evaluate)
preds = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, preds))
print(classification_report(y_test, preds))`, lang: 'python' },
      { note: 'Leakage (Rò rỉ dữ liệu) là lỗi chết người nhất. Nếu bạn tính trung bình toàn bộ file dữ liệu (Cả Train và Test) rồi fillna TRƯỚC KHI chia Train/Test, dữ liệu từ Test (tương lai) đã rò rỉ vào Train (quá khứ). Luôn chia Train/Test đầu tiên!' },
    ],
  },

  'py-scrape': {
    cluster: 'MODULE 5: APIs AND DATA COLLECTION',
    summary: 'Thu thập dữ liệu tự động (Web Scraping) bằng BeautifulSoup và Requests khi không có sẵn file CSV hay API.',
    body: [
      { h: 'Khi nào cần Web Scraping?', p: 'Data Analyst không phải lúc nào cũng được dọn sẵn dữ liệu. Đôi khi bạn phải tự đi lấy giá sản phẩm đối thủ từ website của họ.' },
      { img: '/pdf_images/p131_0.png', caption: 'HTML Structure — title, URL, heading, paragraph, links, image trên trang Wikipedia IBM' },
      { list: [
        ['Requests', 'Thư viện dùng để "gõ cửa" một trang web và tải toàn bộ mã HTML về máy.'],
        ['BeautifulSoup', 'Thư viện dùng để "đọc" mã HTML đó và bóc tách ra các thẻ (tags) chứa dữ liệu bạn cần.'],
      ]},
      { code: `import requests
from bs4 import BeautifulSoup

url = 'https://example-ecommerce.com/laptops'
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

# Tìm tất cả các thẻ chứa giá
prices = soup.find_all('span', class_='product-price')
for p in prices:
    print(p.text)`, lang: 'python' },
      { img: '/pdf_images/p132_0.png', caption: 'HTML document tree — cách BeautifulSoup navigate cấu trúc HTML' },
      { h: 'Navigating HTML với BeautifulSoup', p: 'Sau khi parse HTML, dùng các method để tìm kiếm và navigate:' },
      { code: `soup = BeautifulSoup(html, 'html.parser')

# Tìm phần tử đầu tiên khớp
title = soup.find('h1')
print(title.text)

# Tìm TẤT CẢ phần tử khớp
all_links = soup.find_all('a', class_='product-link')

# Navigate theo cấu trúc cây
parent = title.parent
children = list(soup.find('div', id='content').children)
siblings = title.next_siblings

# CSS Selectors — mạnh nhất
products = soup.select('div.product-card > h2.title')`, lang: 'python' },
      { h: 'Scrape bảng HTML trực tiếp vào Pandas', p: '`pd.read_html()` là cách nhanh nhất để scrape bảng HTML:' },
      { img: '/pdf_images/p133_0.png', caption: 'Web Scraping workflow — từ URL đến parsed data' },
      { code: `import pandas as pd

# Đọc tất cả bảng HTML từ 1 trang
url = "https://en.wikipedia.org/wiki/List_of_countries_by_population"
tables = pd.read_html(url)

# Thường bảng đầu tiên là bảng cần
df = tables[0]
print(df.head())`, lang: 'python' },
      { note: 'Đạo đức và Pháp lý: Luôn kiểm tra file `robots.txt` của website trước khi scrape. Tránh gửi quá nhiều request (hãy dùng time.sleep) để không làm sập server người khác (DDoS vô ý).' },
    ],
  },

  'py-stats': {
    cluster: 'MODULE 4: WORKING WITH DATA',
    summary: 'Chạy các kiểm định thống kê chuyên sâu ngay trong Python bằng thư viện SciPy và Statsmodels.',
    body: [
      { h: 'Python cho Thống kê suy diễn', p: 'Khác với Scikit-Learn (thiên về Machine Learning và Dự báo), SciPy và Statsmodels thiên về diễn giải nguyên nhân và kiểm định giả thuyết.' },
      { list: [
        ['SciPy (.stats)', 'Chứa mọi kiểm định A/B Testing phổ biến: T-test, Chi-square, ANOVA.'],
        ['Statsmodels', 'Chạy mô hình Hồi quy tuyến tính (Linear Regression) và in ra bảng tóm tắt OLS với đầy đủ p-value, R-squared y hệt như phần mềm R hay SPSS.'],
      ]},
      { code: `from scipy import stats
import pandas as pd

# Dữ liệu doanh thu của 2 nhóm trong A/B Test
group_a = [100, 102, 98, 105, 101]
group_b = [110, 115, 108, 112, 114]

# Chạy Independent T-test
t_stat, p_val = stats.ttest_ind(group_a, group_b)
print(f'P-value: {p_val}')

if p_val < 0.05:
    print('Khác biệt có ý nghĩa thống kê!')`, lang: 'python' },
    ],
  },
};
