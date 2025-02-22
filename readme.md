# Fashion E-Commerce Website
This project is a web-based fashion store developed as a final project for the Internet and Web Technology course at the University of Information Technology – University of Technology, Ho Chi Minh City. The website is designed to showcase and sell fashion products online, providing users with a seamless shopping experience.
## Introduction
The Fashion E-Commerce Website project aims to build a web application that allows users to easily browse fashion products, manage their shopping carts, and perform online transactions. 
## Key Feature
The system supports multiple user roles, including:
- Admin: Oversees system management and user permissions.
- Employee: Manages product entries and updates.
- Customer: Enjoys the shopping experience, reviews products, and manages personal information.
- Guest: Views product details without needing an account.
## Requirements
- Front-end: HTML, CSS, JavaScript Template Engine: EJS
- Back-end: NodeJS, ExpressJS
- Database: MySQL (using Sequelize ORM)
- Deployment Model: Three-tier architecture (Client - Server - Database)
## Installation and Setup
#### 1. Clone the Repository:
```bash
git clone https://github.com/HoangHai0810/IE104.O12_Nhom8.git
cd IE104.O12_Nhom8
```
#### 2. Install Dependencies:
```bash
npm init
npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1
npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10
npm install --save-dev sequelize-cli@6.2.0
npm install --save mysql2@2.2.5
npm install --save sequelize@6.6.2
npm install --save multer
```
#### 3. Database Setup:
- Install and run XAMPP; start Apache and MySQL.

- Open phpMyAdmin and create a database named fashionweb.

- Run the database migrations:

```bash
npx sequelize-cli db:migrate
```
- Insert sample data:
```bash
node ./src/insert/insertColor.js
node ./src/insert/insertCategory_Product.js
node ./src/insert/insertProduct.js
node ./src/insert/insertProduct_Color.js
node ./src/insert/insertSize.js
node ./src/insert/insertProduct_Size.js
node ./src/insert/insertVoucher.js
node ./src/insert/insertUsers.js
node ./src/insert/insertCustomer.js
node ./src/insert/insertOrder.js
node ./src/insert/insertOrderdetail.js
node ./src/insert/insertFeedbacks.js
```
#### 4. Start the Server:

```bash
npm start
```

Open your browser and navigate to http://localhost:8080
## Contact
Member:
- Anh Hoang-Hai - Email: hoanghaianh0810@gmail.com
- Thi Nguyen-Chi - Email: 21522614@gm.uit.edu.vn
- Duc Bui-Le-Trong - Email: 21520725@gm.uit.edu.vn
- Thinh Nguyen-Tien- Email: 21521472@gm.uit.edu.vn
- Long Truong-Khanh - Email: 21521750@gm.uit.edu.vn
**University of Information Technology, VNU-HCM**
