export  interface AuthState{
upload_status:"idle"|"loading"
status_message:string|null;
isLoggedin:boolean
isLoading:boolean
redirectHome:string |null
redirectForgetToLogin:string |null
}


export interface UserRegister{
    name:string;
    email:string;
    password:string;
    phone:string;
    answer:string;
}
export interface UserRegisterError{
    name?:string;
    email?:string;
    password?:string;
    phone?:string;
    answer?:string;
}
export interface UserLogin{
    email:string;
    password:string;
}

export interface UserLoginError{
    email?:string;
    password?:string;
}
export interface userUpdatePassword{
    user_id:string;
    password:string;
}

export interface UserForgetPassword{
    email:string;
    answer:string;
    newPassword:string;
}

export interface UserForgetPasswordError{
    email?:string;
    answer?:string;
    newPassword?:string;
}


export type NavLinks={
    name:string;
    path:string;
}


export interface CrudState{
    upload_status:"idle" | "loading"|"succeeded";
    status_message:string | null;
    isLoading:boolean;
    allProducts:any[];
    updateDetails:any | null;
}

export interface UpdatePassword{
    user_id:string;
    password:string;
}

export interface ProductCreateForm{
    name:string;
    category:string;
    price:string;
    description:string;
}

export interface ProductCreateFormError{
    name?:string;
    category?:string;
    price?:string;
    description?:string;
}

export interface UpdateProductForm{
    name:string;
    category:string;
    price:string;
    description:string;
    id:string
}

export interface SweetAlertProps{
    confirm:()=> void,
    cancel:()=> void,
    title:string,
    type:"warning" | "info" | "error" | "success";
}