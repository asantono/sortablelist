import React, { Fragment, useState } from "react";

const List = () => {
  const [listData, setListData] = useState([
    {
      name: "French Fries",
      description: "crispy salted fries cooked to order",
      price: "3.99",
      img:
        "https://cdn.pixabay.com/photo/2015/09/05/01/05/french-fries-923687_1280.jpg",
    },
    {
      name: "Bacon Cheese Burger",
      description:
        "1/3rd pound of ground sirloin topped with bacon, and cheddar",
      price: "17.99",
      img:
        "https://cdn.pixabay.com/photo/2017/01/13/03/02/burgers-1976198_1280.jpg",
    },
    {
      name: "Fried Chicken",
      description: "crispy spicy fried chicken cooked to order",
      price: "7.99",
      img:
        "https://cdn.pixabay.com/photo/2015/03/26/09/39/fried-chicken-690039_1280.jpg",
    },
    {
      name: "Pastor Tacos",
      description: "Three pork tacos with sweet spicy sauce and pineapple",
      price: "8.99",
      img:
        "https://cdn.pixabay.com/photo/2019/09/26/04/01/tacos-pastor-4505032_1280.jpg",
    },
    {
      name: "Tuna Tartar Crispy Tacos",
      description: "crispy shell taco with our premium tuna",
      price: "13.99",
      img:
        "https://cdn.pixabay.com/photo/2014/06/15/04/35/tacos-369179_1280.jpg",
    },
    {
      name: "Fiesta Quesadilla",
      description:
        "tortilla filled with peppers, onions, corn, chicken, and montery jack cheese",
      price: "3.99",
      img:
        "https://cdn.pixabay.com/photo/2016/10/21/23/54/quesadilla-1759460_1280.jpg",
    },
  ]);

  const myList = listData.map((el) => (
    <div className="list__card">
      <div className="list__card-left">
        <img src={el.img} alt={el.name} />
      </div>
      <div className="list__card-right">
        <div className="list__card-right--name"> {el.name} </div>
        <div className="list__card-right--description"> {el.description} </div>
        <div className="list__card-right--price"> {el.price} </div>
      </div>
    </div>
  ));

  const listTitle = <div className="list__title">list items</div>;

  return (
    <Fragment>
      {listTitle}
      <div className="list">{myList}</div>
    </Fragment>
  );
};

export default List;
