import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Routes} from "react-router-dom";


const innlegg = [
    {
        title: "Hun sa dette omg!..",
        plot: "Det hele starten med.....",
        year: 2025
    },
    {
        title: "Han sa dette omg!..",
        plot: "Det hele started med....",
        year: 2024
    }
]



function FrontPage() {
        return <div>
            <>Sosiale Medier Database</>
            <ul>
                <li><Link to="/Innlegg">Innlegg</Link></li>
                <li><Link to="/Innlegg/nytt">Nye Innlegg</Link></li>
            </ul>
        </div>;
}





function ListInnlegg()  {
        return <div>
            <h1>Innlegg</h1>
                {innlegg.map(m =>
                    <>
                        <h2>{m.title} ({m.year})</h2>
                        <div>{m.plot}</div>
                    </>
                    )}
        </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/Innlegg/nytt" element={<h1>Nytt innlegg</h1>}/>
            <Route path="/Innlegg/" element={<h1><ListInnlegg/></h1>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <h1><Application/></h1>,
    document.getElementById("app")
);