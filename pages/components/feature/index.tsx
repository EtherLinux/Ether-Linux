import React from 'react';

interface featureProps {
    title: string;
    text: string;
}

export default function feature(props: featureProps) {
    const { title, text } = props;
  return (
    <div className='ether_features_container_feature'>
      <div className='ether_features_container_feature_title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='ether_features_container_feature_text'>
        <p>{text}</p>
      </div>
    </div>
  )
}
