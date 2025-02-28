import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter, Routes, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";



function FrontPage() {
        return <div>
            <>Sosiale Medier Database</>
            <ul>
                <li><Link to="/Innlegg">Innlegg</Link></li>
                <li><Link to="/Innlegg/nytt">Nye Innlegg</Link></li>
            </ul>
        </div>;
}





function ListInnlegg({innleggsApi})  {
    const [innlegg, setInnlegg] = useState();
    useEffect(async () => {
        setInnlegg(undefined);
        setInnlegg(await  innleggsApi.listInnlegg());
    }, []);

    if (!innlegg) {
        return <div>Loading...</div>
    }


        return <div>
            <h1>Alle innlegg</h1>
                {innlegg.map(m =>
                    <div key={m.title}>
                        <h2>{m.title} ({m.year})</h2>
                        <div>{m.plot}</div>
                    </div>
                    )}
        </div>;
}






function NyttInnlegg({innleggsApi}) {

        const [title, setTitle] = useState(" ");
        const [year, setYear] = useState( " ");
        const [plot, setPlot] = useState( " ")




        const navigate = useNavigate();






        async function handleSubmit(e) {
            e.preventDefault();
            await innleggsApi.onNyttInnlegg({title, year, plot});
            navigate("/");
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

    const innleggsApi = {
        onNyttInnlegg: async (m) => {
            await fetch( "/api/innlegg", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body:JSON.stringify(m)
         })
        },
        listInnlegg: async () => {
            const res = await fetch("/api/innlegg");
            return res.json();
        }
    }






    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/Innlegg/nytt" element={<NyttInnlegg innleggsApi={innleggsApi}/>}/>
            <Route path="/Innlegg/" element={<ListInnlegg innleggsApi={innleggsApi}/>}/>
        </Routes>
    </BrowserRouter>
}


ReactDOM.render(
    <h1><Application/></h1>,
    document.getElementById("app")
);