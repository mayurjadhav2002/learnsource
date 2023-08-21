'use client'
import { Card, CardHeader, CardBody, Avatar, Button, Image, Chip } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

function Blog({data}:{data:Object}) {

    return (
        <>
        {data.map((data:Object, index:String)=> 
            <Card isBlurred key={index} as={Link} href={`blogs/${data._id}`}
                className="border-none my-5 mx-auto bg-background/60 dark:bg-default-100/50 max-w-3xl dark:bg-gray-200"
                shadow="sm">
                <CardBody>
                    <div className="grid grid-cols-6 gap-1 items-center ">
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
                        <div className="bg-red-50 col-span-2">
                            <Image src="https://img-c.udemycdn.com/course/240x135/4789870_53df_2.jpg" />
                        </div>
                    </div>
                </CardBody>
            </Card>

)}
            
        </>)
}

export default Blog