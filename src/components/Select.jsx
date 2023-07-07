import React from "react";
import * as S from "../styles/SelectStyle";

const Select = () => {
  return (
      <div>
          <S.SelectLayout>
              <h1>Select </h1>
              <S.SelectComponents>
                  <div>
                      <S.SelectButton>
                          <option>리액트</option>
                          <option>자바</option>
                          <option>스프링</option>
                          <option>리액트네이티브</option>
                      </S.SelectButton>
                  </div>
              </S.SelectComponents>
          </S.SelectLayout>
      </div>
  )
}

export default Select;
