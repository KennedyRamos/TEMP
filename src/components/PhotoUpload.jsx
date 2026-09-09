export default function PhotoUpload({ photos, setPhotos }) {
    function handleFileChange(e) {
        const newFiles = Array.from(e.target.files)
        setPhotos((prev) => [...prev, ...newFiles])
        e.target.value = "" // permite selecionar o mesmo arquivo de novo depois
    }

    function handleRemove(index) {
        setPhotos((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <label htmlFor="photos">Fotos:</label>
            <input
                type="file"
                name="photos"
                id="photos"
                accept="image/*"
                multiple
                onChange={handleFileChange}
            />

            {photos.length > 0 && (
                <ul>
                    {photos.map((file, index) => (
                        <li key={`${file.name}-${index}`}>
                            {file.name}
                            <button type="button" onClick={() => handleRemove(index)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}