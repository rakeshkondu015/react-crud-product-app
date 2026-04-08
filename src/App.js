import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

import { getData, deleteData ,postData,putData} from "./api";


function App(){

const [products, setproducts] =useState([]);
const[openForm,setOpenForm] = useState(false);
const[edit,setEdit] = useState(false);
const [intialForm,setForm] = useState({
  name:'',price:'',category:''
})


useEffect(
  ()=>{
    getProducts()
    
  },[]


)

let getProducts = async ()=>{
  let res = await getData();
  setproducts(res.data)
}

let deleteProduct = async(id)=>{
   await  deleteData(id);
   getProducts()
}

let addProduct = async(product)=>{

  let data ={
    name:product.name,
    price:product.price,
    category:product.category
  }

  if(edit)
await putData(product.id ,data);
  else
   await  postData(data);
   getProducts();
   setOpenForm(false);
}

let editProduct = async(data)=>{
   setForm(data)
   setOpenForm(true);
   setEdit(true);
}


let showForm=()=>{
  setOpenForm(true);
  setOpenForm({
  name:'',price:'',category:''
})

}

let closeForm=()=>{
  setOpenForm(false)
}


  return(

    <div className="wrapper m-5 w-50">
      <h1 className="text-primary"> CRUD Operations Project</h1>
      <button className="btn btn-primary" onClick={()=>{
        showForm()

      }}
      >Add Product</button>
      <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
      {
        openForm && <Form closeForm={closeForm} data={intialForm} add={addProduct} />
      }
    </div>
  );
}


export default App;