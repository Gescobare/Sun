import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';



function InfoGrupo() {

    const params = useParams();
    const [data, setData] = useState([])
    const option = "infoGrupo"
    const IdGrupo = params.id

    const url = "https://www.php.engenius.com.co/DatabaseIE.php"

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var urlencoded = new URLSearchParams();
        urlencoded.append("User", "etraining");
        urlencoded.append("Password", "explorandoando2020%");
        urlencoded.append("option", option);
        urlencoded.append("IdGrupo", IdGrupo);

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
                            <h4 className="card-title">Información del grupo</h4>
                            <div className="table-responsive">
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>#</th>
                                            <th>Nombre del grupo</th>
                                            <th>Sede</th>
                                            <th>Institución</th>
                                            <th>Municipio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((p) => <tr>
                                            <td>{p.id}</td> 
                                            <td>{p.numGrupo}</td>                                            
                                            <td>{p.nombre}</td>
                                            <td>{p.sede}</td>
                                            <td>{p.institución}</td>
                                            <td>{p.municipio}</td>
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

export default InfoGrupo;
