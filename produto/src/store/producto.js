import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const vistaProducto = createAsyncThunk('producto/index', async(productoss)=>{
    return productoss;
})


let productoSlice = createSlice({
    name: 'producto',
    initialState:{
        producto:null,
        status:''
    },
    reducers:{
        buscarProducto: (state, action) =>{
            state.producto=action.payload;
        },
        añadirProducto: (state, action) =>{
            state.producto=action.payload;
        },
        actualizarProducto: (state, action) =>{
            state.producto=action.payload;
        },
        eliminarProducto: (state, action) =>{
            state.producto=action.payload;
        },
    },
    extraReducers:{
         [vistaProducto.pending]: (state, action)=>{
            state.status = 'loading...'
        },
         [vistaProducto.fulfilled]: (state,action)=>{
            state.game = action.payload;
        },
         [vistaProducto.rejected]:(state, action) => {
            state.status = 'Fallo'
        }
      
    }
});

export const {buscarProducto, añadirProducto, actualizarProducto, eliminarProducto}=productoSlice.actions;

export default productoSlice.reducer;