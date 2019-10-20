export interface IContactFormState {
    autorName: string
    subject: string
    autorMail: string
    text: string
    wasSubmissionSuccessful: boolean
    wasFormSubmitted: boolean
    error: string | null
}
