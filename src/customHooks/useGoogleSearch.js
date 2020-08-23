import React, {useState, useEffect} from 'react'
import API_KEY from '../keys'

const CONTEXT_KEY = "4b20f4fad50e7fb91"


//THIS IS A CUSTOM HOOK
const useGoogleSearch = (searchTerm) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    
    const fetchData = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
    }

    fetchData()
  }, [searchTerm])

  return { data }
}


export default useGoogleSearch


