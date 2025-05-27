import { useEffect, useState } from "react";
const pageTitle = document.title;

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // works like a switch for the document title as well
    count && (document.title = `${pageTitle}--${count}`);
  })
  return (
    <button onClick={() => setCount(count + 1)}
    // checks if there is more than 0, if true it shows the value in the button
    >Click Me {count === 0 ? `` : `${count} times`}</button>
  )
}

export default Counter;