import React from "react" ;
import { useLocation } from "react-router-dom";



function Project(){
    const location = useLocation();
    const Name = location.state.name;

    
    
    return (
        <div>
        <h1>hello</h1>
        <h1>Inside project</h1>
        
            
        </div>
    );
}

export default Project;