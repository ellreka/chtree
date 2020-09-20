import React from 'react'

export const ScrollBar: React.FC = () => {
  console.log('chtree--scrollbar')
  const navbar = document.querySelector('.navbar-fixed-top')
  const ref = React.useRef<HTMLCanvasElement | null>(null)
  const getContext = (): CanvasRenderingContext2D => {
    const canvas = ref.current as any
    return canvas.getContext('2d')
  }

  const drawCanvas = () => {
    const canvas = ref.current
    const ctx = getContext()
    if (canvas) {
      const draw = (positionY: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        canvas.height = window.innerHeight - 100
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 50, canvas.height)
        ctx.fillStyle = 'red'
        ctx.fillRect(0, positionY, 50, 10)
      }
      draw(0)
      canvas.addEventListener('click', (event) => {
        const thread = document.querySelector('.thread')
        var y = event.offsetY - 5
        console.log({ height: canvas.height, y })
        const a = Math.floor((y * 100) / canvas.height)
        if (thread) {
          console.log(thread.clientHeight)
          const b = Math.floor(thread.clientHeight * a) / 100
          console.log(b)
          window.scrollTo({
            top: b,
            behavior: 'smooth'
          })
        }
        console.log(a)
        draw(y)
      })
    }
  }

  React.useEffect(() => {
    drawCanvas()
  }, [ref])

  window.addEventListener('resize', () => {
    drawCanvas()
  })

  window.addEventListener('scroll', () => {
    // drawCanvas()
    const thread = document.querySelector('.thread')
    const body = document.querySelector('body')
    if (thread && body) {
      console.log(window.scrollY - 381)
    }
  })
  const images = document.querySelectorAll('.thread .image')
  images.forEach((img) => {
    const { top } = img.getBoundingClientRect()
    console.log({ top: top + window.pageYOffset })
  })
  return (
    <div style={{ position: 'fixed', top: navbar?.clientHeight, right: 0 }}>
      <canvas id="chtree--scrollbar" width={50} ref={ref}></canvas>
    </div>
  )
}
