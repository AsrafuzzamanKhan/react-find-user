import { useParams } from "react-router-dom"
import useUsers from "../../hooks/useUsers";

const UserDetails = () => {
    const { id } = useParams();
    const [users] = useUsers()
    const idInt = parseInt(id)

    const userDetail = users.find(user => user.id === idInt)
    console.log(userDetail)
    return (
        <div className="container mx-auto">
            <div className="w-full min-h-screen px-[2vw] lg:px-0">
                <div>UserDetails:{id}</div>
                <div className="shadow-xl flex flex-col md:flex-row items-center py-12 my-12">
                    <figure className="w-1/2 flex justify-center"><img className="w-[22vw]" src={userDetail?.image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{userDetail?.firstName} {userDetail?.lastName}</h2>
                        <p>{userDetail?.email}</p>
                        <div>
                            <p>{userDetail?.address.address}</p>
                            <p>{userDetail?.address.city}</p>
                        </div>
                        <div>
                            {userDetail?.company.name}
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetails