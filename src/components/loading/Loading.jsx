import React, { useState } from "react";

const Loading = () => {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <div>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
    </section>
  );
};

export default Loading;
