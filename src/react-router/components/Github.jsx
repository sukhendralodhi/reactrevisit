import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

const Gitub = () => {
    
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1>Github Followers: {data.followers}</h1>
            <img 
                src={data.avatar_url} 
                alt="Profile"
                className='w-24 h-24 rounded-full mx-auto my-4'
            />
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
            <div className='flex justify-center gap-4 my-4'>
                <div>
                    <h3>Following</h3>
                    <p>{data.following}</p>
                </div>
                <div>
                    <h3>Repos</h3>
                    <p>{data.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export default Gitub;

