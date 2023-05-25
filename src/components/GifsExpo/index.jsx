import { useEffect, useState } from "react"

const GifsExpo = ({ categories = [] }) => {

    const [urlList, setUrlList] = useState([])

    const getGifs = async (categories) => {
    if (categories.length === 0) {
        setUrlList([])
        return

    }    


        const responsesList = await Promise.all(categories.map(async (category) => {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=EFS6gFbXJZRosmPw59zULSiEV6gT97C2&q=${category}&limit=10`
            )
            const apiResponse = await response.json()
            return apiResponse.data
        }))

        let gifsList = []

        responsesList.forEach((data) => {
            data.forEach((item) => {
                gifsList = [...gifsList, item.images.fixed_width.url.split('?')[0]]
            })
        })

        setUrlList([...gifsList])
    }

  useEffect(() => {
     getGifs(categories)
  },
  [categories]
  )

   

    return (
        <>
            <div>
                {
                    urlList.map((url) => {
                        return (
                            <img key={url} src={url} />   
                        )
                    })
                }
            </div>
        </>
    )
}

export default GifsExpo