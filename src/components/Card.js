// BsniUunyA8Cqjn3E
import React from 'react';
import {Link} from 'react-router-dom';

export default function Card(props) {

  

  return (
    <div className="col-lg-4 mb-2">
      <div className="card" style={{ "width": "18rem" , "marginTop":"100px"  }}>
        <img className="card-img-top" src={props.img} alt="" height={"200px"}/>
        <div className="card-body" >
          <h5 className="card-title">{props._id}</h5>
          <p className="card-text">{props.descp}</p>

          {
            props.lang.map((each,idx)=>{
                return (
                  <span className="card-text fs-6 m-2 bg-info border rounded" key={idx}> {each} </span>
                )
            })
          }
          <p />

          <Link to='inproject' state={{id:props.id}} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  )
}
