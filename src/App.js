import Painting from "./components/painting"
import dataDogs from "./data"

export default function App (props) {

    return <div>
        <Painting
            url={dataDogs[1].url}
            name={dataDogs[1].name}
            experience={dataDogs[1].experience}
            year={dataDogs[1].year}
        />
    </div>
}