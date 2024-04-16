import { useNavigate } from "react-router";
import { request, setAuthHeader } from "../../service/helper_axios";

import { useFormik } from "formik";

import Validation from "../../service/SignInValidation";
import "./loginstyle.css";
import { Link } from "react-router-dom";

type props = {
  setIsLog: Function;
  setUtilisateut: Function;
};
const initialValue = {
  phonenumber: "",
  password: "",
};
const Login = ({ setIsLog, setUtilisateut }: props) => {
  const navigate = useNavigate();

  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValue,
    validationSchema: Validation.signInValidation,
    onSubmit: (values) => {
      request("POST", "/login", {
        phonenumber: values.phonenumber,
        password: values.password,
      })
        .then((response) => {
          setAuthHeader(response.data.token);
          setUtilisateut(values.phonenumber);
          setIsLog(true);
          navigate("/mpizza/home");
        })
        .catch((error) => {
          setAuthHeader(null);
        });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className=" ctext card shadow-2-strong "
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#3b438b",
                  color: "#fbc02c",
                }}
              >
                <div className="card-body p-5 text-center">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label ctext" htmlFor="typeEmailX-2">
                      Identifiant
                    </label>
                    <input
                      value={values.phonenumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phonenumber"
                      type="text"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                    {errors.phonenumber && (
                      <small style={{ color: "red", fontSize: "15px" }}>
                        {errors.phonenumber}
                      </small>
                    )}
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label
                      className="form-label ctext"
                      htmlFor="typePasswordX-2"
                    >
                      Password
                    </label>
                    <input
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                    {errors.password && (
                      <small style={{ color: "red", fontSize: "15px" }}>
                        {errors.password}
                      </small>
                    )}
                  </div>

                  <h5 style={{ color: "#fbc02c", textAlign: "end" }}>
                    <Link
                      className="link-underline-warning"
                      style={{ color: "#fbc02c", textAlign: "center" }}
                      onClick={() => {}}
                      to={"logup"}
                    >
                      créer un compte
                    </Link>
                  </h5>

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{backgroundColor: "#fbc02c",color:"#3b438b"}}
                  >
                    Connextion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
