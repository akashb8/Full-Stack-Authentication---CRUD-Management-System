import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CrudState, ProductCreateForm, UpdateProductForm} from "../types/type";
import axiosInstance from "../api/axiosInstance";
import { endPoints } from "../api/endPoints";
import { toast } from "sonner";




const initialState:CrudState={
     upload_status:"idle",
    status_message:null,
    isLoading:false,
    allProducts:[],
    updateDetails:null

}

export const createProduct=createAsyncThunk("/create/student",async(formdata:ProductCreateForm)=>{
    const res=await axiosInstance.post(endPoints.crud.create,formdata);
    return res?.data
})

export const allProductList=createAsyncThunk("/allProducts",async()=>{
    const list=await axiosInstance.get(endPoints.crud.listOfProducts);
    return list?.data
})

export const getProduct = createAsyncThunk("/Student", async(id:string)=>{
    const response = await axiosInstance.get(`${endPoints.crud.getProduct}/${id}`);
    return response?.data;
})

export const updateProduct = createAsyncThunk<UpdateProductForm,UpdateProductForm>("/update/student",async(data)=>{
    const updateDetails = await axiosInstance.post(`${endPoints.crud.updateProduct}/${data.id}`,data);
    return updateDetails?.data;
});

export const deleteProduct = createAsyncThunk("/delete",async (id:string)=>{
    const res = await axiosInstance.delete(`${endPoints.crud.delete}/${id}`);
    return res?.data;
})


export const crudSlice=createSlice({
    name:"crud",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(createProduct.pending,(state)=>{
            state.upload_status="loading";
            state.isLoading=true
        })
        .addCase(createProduct.fulfilled,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            state.isLoading=false;
           toast.success(action.payload?.message || "Product created successfully");
        })
        .addCase(createProduct.rejected,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            state.isLoading=false;
            toast.error(action.payload?.message || "Not created error!");
        })
            .addCase(allProductList.pending,(state)=>{
            state.upload_status="loading";
            state.isLoading=true;
        })
        .addCase(allProductList.fulfilled,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            state.isLoading=false;
           state.allProducts=action.payload?.data;
        })
        .addCase(allProductList.rejected,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            state.isLoading=false;
            toast.error(action.payload?.message || "No data fetched!");
        })
         .addCase(getProduct.pending,(state)=>{
            state.upload_status="loading";
        })
        .addCase(getProduct.fulfilled,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
           state.updateDetails=action.payload?.data;
        })
        .addCase(getProduct.rejected,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            toast.error(action.payload?.message || "Not data fetched!");
        })
          .addCase(updateProduct.pending,(state)=>{
            state.upload_status="loading";
            state.isLoading=true;
        })
        .addCase(updateProduct.fulfilled,(state,action:PayloadAction<any>)=>{
            state.upload_status="succeeded";
            state.isLoading=false;
           toast.success(action.payload?.message || "Details updated successfully!");
        })
        .addCase(updateProduct.rejected,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            state.isLoading=false;
            toast.error(action.payload?.message || "Not updated!");
        })
        .addCase(deleteProduct.pending,(state)=>{
            state.upload_status="loading";
        })
        .addCase(deleteProduct.fulfilled,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
           toast.success(action.payload?.message || "Product deleted successfully!");
        })
        .addCase(deleteProduct.rejected,(state,action:PayloadAction<any>)=>{
            state.upload_status="idle";
            toast.error(action.payload?.message || "Something went wrong!");
        })


    },
})