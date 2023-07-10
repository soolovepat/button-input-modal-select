import { StModalDiv, StModalComponents, StButtonSet } from "../../styles/MiniModalWindowStyle";

const MiniModalWindow = ({ openMiniModalHandler }) => {
    return (
        <div>
            <StModalDiv onClick={openMiniModalHandler}></StModalDiv>
            <StModalComponents>
                <div>닫기 버튼 1개가 있고,<br />외부 영역을 누르면 모달이 닫혀요.</div>
                <StButtonSet>
                    <div>
                        <button onClick={openMiniModalHandler}>X</button>
                    </div>
                </StButtonSet>
            </StModalComponents>
        </div>
    )
}

export default MiniModalWindow;