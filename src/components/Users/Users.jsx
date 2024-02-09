import { useEffect, useState } from "react"
import User from "./User"
import axios from 'axios';
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

const Users = () => {
    // const [users, setUsers] = useState([])
    const [users] = useUsers()
    // console.log(users)
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/users')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data.users)
    //             setUsers(response.data.users)
    //         })
    // }, [])

    return (
        <div className="container mx-auto">

            <div className="my-12">
                <div>Users:{users?.length}</div>
                <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {
                        users?.map(user => <User key={user.id} user={user}>

                        </User>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Users