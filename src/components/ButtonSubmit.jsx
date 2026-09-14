export default function ButtonSubmit({ status }) {
    return (
        <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-orange-shopee text-white font-bold rounded-md py-3 hover:bg-orange-shopee-dark transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
    )
}