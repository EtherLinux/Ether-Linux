import React from 'react';
import Feature from '../../components/feature';

export default function Features() {
  return (
    <div className='ether_features section_margin' id='features'>
      <div className='etherlinux_feature_heading' data-aos="zoom-in">
        <h1 className='gradient_text'>What are the features provided by ether linux?</h1>
      </div>
      <div className='etherlinux_features_container' data-aos="fade-up">
      <Feature title="Devoted to penetration testing and security professionals." text="We also focus on these debian-derived distros for pentesters and security professionals. Ether Linux does provide ready-to-use automated tools. But we made it not for script kiddies." /> 
      <Feature title="Has more than 100 penetration testing tools." text="Ether Linux has been installed with more than 100 pentest tools for professional penetration testing and security professionals." />
      <Feature title="It's definitely light." text="By default we provide DE xfce on Ether Linux. therefore ether linux can be said to be light with xfce installed on Ether Linux. not only light with the presence of linux de xfce ether display to be good." />
      </div>
    </div>
  )
}
