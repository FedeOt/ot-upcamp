export const RadioButton = (props) => {
  return (
    <div className="d-inline">
      <input
        onChange={props.onChange}
        name={props.name}
        className="form-check-input ms-3"
        type="radio"
        value={props.value}
        checked={props.checked}
      />

      <label className="ms-1">{props.label}</label>
    </div>
  );
};
