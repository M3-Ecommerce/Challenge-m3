import React, { useEffect, useState } from 'react'
import Catalogo from '../body/Catalogo'
import Filters from '../body/Filters'
import Select from '../body/catalogo/Select'
import { useDataCard } from '../hooks/useDataCard'


function Body() {
    const [sort, setSort] = useState<any>()
    const [dataColor, setDataColor] = useState<any>([])
    const [update, setUpdate] = useState(true)
    const { arrayData } = useDataCard( update);
    
  
    return (
        < >
            <Filters setUpdate={setUpdate} update={update}/>
            <Catalogo  arrayData={arrayData}   />
        </>
    )
}

export default Body
