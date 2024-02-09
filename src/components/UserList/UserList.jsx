import { useForm } from 'react-hook-form';
const UserList = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className=" container mx-auto px-2">
            <div className="flex justify-center items-center min-h-screen text-black">
                <div className="bg-gray-100 flex items-center rounded-2xl shadow-lg max-w-3xl ">
                    <div className='w-full px-8 py-12' >
                        <h1 className='text-center font-semibold text-[1.5vw]'>User List Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                            <input className="p-2 mt-8 rounded-xl border dark:bg-white" type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                            <input className="p-2 mt-2 rounded-xl border dark:bg-white" type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                            <input className="p-2 mt-2 rounded-xl border dark:bg-white" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            <input className="p-2 mt-2 rounded-xl border dark:bg-white" type="text" placeholder="Company Name" {...register} />
                            <input className="p-2 mt-2 rounded-xl border dark:bg-white" type="text" placeholder="Address" {...register} />
                            <input className="p-2 mt-2 rounded-xl border dark:bg-white" type="file" placeholder="Image" {...register("Image", {})} />

                            <input className="mt-2 py-2 bg-white px-2 border rounded-xl hover:scale-110 duration-300" type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default UserList