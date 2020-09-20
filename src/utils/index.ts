// numerの○％は何？
// calculatePercentage(canvas.height, 10)
export const getRealNumber = (denom: number, percentage: number) => {
  return (denom * percentage) / 100
}

// ○の内○は何％
// calculateRate(body.clientHeight, window.scrollY)
export const getPercentage = (denom: number, numer: number) => {
  return (numer * 100) / denom
}
