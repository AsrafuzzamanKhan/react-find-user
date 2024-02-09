import { useParams } from "react-router-dom"
import useUsers from "../../hooks/useUsers";

const UserDetails = () => {
    const { id } = useParams();
    const [users] = useUsers()
    const idInt = parseInt(id)

    const userDetail = users.find(user => user.id === idInt)
    console.log(userDetail)
    return (
        <div className="container mx-auto mt-28">
            <div className="w-full min-h-screen px-[2vw] lg:px-0">

                <div className="shadow-xl flex flex-col md:flex-row items-center py-12 my-12">
                    <figure className="w-1/2 flex justify-center ">
                        <img className="w-[22vw]" src={userDetail?.image} alt="Album" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{userDetail?.firstName} {userDetail?.lastName}</h2>
                        <p><span className="text-blue-600">Email: </span>{userDetail?.email}</p>
                        <div className=" gap-1"><span className="text-blue-600">Adress: </span>
                            <span>{userDetail?.address.address}, </span>
                            <span> {userDetail?.address.city}</span>
                        </div>
                        <div>
                            <span className="text-blue-600">Company Name: </span>{userDetail?.company.name}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetails