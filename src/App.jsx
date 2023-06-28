import {PageTitle} from "./components/PageTitle/PageTitle"
import {EventBord} from "./components/EventBord/EventBord";
import Event from "./events.json"

export default function App() {
    return (
        <div>
            <PageTitle text={"Here is a list of Super Components 2023"}/>
            <EventBord events={Event}/>
        </div>

    );
}

