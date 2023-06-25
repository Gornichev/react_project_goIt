
import dataDogs from "./data"
import PaintingList from  "./components/paintingList"
import SectionChildrenList from  "./components/section"

export default function App() {
    return (
        <div>
                <SectionChildrenList title="Hello Nigga" nameUser={"Uncle"}>
                    <PaintingList items={dataDogs} />
                </SectionChildrenList>
        </div>
    );
}




