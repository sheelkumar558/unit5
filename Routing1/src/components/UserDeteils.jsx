
import {useParams} from "react-router-dom"

export const UserDeteils =()=>{
    const {id} = useParams();

    return <div>User ID : {id}</div>
}