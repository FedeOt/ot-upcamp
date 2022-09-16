

export const ValidationMessage = (props) => {
  return (
    <span className={`${props.error ? 'text-danger' : 'text-dark'}`}>{props.text}</span>
  )
}
