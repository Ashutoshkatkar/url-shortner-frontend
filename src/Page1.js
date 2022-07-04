import "./styles.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Page1() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const fdata = (e) => {
    e.preventDefault();
    navigate("/page2", { state: { email: email } });
    // const userData = {
    //   email: email
    // };
    // axios
    //   .post("http://localhost:8080/insert", userData)
    //   .then((response) => {
    //     console.log(response);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card flex-row my-4 border-0 shadow rounded-3 overflow-hidden">
            <div className="col-lg-12 col-xl-12 mx-auto">
              <div className="card-body p-4 p-sm-5">
                <form className="was-validated">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      onClick={fdata}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
