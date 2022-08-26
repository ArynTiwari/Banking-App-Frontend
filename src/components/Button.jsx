import React from 'react'

function Button(styles) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    font-poppins rounded-[10px] font-medium text-[18px] mt-7 text-primary outline-none ${styles}`}>
      Get Started.
    </button>
  )
}

export default Button