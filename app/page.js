import React from 'react';

function App() {
  const todoList = [
    { id: 1, task: 'Einkaufen gehen', completed: false },
    { id: 2, task: 'React-App erstellen', completed: true },
    { id: 3, task: 'Übungen für JavaScript machen', completed: false },
    { id: 4, task: 'lernen für die Scrum-Prüfung', completed: false},
    { id: 5, task: 'die Todo-Liste fertig stellen', completed: true} 
  ];

  return (
    <div>
      <h1>ToDo-Aufgaben</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            {todo.task} - {todo.completed ? 'abgeschlossen' : 'ausstehend'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;