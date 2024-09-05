import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexCurrentId);
    if (findIndexCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexCurrentId, 1);
    }
    setMultiple(copyMultiple);

    // console.log(getCurrentId)
    // setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultipleSelection ? (
                    multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                ) : (selected === dataItem.id  && <div className="content">{dataItem.answer}</div>)
              }
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
