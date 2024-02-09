import User from "./User"
import useUsers from "../../hooks/useUsers";

const Users = () => {
    const [users, records, setRecords] = useUsers()

    const filterUser = e => {
        e.preventDefault()
        setRecords(users.filter(f => f.firstName.toLowerCase().includes(e.target.value) || f.email.toLowerCase().includes(e.target.value) || f.company.name.toLowerCase().includes(e.target.value)))
    }
    return (
        <div className="container mx-auto">

            <div className="my-12 px-[1vw] md:px-0">



                <div className="my-12 flex items-center justify-center bg-slate-400 py-4 rounded gap-4">
                    <label htmlFor="" className="text-md font-semibold">Filter: </label>
                    <input type="text" className="p-2  rounded-xl border dark:bg-white w-1/2 " onChange={filterUser} placeholder="First name / Company name/ Email" name="" id="" /></div>
                <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {
                        records?.map(user => <User key={user.id} user={user}>

                        </User>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Users