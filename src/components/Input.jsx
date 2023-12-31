import React, { useState } from "react";
import { StForm } from "../styles/InputStyle";
import { StButtonContainer } from "../styles/ButtonStyle";

const Input = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "0",
  });

  const onChangeHandler = (event, label) => {
    let value = event.target.value;
    if (label === "price") {
      value = value.replace(/^0+|[^0-9]/g, ""); // 시작점 0과 숫자가 아닌 것을 ""로 치환
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리 숫자 그룹간 경계를 ,로 치환
    }

    // 한글 입력 시 '0' 유지
    if (label === "price" && value === "") {
      value = "0";
    }

    setProduct({
      ...product,
      [label]: value,
    });
  };

  const onClickHandler = () => {
    if (product.name !== "" || product.price !== "0") {
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

      <StButtonContainer backgroundColor="#55efc4">
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
      </StButtonContainer>
    </StForm>
  );
};

export default Input;
