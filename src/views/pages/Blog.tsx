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

// core components
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardImg from 'reactstrap/lib/CardImg'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'

// assets
import imgKevinRiedl from '../../assets/img/team/kevin_riedl.jpg'
import TextPageDraft from "./blogs/blogs_components/TextPageDraft";

function Blog() {
    return (
        <TextPageDraft title='Blogs'>
            <p>
                Here you'll find personal blogs of our team-members. Topics may range from technical, economical,
                psychological as well as spiritual ones. Feel free to share them :-)
            </p>
            <br/>
            {/*
                            <Button className='btn-round' color='default' outline={true}>
                                <i className='fa fa-cog' /> Settings
                            </Button>*/}

            <Card style={{width: '20rem'}}>
                <CardImg top={true} src={imgKevinRiedl} alt='CEO: Kevin Riedl'/>
                <CardBody>
                    <CardTitle style={{fontWeight: 'bold'}}>Kevin Riedl, Bsc.</CardTitle>
                    <CardText>Here you'll find economical, technical & personal posts.</CardText>
                    <Button color='info'><a href='/blogs/kevin-riedl' style={{color: '#fff'}}>Read posts</a></Button>
                </CardBody>
            </Card>
        </TextPageDraft>
    )
}

export default Blog
