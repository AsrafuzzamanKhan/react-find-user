import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
    // const { data: users = [{}], isloading: loading } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://dummyjson.com/users')
    //         console.log(res, 'res')
    //         return res.json()
    //     }
    // })


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data.users)
                setUsers(response.data.users)
                setLoading(false)
            })
    }, [])

    return [users, loading]
}

export default useUsers