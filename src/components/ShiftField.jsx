export default function ShiftField() {
    return (
        <fieldset className="border-0 p-0">
            <legend className="block text-sm font-bold text-white/80 mb-2">
                Turno:
            </legend>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                {["T1", "T2", "T3"].map((turno, i) => (
                    <label key={turno} htmlFor={turno} className="flex items-center gap-2 text-base font-light text-white/90"> 
                        <input
                            type="radio"
                            name="shift"
                            id={turno}
                            value={turno}
                            required={i === 0}
                            className="w-5 h-5 accent-orange-shopee cursor-pointer"
                        />
                        {turno}
                    </label>
                ))}
            </div>
        </fieldset>
    )
}