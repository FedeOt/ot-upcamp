
export const RadioButton = ({onChange,checked,ivalue,label,name}) => {
    return (
        <div className="d-inline">
            <input 
                onChange={onChange}
                name={name}
                className="form-check-input ms-3" 
                type="radio" 
                value={ivalue} 
                id="flexCheckDisabled" 
                checked={checked} 
             />
            
            <label className="ms-1">{label}</label>
        </div>
    )
}
