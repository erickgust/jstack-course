import React, { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Post() {
  const { id } = useParams()
  const { search } = useLocation()
  const query = useMemo(() => new URLSearchParams(search), [search])

  return (
    <h1>Post {id}</h1>
  )
}

export { Post }
