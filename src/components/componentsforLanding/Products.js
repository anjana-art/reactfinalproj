import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BmrowserRouter } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { Navigate } from "react-router-dom";

const Visual = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Product({ item, addtocart }) {
  console.log('Card addtocart', addtocart, typeof addtocart);

  const addToCart = () => {
    Navigate('/cart-page', {state: {}})
  }

  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const detailPage = (Products) => {
    setDetail([{ ...Products }]);
    setClose(true);
  };

  return (
    <>
      {close ? (
        <div>
          {detail.map((x) => {
            return (
              <>
                <div key={x.id}>
                  <button onClick={() => setClose(false)}>
                    <IoIosCloseCircle />
                  </button>

                  <div>
                    <img src={x.logo} alt={x.name}></img>
                  </div>
                  <div>
                    <h2>{x.name}</h2>
                    <h3>Price: {x.price}</h3>
                  </div>
                  <p>Discriptions: {x.description}</p>
                  <button onClick={addtocart}>Add to Cart</button>
                  <div>
                    <h3>Features</h3>
                    <li>{x.featureone}</li>
                    <li>{x.featuretwo}</li>
                    <li>{x.featurethree}</li>
                    <li>{x.featurefour}</li>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : null}

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {item.map((val) => (
              <Grid item xs={2} sm={4} md={4} key={val.id}>
                <Visual>
                  <div key={val.id}>
                    <div>
                      <img height="150" src={val.logo} alt={val.name} />
                      <h3>Product Name:{val.name}</h3>
                      <h3>Price(Eur): {val.price}</h3>
                      <button onClick={() => detailPage(val)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </Visual>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
