import Locationcard from './Locationcard'
import CustomData from "../../data/location.json"


export default function Locationslist() {
    return CustomData.map(e => {
        return <Locationcard key={e.id} location={e}/>
    })
}