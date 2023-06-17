import Painting from "./components/painting"
import data from "./data"

export default function App () {
    return <div>
        <Painting
            url={data.url}
            name={data.name}
            experience={data.experience}
            year={data.year}
        />
    </div>
}