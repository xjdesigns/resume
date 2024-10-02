import Section from "./section"

export const Skills = () => {
  return (
    <div>
      <Section title="SKILLS">
        <ul className="res-list">
          <li>HTML, CSS, Javascript/Typescript</li>
          <li>Javascript frameworks including React, Angular 4+, Ember, Riot.js, jQuery, Aurelia, Handlebars, Vue, Vite</li>
          <li>Frontend UI libraries including Twitter Bootstrap, Foundation, Material UI & Six Pixels</li>
          <li>GraphQL API / Apollo library</li>
          <li>NodeJS along with the Electron framework</li>
          <li>Javascript testing using Karma, Jasmine, Jest, and Vitest</li>
          <li>E2E testing using Protractor, Web Driver IO, Nightwatch, Cucumber, and Cypress</li>
          <li>AWS Serverless NodeJS Lambas</li>
          <li>AWS DynamoDB Storage / Access Patterns</li>
          <li>Github, Gitlab, and Bitbucket</li>
        </ul>
      </Section>
    </div>
  )
}

export default Skills
