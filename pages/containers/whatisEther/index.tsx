import React from 'react';
import Feature from '../../components/feature';

export default function whatisEther() {
  return (
    <div className='ether_whatisether section_margin' id="about">
      <div className='ether_whatisether_feature' data-aos="fade-up">
        <Feature title="What is EtherLinux?" text="
        Ether Linux is a Linux derivative of Debian. Originating from Indonesia which makes penetration testing and security professionals. Ether Linux is the second Linux in Indonesia that focuses on penetration testing and security professionals. Ether Linux provides more than 100 tools for penetration testing which are of course free.


        " />
      </div>
      <div className='ether_whatisether_heading'>
        <h1 className='gradient_text' data-aos="zoom-in">What does Ether Linux provides?</h1>
      </div>
      <div className='ether_whatisether_container' data-aos="fade-up">
        <Feature title="EtherLinux Pentest" text="In this version, Ether Linux provides more than 100 penetration testing tools and for security professionals. and also provides tools for developers and offices."/>
        <Feature title="EtherLinux Non Pentest" text="In this version, Ether Linux only provides tools for developers and offices. and does not provide a pentest tool. "/>

      </div>
    </div>
  )
}
