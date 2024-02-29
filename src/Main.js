import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SparrowBird from "./img/sparrowBird.jpg";
import Feather from "./img/feather_6428667.png";
import { FaArrowRightToBracket, FaFacebookF, FaPerson } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export default function Main() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                {/* bird card  */}
                <Link
                  to="/birds"
                  className="card bg-dark rounded-5 text-decoration-none text-white"
                >
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
                <div className="row mb-2">
                  <div className="card rounded-5 bg-dark text-nowrap">
                    <Link to={{ pathname: "https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA" }} target="_blank"
                      className="text-decoration-none text-white p-2 "
                    >
                      <div className="overflow-hidden">
                        ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ
                        နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="d-flex row-cols-2 align-items-stretch">
                  <div className="col">
                    <div className="card rounded-5 bg-dark m-1">
                      <Link to={{ pathname: "https://my.wikipedia.org/wiki/%E1%80%99%E1%80%BC%E1%80%94%E1%80%BA%E1%80%99%E1%80%AC%E1%80%94%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%84%E1%80%B6_%E1%80%80%E1%80%BB%E1%80%B1%E1%80%B8%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA" }} target="_blank"
                        className="text-decoration-none text-white"
                      >
                        <div className="row ratio ratio-4x3">
                          <img
                            src={Feather}
                            alt="wiki feather image"
                            className=" img-fluid"
                          />
                        </div>
                        <div className="row m-3 ">
                          <div className="col-9">
                            <div className="">wikipedia</div>
                          </div>
                          <div className="col-3">
                            <FaArrowRightToBracket
                              className="p-0 fs-3 align-content-end align-self-auto "
                              color="white"
                              fontSize={20}
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card rounded-5 bg-dark m-1">
                      <div className=" p-3">
                        <div className="card rounded-5 bg-black shadow-lg  p-3 mt-3 mb-3">
                          <div className="d-flex  row-cols-2 justify-content-center">
                            {/* icon 1 person  */}
                            <div className="col card bg-dark rounded-circle p-2 m-1 justify-content-center align-items-center">
                              <Link to={{ pathname: "tel:959123456789" }} target="_blank">
                                <GoPerson color="white" fontSize={50}  />
                              </Link>
                            </div>

                            {/* icon 2 facebook  */}
                            <div className="col card bg-dark rounded-circle p-3 m-1 justify-content-center align-items-center">
                              <Link to={{ pathname: "https://www.facebook.com/groups/myanmarbirdnature/" }} target="_blank">
                                <FiFacebook color="white" fontSize={50} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-3 pt-2">
                        <div className="col-9">
                          <div className="text-white">Birds In Nature</div>
                        </div>
                        <div className="col-3">
                          <FaArrowRightToBracket
                            className="p-0 fs-3 align-content-end align-self-auto "
                            color="white"
                            fontSize={20}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
