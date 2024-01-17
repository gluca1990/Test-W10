import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react';

export default function SearchComponent() {
    const [data, setData] = useState({
        weather: [], coord: { lon: 0, lat: 0 }, main: { temp: 0, temp_max: 0, temp_min: 0 }, name: "", wind: { speed: 0 }
    });
    const [city, setCity] = useState('');


    const fetchSearchCity = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},it&APPID=2b786d1361acb33daf19e9d8549b26ce`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.log(err))
        /*  const response = await fetch(
             'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2b786d1361acb33daf19e9d8549b26ce'
                     );
         const fetchData = await response.json();
         const clg = await console.log(fetchData);
         setData(fetchData); */

    }

    return (
        <>
            <Form className='my-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs="auto">
                        <Form.Control
                            onChange={e => setCity(e.target.value)}
                            type="text"
                            placeholder="Inserisci una città italiana"
                            className=" mr-sm-2"
                            value={city}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button onClick={fetchSearchCity} type="button">Cerca</Button>
                    </Col>
                </Row>
            </Form>
            {(data.name !=="") && 
            
            <Row className='fs-2 w-90'>
                    <div class="card py-3">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">(Lat.:{data.coord.lat}, Long.:{data.coord.lon})</h6>
              <p className="card-text">La temperatura è di {(data.main.temp - 273.15).toFixed(2)}°C <br/>(Max {(data.main.temp_max - 273.15).toFixed(2)}°C / Min {(data.main.temp_min - 273.15).toFixed(2)}°C)</p>
              <p className="card-text">Il vento soffia a {(data.wind.speed * 3.6).toFixed(2)}km/h</p>
              <button type="button" className="btn btn-primary">More Info</button>
            </div>
          </div>
            {/*    <div>Le condizioni del meteo sono {data.weather.map(cond => <span key={cond.id}>{cond.description} </span>)}</div> */}
                
                
            </Row>}
        </>
    )
}
