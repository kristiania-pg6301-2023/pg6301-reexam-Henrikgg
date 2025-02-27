import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Routes} from "react-router-dom";


function FrontPage() {
        return <div>
            <>Sosiale Medier Database</>
            <ul>
                <li><Link to="/Innlegg">Innlegg</Link></li>
                <li><Link to="/Innlegg/nytt">Nye Innlegg</Link></li>
            </ul>
        </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/Innlegg/nytt" element={<h1>Nytt innlegg</h1>}/>
            <Route path="/Innlegg/" element={<h1>Innlegg</h1>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <h1><Application/></h1>,
    document.getElementById("app")
);