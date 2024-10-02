import Section from "./section"

export const Experience = () => {
  return (
    <div>
      <Section title="EXPERIENCE">
       <div className="mb-1">
          <div className="res-ctitle">
            CLOUD JS ENGINEER , ONE TAP AWAY / REMOTE - MAR. 2022 — MAR 2024
          </div>
          <p className="res-cp">
           A small core team of engineers building internal and external facing applications for laundry services. Tooling included internal specific applications to give full control to support users and company goals/support. External tooling was built for end users along with an internal laundry pro's for allowing users to accept, process, and complete the laundry services. Helped work on the backend services inside AWS using Node Lambdas, DynamoDB, and utility library layers for scaling. Lead on migrating CRA appls to Vite for ESM support and standarization.
          </p>
        </div>

        <div className="mb-1">
          <div className="res-ctitle">
            SENIOR SOFTWARE ENGINEER , SMARTTHINGS / MPLS, MN - DEC. 2019 — DEC 2021
          </div>
          <p className="res-cp">
            Apart of the frontend team working on the customer support applications. Atlas was built using React, Redux, Node, and GraphQL to support the needs of the company and internal teams. Being a small team I also helped support the product role to deliver fast updates, feedback, and internal needs of the tool working closely with teams. Internal prototyping of tools for future work including the new Rule builder for moving off the old DM system to micro services. This app was built using backend specs and a recursive pattern to closely align with pure smart rules.
          </p>
        </div>

        <div className="mb-1">
          <div className="res-ctitle">
            SENIOR SOFTWARE ENGINEER , TARGET CORP / MPLS, MN - APRIL. 2017 — DEC 2019
          </div>
          <p className="res-cp">
           Core team developing the new point of sale experience. Tasked with creating a new application built on
Electron to deliver the next generation of commerce software for the instore experience. Developed with React, Redux and coordinat-
ing the logic with generator functions for handling state. Built using a custom component library for scaling across all applications in
point of sales, while working closely with UI designers to meet Target brand guidelines. Allowing the ability to largely scale with short
time frames and full testing. I was worked on another project creating item setup and utilizing tools to create an excel on the web
experience for integrated and maintainable data structures.
          </p>
        </div>

        <div className="mb-1">
          <div className="res-ctitle">
            SOFTWARE ENGINEER , INKIT / MPLS, MN - NOV. 2016 — APRIL 2017
          </div>
          <p className="res-cp">
            Small team developing the main product, our direct mailer builder for customers. Working with APIs to ensure data
structures and displaying proper UI for users. In charge of creating the main authorization with JWT tokens, the builders structure and
editing options, application wide services. Along with those I took initiative in creating a pattern lab / UI framework for the company
to adhere with UI best practices which help with quicker development that follows company brand guidelines and is easier tested for
cross browser.
          </p>
        </div>

        <div className="mb-1">
          <div className="res-ctitle">
            SENIOR SOFTWARE ENGINEER , LEADPAGES / MPLS, MN - NOV. 2014 — NOV. 2016
          </div>
          <p className="res-cp">
            Core team working for several of the companies applications. Creating rich UI experiences working along side the UX department
and writing JS for interactions and data handling. Along with application development I helped create and managed an internal CSS
Framework/Pattern Library for all of the engineering department to use for rapid development that met our brand guidlines. This also
created a brand focused UI pattern to remove the dependency of using an external framework. Experience with unit testing and auto-
mation testing for acceptance before deploying code. Source control using bitbucket and github.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default Experience
