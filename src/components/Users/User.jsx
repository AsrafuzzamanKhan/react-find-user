import React from 'react'
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, firstName, lastName, email, company, address, image } = user;
    return (
        <div className="card glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                <p>{email}</p>
                <p>{company.name}</p>
                <div>
                    <p>{address.address}</p>
                    <p>{address.city}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/userDetails/${id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>

    )
}

export default User