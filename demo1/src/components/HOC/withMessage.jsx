import React from "react";

function withMessage(Component) {
  return function Wrapped( props ) {
    return(
        <>
            <h1>This line is added by HOC</h1>
            <Component {...props} />
        </>
    )
    
  };
}

export default withMessage;
