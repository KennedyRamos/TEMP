export default function FormStatusMessage({ status }) {
    if (status !== "success") return null

    return (
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold rounded-md px-3 py-2 text-center">
            Enviado com sucesso!
        </div>
    )
}