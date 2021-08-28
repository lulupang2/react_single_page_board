import {useEffect, useState} from "react";
import logo from '../logo.svg';
import Axios from "axios";
import {Link} from "react-router-dom";

function Location() {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);
    useEffect(() => {
            getLoc();
        }
        , []);

    function getLoc() {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

        function onGeoOK(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(`${lat} ${lon}`);
            sendLoc(lat, lon);
        }

        function onGeoError(e) {
            alert("위치를 찾을 수 없습니다");
            console.log(e);
        }
    }

    function sendLoc(lat, lon) {
        const url = `https://kenken0803.herokuapp.com/ATY`;
        // const url2 = `http://localhost/ATY`;
        // const url3 = `http://kenken0803.asuscomm.com:3000/ATY`;

        Axios.post(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=utf-8"
            },
            'lat': lon,
            'lon': lat,
        }).then(function (res) {
            console.log(res.data.items.length);
            console.log(res.data.items)
            setResult(res.data.items);
            setLoading(false);
        }).catch(function (err) {
            alert(err);
            setLoading(false);
        })
    }

    return (
        <>

            <div className="App">
                {loading ? <img src={logo} className="App-logo" alt="LOADING..."/>
                    :
                    result.map((data, index) => <ListBuilder content={data} key={index}/>)
                }
            </div>
        </>
    )
}

function ListBuilder({content}) {
    return (
        <>
            <li>
                <ul>
                    <a href={`https://www.youtube.com/watch?` + content.id.videoId}>
                        <h2>{content.snippet.title}</h2><br/>
                        <img src={content.snippet.thumbnails.high.url}/>
                    </a>
                </ul>
            </li>
        </>
    );
}

export default Location;