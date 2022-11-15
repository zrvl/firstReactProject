import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


/*

Пройти axios

Переделать все запросы с учетом использования твоего личного хука
Создать новый проект и стараясь не подсматривать реализовать такой же хук 
*/