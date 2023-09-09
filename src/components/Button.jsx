/* eslint-disable react/prop-types */
import { Button as BaseButton } from "@nextui-org/react";
import { useNavigation } from "react-router-dom";

export default function Button (props) {
    const navigation = useNavigation();
    return <BaseButton   isLoading={navigation.state === "loading" ? true : false} {...props}  className={props.className == undefined ? "bg-gradient-to-tr  from-blue-600 to-teal-400" : ""} variant={ props.variant == "" ? "shadow" : props.variant }>¡Iniciar!</BaseButton>
}