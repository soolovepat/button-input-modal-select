import * as S from "../../styles/ModalWindowStyle";

const ModalWindow = ({openModalHandler}) => {
    return (
        <div>
            <S.ModalDiv></S.ModalDiv>
            <S.ModalComponents>
                <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
                <S.ButtonSet>
                    <div>
                        <S.CloseButton onClick={openModalHandler}>닫기</S.CloseButton>
                    </div>
                    <div>
                        <S.CheckButton>확인</S.CheckButton>
                    </div>
                </S.ButtonSet>
            </S.ModalComponents>
        </div>
    )
}

export default ModalWindow;