import React from 'react'
import { graphql } from 'gatsby'

const Course= ({ data }) => {
    return (
        <div>
            <h1>class page</h1>
            {data.class.classInfo.name}
            <div>{data.class.classInfo.semester}</div>
        </div>
    )
}

export default Course

export const pageQuery = graphql`
  query($slug: String!) {
    class: contentfulClass(slug: { eq: $slug }) {
      slug
      teachers
      numberOfStudents
      classInfo {
        name
        semester
      }
    }
  }
`