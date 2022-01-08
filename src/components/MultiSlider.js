import { useState } from "react";
import "./MultiSlider.css"


const items = [
    {
        key: 1,
        bgColor : "red"
    },
    {
        key: 2,
        bgColor : "blue"
    },
    {
        key: 3,
        bgColor : "green"
    },
    {
        key: 4,
        bgColor : "yellow"
    },
    {
        key: 5,
        bgColor : "indigo"
    },
    {
        key: 6,
        bgColor : "crimson"
    },
    {
        key: 7,
        bgColor : "lime"
    },
]

const MultiSlider = () => {
    

    
    
    const [productListSteps, setProductListSteps] = useState(0);
    const [listTransform, setListTransform] = useState("translateX(0px)");
    
    const productListItemWidth = 300;
    const productAmountVisible = 4;
    const productListWidth= (items.length) * productListItemWidth;
    const productAmount =  items.length
    

    const handlePrev = () => {
        if(productListSteps > 0) {
            setProductListSteps(prevState => {
                const newState =  --prevState;
                moveProductList(newState);
                return newState
            });
            moveProductList();
        }
    }

    const handleNext = () => {
        if(productListSteps < productAmount-productAmountVisible) {
           setProductListSteps(prevState => {
                const newState =  ++prevState;
                moveProductList(newState);
                return newState
            });
        }
        console.log("hello");
    }

    function moveProductList(value){
        setListTransform(`translateX(-${productListItemWidth*value}px)`)
    }

    return ( 
        <div className="carousel js-product-carousel">
            <div className="carousel-view" style={{width:productListItemWidth*4}}>
                <span className="carousel-control js-carousel-prev" onClick={handlePrev}>
                    <i className="icon">&#60;</i>
                </span>
                <span className="carousel-control js-carousel-next" onClick={handleNext}>
                    <i className="icon">&#62;</i>
                </span>
                <ul className="product-list" style={{ width:productListWidth, transform: listTransform}}>

                    {
                        items.map(item => (
                            <li className="product-list-item" key={item.key} style={{backgroundColor: item.bgColor, width:productListItemWidth}}>
                                <div data-slide="1" className="product">
                                
                                </div>
                            </li>
                        ))
                    }
                   
                  
                </ul>
            </div>
        </div>
     );
}
 
export default MultiSlider;