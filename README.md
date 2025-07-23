# 💰 Smart Goal Planner

The **Smart Goal Planner** is a React-based financial planning app that allows users to set, track, and manage multiple savings goals. Whether you're planning for an emergency fund, a vacation, or a big purchase, this tool helps you stay on track by visualizing progress and managing deposits efficiently.

---

## 🌐 Live Demo

🔗 [smart-goal-planner-two.vercel.app](https://smart-goal-planner-two.vercel.app)

---

## 🚀 Features

- 🎯 Create personalized savings goals (e.g., "Travel Fund", "Emergency Fund")
- 📊 Track progress toward each goal with live updates
- ➕ Make deposits to any goal and update progress
- 📝 Edit or delete goals at any time
- 🔄 Full CRUD support with a `json-server` backend

---

## 🛠️ Technologies Used

- React
- React Hooks (`useState`, `useEffect`)
- Chart.js (for data visualization)
- JSON Server (mock backend)
- Vite (fast React development)

---

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed
- `json-server` globally installed:
  ```bash
  npm install -g json-server
Installation
Clone the repository:

bash
Copy
Edit
git clone git@github.com:Kenneth-kipkosgei/smart-goal-planner.git
cd smart-goal-planner
Install dependencies:

bash
Copy
Edit
npm install
Start the json-server backend:

bash
Copy
Edit
json-server --watch db.json --port 3001
Start the React app:

bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

🧪 Sample db.json
json
Copy
Edit
{
  "goals": [
    {
      "id": 1,
      "title": "Emergency Fund",
      "target": 1000,
      "progress": 250
    }
  ]
}
📸 Screenshots
Add screenshots of your app here (dashboard, goal form, progress chart, etc.)

📄 License
This project is licensed under the MIT License.

text
Copy
Edit
MIT License

Copyright (c) 2025 Kenneth Kipkosgei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
👨‍💻 Author
Kenneth Kipkosgei
GitHub: @Kenneth-kipkosgei