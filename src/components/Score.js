import React from 'react'

export default function Score(props) {
    console.log("asd", props)
    return (  
            <>
        {props.score &&
          props.score.map(item => {
            return (
              <div>
                <p>{item.words_per_minute}</p>
                <p>{item.time}</p>
                <p>{item.errors}</p>
              </div>
            );
          })}
      </>
        
    )
}
