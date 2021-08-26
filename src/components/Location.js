import {useEffect, useState} from "react";
import logo from '../logo.svg';
import Axios from "axios";
import {Link} from "react-router-dom";

function Location() {
    const [loading, setLoading] = useState(false);

    function getLoc() {

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
        setLoading(true);
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
            setLoading(false);
            console.log(res.data.items.length);
            console.log(res.data.items);
        }).catch(function (err) {
            setLoading(false);
            alert(err);
        })
    }


    return (
        <>

            <div>
                {loading ? <img src={logo} className="App-logo" alt="LOADING..."/>
                    :
                    <button onClick={getLoc}>ㄱㄱㄱ</button>
                }
            </div>
        </>
    )
}

export default Location;