import{styled} from "styled-components"

export const StyledInput = styled.input`

  font-size: 17px;
  font-weight: 500;
  margin-left: 40px;
  cursor: pointer;
  border: 2px solid #ccc;
  transition: border-color 0.3s ease;

  &.clicked {
    border-color: rgb(143, 73, 255);
  }
`;

export const FirstMain =styled.div`
    background: rgb(244, 241, 251);
    cursor: default;
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    padding: 40px 80px 60px;
    width: 100%;
`