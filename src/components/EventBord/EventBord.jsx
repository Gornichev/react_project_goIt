import css from "./EventBord.module.sass"

export const EventBord = ({events}) => {
    console.log(events)
    return <div className={css.eventBord}>event cards</div>
}