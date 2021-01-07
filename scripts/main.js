import { useEntries } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { JournalForm } from "./form/JournalForm.js";

EntryListComponent();
useEntries();
JournalForm();
