import { styled } from "styled-components";

export const StModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
    opacity: 0.8;
    background-color: rgb(221, 221, 221);
`

export const StModalComponents = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 200px;
    position: absolute;
`

export const StButtonSet = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;

    button {
        border: 1px solid rgb(221, 221, 221);
        width: 40px;
        height: 40px;
        border-radius: 100%;
        cursor: pointer;
    }
`