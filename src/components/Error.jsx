

const Error = ({message}) => {
  return (
  <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5">
    <p>sorry it waas failed. please dont try again</p>
    <h2 className="font-bold">{message}</h2>
  </div>
  )
}

export default Error
