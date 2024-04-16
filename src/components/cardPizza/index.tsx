import { ChangeEvent, useState } from "react";

import { Pizza } from "../../model/Pizza";

type props = {
  pizza: Pizza;
  setPrix: Function;
  prix: number;
};
const CardPizza = ({ pizza, setPrix, prix }: props) => {
  const [quan, setQuan] = useState(0);

  const handlePrixUp = (p: number) => {
    if (quan < 5) {
      setQuan((pv) => pv + 1);
      setPrix((prv: number) => prv + p);
    } else {
      setQuan(5);
      setPrix((prv: number) => prv);
    }
  };

  const handlePrixDown = (p: number) => {
    if (quan > 0) {
      setQuan((pv) => pv - 1);
    } else {
      setQuan(0);
    }
    setPrix((prv: number) => prv - p);
  };

  const handleQuantitie = (e: ChangeEvent<HTMLInputElement>) => {
    let x = e.target.value;
    setQuan(parseInt(x));
  };

  return (
    <>
      <section>
        <div className="container py-1">
          <div className="row justify-content-center mb-0">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={`/images/${pizza.image} `}
                          className="w-100"
                          alt={pizza.name}
                        />
                        <a href=" ">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="h3 col-md-6 col-lg-6 col-xl-6">
                      <h5>{pizza.name}</h5>

                      <div className="mt-1 mb-0 text-muted small">
                        <p className="h5 text-truncate  mb-4 mb-md-0">
                          {pizza.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <button
                          type="button"
                          className="btn btn-success btn-sm "
                          data-mdb-ripple-init
                          disabled
                          style={{ marginLeft: "50%" }}
                        >
                          {pizza.price} €
                        </button>
                      </div>

                      <div className="d-flex flex-column mt-4">
                        <div className="input-group mb-3">
                          <span style={{ margin: "5px 15px 0 0" }}>
                            Quantité
                          </span>
                          <button
                            onClick={() => {
                              handlePrixDown(quan * pizza.price);
                            }}
                            className="btn btn-outline-dark"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark"
                          >
                            <i className="bi bi-plus-circle">-</i>
                          </button>

                          <input
                            onChange={handleQuantitie}
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            value={quan}
                            min={0}
                            max={0}
                          />
                          <button
                            onClick={() => {
                              handlePrixUp(quan * pizza.price);
                            }}
                            className="btn btn-outline-dark "
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark"
                          >
                            <i className="bi bi-plus-circle">+</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardPizza;
