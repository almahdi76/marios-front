import { request, setAuthHeader } from "../../service/helper_axios";
import { Person } from "../../model/Person";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Validation from "../../service/SignInValidation";

export enum etat {
  SETFIRSTNAME,
  SETLOGIN,
  SETLASTNAME,
  SETPASSWORD,
  SETPHONENUMBER,
  SETADDRESS,
}
export type actionType = {
  type: etat;
  payload: string;
};

export const reducer = (state: Person, action: actionType): Person => {
  switch (action.type) {
    case etat.SETFIRSTNAME:
      return { ...state, firstName: action.payload };
    case etat.SETLASTNAME:
      return { ...state, lastName: action.payload };
    case etat.SETPHONENUMBER:
      return { ...state, phonenumber: action.payload };
    case etat.SETPASSWORD:
      return { ...state, password: action.payload };
    case etat.SETADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
type props = {
  setIsLog: Function;
};
const initialValue = {
  firstName: "",
  lastName: "",
  phonenumber: "",
  password: "",
  address: "",
  rePassword: "",
};

const LoginUp = ({ setIsLog }: props) => {
  const navigate = useNavigate();

  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValue,
    validationSchema: Validation.signUpValidation,
    onSubmit: (values) => {
      request("POST", "/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        phonenumber: values.phonenumber,
        password: values.password,
        address: values.address,
      })
        .then((response) => {
          setAuthHeader(response.data.token);

          setIsLog(true);
          navigate("/mpizza/succes");
        })
        .catch((error) => {
          setAuthHeader(null);
        });
    },
  });

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div
                className="card"
                style={{ backgroundColor: "#3b438b", color: "#fbc02c" }}
              >
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="firstName"
                          />
                          <label className="form-label" htmlFor="firstName">
                            First name
                          </label>
                        </div>
                        {errors.firstName && (
                          <small style={{ color: "red", fontSize: "15px" }}>
                            {errors.firstName}
                          </small>
                        )}
                      </div>

                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="lastName"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last name
                          </label>
                        </div>
                        {errors.lastName && (
                          <small style={{ color: "red", fontSize: "15px" }}>
                            {errors.lastName}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="password"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                        {errors.password && (
                          <small style={{ color: "red", fontSize: "15px" }}>
                            {errors.password}
                          </small>
                        )}
                      </div>

                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="rePassword"
                            className="form-control"
                            value={values.rePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="rePassword"
                          />
                          <label className="form-label" htmlFor="rePassword">
                            Confirmation
                          </label>
                        </div>
                        {errors.rePassword && (
                          <small style={{ color: "red", fontSize: "15px" }}>
                            {errors.rePassword}
                          </small>
                        )}
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4 ">
                      <textarea
                        id="address"
                        className="form-control"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="address"
                      />
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                      {errors.address && (
                        <small style={{ color: "red", fontSize: "15px" }}>
                          {errors.address}
                        </small>
                      )}
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline mb-6 col-md-6"
                    >
                      <input
                        type="text"
                        id="phonenumber"
                        className="form-control"
                        value={values.phonenumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phonenumber"
                      />
                      <label className="form-label" htmlFor="phonenumber">
                        Telephon
                      </label>
                      {errors.phonenumber && (
                        <small style={{ color: "red", fontSize: "15px" }}>
                          {errors.phonenumber}
                        </small>
                      )}
                    </div>

                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="position-absolute bottom-0 end-0 btn btn-block  mb-4  "
                      style={{
                        backgroundColor: "#fbc02c",
                        color: "#3b438b",
                        margin: "20px",
                      }}
                    >
                      Créer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ********** */}

      {/* ********** */}
    </div>
  );
};
export default LoginUp;
