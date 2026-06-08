# 🔭 Data Analyst Academy

![Atlas Light Mode](./public/logo-mark-light.png) <!-- Replace with actual screenshot later if you want -->

> Một nền tảng học tập bách khoa toàn thư tương tác dành riêng cho ngành **Data Analytics**, được thiết kế với trải nghiệm thị giác đỉnh cao và lộ trình học tập trực quan.

🔗 **[Trải nghiệm Bản Demo trực tuyến (Sắp ra mắt)](#)**

---

## ✨ Tính Năng Nổi Bật

### 🌐 Bản Đồ Tri Thức (Knowledge Atlas)
Thay vì những danh sách bài học nhàm chán, ứng dụng sử dụng mô phỏng vật lý đồ thị (force-directed graph) để trực quan hóa mối liên hệ giữa các nhóm kiến thức:
- **Kéo, thả, cuộn và phóng to** để tự do khám phá các "hành tinh" kiến thức.
- Bấm vào bất kỳ node nào để mở ra bách khoa toàn thư chi tiết ở thanh Sidebar.

### 🌓 Ngôn Ngữ Thiết Kế Kép (Dual-Theme Aesthetics)
Hệ thống đồ họa được thiết kế riêng biệt cho cả hai chế độ sáng/tối, không chỉ đơn thuần là đảo ngược màu sắc:
- 🌌 **Vũ Trụ (Dark Mode)**: Chìm đắm trong không gian sâu thẳm với những vì sao nhấp nháy, các dải tinh vân rực rỡ và những hành tinh phát sáng tựa như neon.
- 📜 **Bản Đồ Giấy Nến (Light Mode)**: Sang trọng và thanh lịch với nền giấy kem ấm áp, bóng đổ mềm mại, viền nổi 3D tinh tế và các đường nối cong võng êm ái.

### 📚 Nội Dung Chuyên Sâu
Tích hợp sẵn các module kiến thức cốt lõi của một Data Analyst thực thụ:
- **Business Acumen**: Đặt vấn đề, KPIs, Frameworks phân tích.
- **Excel & Spreadsheets**: Công thức lõi, Pivot Table, Power Query.
- **Statistics**: Xác suất thống kê, A/B Testing.
- **SQL & RDBMS**: Truy vấn, JOIN, Window Functions, ETL.
- **DataViz & PowerBI**: Star Schema, DAX, Storytelling.
- **Python**: Pandas, EDA, Matplotlib, Machine Learning cơ bản.

---

## 🚀 Cài Đặt & Chạy Cục Bộ (Local Development)

Dự án được xây dựng trên **React** + **Vite**.

1. **Clone repository:**
   ```bash
   git clone https://github.com/trinpb04/data-analyst-academy.git
   cd data-analyst-academy
   ```

2. **Cài đặt thư viện:**
   ```bash
   npm install
   ```

3. **Chạy server phát triển (Development Server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại `http://localhost:5175/data-analyst-academy/`

---

## 🌍 Hướng Dẫn Đưa Lên Mạng (Deploy lên GitHub Pages)

Vì dự án dùng Vite và đã thiết lập sẵn `base: '/data-analyst-academy/'`, việc đưa lên **GitHub Pages** hoàn toàn miễn phí và tự động chỉ trong vài bước:

**Cách 1: Dùng thư viện `gh-pages` (Nhanh nhất)**
1. Cài đặt công cụ gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Mở file `package.json`, thêm đoạn script sau vào phần `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Chạy lệnh deploy:
   ```bash
   npm run deploy
   ```
4. Lên GitHub > Settings > Pages > Chọn source là nhánh `gh-pages` > Save. Web của bạn sẽ xuất hiện sau vài phút!

**Cách 2: Dùng GitHub Actions (Tự động hóa hoàn toàn)**
1. Lên repository GitHub của bạn, tab **Settings** > **Pages**.
2. Ở mục **Source**, chọn **GitHub Actions**.
3. GitHub sẽ tự nhận diện đây là dự án Vite/Static HTML và gợi ý cấu hình. Bạn chỉ cần bấm "Configure" và commit file cấu hình đó là xong. Mỗi lần bạn push code lên nhánh `main`, web sẽ tự cập nhật!

---

## 🛠 Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS + TailwindCSS (cho tiện ích cơ bản) + CSS Variables Design System.
- **Graph Visualization**: `react-force-graph-2d` + d3-force.

---
*Được phát triển với niềm đam mê dành cho dữ liệu và cái đẹp.*
