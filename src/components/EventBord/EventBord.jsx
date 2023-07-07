import css from "./EventBord.module.sass"
import {Event} from "../Event/Event";

export const EventBord = ({events}) => {

    return (
        <div className={css.eventBord}>
            {events.map(({name,type,location,base_experience,time}) => (
                <Event key={name}
                       name={name}
                       type={type}
                       location={location}
                       base_experience={base_experience}
                       start={time.start}
                       end={time.end}/>
            ))}
        </div>
    )
}
