import React from 'react'

const ThankYou = (props) => {
    return (
    <div className={"justify-content-center mt-5 " + (props.thanks.type || "invisible")}>
      {props.thanks.body}
    </div>
    );
};

export default ThankYou
