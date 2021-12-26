import React from "react"
import {
  ProjectLI,
  StyledProjectsSection,
  ProjectsContent,
} from "./ProjectsElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiExternalLink as IconExternal } from "react-icons/fi"
import { FiFolder as IconFolder } from "react-icons/fi"
import { useStaticQuery, graphql } from "gatsby"
import FadeHOC from "../FadeHOC/FadeHOC"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            title
            github
            external
            techStack
          }
          html
        }
      }
    }
  `)

  const projectData = data.allMarkdownRemark.nodes

  return (
    <StyledProjectsSection id="projects">
      <FadeHOC>
        <ProjectsContent>
          <h2>Some things I've built</h2>
          <ul className="project-grid">
            {projectData &&
              projectData.map((data, i) => {
                const { title, techStack, github, external } = data.frontmatter
                return (
                  <ProjectLI key={title + i}>
                    <div className="leftIcon">
                      <IconFolder />
                    </div>
                    <div className="rightIcons">
                      <a href={github} target="_blank" rel="noreferrer">
                        <IconGitHub className="rightIcon" />
                      </a>{" "}
                      <a href={external} target="_blank" rel="noreferrer">
                        <IconExternal className="rightIcon" />
                      </a>
                    </div>
                    <div className="content">
                      <h3 className="title">{title}</h3>
                      <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: data.html }}
                      ></div>
                    </div>
                    <ul>
                      {techStack &&
                        techStack.map((tech, j) => (
                          <li key={tech + j}>{tech}</li>
                        ))}
                    </ul>
                  </ProjectLI>
                )
              })}
          </ul>
        </ProjectsContent>
      </FadeHOC>
    </StyledProjectsSection>
  )
}

export default Projects
