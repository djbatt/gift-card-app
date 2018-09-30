import React from 'react'
import Loader from 'react-loader-spinner';

export default () => {
  return (
    <div className='SpinnerStyle'>
      <Loader type="Watch" color="teal" height={160} width={160} />
    </div>
  )
}
