import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import "./MultiSlider.css";

const items = [
  {
    key: 1,
    bgColor: "red",
    bgImage: "http://localhost:1337/uploads/deadpool_3_4bc27ce246.png",
  },
  {
    key: 2,
    bgColor: "blue",
    bgImage:
      "http://localhost:1337/uploads/deadpool_vs_wolverine_6f3a5f148d.png",
  },
  {
    key: 3,
    bgColor: "green",
    bgImage: "http://localhost:1337/uploads/fantastic_four_da534274f1.png",
  },
  {
    key: 4,
    bgColor: "yellow",
    bgImage: "http://localhost:1337/uploads/real_steel_2_79beefa164.png",
  },
  {
    key: 5,
    bgColor: "indigo",
    bgImage:
      "http://localhost:1337/uploads/deadpool_vs_wolverine_6f3a5f148d.png",
  },
  {
    key: 6,
    bgColor: "crimson",
    bgImage: "http://localhost:1337/uploads/fantastic_four_da534274f1.png",
  },
  {
    key: 7,
    bgColor: "lime",
    bgImage: "http://localhost:1337/uploads/real_steel_2_79beefa164.png",
  },
];

const MultiSlider = () => {
  const size = useWindowSize();

  console.log(size);

  const [productListSteps, setProductListSteps] = useState(0);
  const [listTransform, setListTransform] = useState("translateX(0px)");

  const calListItemWidth = () => {
    if (size.width < 640) return 100;
    if (size.width < 1007) return 200;
    return 300;
  };

  const productListItemWidth = calListItemWidth();
  const productAmountVisible = 4;
  const productListWidth = items.length * productListItemWidth;
  const productAmount = items.length;

  console.log(productListItemWidth);

  const handlePrev = () => {
    if (productListSteps > 0) {
      setProductListSteps((prevState) => {
        const newState = --prevState;
        moveProductList(newState);
        return newState;
      });
      moveProductList();
    }
  };

  const handleNext = () => {
    if (productListSteps < productAmount - productAmountVisible) {
      setProductListSteps((prevState) => {
        const newState = ++prevState;
        moveProductList(newState);
        return newState;
      });
    }
    console.log("hello");
  };

  function moveProductList(value) {
    setListTransform(`translateX(-${productListItemWidth * value}px)`);
  }

  return (
    <div className="carousel js-product-carousel">
      <div
        className="carousel-view"
        style={{ width: productListItemWidth * 4, height: (productListItemWidth * (1/1.5))}}
      >
        <span
          className="carousel-control js-carousel-prev"
          onClick={handlePrev}
        >
          <i className="icon">&#60;</i>
        </span>
        <span
          className="carousel-control js-carousel-next"
          onClick={handleNext}
        >
          <i className="icon">&#62;</i>
        </span>
        <ul
          className="product-list"
          style={{ width: productListWidth, transform: listTransform }}
        >
          {items.map((item) => (
            <li
              className="product-list-item"
              key={item.key}
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "100%",
                width: productListItemWidth,
                height: (productListItemWidth * (1/1.5)),
                backgroundRepeat: "no-repeat",
              }}
            >
              <div data-slide="1" className="product thumbnail">
                <div className="thumbnail-text">
                  <h5>Better Together Better Myanmar</h5>
                  <p>with Mosaic Myanmar</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSlider;
