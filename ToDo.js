import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ToDo.css";

function ToDo() {
  const [Inputvalue, setinput] = useState("");
  const [ArryValue, InputArry] = useState([]);
  const [check, setcheck] = useState([]);
  const [edit, setedit] = useState(false);

  function GetInput(e) {
    setinput(e.target.value);
  }

  function ProceedData(e) {
    e.preventDefault();
    if (edit === false) {
      InputArry([...ArryValue, Inputvalue]);
    } else {
      ArryValue[edit] = Inputvalue;
      setedit(false);
    }
    setinput("");
  }

  function deleteIcon(e, index, input) {
    e.preventDefault();
    if (check.includes(input)) {
      setcheck(
        check.filter((inp, idx) => {
          return input !== inp;
        })
      );
    }
    InputArry(
      ArryValue.filter((inp, idx) => {
        return index !== idx;
      })
    );
  }

  function Check(e, name) {
    e.preventDefault();
    setcheck([...check, name]);
  }
  function editIcon(e, index) {
    e.preventDefault();
    setinput(ArryValue[index]);
    setedit(index);
  }

  return (
    <>  
      <form onSubmit={ProceedData}>
        <input
          type="text"
          placeholder="Please enter a product name"
          value={Inputvalue}
          onChange={GetInput}
        ></input>
        <button type="submit"> Add Product </button>
      </form>
      <div>
        <ul>
          {ArryValue.map((input, index) => {
            return (
              <li className={check.includes(input) ? "cross" : ""}>
                {input}
                <a href="" onClick={(e) => Check(e, input)}>
                  <CheckIcon />
                </a>
                <a href="" onClick={(e) => deleteIcon(e, index, input)}>
                  <DeleteIcon />
                </a>
                <a href="" onClick={(e) => editIcon(e, index)}>
                  <EditIcon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ToDo;
