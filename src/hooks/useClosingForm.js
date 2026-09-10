import { useState, useEffect } from "react"

export function useClosingForm() {
    const [photos, setPhotos] = useState([])
    const [status, setStatus] = useState("idle")

    function handleFileChange(e) {
        const newFiles = Array.from(e.target.files)
        setPhotos((prev) => [...prev, ...newFiles])
        e.target.value = ""
    }

    function handleRemove(index) {
        setPhotos((prev) => prev.filter((_, i) => i !== index))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const form = e.target

        if (!form.checkValidity()) {
            form.reportValidity()
            setStatus("idle")
            return
        }

        const formData = new FormData(form)

        formData.delete("photos")
        photos.forEach((file) => {
            formData.append("photos", file)
        })

        // TEMPORÁRIO
        for (const [campo, valor] of formData.entries()) {
            console.log(campo, ":", valor)
        }

        form.reset()
        setPhotos([])
        setStatus("success")
    }

    useEffect(() => {
        if (status !== "success") return

        const timer = setTimeout(() => {
            setStatus("idle")
        }, 4000)

        return () => clearTimeout(timer)
    }, [status])

    return {
        photos,
        status,
        handleFileChange,
        handleRemove,
        handleSubmit,
    }
}