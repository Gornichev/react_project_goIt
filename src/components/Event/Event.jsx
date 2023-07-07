import css from "./Event.module.sass"
import PropTypes from 'prop-types'

export const Event = ({name, type, base_experience, time, location,start,end}) => {
    return (
        <div className={css.event}>
            <h4 className={css.eventTitle}>{name}</h4>
            <ul className={css.eventList}>
                <li className="location">{location}</li>
                <li className="base_experience">{base_experience}</li>
                <li className="time">{time}</li>
                <li className="time">{start}</li>
                <li className="time">{end}</li>
                <li className="type">{type}</li>
            </ul>
        </div>
    )
}

Event.propTypes = {
    base_experience: PropTypes.number,
    location: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    type: PropTypes.string
}