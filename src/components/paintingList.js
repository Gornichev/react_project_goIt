import PropTypes, {shape, string,number} from 'prop-types';
import Painting from "./painting";

function paintingList ({items}) {
return (
    <ul>
        {items.map(dog =>
            <li key={dog.id}>
                <Painting
                    url={dog.url}
                    name={dog.name}
                    experience={dog.experience}
                    year={dog.year}
                    superProperties={dog.superProperties}
                />
            </li>
        )}
    </ul>
    )
}
export default paintingList;

paintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
  }))
}