import React, {useState, useReducer} from 'react';
import {initialState, simpleReducer} from '../reducers/App'


const Todo = () => {
    const [newList, setNewList] = useState('')

    const [state, dispatch] = useReducer(simpleReducer, initialState)
    console.log(state)

    const handleChanges = e => {
        setNewList(e.target.value)
    };

    const editList = e => {
        dispatch({ type: "CHANGE_COMPLETED"})
    };

    const changeTitle = e => {
        dispatch({ type: "CHANGE_TITLE", payload: newList });
      };

    return (
        <div>
            {this.state.completed ? (
                <div>
                    <input
                    className="title-input"
                    type="text"
                    name="newTitleText"
                    value={newList}
                    onChange={handleChanges}
                  />
                  <button onClick={changeTitle}>Update title</button>
                  </div>
                  ) : (
                      <h2>
                        {state.completed} <i className="far fa-edit" onClick={editList} />    
                      </h2>
                  )}
            )}
        </div>
    )


}


export default Todo;