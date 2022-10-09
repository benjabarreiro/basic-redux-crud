import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, deleteAll, edit, deleteOne } from "./redux/crud";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [value, setValue] = useState("");
  const list = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(create({ id: uuidv4(), text: value }));
          setValue("");
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(deleteAll())}>Delete all</button>
      {list.map((x) => (
        <div
          key={x.id}
          onClick={() => {
            dispatch(edit({ id: x.id, text: value }));
            setValue("");
          }}
        >
          hola, {x.text}{" "}
          <button onClick={() => dispatch(deleteOne({ id: x.id }))}>
            Delete it
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
