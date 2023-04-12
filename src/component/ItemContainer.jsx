import Container from "./Container";
import classes from "../style/itemcontainer.module.css";
import { sliderImg } from "../data/itemDetails";
import { useState, useRef } from "react";

const itemRecipe = sliderImg;

export default function ItemContainer() {
  const [cardStates, setCardStates] = useState(itemRecipe.map((item) => false));

  const buttonRefs = useRef(Array(itemRecipe.length).fill(null));

  function handleClick(index) {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);
  }

  return (
    <>
      <Container>
        <div className={classes.cardList}>
          {itemRecipe.map((props, index) => {
            const isOpen = cardStates[index];

            return (
              <div className={classes.card} key={props.id}>
                <img
                  src={props.img}
                  alt="cappuccino"
                  className={classes["card-img"]}
                />
                <div
                  className={`${classes["card-body"]} ${
                    isOpen ? classes.open : ""
                  }`}
                >
                  <h1 className={classes["card-title"]}>{props.title}</h1>
                  <p className={classes["card-info"]}>{props.recipe}</p>
                </div>
                <div
                  className={classes["view-button"]}
                  onClick={() => handleClick(index)}
                  ref={(el) => (buttonRefs.current[index] = el)}
                >
                  <span className={classes.view}>
                    {" "}
                    {isOpen ? "close" : "open"}{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
