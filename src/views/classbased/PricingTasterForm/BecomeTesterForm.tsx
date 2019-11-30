import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React, { PureComponent } from 'react'
import { Alert, Button, Collapse, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { ApiResponse } from '../../../models/ApiResponse'
import { FormInputErrorMsg } from '../../functional/FormInputErrorMsg/FormInputErrorMsg'
import { inputIds, urlSubmitForm } from './BecomeTesterForm.constants'
import { IFormInputs } from './BecomeTesterForm.form_inputs'
import { IBecomeTesterFormProps } from './BecomeTesterForm.props'
import { IBecomeTesterFormState } from './BecomeTesterForm.state'
import { craftValidationSchema } from './BecomeTesterForm.yup'

const schema = _schema.pages.whyhow.intro.becometester

class BecomeTesterForm extends PureComponent<IBecomeTesterFormProps, IBecomeTesterFormState> {
    public state: IBecomeTesterFormState = {
        isCollapseOpen: false,
        wasFormSubmitted: false,
        wasSubmissionSuccessful: false,
    }

    private validationSchema = craftValidationSchema(this.props.t)

    private initialFormValues: IFormInputs = {
        userMail: '',
        wantsNewsletter: true,
    }

    public render() {
        return (
            <Formik
                initialValues={this.initialFormValues}
                validationSchema={this.validationSchema}
                onSubmit={(values, { setSubmitting }) => this.sendForm(values, setSubmitting)}
            >
                {(formikProps: FormikProps<IFormInputs>) => this.renderForm(formikProps)}
            </Formik>
        )
    }

    public renderForm(formikProps: FormikProps<IFormInputs>) {
        const { t } = this.props

        const { isSubmitting, handleChange, handleSubmit } = formikProps

        return (
            <Form onSubmit={handleSubmit}>
                {this.getAlert()}
                <Field name={inputIds.userMail}>
                    {() => (
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" style={{ height: 45 }}>
                                @
                            </InputGroupAddon>
                            <Input
                                placeholder={t(schema.email.placeholder)}
                                type="email"
                                style={{ height: 45 }}
                                name={inputIds.userMail}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                onFocus={() => this.setState({ isCollapseOpen: true })}
                                onBlur={() => this.setState({ isCollapseOpen: false })}
                            />
                            <InputGroupAddon addonType="append" style={{ cursor: 'pointer', height: 45 }} onClick={(e: any) => handleSubmit(e)}>
                                <Button color="secondary" type="submit" style={{ height: 45 }}>
                                    {t(_schema.general.submit)}
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    )}
                </Field>
                <ErrorMessage name={inputIds.userMail} component={FormInputErrorMsg} />

                <div style={{ marginTop: 10 }}>
                    <Field name={inputIds.wantsNewsletter}>
                        {() => (
                            <>
                                <Input
                                    type="checkbox"
                                    onChange={handleChange}
                                    name={inputIds.wantsNewsletter}
                                    disabled={isSubmitting}
                                    aria-label="Checkbox for Newsletter"
                                />
                                <small style={{ color: '#ccc' }}>{t(schema.newsletter.msg)}</small>
                            </>
                        )}
                    </Field>
                </div>
                <Collapse isOpen={this.state.isCollapseOpen}>
                    <hr />
                    <small style={{ color: '#ccc' }}>{t(schema.dataprivacy)}</small>
                </Collapse>
            </Form>
        )
    }

    private getAlert = () => {
        const { t } = this.props

        if (this.state.wasFormSubmitted) {
            return this.state.wasSubmissionSuccessful ? (
                <Alert color="success">{t(schema.alerts.formSubmissionSuccessful)}</Alert>
            ) : (
                <Alert color="danger">{t(schema.alerts.formSubmissionError)}</Alert>
            )
        }
        return null
    }

    private sendForm = async (values: IFormInputs, setSubmitting: (isSubmitting: boolean) => void) => {
        setSubmitting(true)

        try {
            const res: ApiResponse = await (await fetch(urlSubmitForm, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userMail: values.userMail,
                    wantsNewsletter: values.wantsNewsletter,
                }),
            })).json()

            if (res.err) {
                this.setState({ wasFormSubmitted: true, wasSubmissionSuccessful: false })
            } else {
                this.setState({ wasFormSubmitted: true, wasSubmissionSuccessful: true })
            }
        } catch (e) {
            console.error('BecomeTesterForm:sendForm: Could not send form -> ' + JSON.stringify(e))
            this.setState({ wasFormSubmitted: true, wasSubmissionSuccessful: false })
        }
        setSubmitting(false)
    }
}

export default BecomeTesterForm
