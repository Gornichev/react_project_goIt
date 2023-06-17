// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.querySelector("#root")

// const miniElement1 = React.createElement("span",{children : "Hello "})
// const miniElement2 = React.createElement("span",{children : "NIGGA "})

// const element = React.createElement("h1", {
//     a : 5,
//     children : "HELLO NIGGA"
// });

// ReactDOM.render(element,root)
// const mainTitle = <h1>HELLO NIGGA</h1>
// const text = <h3>You are the best</h3>
//
// const group = (
//     <div>
//         {mainTitle}
//         {text}
//     </div>
// );

// ReactDOM.render(group,root);

const data = {
    url : "https://media.istockphoto.com/id/497895752/" +
        "uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D0%B8%D0%B9" +
        "-%D1%86%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80.jpg?" +
        "s=612x612&w=0&k=20&c=5Wfxfm0VtmrV6-tUAOZ8rwRcSdTiQcggdUAV3irRJ0M=",
    name : "KOKA",
    experience : 89,
    year : 6
}

const painting = (
    <div>
        <img src={data.url} alt="Koka" width={200}/>
        <h1>Name : {data.name}</h1>
        <p>experience : {data.experience}</p>
        <p>year: {data.year}</p>
    </div>
)

