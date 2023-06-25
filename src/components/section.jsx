import PropTypes, {shape, string,number} from 'prop-types';

export default function  SectionChildrenList ({title,nameUser,children}) {
    return (
        <div>
            {title &&  <h2>{title}</h2>}
            <p>{nameUser}</p>
            {children}
        </div>
    )
}

SectionChildrenList.propTypes = {
  title: PropTypes.string
};