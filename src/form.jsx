import { useState } from "react"

import DateField from "./components/DateField"
import ShiftField from "./components/ShiftField"
import LtField from "./components/LtField"
import InspectedField from "./components/InspectedField"
import PhotoUpload from "./components/PhotoUpload"

export default function Forms() {
    const [photos, setPhotos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)


        formData.delete("photos")
        photos.forEach((file) => {
            formData.append("photos", file)
        })


        // TEMPORÁRIO
        for (const [campo, valor] of formData.entries()) {
            console.log(campo, ":", valor)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <DateField />
            <ShiftField />
            <LtField />
            <InspectedField />
            <PhotoUpload photos={photos} setPhotos={setPhotos} />

            <button type="submit">Enviar</button>
        </form>
    )
}