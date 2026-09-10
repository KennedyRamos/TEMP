export default function DateField() {
    return (
        <div>
            <label htmlFor="date" className="block text-sm font-bold text-white/80 mb-1">
                Data:
            </label>
            <input
                type="date"
                name="date"
                id="date"
                required
                className="w-full bg-white/5 border border-white/15 rounded-md px-3 py-3 text-base font-normal text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-shopee focus:border-orange-shopee cursor-pointer"
            />
        </div>
    )
}