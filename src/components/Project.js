
import React , {useState , useEffect} from "react" ;
import { useLocation } from "react-router-dom";

function Project(){
    const [res, setres] = useState({})
    const location = useLocation();
    const pid = location.state.id;


    // console.log(id)
    const loadData = async () => {
    const response =  await fetch("http://localhost:5000/api/pdata" , {
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body:JSON.stringify({
               id:pid 
            })
        })

    // setres(response)
    // console.log(await response.json(), "cyttyc")

    const resp = await response.json()
    setres(resp)
    }

    useEffect(() => {
        loadData()
      }, [])



   
    
    return (
        <div>
        <h1>hello</h1>
        <h1>{res.name}</h1>
        
            
        </div>
    );
}

export default Project;