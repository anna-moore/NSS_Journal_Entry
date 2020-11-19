//responsible for rendering a single journal entry.
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="date"> Date: ${entry.date}</div>
            <div class="concept"> ${entry.concept}</div>
            <div class= "text">${entry.entry}</div>
        </section>
    `
}