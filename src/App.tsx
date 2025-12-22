import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true)

      const FadeTimer = setTimeout(() => {
        setIsLoading(false)

        console.log('isLoading', isLoading)
      }, 600)

      console.log('isFadingOut', isFadingOut)

      return () => clearTimeout(FadeTimer)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen isFadingOut={isFadingOut} />
  }

  return <h1>Login</h1>
}

export default App
