import { StButton } from "../../styles/ButtonStyle";
import * as S from "../../styles/ModalWindowStyle";

const ModalWindow = ({ openModalHandler }) => {
  return (
    <div>
      <S.ModalDiv></S.ModalDiv>
      <S.ModalComponents>
        <div>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </div>
        <S.ButtonSet>
          <StButton backgroundColor="#fab1a0">
            <button className="small-button" onClick={openModalHandler}>
              닫기
            </button>
          </StButton>
          <StButton backgroundColor="#55efc4">
            <button className="small-button">확인</button>
          </StButton>
        </S.ButtonSet>
      </S.ModalComponents>
    </div>
  );
};

export default ModalWindow;
