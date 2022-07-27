import React from "react";
import { ContainerInput, Input, SendButton } from "./styled";

const InputsInfos = () => {
    return(
        <ContainerInput>
            <Input
            placeholder="Nome"
            >
            </Input>
            <Input
            placeholder="Sobrenome"
            >
            </Input>
            <Input
            placeholder="Participação"
            >
            </Input>
            <SendButton>
                Enviar
            </SendButton>
        </ContainerInput>
    )
}

export default InputsInfos