import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SparrowBird from "./img/sparrowBird.jpg";

export default function Main() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                {/* bird card  */}
                <Link to="/birds" className='card bg-dark rounded-5 text-decoration-none text-white'>
                  <div className="row row-cols-2 p-3 align-items-md-center ">
                    <div className="col">
                      <img
                        src={SparrowBird}
                        alt="bird photo"
                        className=" img-fluid rounded-start-5"
                      />
                    </div>
                    <div className="col">
                      <div>Bird</div>
                      <h2>ငှက်</h2>
                      <div>
                        ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်နှစ်ဖက်ရှိသော
                        သွေးနွေးသတ္တဝါအမျိုးအစားတွင် ပါဝင်သည်။
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <div className="row">
                    <div className="card rounded-5 bg-dark"></div>
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
