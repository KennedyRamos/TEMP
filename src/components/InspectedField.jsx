export default function InspectedField() {
    return (
        <fieldset>
            <legend>Vistoria realizada:</legend>

            <label htmlFor="sim">Sim</label>
            <input type="radio" name="inspected" id="sim" value="sim" required />

            <label htmlFor="nao">Não</label>
            <input type="radio" name="inspected" id="nao" value="nao" />
        </fieldset>
    )
}