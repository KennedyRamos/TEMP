export default function LtField() {
    function handleChange(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
    }

    function handleInvalid(e) {
        e.target.setCustomValidity("O código LT deve ter exatamente 15 caracteres.")
    }

    function handleInput(e) {
        e.target.setCustomValidity("")
    }

    return (
        <div>
            <label htmlFor="lt" className="block text-sm font-bold text-white/80 mb-1">
                LT:
            </label>
            <input
                type="text"
                name="lt"
                id="lt"
                required
                maxLength={15}
                pattern=".{15}"
                placeholder="Código de identificação"
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={handleInput}
                className="w-full bg-white/5 border border-white/15 rounded-md px-3 py-3 uppercase text-base font-normal text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-shopee focus:border-orange-shopee"
            />
        </div>
    )
}