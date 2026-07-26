

import React,{useEffect} from "react";
import withReactContent from "sweetalert2-react-content";
import type { SweetAlertProps } from "../../types/type"
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

const SweetAlertComponent:React.FC<SweetAlertProps>=({confirm,cancel,title,type})=>{
    useEffect(()=>{
       MySwal.fire({
        title,
        icon:"warning",
        showCancelButton:true,
       }).then((result)=>{
        result.isConfirmed ? confirm() : cancel();
       });
    });
};

export default SweetAlertComponent;
