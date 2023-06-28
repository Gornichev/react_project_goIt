

export const Event =  ({name, type,base_experience,time,location}) => {
    return (
        <div className="event">
            <h4 className="event-title"></h4>
            <ul className="event-list">
                <li className="location"></li>
                <li className="base_experience"></li>
                <li className="time"></li>
                <li className="type"></li>
            </ul>
        </div>
        )
}