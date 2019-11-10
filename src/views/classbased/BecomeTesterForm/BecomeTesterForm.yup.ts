import * as Yup from 'yup'
import _schema from '../../../controllers/system/multilinguality/_schema.json'

const schema = _schema.pages.whyhow.intro.becometester

export const craftValidationSchema = (t: (key: string, ...args: any) => string) => {
    return Yup.object().shape({
        userMail: Yup.string()
            .email(t(schema.email.errors.emailRegex))
            .required(t(schema.email.errors.required)),
    })
}