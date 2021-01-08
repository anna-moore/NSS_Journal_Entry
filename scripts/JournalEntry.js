//responsible for rendering a single journal entry.
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <article class="journal">
            <section id="entry--${entry.id}" class="journalEntry">
                <div class="concept"> <h3>${entry.concept}</h3></div>
                <div class="date"> Date: ${entry.date}</div>
                <div class= "text">${entry.entry}</div>
                <button type="button">Edit</button>
                <button id=">deleteEntry--${entry.id}" Delete </button>
            </section>
        </article>
    `
}