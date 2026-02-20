import {useState} from "react";
import { IsValidEmail} from "../helpers/CheckEmail";
import { IsValidNumero } from "../helpers/CheckNumero";

export function useCheckForm(initialValues){

    const [values,setValues] = useState(initialValues)
    const [errors,setErrors] = useState(initialValues)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = (event) => {

        const {name, value} = event.target;
        setValues(preVal => ({
            ...preVal,
            [name] : value
        }));
        
    }

    const handleBlur = (event) => {

        const {name, value} = event.target;

        
            setErrors(prevErr => {
                const newErrors = {...prevErr};
                if(name === "email" )
                {
                    if(!IsValidEmail(value)){
                        newErrors[name] = 'El correo no es válido'
                    }
                    else{
                        delete newErrors[name]
                    }

                }

                if(name === "numero" )
                {
                    if(!IsValidNumero(value)){
                        newErrors[name] = 'El numero no es válido'
                    }
                    else{
                        delete newErrors[name]
                    }

                }
                return newErrors;
        
            })
        
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        if(!!errors.email || !!errors.numero || values.nombre.trim() === "" )
        {
            return;
        }
        else
        {
            console.log(values)
            setIsModalOpen(true)
            setValues(initialValues)
            setErrors({})
        }
    }

    return {values,errors,isModalOpen,handleSubmit, handleChange,handleBlur,setIsModalOpen}

}
