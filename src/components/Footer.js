import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <div className='socialMedia'>
                <InstagramIcon/>
                <GitHubIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
            <p>&copy; 2022pedrotechpizza.com</p>
        </div>
    </div>
  )
}