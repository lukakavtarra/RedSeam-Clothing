import React from 'react'
import { CatalogList } from '../Queries/Queries'

const Catalog = () => {
  return (
    <div>
        <CatalogList />
        {/* {CatalogList.map(element => {
            return(
                <div>
                <p>{element.name}</p>
                </div>
            )
        });} */}
    </div>
  )
}

export default Catalog