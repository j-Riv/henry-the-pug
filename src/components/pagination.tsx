import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  margin: 15px 0;
`
const PaginationLink = styled(Link)`
  font-weight: ${(props: { active: string }) =>
    props.active ? 'bold' : 'inherit'};
  color: ${(props: { active: string }) => (props.active ? '#bc360a' : '#fff')};
  padding: 5px;
  text-decoration: none;
`

interface Props {
  currentPage: number
  numPages: number
}

const Pagination = (props: Props) => {
  const { currentPage, numPages } = props
  console.log('currentPage', currentPage)
  console.log('numPages', numPages)

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/' : '/' + (currentPage - 1).toString()
  const nextPage = '/' + (currentPage + 1).toString()

  return (
    <Container>
      {!isFirst && (
        <PaginationLink to={`/blog` + prevPage} rel="prev">
          ← Previous
        </PaginationLink>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <PaginationLink
          key={`pagination-number${i + 1}`}
          to={`/blog/${i === 0 ? '' : i + 1}`}
          active={i + 1 === currentPage ? 'true' : ''}
        >
          {i + 1}
        </PaginationLink>
      ))}
      {!isLast && (
        <PaginationLink to={`/blog` + nextPage} rel="next">
          Next →
        </PaginationLink>
      )}
    </Container>
  )
}

export default Pagination
