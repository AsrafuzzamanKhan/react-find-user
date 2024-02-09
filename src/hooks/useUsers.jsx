import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState([])


    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data.users)
                setUsers(response.data.users)
                setRecords(response.data.users)

            })
    }, [])

    return [users, records, setRecords]
}

export default useUsers