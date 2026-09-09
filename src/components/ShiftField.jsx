export default function ShiftField() {
    return (
        <fieldset>
            <legend>Turno:</legend>

            <label htmlFor="T1">T1</label>
            <input type="radio" name="shift" id="T1" value="T1" required />

            <label htmlFor="T2">T2</label>
            <input type="radio" name="shift" id="T2" value="T2" />

            <label htmlFor="T3">T3</label>
            <input type="radio" name="shift" id="T3" value="T3" />
        </fieldset>
    )
}