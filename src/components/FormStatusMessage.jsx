export default function FormStatusMessage({ status }) {
    if (status === "loading") {
        return (
            <div className="bg-white/5 border border-white/15 text-white/70 text-sm font-bold rounded-md px-3 py-2 text-center">
                Enviando...
            </div>
        )
    }

    if (status === "success") {
        return (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold rounded-md px-3 py-2 text-center">
                Enviado com sucesso!
            </div>
        )
    }

    if (status === "error") {
        return (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold rounded-md px-3 py-2 text-center">
                Erro ao enviar. Tente novamente.
            </div>
        )
    }

    return null
}