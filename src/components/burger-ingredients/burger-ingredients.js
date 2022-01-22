import React from "react";
import PropTypes from 'prop-types';
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { dataPropTypes } from "../../utils/data";
import styles from "./burger-ingredients.module.css";

class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "bun",
      categories: {
        bun: "Булки",
        sauce: "Соусы",
        main: "Начинки",
      },
    };
  }

  setCurrent = (value) => {
    this.setState({ ...this.state, current: value });
  };

  render() {
    return (
      <section className=" pt-10">
        <h1 className={styles.title + " text text_type_main-large pb-5"}>Соберите бургер</h1>
        <div className={styles.tabs + " pb-10"}>
          <Tab value="bun" active={this.state.current === "bun"} onClick={this.setCurrent}>Булки</Tab>
          <Tab value="sauce" active={this.state.current === "sauce"} onClick={this.setCurrent}>Соусы</Tab>
          <Tab value="main" active={this.state.current === "main"} onClick={this.setCurrent}>Начинки</Tab>
        </div>
        <ul className={styles.categories}>
          {this.props.data
            .map((el) => el.type)
            .filter((type, idx, arr) => arr.indexOf(type) === idx)
            .map((type) => {
              return (
                <li key={type}>
                  <h2 className="text text_type_main-medium">{this.state.categories[type]}</h2>
                  <ul className={styles.ingredients + " pl-4 pr-4 pt-6 pb-10"}>
                    {this.props.data
                      .filter((ingredient) => ingredient.type === type)
                      .map((ingredient, idx) => {
                        return (
                          <li className={styles.ingredient} key={ingredient._id}>
                            <img
                              className={styles.image + " pl-4 pr-4 mb-1"}
                              alt={ingredient.name}
                              src={ingredient.image}
                            />
                            <div className={styles.price + " mb-2"}>
                              <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                              <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default mb-6">{ingredient.name}</p>
                            {(idx + 1) % 3 === 0 && <Counter count={1} size="default" />}
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired
}

export default BurgerIngredients;
