import PropTypes from 'prop-types';
import defaultImage from "./cvergshnaucer-devochka-768x384.jpg";

export default function Painting ({ url = defaultImage, name = "Boy", experience, year = "not specified" }){

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



Painting.propTypes = {
  experience: PropTypes.any,
  name: PropTypes.string,
  url: PropTypes.any,
  year: PropTypes.string
}