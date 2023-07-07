import * as S from "../../styles/MiniModalWindowStyle";

const MiniModalWindow = ({ openMiniModalHandler }) => {
    return (
        <div>
            <S.ModalDiv onClick={openMiniModalHandler}></S.ModalDiv>
            <S.ModalComponents>
                <div>닫기 버튼 1개가 있고,<br />외부 영역을 누르면 모달이 닫혀요.</div>
                <S.ButtonSet>
                    <div>
                        <S.CloseButton onClick={openMiniModalHandler}>X</S.CloseButton>
                    </div>
                </S.ButtonSet>
            </S.ModalComponents>
        </div>
    )
}

export default MiniModalWindow;