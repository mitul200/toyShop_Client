import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [users, setUser] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:5000/myProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user]);

  return (
    <div className="mx-32 h-screen">
      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Products Name</th>
              <th>Categorys</th>
              <th>Price</th>
              <th>Edite</th>
              <th>Delet</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
