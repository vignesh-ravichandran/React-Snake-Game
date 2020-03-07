import React from 'react';

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dotts, i) => {
        const style = {
          left: `${dotts[0]}%`,
           top: `${dotts[1]}%`
        }
        return (
          <div className="snake-dot" style={style} key={i} ></div>
        )
      })}
    </div>
  )
}
