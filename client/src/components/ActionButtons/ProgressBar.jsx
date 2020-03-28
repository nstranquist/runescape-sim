import React from 'react'

export const ProgressBar = ({
  percentage,
  skillType
}) => {
  return (
    <div className={`progress-bar ${skillType}`} style={{ width: `${percentage}%` }}>
      
    </div>
  )
}
