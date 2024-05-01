// import React, { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { useForm } from "react-hook-form";

// const UpdateModal = ({ item }) => {
//   const { user } = useContext(AuthContext);
//   console.log(user?.email);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   // const { handelUpdate } = props;
//   console.log(item);
//   return (
//     <div>
//       {/* You can open the modal using document.getElementById('ID').showModal() method */}

//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box w-11/12 max-w-5xl">
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <p className="py-4">Click the button below to close</p>
//           <div className="modal-action">
//             <form method="dialog">
//               <div className="w-1/2">
//                 <h1 className="text-center font-semibold text-indigo-700">
//                   Add your products
//                 </h1>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   {/* register your input into the hook by invoking the "register" function */}
//                   <input
//                     className="border border-black p-3 w-1/3 m-4"
//                     placeholder="ToyName"
//                     {...register("name")}
//                   />
//                   <input
//                     className="border border-black p-3  m-4"
//                     placeholder="price"
//                     {...register("price")}
//                   />
//                   <br />
//                   <input
//                     className="border border-black p-3 w-1/3 m-4"
//                     placeholder="please Enter your email"
//                     defaultValue={user?.email}
//                     {...register("email")}
//                   />
//                   <input
//                     className="border border-black p-3 w-1/3 m-4"
//                     defaultValue="Deseription"
//                     {...register("detailDescription")}
//                   />
//                   <br />
//                   <input
//                     className="border border-black p-3 w-1/3 m-4"
//                     name="rating"
//                     placeholder="rating"
//                     {...register("rating")}
//                   />
//                   <input
//                     className="border border-black p-3 w-1/3 m-4"
//                     name="availableQuantity"
//                     placeholder="Available Quentity"
//                     {...register("availableQuantity")}
//                   />
//                   <select {...register("subcategory")} className="p-3">
//                     <option value="cartoy">CarToy</option>
//                     <option value="shiptoy">ShipToy</option>
//                     <option value="planetoy">PlaneToy</option>
//                   </select>
//                   <input
//                     className="border border-black p-3 w-3/4 m-4"
//                     name="pictureURL"
//                     placeholder="https://example.com/products.jpg"
//                     {...register("pictureURL")}
//                   />

//                   {/* include validation with required or other standard HTML validation rules */}
//                   {/* <input {...register("exampleRequired", { required: true })} /> */}
//                   {/* errors will return when field validation fails  */}
//                   {/* {errors.exampleRequired && <span>This field is required</span>} */}
//                   <input
//                     className="bg-blue-700 p-4 rounded-2xl"
//                     type="submit"
//                   />
//                 </form>
//               </div>

//               {/* if there is a button, it will close the modal */}
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default UpdateModal;
