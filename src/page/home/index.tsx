import { useEffect, useState } from "react";

import { Pizza } from "../../model/Pizza";

import CardPizza from "../../components/cardPizza";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { request } from "../../service/helper_axios";

type props = {
  utilisateur: string;
};

const Home = ({ utilisateur }: props) => {
  const navigate = useNavigate();
  const [lPizza, setLPizza] = useState<Pizza[]>([]);
  const [prix, setPrix] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      request("GET", "/pizzas", {}).then((response) => {
        setLPizza(response.data);
      });
    };
    fetchData();
  }, []);

  console.log(utilisateur);

  return (
    <div>
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <h3 className="ps-5 ms-5" style={{ color: "#3b438b" }}>
            sélectionnez vous pizzas
          </h3>
          <div className="d-flex input-group w-auto">
            <p>prix total: {Math.round(prix * 100) / 100} €</p>
            <Button
              onClick={() => {
                navigate("/mpizza/livrer");
              }}
            >
              <AddShoppingCartIcon />
            </Button>
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </nav>

      <div>
        {lPizza?.map((pizza: Pizza, i) => (
          <CardPizza key={i} pizza={pizza} setPrix={setPrix} prix={prix} />
        ))}
      </div>
    </div>
  );
};

export default Home;
