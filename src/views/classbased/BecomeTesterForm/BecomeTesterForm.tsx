import React from 'react'
import {IBecomeTesterFormProps} from './BecomeTesterForm.props'

const html:string = '<a class="typeform-share button" href="https://kevinriedl.typeform.com/to/A085SE" data-mode="drawer_right" style="display:inline-block;text-decoration:none;background-color:#606060;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-submit-close-delay="3" target="_blank">Tester werden </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>'


const BecomeTesterForm = (_props:IBecomeTesterFormProps) => {
    return <span dangerouslySetInnerHTML={{__html: html}} />
}

/*
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
        wantsNewsletter: false,
    }

    public render() {
        return (
            <Formik
                initialValues={this.initialFormValues}
                validationSchema={this.validationSchema}
                onSubmit={(values, { setSubmitting }) => this.sendForm(values, setSubmitting)}>
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
                            <InputGroupAddon addonType='prepend' style={{ height: 45 }}>
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
*/
export default BecomeTesterForm
