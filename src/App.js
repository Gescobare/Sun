import React, { Component, useEffect, useState } from "react"
import './App.css';

function App() {

    const [data, setData] = useState(null)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var urlencoded = new URLSearchParams();
    urlencoded.append("User", "etraining");
    urlencoded.append("Password", " ");
    urlencoded.append("option", "municipios");

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };
    useEffect(() => {
      fetch("https://www.php.engenius.com.co/DatabaseIE.php", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res))
      .then((data) => setData(data))
    }, [])
    
  
    return (
      <div className="App">
        
        <div className="form-group">
          <p>Hola</p>
        </div>
      </div>
    )
}
export default App;
