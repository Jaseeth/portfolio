import { useEffect, useRef } from 'react'
export default function CursorGlow(){
  const ref = useRef(null)
  useEffect(() => {
    const move = e => {
      if (!ref.current) return
      ref.current.style.transform = `translate3d(${e.clientX - 180}px, ${e.clientY - 180}px, 0)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(121,247,212,.11),transparent_65%)] blur-2xl md:block" />
}
