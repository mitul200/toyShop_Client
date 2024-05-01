import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import UpdateModal from "../../utils/UpdateModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:5000/myProducts/${user?.email}`)
      .then((res) => res.json())
      .then((datas) => {
        setItems(datas);
      });
  }, [user]);
  console.log(items);

  // searchitems
  const handelSearch = () => {
    fetch(`http://localhost:5000/searchName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log("tttttttttttttttttttttttttt", data);
      });
  };
  // console.log(data);

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/produts/${id}`,{
      method:"DELETE"
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="mx-32 h-screen">
      {/* <UpdateModal /> */}
      <h1 className="text-5xl text-center text-fuchsia-800 my-5">
        Posted items
      </h1>
      <div className="flex justify-center">
        <div>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-3 rounded-xl mr-3"
          />
          <button onClick={handelSearch} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Products Name</th>
              <th>Available Quantity</th>
              <th>email</th>
              <th>Price</th>
              <th>Edite</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items?.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.subcategory}</td>
                <td>{item.availableQuantity}</td>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-ghost">✒️</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handelDelete(item._id);
                    }}
                    className="btn btn-ghost"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;