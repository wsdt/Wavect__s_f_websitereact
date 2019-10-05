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
// plugin that creates slider
import Slider from 'nouislider'
import React from 'react'
// react plugin used to create switch buttons
import Switch from 'react-bootstrap-switch'

// reactstrap components
import { Button, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'

function SectionButtons() {
    const sliderRegular:HTMLElement|null = document.getElementById('sliderRegular')
    const sliderDouble:HTMLElement|null = document.getElementById('sliderDouble')

    React.useEffect(() => {
        if (sliderRegular && !sliderRegular.classList.contains('noUi-target')) {
            Slider.create(sliderRegular, {
                start: [37.5],
                connect: [true, false],
                step: 0.5,
                range: { min: 0, max: 100 },
            })
        }
        if (sliderDouble && !sliderDouble.classList.contains('noUi-target')) {
            Slider.create(sliderDouble, {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: { min: 0, max: 100 },
            })
        }
    })
    return (
        <>
            <div className='section section-buttons'>
                <Container>
                    <div className='title'>
                        <h2>Basic Elements</h2>
                    </div>
                    <div id='buttons'>
                        <div className='title'>
                            <h3>
                                Buttons <br />
                                <small>Pick your style</small>
                            </h3>
                        </div>
                        <Row>
                            <Col md='8'>
                                <Button color='info' type='button'>
                                    Default
                                </Button>
                                <Button className='btn-round ml-1' color='info' type='button'>
                                    Round
                                </Button>
                                <Button className='btn-round ml-1' color='info' type='button'>
                                    <i className='fa fa-heart mr-1' />
                                    With Icon
                                </Button>
                                <Button className='btn-just-icon ml-1' color='info' type='button'>
                                    <i className='fa fa-heart' />
                                </Button>
                                <Button className='btn-link ml-1' color='info' type='button'>
                                    Simple
                                </Button>
                            </Col>
                        </Row>
                        <div className='title'>
                            <h3>
                                <small>Pick your size</small>
                            </h3>
                        </div>
                        <Row>
                            <Col md='8'>
                                <Button color='danger' outline={true} size='sm' type='button' className='mr-1'>
                                    Small
                                </Button>
                                <Button color='danger' outline={true} type='button' className='mr-1'>
                                    Regular
                                </Button>
                                <Button color='danger' outline={true} size='lg' type='button'>
                                    Large
                                </Button>
                            </Col>
                        </Row>
                        <div className='title'>
                            <h3>
                                <small>Pick your color</small>
                            </h3>
                        </div>
                        <Row>
                            <Col md='8'>
                                <Button className='btn-round mr-1' color='default' outline={true} type='button'>
                                    Default
                                </Button>
                                <Button className='btn-round mr-1' color='primary' outline={true} type='button'>
                                    Primary
                                </Button>
                                <Button className='btn-round mr-1' color='info' outline={true} type='button'>
                                    Info
                                </Button>
                                <Button className='btn-round mr-1' color='success' outline={true} type='button'>
                                    Success
                                </Button>
                                <Button className='btn-round mr-1' color='warning' outline={true} type='button'>
                                    Warning
                                </Button>
                                <Button className='btn-round mr-1' color='danger' outline={true} type='button'>
                                    Danger
                                </Button>
                                <Button className='btn-round' outline={true} color='neutral' type='button'>
                                    Neutral
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md='8'>
                                <Button className='btn-round mr-1' color='default' type='button'>
                                    Default
                                </Button>
                                <Button className='btn-round mr-1' color='primary' type='button'>
                                    Primary
                                </Button>
                                <Button className='btn-round mr-1' color='info' type='button'>
                                    Info
                                </Button>
                                <Button className='btn-round mr-1' color='success' type='button'>
                                    Success
                                </Button>
                                <Button className='btn-round mr-1' color='warning' type='button'>
                                    Warning
                                </Button>
                                <Button className='btn-round mr-1' color='danger' type='button'>
                                    Danger
                                </Button>
                                <Button className='btn-round' color='neutral' type='button'>
                                    Neutral
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className='title'>
                        <h3>Links</h3>
                    </div>
                    <Row>
                        <Col md='8'>
                            <Button className='mr-1' color='link' href='#pablo' onClick={e => e.preventDefault()}>
                                Default
                            </Button>
                            <Button className='btn-link mr-1' color='primary' href='#pablo' onClick={e => e.preventDefault()}>
                                Primary
                            </Button>
                            <Button className='btn-link mr-1' color='success' href='#pablo' onClick={e => e.preventDefault()}>
                                Success
                            </Button>
                            <Button className='btn-link mr-1' color='info' href='#pablo' onClick={e => e.preventDefault()}>
                                Info
                            </Button>
                            <Button className='btn-link mr-1' color='warning' href='#pablo' onClick={e => e.preventDefault()}>
                                Warning
                            </Button>
                            <Button className='btn-link mr-1' color='danger' href='#pablo' onClick={e => e.preventDefault()}>
                                Danger
                            </Button>
                            <Button className='btn-link' color='neutral' href='#pablo' onClick={e => e.preventDefault()}>
                                Neutral
                            </Button>
                        </Col>
                    </Row>
                    <div className='title'>
                        <h3>Inputs</h3>
                    </div>
                    <Row>
                        <Col sm='3'>
                            <FormGroup>
                                <Input placeholder='Default' type='text' />
                            </FormGroup>
                        </Col>
                        <Col sm='3'>
                            <FormGroup className='has-success'>
                                <Input className='form-control-success' defaultValue='Success' id='inputSuccess1' type='text' />
                            </FormGroup>
                        </Col>
                        <Col sm='3'>
                            <FormGroup className='has-danger'>
                                <Input className='form-control-danger' defaultValue='Error' id='inputDanger1' type='text' />
                                <div className='form-control-feedback'>Sorry, that username's taken. Try another?</div>
                            </FormGroup>
                        </Col>
                        <Col sm='3'>
                            <InputGroup>
                                <Input placeholder='Username' type='text' />
                                <InputGroupAddon addonType='append'>
                                    <InputGroupText>
                                        <i aria-hidden={true} className='fa fa-group' />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg='3' sm='6'>
                            <div className='title'>
                                <h3>Checkboxes</h3>
                            </div>
                            <FormGroup check={true}>
                                <Label check={true}>
                                    <Input defaultValue='' type='checkbox' />
                                    Unchecked <span className='form-check-sign' />
                                </Label>
                            </FormGroup>
                            <FormGroup check={true}>
                                <Label check={true}>
                                    <Input defaultChecked={true} defaultValue='' type='checkbox' />
                                    Checked <span className='form-check-sign' />
                                </Label>
                            </FormGroup>
                            <FormGroup check={true} disabled={true}>
                                <Label check={true}>
                                    <Input defaultValue='' disabled={true} type='checkbox' />
                                    Disabled unchecked <span className='form-check-sign' />
                                </Label>
                            </FormGroup>
                            <FormGroup check={true} disabled={true}>
                                <Label check={true}>
                                    <Input defaultChecked={true} defaultValue='' disabled={true} type='checkbox' />
                                    Disabled checked <span className='form-check-sign' />
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col lg='3' sm='6'>
                            <div className='title'>
                                <h3>Radio Buttons</h3>
                            </div>
                            <div className='form-check-radio'>
                                <Label check={true}>
                                    <Input defaultValue='option1' id='exampleRadios1' name='exampleRadios' type='radio' />
                                    Radio is off <span className='form-check-sign' />
                                </Label>
                            </div>
                            <div className='form-check-radio'>
                                <Label check={true}>
                                    <Input defaultChecked={true} defaultValue='option2' id='exampleRadios2' name='exampleRadios' type='radio' />
                                    Radio is on <span className='form-check-sign' />
                                </Label>
                            </div>
                            <div className='form-check-radio disabled'>
                                <Label check={true}>
                                    <Input defaultValue='option3' disabled={true} id='exampleRadios3' name='exampleRadios' type='radio' />
                                    Disabled radio is off <span className='form-check-sign' />
                                </Label>
                            </div>
                            <div className='form-check-radio disabled'>
                                <Label check={true}>
                                    <Input defaultChecked={true} defaultValue='option4' disabled={true} id='exampleRadios4' name='exampleRadioz' type='radio' />
                                    Disabled radio is on <span className='form-check-sign' />
                                </Label>
                            </div>
                        </Col>
                        <Col lg='3' sm='6'>
                            <div className='title'>
                                <h3>Toggle Buttons</h3>
                            </div>
                            <div id='switches'>
                                <label>
                                    <Switch onColor='primary' offColor='primary' onChange={()=>{}} />
                                </label>
                                <br />
                                <label>
                                    <Switch defaultValue={false} onColor='primary' offColor='primary' onChange={()=>{}} />
                                </label>
                            </div>
                        </Col>
                        <Col lg='3' sm='6'>
                            <div className='title'>
                                <h3>Sliders</h3>
                            </div>
                            <div className='slider' id='sliderRegular' />
                            <br />
                            <div className='slider slider-primary' id='sliderDouble' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SectionButtons
