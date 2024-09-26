import React from 'react'
import { useFetch } from './useFetch'

export const UseFetchCustomHookTest = () => { 
    const { data, pending, error } = useFetch('https://dummyjson.com/products',{});
    if(pending){
        return <h1>Data fetching please wait....</h1>
    }
    if(error !== null){
        return <h1>{error}</h1>
    }
  return (
    <div>
        {
            data && data.length ? (
                data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
            ): null
        }
    </div>
  )
}
