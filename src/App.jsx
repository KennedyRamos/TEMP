
function App() {


  return (
    <>
      <form>
        <label>
          Data:
          <input type="date" name="date"/>
        </label>

        <div>
          <label>
            Turno:
            
            <label for="T1">
              T1
              <input type="radio" name="T1" value="T1"/>
            </label>
            
            <label for="T2">
              T2
              <input type="radio" name="T2" value="T2"/>
            </label>
          </label>
        </div>
      
      </form>
    </>
  )
}

export default App
