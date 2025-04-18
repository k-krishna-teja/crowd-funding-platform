
# **Crowdfunding Platform**  

### **Overview**  
A crowdfunding platform where users can **create, manage, and donate** to various campaigns. Built using **React.js, Express.js, and MongoDB**, this project aims to streamline campaign creation and support community-driven funding initiatives.  

## **Features**  
✅ Users can create campaigns with title, description, and images  
✅ View all active campaigns and individual campaign details  
✅ Upload and display campaign images  
✅ Donations functionality (planned)  

---

## **Installation & Setup**  

### **Prerequisites**  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  
- Package Manager (npm or yarn)  

### **Steps to Run Locally**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/crowdfunding-platform.git
   cd crowdfunding-platform
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Set up the environment variables (`.env` file) for MongoDB:  
   ```plaintext
   DATABASE_URL=mongodb://localhost:27017/crowdfunding
   PORT=3000
   ```  
4. Start the backend server:  
   ```bash
   npm start
   ```  
5. Start the React frontend:  
   ```bash
   cd client
   npm start
   ```  

---

## **API Usage**  

### **Create a Campaign**  
```http
POST /campaigns
```
#### **Request Body**  
```json
{
  "title": "Helping Kids Learn",
  "description": "Raising funds for educational programs.",
  "image": "data:image/png;base64,..."
}
```
#### **Response**  
```json
{
  "id": 123456,
  "title": "Helping Kids Learn",
  "description": "Raising funds for educational programs.",
  "image": "data:image/png;base64,...",
  "_id": "60c72b2f9f1b2c001c8e4d4a"
}
```

### **Fetch All Campaigns**  
```http
GET /campaigns
```
#### **Response**  
```json
[
  {
    "id": 123456,
    "title": "Helping Kids Learn",
    "description": "Raising funds for educational programs.",
    "image": "data:image/png;base64,..."
  }
]
```


## **Future Enhancements**  
🔹 Implement user authentication (sign-in, registration)  
🔹 Add real-time donation tracking  
🔹 Integrate a payment gateway for contributions  
🔹 Improve accessibility and mobile responsiveness  

---

## **Contributing**  
Contributions are welcome!  
1. Fork the repository  
2. Create a new branch: `git checkout -b feature-branch`  
3. Make changes and commit: `git commit -m "New feature added"`  
4. Push changes: `git push origin feature-branch`  
5. Open a pull request  

---

