import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';



function Sede() {

    const params = useParams();
    const [data, setData] = useState([])
    const option = "sedes"
    const CodInst = params.id

    const url = "https://www.php.engenius.com.co/DatabaseIE.php"

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var urlencoded = new URLSearchParams();
        urlencoded.append("User", "etraining");
        urlencoded.append("Password", "explorandoando2020%");
        urlencoded.append("option", option);
        urlencoded.append("CodInst", CodInst);

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
                            <h4 className="card-title">Sedes</h4>
                            <div className="table-responsive">
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre de la sede</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((p) => <tr>
                                            <td class="id-mun"><Link to={`/grupos/${p.dane}`}>{p.dane}</Link></td>
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

export default Sede;
