
export const InputText = (props) => {
    return (
        <input 
        data-testid={props.testId}
        type="text" 
        onChange={props.onChange} 
        autoComplete="off" 
        name={props.name} 
        className="form-control w-75" 
        value={props.value}
        />
    )
}
