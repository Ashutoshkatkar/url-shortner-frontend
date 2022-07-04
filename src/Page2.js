import "./styles.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Page1() {
  const [longurl, setLongurl] = useState("");
  const [code, setCode] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState();
  const { state } = useLocation();
  let navigate = useNavigate();
  const email = state.email;

  useEffect(() => {
    fdata2();
  }, [data2]);

  const fdata2 = async () => {
    const userData2 = {
      email: email
    };
    try {
      const res = await axios.post(
        "https://url-shortner-brown.vercel.app/insert2",
        userData2
      );
      console.log(res);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("data is ", data);

  const fdata = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      longurl: longurl,
      code: code
    };
    axios
      .post("https://url-shortner-brown.vercel.app/insert", userData)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("submitted!!");
        } else if (response.data.status == 500) {
          alert(response.data.msg);
        }
        setLongurl("");
        setCode("");
        setData2("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fun2 = () => {
    navigate("/");
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
                    <label for="exampleInputEmail1">Enter url</label>
                    <input
                      type="text"
                      value={longurl}
                      onChange={(e) => setLongurl(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter url"
                      required
                    />
                    <label for="exampleInputEmail1">Enter code</label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter code"
                      required
                    />
                  </div>

                  <div class="text-center well">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      onClick={fdata}
                    >
                      Submit
                    </button>
                  </div>
                  <div class="text-center well">
                    <button className="btn btn-primary mt-2  " onClick={fun2}>
                      Go back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Longurl</th>
              <th>code</th>
              <th>shorturl</th>
            </tr>
          </thead>
          {data.map((e) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{e.name}</td>
                    <td>
                      <a href={e.longurl} target="_blank">
                        {e.longurl}
                      </a>
                    </td>
                    <td>{e.code}</td>
                    <td>
                      <a href={e.shorturl} target="_blank">
                        {e.shorturl}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
