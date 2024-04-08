import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import { Button } from '@nextui-org/react'
import axios from 'axios'
import { MuiFileInput } from 'mui-file-input'
import { useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'


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

    const { data: password, trigger: getPassword, error } = useSWRMutation("http://localhost:4000/upload",
        async (url, { arg }) => await axios.post(url, arg).then(res => res.data).catch(err => err)
    )

    const handleUpload = async () => {
        if(!value) {
            alert("Insert an image for creating the password")
            return
        }
        if(!positions) {
            alert("Select some positions get the password")
            return
        }
        // const formData = new FormData()
        // formData.set("file", value, value.name)
        // formData.set("positions", positions.join("<==>"))
        // await getPassword(formData)
        console.log("FRtdVK+x#2F(d8sgUtw#.Br^HFKcjhMn&:GemJY1*$WuAr*c[qH2f++&%B<Etk6p")
    }

    useEffect(() => {
        if(password) {
            console.log(password)
        }
        if(error) {
            console.log(error)
        }
    }, [error, password])

    const cutTheImage = (url) => {
        var image = new Image();
        image.onload = cutImageUp;
        image.src = url;
        var widthOfOnePiece = image.naturalWidth / 5
        var heightOfOnePiece = image.naturalHeight / 4

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
    const [positions, setPositions] = useState([])

    return (
        <div className="h-dvh flex flex-col justify-center items-center bg-black w-full mt-[20%]">
            <div className='w-80'>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <MuiFileInput value={value} onChange={handleChange} label='Enter the file to create password' focused />
                    </ThemeProvider>
                    {/* {imageUrl && <img alt="preview" src={imageUrl} className='pt-5' />} */}

                </StyledEngineProvider>
            </div>
            <div className='grid grid-cols-5 grid-rows-4 w-80 col-gap-0 pt-5 max-h-[27.5%]' style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat"
            }}>
                {new Array(5).fill(-1).map((e, i) => (
                    <div key={i}>
                        {new Array(5).fill(-1).map((f, k) => (
                            <div
                                key={k}
                                className={"h-[50px] w-[50px] border"}
                                onClick={() => {
                                    console.log(positions)
                                    setPositions(prev => {
                                        if (!prev.length) {
                                            prev.push(`${i} ${k}`)
                                            return prev
                                        }
                                        if (prev.includes(`${i} ${k}`)) {
                                            prev.splice(prev.indexOf(`${i} ${k}`), 1)
                                        }
                                        else {
                                            prev.push(`${i} ${k}`)
                                        }
                                        return prev
                                    })
                                }}
                                style={{
                                    ...(positions.includes([i, k]) && {
                                        backgroundColor: "white"
                                    })
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* <div className='mt-[5%] text-white'>
                Clicked Elements:{" "}
                {positions.map(e => <Chip key={e}>{e}</Chip>)}
            </div> */}
            <Button className='mt-[5%]' onClick={handleUpload}>
                Submit
            </Button>
        </div>
    )
}