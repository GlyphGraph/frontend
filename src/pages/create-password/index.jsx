import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import { MuiFileInput } from 'mui-file-input'
import { useState } from 'react'

export default function CreatePassword() {
    const [value, setValue] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const handleChange = (newValue) => {
        setValue(newValue)
        setImageUrl(URL.createObjectURL(newValue))
        const pieces = cutTheImage(URL.createObjectURL(newValue))
        console.log(pieces)
    }
    const theme = createTheme(theme => ({
        ...theme,
        palette: {
            mode: "dark"
        }
    }))

    const cutTheImage = (url) => {
        var image = new Image();
        image.onload = cutImageUp;
        image.src = url;
        var widthOfOnePiece = image.naturalWidth/5
        var heightOfOnePiece = image.naturalHeight/4

        var imagePieces = [];
        function cutImageUp() {
            for (var x = 0; x < 5; ++x) {
                for (var y = 0; y < 4; ++y) {
                    var canvas = document.createElement('canvas');
                    canvas.style.display = "none"
                    canvas.width = widthOfOnePiece;
                    canvas.height = heightOfOnePiece;
                    var context = canvas.getContext('2d');
                    context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
                    imagePieces.push(canvas.toDataURL("image/png"));
                }
            }
            // var anImageElement = document.getElementById('myImageElementInTheDom');
            // anImageElement.src = imagePieces[0];
        }
        return imagePieces
    }

    return (
        <div className="h-dvh flex justify-center items-center bg-black w-full">
            <div className='w-80'>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <MuiFileInput value={value} onChange={handleChange} label='Enter the file to create password' focused />
                    </ThemeProvider>
                    {imageUrl && <img alt="preview" src={imageUrl} className='pt-5' />}

                </StyledEngineProvider>
            </div>
        </div>
    )
}