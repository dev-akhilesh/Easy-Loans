import axios, { AxiosResponse } from "axios"
import { registerDatatype } from "../../Pages/login-signup/login"

export const getData = async() =>{
    const res : AxiosResponse<registerDatatype[]> = await axios.get(
        `https://attractive-pear-gazelle.cyclic.app/users`
    );
    return res.data;
}