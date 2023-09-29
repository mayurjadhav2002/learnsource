'use client'
import { Card, CardBody, Avatar, Image } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'
interface Data{
    map(arg0: (data: Data, index: Number) => React.JSX.Element): unknown;
    _id:String,
    created_by: String,
    title: String,
    description: String,
}
function Blog({data}:{data:Data}) {

    return (
        <>
        {data.map((data:Data, index)=> 
            <Card  key={data._id[1]} as={Link} href={`blogs/${data._id}`}
                className="border-none my-5 mx-auto dark:bg-default-100/50 max-w-3xl dark:bg-gray-200"
                shadow="sm">
                <CardBody>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 items-center ">
                        <div className="col-span-4">
                            <div className="flex gap-2">
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-small font-semibold leading-none text-default-600">{data.created_by}</span>
                                    <span className="text-small tracking-tight text-default-400">@zoeylang</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <h1 className="text-xl font-bold leading-6">{data.title}</h1>
                                <p className="text-sm mt-1">{data.description}</p>
                            </div>
                        </div>
                        <div className="col-span-3 mx-auto lg:mt-0 mt-4 lg:col-span-2">
                            <Image src="https://img-c.udemycdn.com/course/240x135/4789870_53df_2.jpg"
                            className="object-cover mx-auto"
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>

)}
            
        </>)
}

export default Blog