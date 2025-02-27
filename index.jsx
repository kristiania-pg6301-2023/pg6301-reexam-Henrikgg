import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Routes} from "react-router-dom";
import {useState} from "react";


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





function ListInnlegg({innlegg})  {
        return <div>
            <h1>Innlegg</h1>
                {innlegg.map(m =>
                    <div key={m.title}>
                        <h2>{m.title} ({m.year})</h2>
                        <div>{m.plot}</div>
                    </div>
                    )}
        </div>;
}

function NyttInnlegg(){

        const [title, setTitle] = useState(" ");
        const [year, setYear] = useState( " ");
        const [plot, setPlot] = useState( " ")


        function handleSubmit(e) {
            e.preventDefault();
            innlegg.push({title, year, plot});
        }




        return <form onSubmit={handleSubmit}>
            <h1>Nytt innlegg</h1>
            <div>
                <label>Title: <input value={title} onChange={e => setTitle(e.target.value)}/></label>
            </div>
            <div>
                <label>Year: <input value={year} onChange={e => setYear(e.target.value)}/></label>
            </div>
            <div>
                <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)}/></label>
            </div>
            <button>Submit</button>
        </form>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/Innlegg/nytt" element={<h1><NyttInnlegg/></h1>}/>
            <Route path="/Innlegg/" element={<ListInnlegg innlegg={innlegg}/>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <h1><Application/></h1>,
    document.getElementById("app")
);