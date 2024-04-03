import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



function App() {

  const [option, setOption] = useState([])

  const url = "https://www.php.engenius.com.co/DatabaseIE.php"

  const fetchData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var urlencoded = new URLSearchParams();
    urlencoded.append("User", "etraining");
    urlencoded.append("Password", "explorandoando2020%");
    urlencoded.append("option", "municipios");

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => setOption(data.data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title"> Mi proyecto </h3>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Municipios</h4>
              <div className="table-responsive">
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre del municipio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {option.map((p) => <tr>
                      {/*<td class="id-order"><Link to={`/show/${p.dane}`}>{p.dane}</Link></td>*/}
                      <td class="id">{p.dane}</td>
                      <td>{p.nombre}</td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
