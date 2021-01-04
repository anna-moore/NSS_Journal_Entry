/*Journal data provider for Daily Journal application

    You export a function that provides a version of the
    raw data in the format that you want
*/

let journal = []
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate.slice()
}

const eventHub = document.querySelector(".container")
let entryArray = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            // What should happen when we finally have the array?
            entryArray = parsedEntries
        })
}

export const useEntries = () => entryArray.slice()

// 
const dispatchStateChangeEvent = ("change", event => {
    // if(event.target.id )
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
})

export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(getEntries)  // <-- Get all journal entries get or use???
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}