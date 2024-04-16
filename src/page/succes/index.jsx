import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Succes = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="vh-50">
        <div className="container py-5 h-50">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div
                className="card"
                style={{ backgroundColor: "#3b438b", color: "#fbc02c" }}
              >
                <div className="card-body py-5 px-md-5">
                  <main>
                    <h2>Félicitation !</h2>
                    <h2 className="card-text">Vous êtes près à commander</h2>

                    <h2 style={{ color: "#fbc02c", textAlign: "center" }}>
                      <Link
                        className="link-underline-warning"
                        style={{ color: "#fbc02c", textAlign: "center" }}
                        onClick={() => {
                          navigate("/mpizza/home");
                        }}
                      >
                        Passze votre première commande
                      </Link>
                    </h2>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Succes;
