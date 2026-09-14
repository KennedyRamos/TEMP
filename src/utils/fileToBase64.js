export function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => {
            // readAsDataURL retorna "data:image/png;base64,XXXXX"
            // O Apps Script espera só o "XXXXX", sem o prefixo
            const base64 = reader.result.split(",")[1]
            resolve(base64)
        }

        reader.onerror = () => reject(reader.error)

        reader.readAsDataURL(file)
    })
}