import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Галерея работ <a href="https://www.artstation.com/sidwill" className="author-link">Igor Sid</a></h1>
        <p>Слайдер изображений - Кейс-задача № 3</p>
      </header>
      <main>
        <ImageSlider />
      </main>
    </div>
  );
}

export default App;
