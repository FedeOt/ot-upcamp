

export const ValidationMessage = ({error,text}) => {
  return (
    <span
     className={`${error ? 'text-danger' : 'text-dark'}`}>{text}</span>
  )
}
