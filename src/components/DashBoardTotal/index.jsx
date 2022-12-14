import { useContext } from "react"
import { GraficsContext } from "../../providers/grafics"
import { Line } from "../LoginArea/styles"
import { DashBoardTotalContainer,
         DashBoardTotalHeader,
         DashBoardBody } from "./style"

import { StyledSpan } from "./style"

export const DashBoardTotal = () => {

    const {data} = useContext(GraficsContext)

    const positivo = data.filter(el=> el.tipo=== "Ganho").map(el=> el.valor).reduce((p, c)=> parseFloat(p)+parseFloat(c),0);
    const negativo = data.filter(el=> el.tipo=== "Gasto").map(el=> el.valor).reduce((p, c)=> parseFloat(p)+parseFloat(c),0);
    const total = parseFloat(positivo-negativo)
    const color = total >0? "green":"red";
    
    return(
        <DashBoardTotalContainer>
            <DashBoardTotalHeader>
                <h3>Valor total</h3>
                <Line />
            </DashBoardTotalHeader>

            <DashBoardBody>
                <p>
                    Total de gastos: <StyledSpan color="red"> 
                                             {negativo.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                                })}
                                        </StyledSpan>
                </p>

                <p>
                    Total de ganhos: <StyledSpan color="green"> 
                                            {positivo.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                                })}
                                        </StyledSpan>
                </p>

                <p>
                    Saldo: <StyledSpan color={color}>
                                {total.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                    })}
                              </StyledSpan>
                </p>
            </DashBoardBody>

        </DashBoardTotalContainer>
    )
}

