import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, firstName, lastName, email, company, address, image } = user;
    return (
        <div className="glass shadow-lg">
            <figure className='flex items-center justify-center'><img src={image} alt="users" /></figure>
            <div className=" card-body ">
                <div className='hover:text-blue-400 duration-300 my-1'>
                    <Link to={`/userDetails/${id}`}>   <h2 className="card-title">{firstName} {lastName}</h2></Link>
                </div>

                <div>
                    <span className="text-blue-600">Email: </span>{email}
                </div>
                <div className=" gap-1"><span className="text-blue-600">Adress: </span>
                    <span>{address.address}, </span>
                    <span> {address.city}</span>
                </div>
                <div>
                    <span className="text-blue-600">Company Name: </span>{company.name}
                </div>
            </div>
        </div>

    )
}

export default User