import React from "react"

/**
 * Renders a meme component that displays a random meme image and allows the user to input top and bottom text.
 *
 * @return {JSX.Element} The rendered meme component.
 */
function Meme() {
    // State to hold information about the meme
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    // State to hold the list of all memes
    const [allMemes, setAllMemes] = React.useState([])

    // Fetch the list of memes from the Imgflip API and update the state
    React.useEffect(() => {
        async function fetchMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        fetchMemes()
    }, [])

    /**
     * Generates a random meme image and updates the state with the selected image.
     *
     * @return {void}
     */
    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    /**
     * Updates the state of the `meme` object with the new value from the input field.
     *
     * @param {Event} event - The event object triggered by the input field.
     * @return {void} This function does not return anything.
     */
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                {/* Top text input */}
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                {/* Bottom text input */}
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                {/* Button to get a new meme image */}
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* Display the meme image with the top and bottom text */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme