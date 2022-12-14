import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;

  .container-home {
    width: 80%;
  }

  .cotacao-simualdor {
    display: flex;
    flex-direction: column;
  }

  #cotacoes {
    display: flex;
    flex-direction: column;
  }

  #simulador {
    
  }

  @media screen and (min-width: 1000px) {
    .cotacao-simualdor {
      flex-direction: column-reverse;
    }

    #cotacoes {
      width: 100%;
      flex-direction: row-reverse;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      #img-figure {
        width: 50%;
      }
    }
    #cotacao {
      width: 50%;
    }
  }
  
`;
export const SimualdorStyle = styled.div`
figure{
  width: 100%;
}
@media (min-width: 1000px) {
  display: flex;
figure{
  width: 45%;
}
}
`