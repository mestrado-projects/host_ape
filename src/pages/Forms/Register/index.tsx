import React, { useContext, useEffect, useState } from "react";

import NewButton from "../NewButton";
import SwitchButton from "../SwitchButton";
import Inputs from "../../../components/textfields/CommonTextField";
import { FormsVariablesContext } from "../../../common/contexts/FormsVariablesContext";

export default function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [CPF, setCPF] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    const [CPFError, setCPFError] = useState({
        name: { valid: true, text: "" },
    });

    const { submitForm } = useContext(FormsVariablesContext);
    const CPFDisabled = true;

    function validadeCPF(
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
        disabled: boolean
    ) {
        if (disabled) return;
        checkCPFError(event.target.value.length !== 11);
    }

    function maskCPFFunction(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const regex = /[^\d]+/g;
        const CPFValue = event.target.value.match(regex);

        if (CPFValue) {
            checkCPFError(true);
        } else {
            setCPF(event.target.value);
            checkCPFError(false);
        }
    }

    function checkCPFError(error: boolean) {
        if (error) {
            setCPFError({
                name: {
                    valid: false,
                    text: "O CPF deve ter 11 digitos(apenas numeros)",
                },
            });
        } else {
            setCPFError({
                name: { valid: true, text: "" },
            });
        }
    }

    useEffect(() => {
        if (
            email !== "" &&
            name !== "" &&
            lastName !== "" &&
            (CPFDisabled || (CPF !== "" && CPFError.name.valid === true))
        ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, CPF, name, lastName, disableButton, CPFError, CPFDisabled]);

    const switchButtonArray = [
        {
            setVariable: setPromotions,
            variable: promotions,
            stringVariable: "Promoções",
        },
        {
            setVariable: setNews,
            variable: news,
            stringVariable: "Novidades",
        },
    ];

    const inputsArray = [
        {
            setVariable: setName,
            variable: name,
            variableString: { name: "Name", nome: "Nome" },
            variableFunction: () => {},
            variableType: "text",
        },
        {
            setVariable: setLastName,
            variable: lastName,
            variableString: { name: "lastName", nome: "Sobrenome" },
            variableFunction: () => {},
            variableType: "text",
        },
        {
            setVariable: setCPF,
            variable: CPF,
            variableString: { name: "CPF", nome: "CPF" },
            variableFunction: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => validadeCPF(event, CPFDisabled),
            variableError: CPFError,
            variableType: "text",
            disabled: CPFDisabled,
            isVisible: CPFDisabled,
            maxLength: 11,
            mask: {
                mask: true,
                maskFunction: maskCPFFunction,
            },
        },
        {
            setVariable: setEmail,
            variable: email,
            variableString: { name: "email", nome: "email" },
            variableFunction: () => {},
            variableType: "email",
        },
    ];

    return (
        <form
            onSubmit={(event) => {
                submitForm(
                    event,
                    [name, lastName, email, CPF, String(promotions), String(news)],
                    1
                );
            }}
        >
            {inputsArray.map((parameter, i) => (
                <Inputs
                    key={parameter.variableType + i}
                    variable={parameter.variable}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableFunction={parameter.variableFunction}
                    variableError={parameter.variableError}
                    variableType={parameter.variableType}
                    maxLength={parameter.maxLength}
                    disabled={parameter.disabled}
                    isVisible={parameter.isVisible}
                    mask={parameter.mask}
                />
            ))}

            {switchButtonArray.map((parameter, i) => (
                <SwitchButton
                    key={parameter.stringVariable + i}
                    variable={parameter.variable}
                    setVariable={parameter.setVariable}
                    stringVariable={parameter.stringVariable}
                />
            ))}

            <NewButton disableButton={disableButton} inner={"Continuar"} />
        </form>
    );
}
