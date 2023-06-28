import css from "./EventBord.module.sass"


export const EventBord = ({events}) => {

    return (
        <div className={css.eventBord}>
            {events.map(event => (
                <div key={event.name} >{event.name}</div>
            ))}
        </div>
    )
}
