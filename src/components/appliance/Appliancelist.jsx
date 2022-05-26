import React from 'react'
import Appliancecard from './Appliancecard'
import CustomData from "../../data/appliances.json"


export default function Appliancelist() {
    return CustomData.map(e => {
        return <Appliancecard key={e.id} appliance={e}/>
    })
}

