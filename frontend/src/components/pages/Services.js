import React from 'react'
import "./services.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Services() {
    return (
        <div className='services'>
            <div>
                <h1 className='text'>
                    Product Lineage Tracking
                </h1>
                <VerticalTimeline>
                <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(235, 69, 95)', color: '#FCFFE7' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(43, 52, 103)', color: '#FDE2F3' }}
  >
    <h3 className="vertical-timeline-element-title" contentStyle={{color: '#2A2F4F' }}>MOTIVE</h3>
    <p>
    We are using innovative technologies to improve the efficiency and transparency of supply chain management, which can benefit businesses by helping them better serve their customers and stakeholders. 
    </p>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(252, 255, 231)', color: '#2A2F4F' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(235, 69, 95)', color: '#FDE2F3' }}
  >
    <h3 className="vertical-timeline-element-title" contentStyle={{color: '#2A2F4F' }}>Implementation</h3>
    <p>
    We have designed an approach to help small startup ventures in automating their Supply Chain in order to maximise their profit. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(42, 47, 79)', color: '#ECE2E1' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(229, 190, 236)', color: '#FDE2F3' }}
  >
    <h3 className="vertical-timeline-element-title" contentStyle={{color: '#2A2F4F' }}>Where to implement ?</h3>
    <p>
    Our model includes various Supply Chain Services like Demand Projection and Analysis, Product Lineage Tracking and a marketplace to connect ventures to the wholesale Sellers.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(252, 255, 231)', color: '#2A2F4F' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(235, 69, 95)', color: '#FDE2F3' }}
  >
    <h3 className="vertical-timeline-element-title" contentStyle={{color: '#2A2F4F' }}>Business Features -</h3>
    <p>
    B2B business model
    </p> <p> Will be sold to Logistics complany on customization Feature</p>
   
    <p>Untapped Market</p><p>Profit Margins Associated</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(235, 69, 95)', color: '#FCFFE7' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(229, 190, 236)', color: '#FDE2F3' }}
  >
    <h3 className="vertical-timeline-element-title" contentStyle={{color: '#2A2F4F' }}>Where to implement ?</h3>
    <p>
    Our model includes various Supply Chain Services like Demand Projection and Analysis, Product Lineage Tracking and a marketplace to connect ventures to the wholesale Sellers.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(252, 255, 231)', color: '#fff' }}
    
  />
</VerticalTimeline>
            </div>
        </div>
    )
}

export default Services
