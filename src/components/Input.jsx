import React, { useState } from "react";
import { StForm } from "../styles/InputStyle";
import { StButton } from "../styles/ButtonStyle";

const Input = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "0",
  });

  const onChangeHandler = (event, label) => {
    let value = event.target.value;

    // 숫자와 콤마만 허용
    value = value.replace(/^0+|[^0-9,]/g, "");

    // 콤마 제거
    value = value.replace(/,/g, "");

    // 한글 입력 시 '0' 유지
    if (label === "price" && value === "") {
      value = "0";
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

  const onClickHandler = () => {
    if (product.name !== "" || product.price !== "") {
      alert(
        `{ name : ${product.name}, price : ${product.price.replace(/,/g, "")} }`
      );
    } else {
      alert("이름과 가격을 입력해주세요");
    }
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
        <button className="small-button" type="button" onClick={onClickHandler}>
          저장
        </button>
      </StButton>
    </StForm>
  );
};

export default Input;
