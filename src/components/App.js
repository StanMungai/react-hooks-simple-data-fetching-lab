import React, {useState, useEffect} from 'react'

const App = () => {
    const [dogs, setDogs] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setDogs(data.message))
    }, [])
  return (
    <div>
        { dogs ? <img src={dogs} alt='A Random Dog'/> : <p>Loading...</p>}
    </div>
  )
}

export default App
