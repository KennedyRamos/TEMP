import { useState } from "react"

// import components
import DateField from "./components/DateField"
import ShiftField from "./components/ShiftField"
import LtField from "./components/LtField"
import InspectedField from "./components/InspectedField"
import PhotoUpload from "./components/PhotoUpload"
import FormStatusMessage from "./components/FormStatusMessage"
import ButtonSubmit from "./components/ButtonSubmit"

// Hook
import { useClosingForm } from "./hooks/useClosingForm"

// import logo
import shopee from "../src/assets/Shopee.svg"

export default function Forms() {
    const { photos, status, handleFileChange, handleRemove, handleSubmit } = useClosingForm()

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4 font-jb">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-dark-soft border-x-4 border-orange-shopee-light p-4 sm:p-6 rounded-lg space-y-5"
            >
                <img src={shopee} alt="logo shopee" className="w-40 m-auto" />
                <h1 className="text-white font-bold text-lg mb-2 text-center">Report Fechamento LT</h1>

                <DateField />
                <ShiftField />
                <LtField />
                <InspectedField />
                 <PhotoUpload
                    photos={photos}
                    onFileChange={handleFileChange}
                    onRemove={handleRemove}
                />
                <FormStatusMessage status={status} />
                <ButtonSubmit />
            </form>
        </div>
    )
}