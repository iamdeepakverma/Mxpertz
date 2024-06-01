import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json").then((response) => {
        const responseData = JSON.parse(response.request.response);
        setData(...data, responseData);
        // console.log(responseData, "jakdsk");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataone = data[0];
  console.log(dataone);
  return (
    <>
    <div className="main_home">
        <nav>
            <div className="main_nav">
                <div className="left_img">
                    <h1>BrainlyLingo</h1>
                </div>
                <div className="meenu_text">
                    <ul>
                        <li>Home</li>
                        <li>Leaderboard</li>
                        <li>daily Quiz</li>
                    </ul>
                </div>
                <div className="button_text">
                    <button className="btn_class">Sign Out</button>
                </div>
            </div>
        </nav>
    </div>
    <div className="heading_div">
        <h1>Science Fiction Stories</h1>
    </div>
    <div className="bttonall_class">
    <button type="button " class="btn btn-primary class_btn">New</button>        
    <button type="button " class="btn btn-warning class_btn">In Progress</button> 
    <button type="button " class="btn btn-danger class_btn">Completed</button>
    <button type="button " class="btn btn-dark class_btn">Cler All</button>       
    </div>
    <div className="container">
    <div className="image-grid">
      {data.map((item) => (
        <div key={item._id}>
          <div className="card" style={{"width": "18rem"}}>
            <img src={`https://ik.imagekit.io/dev24/${item?.Image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.Title}</h5>
              <a href="#" className="btn btn-primary">
              {item.Status}
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default Fetch1;