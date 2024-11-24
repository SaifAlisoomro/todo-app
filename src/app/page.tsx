"use client";
import { useState } from "react";

export default function Home() {
  const [todos, settodos] = useState([
    { movie: "Titanic", id: 2 },
    { movie: "The World", id: 2 },
  ]);

  const [inputval, setInput] = useState("");
  const [Id, setId] = useState(0);

  const additems = () => {
    let object = todos.find((item) => item.id == Id);
    if (object) {
      let newArray = todos.filter((item) => item.id !== object.id);
      settodos([...newArray, { movie: inputval, id: Id }]);
      setInput("");
      setId(0);
      return;
    }
    settodos([...todos, { movie: inputval, id: Id }]);
    setInput("");
    setId(0);
  };

  const Edititem = (id: number) => {
    let object = todos.find((item) => item.id === id);
    if (object) {
      setInput(object.movie);
      setId(object.id);
    }
  };

  const deleteitem = (id: number) => {
    let newArray = todos.filter((item) => item.id !== id);
    settodos([...newArray]);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 shadow-md shadow-black rounded-sm font-sans mt-10 lg:mt-32">
      <h1 className="text-center text-3xl lg:text-[40px] font-sans font-bold pb-5 text-gray-600">
        TODO APP
      </h1>
      <div className="flex flex-col lg:flex-row justify-around gap-5">
        <input
          className="w-full lg:w-[60%] p-2 text-lg shadow focus:outline-none"
          placeholder="Add Movies"
          type="text"
          value={inputval}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <input
          className="w-full lg:w-[20%] p-2 text-lg shadow focus:outline-none"
          placeholder="Add I'd"
          type="number"
          value={Id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setId(Number(e.target.value))
          }
        />
        <button
          onClick={additems}
          className="w-full lg:w-[20%] bg-blue-800 text-white font-sans font-bold rounded-md text-center py-2 hover:bg-slate-700"
        >
          Add Movie
        </button>
      </div>
      <h1 className="text-center text-3xl lg:text-[40px] font-sans font-bold pb-5 mt-5 text-gray-600">
        Movies List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {todos.map((item, i) => (
          <div key={i} className="shadow p-4 bg-white rounded-md">
            <div className="flex justify-between items-center">
              <span className="shadow rounded-full w-8 h-8 text-center">
                {i + 1}
              </span>
              <span
                onClick={() => deleteitem(item.id)}
                className="shadow rounded-full w-8 h-8 text-center cursor-pointer text-red-800"
              >
                X
              </span>
            </div>
            <div className="mt-5 text-lg lg:text-[30px] text-gray-600">
              {item.movie}
            </div>
            <div>
              <h2
                onClick={() => Edititem(item.id)}
                className="text-right font-bold cursor-pointer text-blue-700"
              >
                Edit
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
