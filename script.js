body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f2f5;
    transition: background-color 0.4s ease;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #333;
    margin-top: 0;
}

p {
    color: #666;
    font-size: 1.1rem;
}

.btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
}

.btn:hover {
    background-color: #0056b3;
}

.btn:active {
    transform: scale(0.95);
}
