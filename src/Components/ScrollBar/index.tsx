import React from 'react'
import { getRealNumber, getPercentage } from '../../utils'

export const ScrollBar: React.FC = () => {
  console.log('chtree--scrollbar')
  const navbar = document.querySelector('.navbar-fixed-top')
  const ref = React.useRef<HTMLCanvasElement | null>(null)
  const [top, setTop] = React.useState(navbar?.clientHeight)
  const getContext = (): CanvasRenderingContext2D => {
    const canvas = ref.current as any
    return canvas.getContext('2d')
  }

  const drawCanvas = () => {
    const body = document.querySelector('body')

    const canvas = ref.current
    const ctx = getContext()
    if (canvas && body) {
      const currentScrollRatio = getPercentage(
        body.clientHeight,
        window.scrollY
      )
      const scrollbarCurrentPosition = getRealNumber(
        canvas.height,
        currentScrollRatio
      )
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        canvas.height = window.innerHeight
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 50, canvas.height)
        const images = document.querySelectorAll('.thread .image')
        images.forEach((img) => {
          const { top } = img.getBoundingClientRect()
          const a = getPercentage(body.clientHeight, window.pageYOffset + top)
          const b = getRealNumber(canvas.height, a)
          ctx.fillStyle = 'yellow'
          ctx.lineWidth = 5
          ctx.beginPath()
          ctx.arc(canvas.width / 2, b, 5, 0, 2 * Math.PI)
          ctx.closePath()
          ctx.fill()
        })
        ctx.fillStyle = 'red'
        ctx.fillRect(
          0,
          Math.sign(scrollbarCurrentPosition) !== -1
            ? scrollbarCurrentPosition > canvas.height - 6
              ? canvas.height - 6
              : scrollbarCurrentPosition
            : 0,
          50,
          10
        )
      }
      draw()
      canvas.addEventListener('click', (event) => {
        var y = event.offsetY
        const currentScrollbarRatio = getPercentage(canvas.height, y)
        const currentScrollY = getRealNumber(
          body.clientHeight,
          currentScrollbarRatio
        )
        window.scrollTo({
          top: currentScrollY,
          behavior: 'smooth'
        })
      })
    }
  }

  React.useEffect(() => {
    drawCanvas()
  }, [ref])

  window.addEventListener('resize', () => {
    // console.log(navbar?.clientHeight)
    // if (navbar) setTop(navbar.clientHeight)
    drawCanvas()
  })

  window.addEventListener('scroll', () => {
    drawCanvas()
  })
  return (
    <div
      className="chtree--scrollbar"
      style={{ position: 'fixed', top: 0, right: 0 }}>
      <canvas id="chtree--scrollbar" width={50} ref={ref}></canvas>
    </div>
  )
}
