import { useQuery } from 'react-apollo'
import React from 'react'

const Query = ({ children, query, id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return children({
    data
  })
}

export default Query
