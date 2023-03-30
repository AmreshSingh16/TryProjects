import React from 'react';
import {Link} from 'react-router-dom'

export default function Card() {
  return (
    <div className="col-lg-4 mb-2">
      <div className="card" style={{ "width": "18rem" , "marginTop":"100px"  }}>
        <img className="card-img-top" src="https://source.unsplash.com/random/90×70/?nodejs" alt="Card image cap" height={"200px"}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  )
}
