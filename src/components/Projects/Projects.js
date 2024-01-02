import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { motion  } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const TimelineBlock = ({ direction, date, title, description, index, highlights }) => {


  const [ref, inView] = useInView({
    threshold: 0.5, // Set the threshold to 0.5
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

 
  return (
    <motion.div
      
      className={`timeline-block timeline-block-${direction}`}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h4 className="purple">{title}</h4>
        <p style={{ textAlign: 'justify' }}>{description}</p>
        {highlights && (
          <ul>
            {highlights.map((highlight, index) => (
              <div style={{ textAlign: 'justify' }}>
                <span className="purple">{highlight.split(': ')[0]}</span>
                <span key={index}>: {highlight.split(': ')[1]}</span>

              </div>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

function Projects() {



  const timelineData = [
    {
      direction: 'right',
      title: 'Agent Link',
      description: "Agent Link is a revolutionary VoIP project designed to transform communication by offering seamless call management and dynamic dialing. It stands out for its comprehensive approach to data management, bringing efficiency and innovation to the way calls are handled.",
      highlights: [
        'Comprehensive Data Management: Beyond simple call initiation, Agent Link prioritizes a holistic approach to data management, ensuring thorough precision and organization of every call record.',
        'Meticulously Managed Call Records: Each call record is carefully handled, intricately linked to customer data, guaranteeing a meticulous level of organization and accuracy.',
        'Responsive Design for All Devices: The entire project is meticulously designed to be responsive, delivering a smooth user experience across a variety of devices.',
        'Efficient Communication System: Agent Link is not just about making calls; it\'s about crafting an efficient and responsive system that redefines the way we communicate, promising a transformative user experience.',
      ],
    },
    {
      direction: 'left',
      title: 'Project Management System',
      description: "Revolutionizing project management across diverse industries, this system specializes in overseeing tasks such as Cable Installation, Telecom, Civil, Ducting, and more. It provides a comprehensive view of the entire project, including project duration and the creation of multiple tasks tailored to each project's unique needs.",
      highlights: [
        'Unified Project Management System: Tailored for Cable Installation, Telecom, Civil, Ducting, and other industries, the system ensures efficient and customized project tracking.',
        'Task-Level Progress Tracking: Streamlining productivity, the platform allows users to create and monitor tasks, providing real-time insights into project progression.',
        'User-Specific Work Updates: Each project involves different users, responsible for entering daily task progress. This information is transparently displayed for project owners, fostering collaboration and accountability.',
        'Admin Data Management: Admins wield control over the entire system, facilitating seamless data management and ensuring organizational efficiency.',
        'CSV Export Functionality: Enhancing accessibility, the system incorporates CSV file support for exporting project information, offering flexibility in data utilization.',
        'Fully Responsive Design: Tailored for a modern workflow, the project management system is fully responsive, guaranteeing a seamless user experience across various devices.',
      ],
    },
    {
      direction: 'right',
      title: 'Anomaly Detection through Security Camera',
      description: "Unveiling a cutting-edge surveillance solution, this project specializes in real-time anomaly detection through security camera footage. By capturing and analyzing video data, it identifies irregularities, performs traceback functionality, and sends notifications to relevant authorities and administrators for prompt action.",
      highlights: [
        'Real-time Anomaly Detection: The project employs advanced algorithms to analyze CCTV footage in real-time, detecting anomalies and irregularities as they occur.',
        'Video Capture and Analysis: By capturing video streams from security cameras, the system performs thorough analysis, enabling the identification and recording of anomalous events.',
        'Traceback Functionality: In the event of an anomaly, the system facilitates traceback functionality, allowing administrators to rewatch the video and identify the individuals responsible for the occurrence.',
        'Automated Notifications: Upon anomaly detection, the system triggers automated notifications, promptly alerting relevant authorities and administrators to take necessary actions.',
        'Record Keeping: The project maintains a detailed record of anomalies, including video evidence and related information, ensuring comprehensive documentation for future reference and analysis.',
        'Enhanced Security Measures: By integrating anomaly detection with CCTV surveillance, the project enhances security measures, providing a proactive approach to incident management and prevention.',
      ],
    },
    {
      direction: 'left',
      title: 'Process Intel',
      description: "Process Intel redefines product inspection across diverse industries, offering a comprehensive solution for quality assessment. This project is designed to conduct meticulous inspections for a wide array of products, ensuring stringent quality control measures through advanced image and video capabilities.",
      highlights: [
        'Universal Product Inspection: Process Intel provides a versatile platform for thorough quality assessments, adaptable to various products across industries.',
        'Advanced Image Analysis: Employing state-of-the-art technology, the project facilitates detailed image analysis, identifying and marking potential faults during inspections.',
        'Video Inspection Capability: Beyond static imagery, Process Intel allows the creation of inspection videos, enabling a dynamic and comprehensive quality evaluation process.',
        'Customizable Inspection Criteria: Tailor inspection criteria to specific product attributes, allowing a flexible and adaptable approach to quality control.',
        'Efficient Fault Documentation: Streamlining communication, the system efficiently documents and marks identified faults, aiding in prompt issue resolution.',
        'Enhanced Productivity: By automating and optimizing inspection processes, Process Intel contributes to increased productivity and improved product quality standards.',
      ],
    },
    {
      direction: 'right',
      title: 'Farming',
      description: "Faming is a comprehensive project designed to streamline the management of products and employee information on a farm. Farm owners can effortlessly add and organize farm products, such as milk, butter, yogurt, and more. The project integrates a Google Map functionality for easy navigation to the farm location, showcasing farm details including land layout, animals, and other elements.",
      highlights: [
        'Product Management: Farm owners can efficiently add and manage a variety of farm products, offering a centralized platform for overseeing inventory and sales of items like milk, butter, yogurt, and related products.',
        'Google Map Integration: The project seamlessly integrates Google Maps, automatically pinpointing the farm\'s exact location. Visitors can leverage this feature for convenient navigation and reach the farm effortlessly.',
        'Immersive Farm UI: The user interface offers a captivating portrayal of the farm, showcasing the layout and various elements like cows, hens, buffaloes, goats, and more. This immersive experience elevates user engagement and understanding of the farm environment.',
        'Employee Information: Faming includes features for managing employee information, providing a convenient way for farm owners to keep track of their workforce, roles, and responsibilities.',
        'Efficient Navigation: Users can select the farm location on the integrated Google Map, facilitating seamless navigation to the farm and enhancing accessibility for visitors and customers.',
        'Visual Representation of Farm: The UI visually represents the farm landscape, allowing users to explore and interact with different elements, fostering a deeper understanding of the farm\'s layout and activities.',
      ],
    },
  ];
  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
        <strong className="purple">Education & Experience </strong>
      </h1>
      <Particle />
      <div id="experience" className="experience">
        <div className="container experience-wrapper">
          {timelineData.map((data, index) => (
        
            <TimelineBlock key={index} index={index} {...data} />
          
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
