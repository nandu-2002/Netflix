import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedy,horror,romance,documentary,thriller} from "./urls"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={thriller} title='Thriller' isSmall/>
     <RowPost url={romance} title="Romance" isSmall/>
     <RowPost url={documentary} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
