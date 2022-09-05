import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        let text =word.toLowerCase()
        return text.charAt(0).toUpperCase()+word.slice(1)

    }
  return (
<div style={{height:'50px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
{/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
<strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
</div>
  )
}

export default Alert
