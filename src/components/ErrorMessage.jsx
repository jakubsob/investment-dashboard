import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    message && <div className="text-red-500 text-[10px] font-light mb-3">
      <span className="inline-block align-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </span>
      <span className="inline-block align-middle">
        {message}
      </span>
    </div>
  )
}

export default ErrorMessage
