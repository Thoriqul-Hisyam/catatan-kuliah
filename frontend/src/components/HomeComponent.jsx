'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from 'flowbite-react';
import "../css/main.css";

function Home() {
    const [posts, setPosts] = useState([])
    console.log(posts)


    useEffect(() => {
        const getPosts = async () => {
            await axios.get(process.env.REACT_APP_API_URL + `/posts`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
                    }
                })
                .then(function (res) {
                    const data = res.data.data
                    setPosts(data)

                })
        }
        getPosts()

    }, [])

    return (
        <div className="container-fluid">




            <div className="grid justify-center ">
                <h2 className="text-3xl font-semibold my-2 text-left px-4">Terbaru</h2>
                <div className="row">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 px-4 bg-indigo-200 py-8 ">
                        {posts.map(post => {
                            return (
                                <div className="grid border-0 justify-items-center">
                                    <div className="container" >
                                        <a href={`/${post.sub_kategori_posts}/${[post.attributes.slug]}`}>

                                            <Card
                                                imgAlt={post.attributes.tittle}
                                                className="border-0  h-48"
                                                imgSrc={post.attributes.embed}
                                            />
                                            <div className="px-2">
                                                <h5 className="line-clamp-2 mb-1 text-md font-bold tracking-tight text-left text-gray-900 dark:text-white">
                                                    {post.attributes.tittle}
                                                </h5>
                                                <p className="line-clamp-3 font-normal text-sm text-gray-700 dark:text-gray-400 text-left ">

                                                    {post.attributes.description}

                                                </p>
                                                <p className=" w-24 text-xs border-1 rounded mt-6 mb-2 text-left mx-1">
                                                    {post.attributes.date}
                                                </p>

                                            </div>
                                        </a>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home;