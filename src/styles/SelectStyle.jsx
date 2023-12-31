import { styled } from "styled-components";

export const StSelectLayout = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    /* position: relative; */
    margin-top: 50px;
`

export const StSelectComponents = styled.div`
    display: flex;
    gap: 10px;

    select {
        border: 1px solid rgb(221, 221, 221);
        height: 40px;
        width: 300px;
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
    }
`