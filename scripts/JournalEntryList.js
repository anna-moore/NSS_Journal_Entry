//responsible for rendering a list of entry components
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "journalEntryRecordBtn"){
        const customEvent = new CustomEvent ("journalEntryRecorded")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("journalEntryRecorded", customEvent => {
    EntryListComponent()
})

let journalEntryCards = []

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        let entries = useJournalEntries()
        // for (const entry of entries) {
        //     /*Invoke the component that returns an
        //     HTML representation of a single entry*/
        //     // entryLog.innerHTML += entryHTML.join("")
        //     journalEntryCards.push(JournalEntryComponent(entry))
        // }
        // entryLog.innerHTML += journalEntryCards.join("")


        // refactor with .map() instead of for .. of
        entryLog.innerHTML += `
            <article class="entry">
                ${entries.map( entry => JournalEntryComponent(entry)).join("")}
            </article>`
    })

}


