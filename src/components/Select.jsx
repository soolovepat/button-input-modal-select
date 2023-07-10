import React from "react";
import { StSelectLayout, StSelectComponents } from "../styles/SelectStyle";

const Select = () => {
  return (
      <div>
          <StSelectLayout>
              <h1>Select </h1>
              <StSelectComponents>
                  <div>
                      <select>
                          <option>리액트</option>
                          <option>자바</option>
                          <option>스프링</option>
                          <option>리액트네이티브</option>
                      </select>
                  </div>
              </StSelectComponents>
          </StSelectLayout>
      </div>
  )
}

export default Select;
