/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    Input,
    InputGroup, InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap'
import {ApiResponse} from '../../../models/ApiResponse'
import {IContactFormState} from './ContactForm.state'

class ContactForm extends React.PureComponent<any, IContactFormState> {
    public state: IContactFormState = {
        autorName: '',
        autorMail: '',
        subject: '',
        text: '',
        wasSubmissionSuccessful: false,
        wasFormSubmitted: false,
    }

    private getAlert = () => {
        return this.state.wasSubmissionSuccessful ?
            <Alert color='success'>We'll get in touch with you soon!</Alert> :
            <Alert color='danger'>Couldn't send e-mail.</Alert>
    }

    public render() {
        return <div className='section landing-section'>
            <Container>
                {(this.state.wasFormSubmitted) ? this.getAlert() : null}
                <Row>
                    <Col className='ml-auto mr-auto' md='8'>
                        <h2 className='text-center'>Keep in touch?</h2>

                        <Form className='contact-form'>
                            <Row>
                                <Col md='6'>
                                    <label>Name</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType='prepend'>
                                            <InputGroupText>
                                                <i className='nc-icon nc-single-02'/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder='Name' type='text' name='autorName' onChange={(e) => this.handleOnChange('autorName', e)}/>
                                    </InputGroup>
                                </Col>
                                <Col md='6'>
                                    <label>Subject</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType='prepend'>
                                            <InputGroupText>
                                                <i className='nc-icon nc-single-02'/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder='Subject' type='text' name='subject' onChange={(e) => this.handleOnChange('subject', e)}/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <label>E-Mail</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType='prepend'>
                                            <InputGroupText>
                                                <i className='nc-icon nc-email-85'/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder='Email' type='email' name='autorMail' onChange={(e) => this.handleOnChange('autorMail', e)}/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <label>Message</label>
                            <Input placeholder='Tell us your thoughts and feelings...' type='textarea' rows='4'
                                   name='text' onChange={(e) => this.handleOnChange('text', e)}/>
                            <Row>
                                <Col className='ml-auto mr-auto' md='4'>
                                    <Button className='btn-fill' color='danger' size='lg'
                                            onClick={() => this.sendForm()}>
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    }

    private handleOnChange = (key: string, event: any) => {
        const val:string = event.target.value

        this.setState((prevState: IContactFormState) => (
            {
                ...prevState,
                [key]: val
            })
        )
    }

    private sendForm = async () => {
        try {
            const res: ApiResponse = await (await fetch('https://api.dev.wavect.io/api/web/v1/contact/form', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: this.state.text,
                    autorMail: this.state.autorMail,
                    subject: this.state.subject,
                    autorName: this.state.autorName,
                }),
            })).json()

            if (!res.err) {
                this.setState((prevState: IContactFormState) => ({
                        ...prevState,
                        wasSubmissionSuccessful: true,
                        wasFormSubmitted: true,
                    })
                )
            } else {
                this.setErrorAlert()
            }
        } catch (e) {
            console.error('ContactForm:sendForm: Could not send form -> ' + JSON.stringify(e))
            this.setErrorAlert()
        }
    }

    private setErrorAlert = () => {
        this.setState((prevState: IContactFormState) => ({
                ...prevState,
                wasSubmissionSuccessful: false,
                wasFormSubmitted: true,
            })
        )
    }
}

export default ContactForm
