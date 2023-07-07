import React, { useState } from "react";
import { StForm } from "../styles/InputStyle";
import { StButton } from "../styles/ButtonStyle";

const Input = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const onChangeHandler = (event, label) => {
    let value = event.target.value;

    // 숫자만 허용하도록 정규식 검사
    if (label === "price") {
      value = value.replace(/[^0-9]/g, "");
    }

    // 콤마 추가
    if (label === "price" && value.length > 3) {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    setProduct({
      ...product,
      [label]: value,
    });
  };

  return (
    <StForm>
      <h1>Input</h1>

      <StButton backgroundColor="#55efc4">
        <label>이름</label>
        <input
          value={product.name}
          onChange={(event) => onChangeHandler(event, "name")}
        />
        <label>가격</label>
        <input
          value={product.price}
          onChange={(event) => onChangeHandler(event, "price")}
        />
        <button
          className="small-button"
          type="button"
          onClick={() =>
            alert(
              `{ name : ${product.name}, price : ${product.price.replace(
                /,/g,
                ""
              )} }`
            )
          }
        >
          저장
        </button>
      </StButton>
    </StForm>
  );
};

export default Input;
