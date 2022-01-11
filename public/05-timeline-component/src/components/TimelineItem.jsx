import React from 'react'

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <div className="time">
          {data.date}
        </div>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" noopener rel="noreferrer">
            {data.link.text}
          </a>
        )}
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default TimelineItem
