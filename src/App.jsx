import React, { useState, useEffect } from 'react';
import './App.css';
import Overview from './components/Overview.jsx';
import GoalList from './components/GoalList.jsx';
import AddGoalForm from './components/GoalForm.jsx';
const API_URL = "https://smart-goal-api-70zr.onrender.com/goals"; 
function App() {
  const [goals, setGoals] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    async function fetchGoals() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setGoals(data);
      } catch (err) {
        console.error('Error loading goals:', err);
      }
    }
    fetchGoals();
  }, []);

  const handleAddGoal = async (newGoal) => {
    try {
      const goalWithId = { ...newGoal, id: Date.now().toString() };
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(goalWithId)
      });
      if (response.ok) {
        const savedGoal = await response.json();
        setGoals([...goals, savedGoal]);
      } else {
        console.error('Failed to save goal');
      }
    } catch (error) {
      console.error('Error saving goal:', error);
    }
  };

  const handleUpdateGoal = async (goalId, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/${goalId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      if (response.ok) {
        const updatedGoal = await response.json();
        setGoals(goals.map(goal => (goal.id === goalId ? updatedGoal : goal)));
      } else {
        console.error('Failed to update goal');
      }
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      const response = await fetch(`${API_URL}/${goalId}`, { method: 'DELETE' });
      if (response.ok) {
        setGoals(goals.filter(goal => goal.id !== goalId));
      } else {
        console.error('Failed to delete goal');
      }
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAdd={handleAddGoal} />
      <GoalList
        goals={goals}
        onUpdate={handleUpdateGoal}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
}

export default App;
