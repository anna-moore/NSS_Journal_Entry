/*Journal data provider for Daily Journal application
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/27/2025",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "07/28/2025",
        concept: "Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain.",
        mood: "Sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

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