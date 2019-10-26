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
import ReactDOM from 'react-dom'

// styles
import {BrowserRouter} from 'react-router-dom'
import './assets/css/bootstrap.min.css'
import './assets/demo/demo.css'
import './assets/scss/paper-kit.scss'
import CustomRouter from './controllers/system/routers/CustomRouter'

ReactDOM.render(
    <BrowserRouter><CustomRouter/></BrowserRouter>,
    document.getElementById('root')
)
