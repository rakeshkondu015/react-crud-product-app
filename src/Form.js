import { useState } from "react";




function Form(props){

   const [product,setProduct] =useState(props.data);
   let changeFormData=(event)=>{
      const{name,value}     = event.target;

      setProduct({...product,[name]:value})

    
   }
    return(
        <div className="form-overlay">
            <form>
                <div className="form-group">
                   <label>Name:</label>
                   <input className="form-control mt-2" value={product.name}   type = "text" name = "name" placeholder="Enter Name"
                   onChange={changeFormData}  />

                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control mt-2" value={product.price}  type="Number" name="price" placeholder="Enter the Price"
                    onChange={changeFormData} />


                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control mt-2" 
                     value={product.category}

                    onChange={changeFormData}
                       name="category">
                        <option value='-1'></option>
                        <option value={'Mobiles'}>Mobiles</option>
                        <option value={'Laptops'}>Laptops</option>
                        <option value={'Tv'}>TV's</option>

                    </select>

                </div>
                <button className="btn btn-primary float-end"
                onClick={(e)=>{
                    e.preventDefault();
                    props.add(product)

                }}
                
                
                >send</button>
                <button className="btn btn-danger float-end">Cancle</button>

            </form>

        </div>
    );
}

export default Form;