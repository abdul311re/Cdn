import { useState } from "react";
import axios from 'axios';

const Crud =() => {
  const [values, setValues] = useState({
  name :'',
  email:'',
  mobile:'', 
  password:'',

  })
  const handleSubmit = (event) =>{
    event.preventDefult();
    axios.post('http://localhost:8080/register', values)
    .then(res => console.log(res))
    .then(err => console.log(err))

  }
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-purple-200 p-6">
        <h1 className="text-2xl font-bold mb-4">CRUD Operation</h1>
        <form onSubmit={handleSubmit}  className="flex flex-col bg-white p-4 shadow-md rounded-md">
          <table cellSpacing="10">
            <tbody>
              <tr>
                <th>
                  <label htmlFor="email">Email:</label>
                </th>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    onChange={e => setValues({...values,email:e.target.value})
                   }
                    className="border border-gray-300 rounded p-1 w-full"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="username">UserName:</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                   onChange={e => setValues({...values,name:e.target.value})
                   }
                    className="border border-gray-300 rounded p-1 w-full"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="password">Password:</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    onChange={e => setValues({...values,password:e.target.value})
                   }
                    className="border border-gray-300 rounded p-1 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="right">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Crud;
