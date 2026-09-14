import { useState, useEffect } from "react"
import { fileToBase64 } from "../utils/fileToBase64"

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL

export function useClosingForm() {
    const [photos, setPhotos] = useState([])
    const [status, setStatus] = useState("idle") // idle | loading | success | error

    function handleFileChange(e) {
        const newFiles = Array.from(e.target.files)
        setPhotos((prev) => [...prev, ...newFiles])
        e.target.value = ""
    }

    function handleRemove(index) {
        setPhotos((prev) => prev.filter((_, i) => i !== index))
    }
    
    function formatDateToBR(isoDate) {
        const [year, month, day] = isoDate.split("-")
        return `${day}-${month}-${year}`
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const form = e.target

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        setStatus("loading")

        try {
            const photosBase64 = await Promise.all(
                photos.map(async (file) => ({
                    name: file.name,
                    mimeType: file.type,
                    data: await fileToBase64(file),
                }))
            )

            const payload = {
                date: formatDateToBR(form.date.value),
                shift: form.shift.value,
                lt: form.lt.value,
                inspected: form.inspected.value,
                photos: photosBase64,
            }

            const response = await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(payload),
            })

            const result = await response.json()

            if (result.status !== "success") {
                throw new Error(result.message || "Erro desconhecido no envio.")
            }

            form.reset()
            setPhotos([])
            setStatus("success")

        } catch (erro) {
            console.error("Erro ao enviar vistoria:", erro)
            setStatus("error")
        }
    }

    useEffect(() => {
        if (status !== "success" && status !== "error") return

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