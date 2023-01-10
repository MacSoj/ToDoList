const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        {/* Update Task */}
        <div className="row">
          <div className="col">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="button mr-20"
            >Modificar</button>
            <button
              onClick={cancelUpdate}
              className="button"
            >Cancelar</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;