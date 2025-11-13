import React from 'react'

function Loader() {
  return (
    <div
      style={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm" 
        alt="Loader" 
        style={{width: 220, height: 120}} 
      />
    </div>
  )
}

export default Loader