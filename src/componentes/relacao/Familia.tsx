import React from "react";
import { Text } from "react-native/types";
import padrao from "../../estilo/padrao";
import Membro from "./Membro";

export default (props: any) => {
    return (

        <>
        <Text style={padrao.txtG}>Membros da Familia</Text>
        {props.children}
        </>

    )
}