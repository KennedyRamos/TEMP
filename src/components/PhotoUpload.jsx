export default function PhotoUpload({ photos, onFileChange, onRemove }) {

    return (
        <div>
            <label htmlFor="photos" className="block text-sm font-bold text-white/80 mb-1">
                Fotos:
            </label>

            <div className="flex items-center gap-3">
                <label
                    htmlFor="photos"
                    className="cursor-pointer bg-orange-shopee text-white font-bold text-sm py-2 px-4 rounded-md hover:bg-orange-shopee-dark transition"
                >
                    ESCOLHER FOTOS
                </label>

                <span className="text-sm font-light text-white/50">
                    {photos.length === 0
                        ? "Nenhuma foto selecionada"
                        : `${photos.length} foto${photos.length > 1 ? "s" : ""} selecionada${photos.length > 1 ? "s" : ""}`}
                </span>

                <input
                    type="file"
                    name="photos"
                    id="photos"
                    accept="image/*"
                    multiple
                    onChange={onFileChange}
                    className="hidden"
                />
            </div>

            {photos.length > 0 && (
                <ul className="mt-3 space-y-2">
                    {photos.map((file, index) => (
                        <li
                            key={`${file.name}-${index}`}
                            className="flex justify-between items-center bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm font-normal text-white/90"
                        >
                            <span className="truncate">{file.name}</span>
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className="text-orange-shopee-light hover:text-orange-shopee font-bold text-sm ml-3 shrink-0 cursor-pointer"
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}