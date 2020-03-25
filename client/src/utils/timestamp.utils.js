export const newFormattedTimestamp = () => {
  // create new date object
  let newDate = new Date()
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()

  // format for any missing 0's
  if(hours < 10)
    hours = `0${hours}`
  if(minutes < 10)
    minutes = `0${minutes}`

  // create new timstamp from date object and return
  let newTimestamp = `${hours}:${minutes}`
  console.log('newTimestmap:', newTimestamp)

  return newTimestamp;
}

export const formatMessageTimestamp = (timestamp) => {
  return timestamp
}