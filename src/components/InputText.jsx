
export const InputText = ({onChange,name,value,testId}) => {
    return (
        <input 
        data-testid={testId}
        type="text" 
        onChange={onChange} 
        autoComplete="off" 
        name={name} 
        className="form-control w-75" 
        value={value} />
    )
}
