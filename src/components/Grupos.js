import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';



function Grupo() {

    const params = useParams();
    const [data, setData] = useState([])
    const option = "grupos"
    const CodSede = params.id

    const url = "https://www.php.engenius.com.co/DatabaseIE.php"

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var urlencoded = new URLSearchParams();
        urlencoded.append("User", "etraining");
        urlencoded.append("Password", "explorandoando2020%");
        urlencoded.append("option", option);
        urlencoded.append("CodSede", CodSede);

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    return (
        <div className="content-wrapper">
            <div className="page-header">
                <h3 className="page-title"> Proyecto - visualización de JSON </h3>
            </div>
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Grupos</h4>
                            <div className="table-responsive">
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Número del grupo</th>
                                            <th>Nombre del grupo</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((p) => <tr>
                                            <td class="id-mun"><Link to={`/infogrupos/${p.id}`}>{p.id}</Link></td>
                                            <td>{p.numGrupo}</td>
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

export default Grupo;
