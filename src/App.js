import Painting from "./components/painting"
import dataDogs from "./data"

export default function App () {

    const isOnline = false
    return (
        <div>
            {isOnline ? (
                <Painting
                    url={dataDogs[1].url}
                    name={dataDogs[1].name}
                    experience={dataDogs[1].experience}
                    year={dataDogs[1].year}
                />
            ) : (
                <Painting
                    url={dataDogs[0].url}
                    name={dataDogs[0].name}
                    experience={dataDogs[0].experience}
                    year={dataDogs[0].year}
                />
            )}

        </div>
    )
    //
    // return <div>
    //     <Painting
    //         url={dataDogs[1].url}
    //         name={dataDogs[1].name}
    //         experience={dataDogs[1].experience}
    //         year={dataDogs[1].year}
    //     />
    // </div>
}