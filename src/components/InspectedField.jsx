export default function InspectedField() {
    return (
        <fieldset className="border-0 p-0">
            <legend className="block text-sm font-bold text-white/80 mb-2">
                Vistoria realizada:
            </legend>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <label htmlFor="sim" className="flex items-center gap-2 text-base font-light text-white/90">
                    <input type="radio" name="inspected" id="sim" value="sim" required className="w-5 h-5 accent-orange-shopee cursor-pointer" />
                    Sim
                </label>
                <label htmlFor="nao" className="flex items-center gap-2 text-base font-light text-white/90">
                    <input type="radio" name="inspected" id="nao" value="nao" className="w-5 h-5 accent-orange-shopee cursor-pointer" />
                    Não
                </label>
            </div>
        </fieldset>
    )
}