// import React, { useRef } from "react";

// export default function Field() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleValue() {
//     console.log(inputRef.current?.value);
//   }

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleValue}>콘솔 value</button>
//     </>
//   );
// }

import React, { forwardRef, InputHTMLAttributes, useRef } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

export default function Field() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleFocus}>입력란 포커스</button>
    </>
  );
}