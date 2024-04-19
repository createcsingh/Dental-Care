// ContextComp.js
import React, { useContext } from 'react';
import CreateContext from "./CreateContext"

function ComponentA() {
  const contextValue = useContext(CreateContext);
  console.log(contextValue)

  // Use the context value here

  return <div>ComponeetsA</div>;
}

export default ComponentA;
