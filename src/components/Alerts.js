import React from "react";

export default function Alerts(props) {
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {/* {" "} */}
            {props.alert.type.charAt(0).toUpperCase() +
              props.alert.type.slice(1)}
          </strong>
          : {props.alert.msg}
        </div>
      </div>
    )
  );
}
