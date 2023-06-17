
import App from './App';
import ReactDOM from "react-dom";
import React from "react";
const root = document.getElementById('root');



const Painting = (props) => {

    const { url, name, experience, year } = props;

    return (
        <div>
            <img src={url} alt="Koka" width={200} />
            <h1>Name: {name}</h1>
            <p>experience: {experience}</p>
            <p>year: {year}</p>
            <button type="button">Stroke</button>
        </div>
    );
};

const data = {
    url: "https://media.istockphoto.com/id/497895752/uk/%D1%84%D0%BE%D1%82%D0%BE/" +
        "%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D0%B8%D0%B9-%D1%86%D0%B2%D0%B5%D1%80%D0%" +
        "B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80.jpg?s=612x612&w=0&k=20&c=5Wfxfm0Vt" +
        "mrV6-tUAOZ8rwRcSdTiQcggdUAV3irRJ0M=",
    name: "KOKA",
    experience: 89,
    year: 6,
};

ReactDOM.render(
    <Painting url={data.url} name={data.name} experience={data.experience} year={data.year} />, root);



