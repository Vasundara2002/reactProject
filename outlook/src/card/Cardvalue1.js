import React from 'react';
import  CIcon  from '@coreui/icons-react';
import './Cardvalue.css'
import {  cilSend} from '@coreui/icons';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,CLink,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,
    CFormInput
  } from '@coreui/react'
  function Cardvalue1() {
    const val = 'Skip for now >'
    const val1 = 'Send me another code'
    return (
        <CRow>
            <CCol xs={12}>
            <CCard >
            

          <CCardBody className='content limitStyle'>
          <CCard className='customStyle'>
            <CIcon size={'9xl'} icon={cilSend}/>
            <CCardBody>An email has been sent to you.</CCardBody>
            <CCardBody>Check the email that's associated with your account for the verification code</CCardBody>
            <CCardBody className='vcde'>Verificaiton Code</CCardBody>
            <CFormInput type="text"  aria-label="default input example"/>
            <br/>
            <CButton color="info" className='content'>Verify</CButton>
            <CLink type='button' className='lin'>{val1}</CLink>
            <CLink type='button' className='lin'>{val}</CLink>
                       
          </CCard>
          </CCardBody>
          </CCard>
            </CCol>
        </CRow>
    );
  };
  export default Cardvalue1;