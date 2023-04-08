import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import Footer from "../components/Footer";
// import Header from "../components/Header";


function Home() {

  const [projectInfo, setprojectInfo] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/projectdata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )

    response = await response.json();

    setprojectInfo(response)
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div className="container">
        <div className="row">

          {
            projectInfo !== [] ?
              projectInfo.map((data) => {
                return (
                  <Card key={data._id} id={data._id} title={data.name} img={data.img} descp={data.description} lang={data.languages} />
                )
              })
              : <div>"ssssssssss"</div>
          }


        </div>
      </div>





    </div>
  );
}

export default Home;