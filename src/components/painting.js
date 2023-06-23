import PropTypes from 'prop-types';
import defaultImage from "./cvergshnaucer-devochka-768x384.jpg";

export default function Painting ({ url = defaultImage, name = "Boy", experience, year = "not specified",superProperties }){

    return (
        <div>
            <img src={url ?? defaultImage} alt="Koka" width={200} />
            <h1>Name: {name}</h1>
            <p>experience: {experience}</p>
            <p>super properties: {superProperties < 8 ?  "good boy" :  "GOOOD BOY"}</p>
            <p>year: {year}</p>
            <button type="button">Stroke</button>
        </div>
    );
};

Painting.propTypes = {
  experience: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.any.isRequired,
  year: PropTypes.number.isRequired
}