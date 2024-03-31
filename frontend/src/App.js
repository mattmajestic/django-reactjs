import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // const [message, setMessage] = useState('');
    const [focusIndex, setFocusIndex] = useState(0);
    const linksRef = useRef([]);

    // useEffect(() => {
    //     fetch('http://localhost:8000/reactjs_endpoint/')
    //         .then(response => response.json())
    //         .then(data => setMessage(data.message));
    // }, []);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
          setFocusIndex((focusIndex + 1) % linksRef.current.length);
        } else if (event.key === 'ArrowUp') {
          setFocusIndex((focusIndex - 1 + linksRef.current.length) % linksRef.current.length);
        } else if (event.key === 'Enter') {
          linksRef.current[focusIndex].click();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [focusIndex]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Django + <code>ReactJS </code> on Docker
                </p>
                <p>
                    Django is up and running! <code></code>
                </p>
                <div className="links">
                    <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" ref={el => linksRef.current[0] = el}>Django Docs</a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" ref={el => linksRef.current[1] = el}>ReactJS Docs</a>
                    <a href="https://github.com/mattmajestic/django-reactjs" target="_blank" rel="noopener noreferrer" ref={el => linksRef.current[2] = el}>GitHub Repo</a>
                </div>
            </header>
        </div>
    );
}

export default App;