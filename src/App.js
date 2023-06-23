import Painting from "./components/painting"
import dataDogs from "./data"
import PaintingList from  "./components/paintingList"



export default function App () {
    return (
        <div>
            <PaintingList items={dataDogs} />
        </div>
    )
};
