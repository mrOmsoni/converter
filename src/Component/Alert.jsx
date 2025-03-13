import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div class="alert alert-warning" role="alert">
             {props.next}
             {props.mode}
             
        </div>
    </div>
  )
}
