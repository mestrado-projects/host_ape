import styled from "styled-components";

const InitContent = styled.div`
  height: 100vh;
  min-height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 55px;
  }
`;

const ContainerCenterPage = styled.div`
  height: 100%;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerClicks = styled.div`
  width: 100%;
  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-decoration-line: underline;

    :hover {
      cursor: pointer;
    }
  }
`;


export { InitContent, ContainerCenterPage, ContainerClicks };
