
export const InputText = ({onChange,name,value}) => {
    return (
        <input
        data-testid="account-name" 
        type="text" 
        onChange={onChange} 
        autoComplete="off" 
        name={name} 
        className="form-control w-75" 
        value={value} />
    )
}
