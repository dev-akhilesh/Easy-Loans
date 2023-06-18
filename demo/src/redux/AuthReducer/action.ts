import { useToast } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios"
import { registerDatatype } from "../../Pages/login-signup/login"


export const getData = async() =>{
    const res : AxiosResponse<registerDatatype[]> = await axios.get(
        `https://json-server-for-easyloan-web-project.onrender.com/users`
    );
    return res.data;
}

export const addUser = async(RegisterData : registerDatatype)  => {
    const res : AxiosResponse<registerDatatype[]> = await axios.post(
        `https://json-server-for-easyloan-web-project.onrender.com/users`,RegisterData 
    );
    return res;
};