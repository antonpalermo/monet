export function parseTimestamp(timestamp: string) {
  const date = new Date(timestamp)

  const month = date.getUTCMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = date.getMinutes()

  const currentHour = hours > 12 ? "PM" : "AM"
  hours = hours % 12
  hours = hours ? hours : 12

  const paddedMonth = `${month}`.padStart(2, "0")
  const paddedDay = `${day}`.padStart(2, "0")
  const paddedHours = `${hours}`.padStart(2, "0")
  const paddedMinutes = `${minutes}`.padStart(2, "0")

  return `${paddedMonth}-${paddedDay}-${year} ${paddedHours}:${paddedMinutes} ${currentHour}`
}
