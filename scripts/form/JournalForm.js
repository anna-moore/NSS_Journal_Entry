
const formElement = document.querySelector(".form")

export const JournalForm = () =>{
    formElement.innerHTML =  `<form class="form"action="">
        <fieldset class="form">
            <!-- input field for date -->
            <div class="inputFlex"> 
                <label for="journalDate">Date of Entry </label>
                <input type="date" name="journalDate" id="journalDate">
            </div>
            <!-- input field for concept -->
            <div class="inputFlex">
                <label for="conceptCovered">Concepts Covered </label>
                <input type="text" name="conceptCovered" id="conceptCovered">
            </div>
            <!-- input field for journal entry -->
            <div class="inputFlex">
                <label for="journalEntry">Journal Entry </label>
                <textarea  name="journalEntry" id="journalEntry" rows="10"></textarea>
            </div>
            <!-- input field for mood -->
            <div class="inputFlex">
                <label for="moodSelector">Mood of the Day </label>
                <select type="select" name="mood" id="mood">
                    <option value="joyful">Joyful</option>
                    <option value="energetic">Energetic</option>
                    <option value="grounded">Grounded</option>
                    <option value="tired">Low Energy</option>
                    <option value="frustrated">Frustrated</option>
                </select>
            </div>
            <button type="button">Record Journal Entry</button>
        </fieldset>
    </form>`
}