# Authentication API Project

## ✅ Features
- User Signup & Login
- Password Hashing with Bcrypt
- JWT Token Generation
- Protected Routes using Middleware
- Basic root route to check if server is running

## 🚀 How to Run
1. Install dependencies:
   ```
   npm install
   ```

2. Create `.env` file:
   ```
   JWT_SECRET=your_secret_key
   ```

3. Start server:
   ```
   npm start
   ```

4. Test API with Postman:
   - POST `/signup` → Register new user
   - POST `/login` → Login and receive JWT
   - GET `/dashboard` → Protected route (send token in `Authorization` header)

## 🛡️ Tech Used
- Express.js
- Bcrypt
- JSON Web Token (JWT)

---

Built for backend authentication evaluation.
