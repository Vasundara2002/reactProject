import React from 'react';
import  CIcon  from '@coreui/icons-react';
import './Cardvalue.css'
import { cilList, cilShieldAlt ,cilEnvelopeClosed } from '@coreui/icons';
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
  } from '@coreui/react'
function Cardvalue () {
  const val = 'Skip for now >'
    return (
        <CRow>
            <CCol xs={12}>
            <CCard >
            <CCardHeader>
            <strong>Email</strong> <small>Verification</small>
          </CCardHeader>

          <CCardBody className='content limitStyle'>
          <CCard className='customStyle'>
            <CIcon size={'9xl'} icon={cilEnvelopeClosed}/>
            <br/>
            <CCardBody>Your email has not been verifed.</CCardBody>
            <CCardBody>Send a verification email to ...@gmail.com </CCardBody>
            <CButton color="info" className='content'>Send Verificaiton email</CButton>
            <CLink type='button' className='lin'>{val}</CLink>
                       
          </CCard>
          </CCardBody>
          </CCard>
            </CCol>
        </CRow>
    );
};

export default Cardvalue;