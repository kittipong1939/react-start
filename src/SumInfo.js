import React from 'react'

function SumInfo(props) {
    const style = {
        color : props.total > 10 ?'red' : 'green'
    }
    return (
        <div className="suminfo">
            <h1 className='red'>Sum = {props.total}</h1>
            {/* {props.total > 10 
            ? <p>Ocer limit</p> 
            : <p>Ok</p>
            } */}

            {props.total > 10 &&<p>Over limit</p>}
            {props.total < 10 &&<p>OK</p>}
        </div>
    )
}

export default SumInfo