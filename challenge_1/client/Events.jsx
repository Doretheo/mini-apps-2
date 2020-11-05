import React from 'react';

const Events = ({data}) => {
  const eventList = data.map((event) => {
    const { description, category2, date} = event;
    return (
      <div>
        <strong>Description: </strong> {description}<br /><br />
        <strong>Category: </strong> {category2}<br /><br />
        <strong>Date: </strong>{date}<br /><br />
        <br />
        <br />
      </div>
    )
  })
  return (
    <div>
      {eventList}
    </div>
  )
}

export default Events;