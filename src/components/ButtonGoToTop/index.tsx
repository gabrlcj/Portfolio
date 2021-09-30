import { useEffect, useState } from 'react'
import { BackToTop } from './styles'
import { FiChevronsUp } from 'react-icons/fi'

export function ButtonGoToTop() {
  const [visible, setVisible] = useState(false)

  function handleScollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY >= 275) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)

    return function cleanupEvent() {
      window.removeEventListener('scroll', toggleVisibility)
    }
  })

  return (
    <BackToTop
      className={visible === true ? 'show' : ''}
      onClick={handleScollTop}
    >
      <FiChevronsUp />
    </BackToTop>
  )
}
