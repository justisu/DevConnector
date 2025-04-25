import React, { useEffect } from 'react';

import "../../Profile.css";

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to my Profile";
  }, []);

  return (
    <div className="row py-5 px-4"> 
      <div className="col-md-5 mx-auto"> 
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover" style={{ backgroundColor: 'dimgray' }}>
            <div className="media align-items-end profile-head"> 
              <div className="profile mr-3">                
                <span className="rounded mb-2 img-thumbnail profile-home-img"></span>
              </div>
              <div className="media-body mb-5 text-white" style={{ minWidth: '25%', paddingTop: '30px'}}>
                <h4 className="mt-0 mb-0">Sudhin Justin</h4>
                <p className="small mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>Indianapolis
                </p> 
              </div>
            </div> 
          </div>
        <div className="bg-light p-4">
          <div className="box space-between desktop-container">
            <div className="font-weight-light" style={{ width: '40%'}}><i class="fa fa-envelope" aria-hidden="true"><span style={{ padding: '5%'}}><small className="text-muted">sudhin.justin@gmail.com</small></span></i></div>
            <div className="push" style={{ width: '40%' }}><i class="fa fa-phone" aria-hidden="true" style={{ display: 'block' }}><span style={{ padding: '5%'}}><small className="text-muted">630-635-6514 / 630-485-4422</small></span></i></div>
          </div>
          <div className="box mobile-container">
            <div className="font-weight-light"><i class="fa fa-envelope" aria-hidden="true"><span style={{ padding: '5%'}}><small className="text-muted">sudhin.justin@gmail.com</small></span></i></div>
            <div style={{ paddingTop: '10px' }}><i class="fa fa-phone" aria-hidden="true" style={{ display: 'block' }}><span style={{ padding: '3%'}}><small className="text-muted">630-635-6514 / 630-485-4422</small></span></i></div>
          </div>
        </div> 
        <div className="px-4 py-3">
          <h5 className="mb-0">About</h5>
          <div className="p-4 rounded shadow-sm bg-light">
            <p className="font-weight-normal ">
              Principal / Full Stack Engineer with over 15 years of experience in developing, managing and maintaining high performance, scalable applications.
              Proficient in React, NextJS, Redux/RTK, TypeScript, NodeJS, Java, J2EE, WebSphere Commerce Suite among other technologies. Experienced in guiding 
              projects from conception to deployment, ensuring enhanced customer engagement and satisfaction, which translates into 
              better business opportunities and growth.
          </p>
          </div>
        </div>
        <div className="px-4 py-3">
          <h5 className="mb-0">Sample Project using MERN Stack</h5>
          <div className="p-4 rounded shadow-sm bg-light">
            <div className="box desktop-container">
              <a href="/dev" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid', maxWidth: '45%', minHeight: '38px'}}>Dev Connector Demo</a>
              <a href="https://github.com/justisu/DevConnector/tree/main" className="btn btn-outline-dark btn-sm btn-block push" style={{ border: '1px solid', maxWidth: '45%', minHeight: '38px', marginTop: '0px'}}>View code in Github</a>
            </div>
            <div className="box mobile-container">
              <a href="/dev" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid' }}>Dev Connector Demo</a>
              <a href="https://github.com/justisu/DevConnector/tree/main" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid', marginTop: '20px'}}>View code in Github</a>
            </div>            
          </div>
          <div className="p-4 rounded shadow-sm bg-light" style={{ marginTop: '2%'}}>
            <div className="box desktop-container">
              <a href="/dev/formatter" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid', maxWidth: '45%', minHeight: '38px'}}>JSON Formatter</a>
              <a href="https://github.com/justisu/DevConnector/tree/main" className="btn btn-outline-dark btn-sm btn-block push" style={{ border: '1px solid', maxWidth: '45%', minHeight: '38px', marginTop: '0px'}}>View code in Github</a>
            </div>
            <div className="box mobile-container">
              <a href="/dev/formatter" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid' }}>JSON Formatter</a>
              <a href="https://github.com/justisu/DevConnector/tree/main" className="btn btn-outline-dark btn-sm btn-block" style={{ border: '1px solid', marginTop: '20px'}}>View code in Github</a>
            </div>            
          </div>
        </div>
        <div className="px-4 py-3">
          <h5 className="mb-0">Skills</h5>
          <div className="p-4 rounded shadow-sm bg-light">
            <p className="font-regular">Front-End Development: <br />
              <span className="font-weight-bold">HTML, CSS, React, NextJS, RTK/Redux, JavaScript, TypeScript, JSP, ASP</span>
            </p>
            <p className="font-regular">Languages/Framework: <br />
              <span className="font-weight-bold">Java, J2EE, C, C++, Spring, WCS (WebSphere Commerce Suite), Node, Express</span>
            </p>
            <p className="font-regular">Databases: <br />
              <span className="font-weight-bold">DB2, Oracle, SQL Server, Mongo, DynamoDB</span>
            </p>
            <p className="font-regular">Cloud & DevOps: <br />
              <span className="font-weight-bold">AWS, Azure, Docker, Jenkins</span>
            </p>
            <p className="font-regular">Methodologies: <br />
              <span className="font-weight-bold">Agile, Scrum, Waterfall</span>
            </p>
            <p className="font-regular">Tools & Technologies: <br />
              <span className="font-weight-bold">REST APls, JUnit, Jest, Git, VSS, ClearCase, XML, JSON, IHS, Tomcat, VSCode, RAD, Eclipse</span>
            </p>          
          </div>
        </div>
        <div className="px-4 py-3">
          <h5 className="mb-0">Work Experience</h5>
          <div className="p-4 rounded shadow-sm bg-light">
            <div>
              <div className="box desktop-container" style={{ padding: '0px' }}>
                <div className="font-weight-bold"><strong>Advance Auto Parts(Contracting Position)</strong></div>
                <div className="push font-weight-normal mb-0">Jan 2017 - Present</div>
              </div>
              <div className="box mobile-container">
                <div className="font-weight-bold mb-0"><strong>Advance Auto Parts (Contracting Position)</strong></div>
                <div className="font-weight-normal mb-0" style={{ paddingTop: '5px' }}>Jan 2017 - Present</div>
              </div>
              <div>
                <p className="font-italic mb-0" style={{ marginTop: '5px'}}><strong>Principal Developer</strong></p>
              </div>
              <div className="py-4 px-4">
                <p>
                  <ul style={{ "list-style-type": "circle" }}>
                    <li style={{ paddingLeft: "20px" }}>
                      Spearheaded the redevelopment of a WebSphere Commerce site
                      to enhance customer engagement and sales, utilizing React,
                      NextJS, Redux/RTK, Jest, TypeScript for a clean responsive site.
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      Collaborated with stakeholders to innovate and improve the
                      search functionality on our customer-facing website, contributing
                      to significantly higher conversion rates.
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      Led Agile teams through sprints, optimizing process flows and
                      stakeholder communications to deliver features on time.
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <div className="box desktop-container" style={{ padding: '0px' }}>
                  <div className="font-weight-bold mb-0"><strong>BlueSky Technology Partners (Contracting Position)</strong></div>
                  <div className="push font-weight-normal mb-0">Apr 2010 - Dec 2016</div>
                </div>
                <div className="box mobile-container">
                  <div className="font-weight-bold mb-0"><strong>BlueSky Technology Partners (Contracting Position)</strong></div>
                  <div className="font-weight-normal mb-0" style={{ paddingTop: '5px' }}>Apr 2010 - Dec 2016</div>
                </div>
                <div>
                  <p className="font-italic mb-0" style={{ marginTop: '5px'}}><strong>Software Application Developer</strong></p>
                </div>              
                <div className="py-4 px-4">
                  <p>
                    <ul style={{ "list-style-type": "circle" }}>
                      <li style={{ paddingLeft: "20px" }}>
                        Developed and maintained complex software solutions for various
                        clients, leveraging WebSphere Commerce Stack/Suite.
                      </li>
                      <li style={{ paddingLeft: "20px" }}>
                        Customization of REST services, Order subsystems on multiple
                        projects.
                      </li>
                      <li style={{ paddingLeft: "20px" }}>
                        Utilized Java, Command Framework, JSP, JavaScript, EJB's, Rest
                        APl's to create robust applications, ensuring stable and reliable
                        platforms.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div>
                <div className="box desktop-container" style={{ padding: '0px' }}>
                  <div className="font-weight-bold mb-0"><strong>Sears Holdings Corporation (Contracting Position)</strong></div>
                  <div className="push font-weight-normal mb-0">Nov 2006 - Mar 2010</div>
                </div>
                <div className="box mobile-container">
                  <div className="font-weight-bold mb-0"><strong>Sears Holdings Corporation (Contracting Position)</strong></div>
                  <div className="font-weight-normal mb-0" style={{ paddingTop: '5px' }}>Nov 2006 - Mar 2010</div>
                </div>
                <div>
                  <p className="font-italic mb-0" style={{ marginTop: '5px'}}><strong>Project Manager / Technology Lead</strong></p>
                </div>              
                <div className="py-4 px-4">
                  <p>
                    <ul style={{ "list-style-type": "circle" }}>
                      <li style={{ paddingLeft: "20px" }}>
                        Managed and executed projects from requirements
                        gathering to deployment for the major eCommerce transformation project.
                      </li>
                      <li style={{ paddingLeft: "20px" }}>
                        Applied extensive experience in Java & WebSphere Commerce to
                        lead teams in delivering high-quality software in a timely manner.
                      </li>
                      <li style={{ paddingLeft: "20px" }}>
                        Was also tasked with the responsibility of Release Management on an aggressive schedule.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3">
          <h5 className="mb-0">Education & Certifications</h5>         
          <div className="p-4 rounded shadow-sm bg-light">
            <div className="py-2 px-2">
              <ul style={{ "list-style-type": "circle" }}>
                <li style={{ paddingLeft: "20px" }}>Electronics & Communication Engineering from Karunya Institute of Technology</li>
                <li style={{ paddingLeft: "20px" }}>AWS Certified Cloud Practitioner</li>
                <li style={{ paddingLeft: "20px" }}>IBM WebSphere Commerce, Application Development</li>
                <li style={{ paddingLeft: "20px" }}>IBM Certified in MVS/DB2/CICS/IMS on S/390 system</li>
                <li style={{ paddingLeft: "20px" }}>IBM Certified COBOL Developer</li>
                <li style={{ paddingLeft: "20px" }}>Retail Domain Level-100</li>
                <li style={{ paddingLeft: "20px" }}>Warehouse Management (Retail)</li>
              </ul>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
  );
}