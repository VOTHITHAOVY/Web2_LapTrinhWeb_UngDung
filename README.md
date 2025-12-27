# 🛒 ĐỒ ÁN WEB BÁN HÀNG - E-COMMERCE

> Đồ án môn học Lập trình web và ứng dụng nâng cao
> 
> Công nghệ: PHP, MySQL   
> Môi trường: XAMPP

---

## 📋 MỤC LỤC

1. [Tính năng](#-tính-năng)
2. [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
3. [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
4. [Cài đặt](#-cài-đặt)
5. [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
6. [Hướng dẫn sử dụng](#-hướng-dẫn-sử-dụng)
7. [Tài khoản mặc định](#-tài-khoản-mặc-định)
8. [Chức năng chi tiết](#-chức-năng-chi-tiết)
9. [Database Schema](#-database-schema)
10. [Troubleshooting](#-troubleshooting)

---

## ✨ TÍNH NĂNG

### 👤 Người dùng (End-User) - 5.0 điểm
- ✅ Hiển thị sản phẩm theo phân loại
- ✅ Hiển thị chi tiết sản phẩm
- ✅ Tìm kiếm cơ bản (theo tên)
- ✅ Tìm kiếm nâng cao (tên + loại + khoảng giá)
- ✅ Phân trang kết quả tìm kiếm
- ✅ Đăng ký tài khoản người mua
- ✅ Giỏ hàng đầy đủ
- ✅ Thanh toán (chọn địa chỉ + hình thức thanh toán)
- ✅ Xem lịch sử đơn hàng

### 🔐 Quản trị viên (Admin) - 5.0 điểm
- ✅ Đăng nhập/đăng xuất admin
- ✅ Quản lý người dùng (thêm, sửa, khóa/mở)
- ✅ Quản lý sản phẩm:
  - Thêm sản phẩm (upload ảnh + preview)
  - Sửa sản phẩm (hiển thị đúng thông tin cũ)
  - Xóa sản phẩm (kiểm tra đã bán → ẩn/xóa)
- ✅ Quản lý đơn hàng:
  - Cập nhật trạng thái (chỉ xuôi, không ngược)
  - Lọc theo trạng thái/thời gian/địa điểm
- ✅ Thống kê: Top 5 khách hàng mua nhiều nhất

### 🎯 Yêu cầu khác - 2.0 điểm
- ✅ Loại sản phẩm lưu riêng (quan hệ 1-n)
- ✅ Giao diện Bootstrap 5 đẹp mắt
- ✅ Responsive design

---

## 🛠 CÔNG NGHỆ SỬ DỤNG

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| PHP | 8.0+ | Backend logic |
| MySQL | 5.7+ | Database |
| Bootstrap | 5.3.0 | Frontend UI |
| Font Awesome | 6.4.0 | Icons |
| jQuery | 3.7.0 | JavaScript library |

---

## 💻 YÊU CẦU HỆ THỐNG

- **XAMPP** phiên bản 8.0 trở lên
- **PHP** 8.0+
- **MySQL** 5.7+
- **Browser** hiện đại (Chrome, Firefox, Edge)
- **Dung lượng**: ~50MB

---

## 🚀 CÀI ĐẶT

### Bước 1: Cài đặt XAMPP

1. Download XAMPP từ: https://www.apachefriends.org/
2. Cài đặt vào `C:\xampp`
3. Khởi động **Apache** và **MySQL** trong XAMPP Control Panel

### Bước 2: Tạo Database

1. Truy cập phpMyAdmin: `http://localhost/phpmyadmin`
2. Tạo database mới tên: `ecommerce_db`
3. Import file SQL:
   - Click vào database `ecommerce_db`
   - Chọn tab **Import**
   - Chọn file `database/ecommerce_db.sql`
   - Click **Go**

### Bước 3: Copy Project

1. Copy toàn bộ thư mục project vào:
   ```
   C:\xampp\htdocs\ecommerce\
   ```

2. Cấu trúc sau khi copy:
   ```
   C:\xampp\htdocs\ecommerce\
   ├── config/
   ├── includes/
   ├── assets/
   ├── uploads/
   ├── user/
   ├── admin/
   └── README.md
   ```

### Bước 4: Cấu hình Database (nếu cần)

Mở file `config/database.php` và kiểm tra thông tin:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');              // Để trống với XAMPP mặc định
define('DB_NAME', 'ecommerce_db');
```

### Bước 5: Phân quyền thư mục Upload (Windows)

1. Right-click thư mục `uploads/` → Properties
2. Tab Security → Edit
3. Chọn Users → Cho phép **Full Control**

### Bước 6: Truy cập Website

**User (Người dùng):**
```
http://localhost/ecommerce/user/
```

**Admin (Quản trị):**
```
http://localhost/ecommerce/admin/
```

---

## 📁 CẤU TRÚC THƯ MỤC

```
ecommerce/
│
├── 📁 config/                    # Cấu hình hệ thống
│   └── database.php              # Kết nối database
│
├── 📁 includes/                  # File dùng chung
│   ├── header.php                # Header người dùng
│   ├── footer.php                # Footer chung
│   └── functions.php             # Các hàm PHP tiện ích
│
├── 📁 assets/                    # Tài nguyên tĩnh
│   ├── 📁 css/
│   │   └── style.css             # CSS tùy chỉnh
│   ├── 📁 js/
│   │   └── script.js             # JavaScript
│   └── 📁 images/
│       ├── logo.png              # Logo website
│       └── no-image.png          # Ảnh mặc định
│
├── 📁 uploads/                   # Ảnh upload
│   └── 📁 products/              # Ảnh sản phẩm
│
├── 📁 user/                      # Giao diện người dùng
│   ├── index.php                 # 🏠 Trang chủ
│   ├── products.php              # 📦 Danh sách sản phẩm
│   ├── product-detail.php        # 🔍 Chi tiết sản phẩm
│   ├── search.php                # 🔎 Tìm kiếm
│   ├── cart.php                  # 🛒 Giỏ hàng
│   ├── checkout.php              # 💳 Thanh toán
│   ├── order-history.php         # 📋 Lịch sử đơn hàng
│   ├── login.php                 # 🔐 Đăng nhập
│   ├── register.php              # 📝 Đăng ký
│   └── logout.php                # 🚪 Đăng xuất
│
├── 📁 admin/                     # Giao diện quản trị
│   ├── index.php                 # 📊 Dashboard
│   ├── login.php                 # 🔐 Đăng nhập admin
│   ├── logout.php                # 🚪 Đăng xuất
│   │
│   ├── 📁 includes/              # Header/Sidebar riêng admin
│   │   ├── header.php
│   │   └── sidebar.php
│   │
│   ├── 📁 products/              # Quản lý sản phẩm
│   │   ├── list.php              # Danh sách
│   │   ├── add.php               # Thêm mới
│   │   ├── edit.php              # Chỉnh sửa
│   │   └── delete.php            # Xóa
│   │
│   ├── 📁 users/                 # Quản lý người dùng
│   │   ├── list.php              # Danh sách
│   │   └── manage.php            # Khóa/Mở tài khoản
│   │
│   ├── 📁 orders/                # Quản lý đơn hàng
│   │   ├── list.php              # Danh sách
│   │   ├── detail.php            # Chi tiết
│   │   ├── update-status.php     # Cập nhật trạng thái
│   │   └── filter.php            # Lọc đơn hàng
│   │
│   └── 📁 reports/               # Báo cáo thống kê
│       └── top-customers.php     # Top khách hàng
│
├── 📁 database/                  # File SQL
│   └── ecommerce_db.sql          # Database dump
│
└── 📄 README.md                  # File này
```

---

## 📖 HƯỚNG DẪN SỬ DỤNG

### 👤 Dành cho Người dùng (Khách hàng)

#### 1. Đăng ký tài khoản
- Truy cập: `http://localhost/ecommerce/user/register.php`
- Điền đầy đủ thông tin
- Click "Đăng ký"

#### 2. Đăng nhập
- Truy cập: `http://localhost/ecommerce/user/login.php`
- Nhập username và password
- Click "Đăng nhập"

#### 3. Mua hàng
- **Bước 1:** Duyệt sản phẩm theo danh mục hoặc tìm kiếm
- **Bước 2:** Xem chi tiết sản phẩm → Click "Thêm vào giỏ"
- **Bước 3:** Vào giỏ hàng → Chỉnh số lượng
- **Bước 4:** Click "Thanh toán"
- **Bước 5:** Chọn địa chỉ giao hàng và hình thức thanh toán
- **Bước 6:** Xác nhận đơn hàng

#### 4. Xem lịch sử mua hàng
- Menu → "Đơn hàng của tôi"
- Xem chi tiết từng đơn hàng

---

### 🔐 Dành cho Quản trị viên (Admin)

#### 1. Đăng nhập Admin
- Truy cập: `http://localhost/ecommerce/admin/login.php`
- Username: `admin`
- Password: `admin123`

#### 2. Quản lý sản phẩm
**Thêm sản phẩm mới:**
- Sidebar → Sản phẩm → Thêm mới
- Điền thông tin + Upload ảnh
- Preview ảnh trước khi lưu

**Sửa sản phẩm:**
- Danh sách sản phẩm → Click "Sửa"
- Thông tin cũ tự động hiển thị
- Có thể đổi ảnh mới

**Xóa sản phẩm:**
- Click "Xóa" → Hệ thống kiểm tra:
  - Nếu đã bán → Ẩn khỏi web (is_visible = 0)
  - Nếu chưa bán → Xóa hẳn khỏi DB

#### 3. Quản lý đơn hàng
**Cập nhật trạng thái:**
- Danh sách đơn hàng → Click "Cập nhật"
- Chọn trạng thái mới (chỉ xuôi):
  ```
  Chưa xác nhận → Đã xác nhận → Đã giao → (Thành công/Hủy)
  ```

**Lọc đơn hàng:**
- Theo trạng thái
- Theo khoảng thời gian
- Theo địa điểm giao hàng

#### 4. Thống kê
- Reports → Top khách hàng
- Chọn khoảng thời gian
- Xem top 5 khách mua nhiều nhất

---

## 🔑 TÀI KHOẢN MẶC ĐỊNH

### Admin
```
URL: http://localhost/ecommerce/admin/login.php
Username: admin
Password: admin123
```

### User (Khách hàng)
```
URL: http://localhost/ecommerce/user/login.php
Username: customer1
Password: customer123
```

**⚠️ Lưu ý:** Đổi password sau lần đăng nhập đầu tiên!

---

## 📊 CHỨC NĂNG CHI TIẾT

### 1. Người dùng cuối (5.0 điểm)

| Chức năng | Điểm | Mô tả |
|-----------|------|-------|
| Hiển thị sản phẩm theo loại | 0.5 | Filter theo category_id |
| Chi tiết sản phẩm | 0.5 | Hiển thị đầy đủ thông tin |
| Tìm kiếm cơ bản | 0.5 | LIKE '%keyword%' |
| Tìm kiếm nâng cao | 0.25 | Tên + Loại + Giá |
| Phân trang | 0.5 | 12 sản phẩm/trang |
| Đăng ký | 0.5 | Validation + hash password |
| Giỏ hàng | 0.5 | Thêm/Sửa/Xóa sản phẩm |
| Thanh toán | 1.0 | Chọn địa chỉ + Hình thức |
| Lịch sử đơn hàng | 0.5 | Nhóm theo đơn |

### 2. Quản trị viên (5.0 điểm)

| Chức năng | Điểm | Mô tả |
|-----------|------|-------|
| Đăng nhập/xuất | 0.5 | URL riêng cho admin |
| Quản lý user | 0.5 | CRUD + Lock/Unlock |
| Thêm sản phẩm | 0.5 | Upload + Preview ảnh |
| Sửa sản phẩm | 0.5 | Load dữ liệu cũ |
| Xóa sản phẩm | 0.75 | Logic ẩn/xóa thông minh |
| Cập nhật trạng thái đơn | 0.5 | Chỉ cho phép xuôi |
| Lọc đơn hàng | 0.75 | 3 loại filter |
| Thống kê | 1.0 | Top 5 + Chi tiết |

### 3. Yêu cầu khác (2.0 điểm)

| Yêu cầu | Điểm | Trạng thái |
|---------|------|------------|
| Loại SP riêng (1-n) | Bắt buộc | ✅ Có bảng categories |
| Giao diện đẹp | [-1] | ✅ Bootstrap 5 |
| Tính năng khác | Bonus | ✅ Responsive |

---
