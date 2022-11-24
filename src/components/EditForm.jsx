import { useState } from "react"

const EditForm = ({todoText, handleSubmit }) => {
    const [text, setText] = useState(todoText || "");

    //   const handleSubmit = (e, newText) => {
    //     e.preventDefault();
    //     dispatch(editText(id, newText));
    //   };

  return (
    <>
     <form onSubmit={(e) => handleSubmit(e, text)}>
      <input
        // ref={focusInput}
        type="text"
        className="focus:outline-none focus:bg-transparent w-full"
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
     </form>
    </>
  )
}

export default EditForm