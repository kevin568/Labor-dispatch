import React from 'react';
import { Link } from "react-router-dom";
import { PencilIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';



export default function Header(){

    const { hasLogin } = useSelector((state) => state.account.login);
    const { name, photo } = useSelector((state) => state.account.user);

    return (
        <div className="sticky top-0 z-50 w-screen h-20 text-xl flex flex-row items-center border-b border-b-yellow-700/50 px-14 bg-transparent mb-14">
            <Link to={"/Looby"} className="mr-auto">
                <img src={"/images/logo.png"} alt="logo" className="h-12"/>
            </Link>
            <Link to={"/Looby"} className="mx-5 hover:text-yellow-700">Looby</Link>
            <Link to={"/Mycontract"} className="mx-5 hover:text-yellow-700">MyContract</Link>
            {hasLogin ? (
                <>
                    <Link
                        to={'/AddCase'}
                        className="flex mx-5 text-white font-medium px-4 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md"
                    >
                        <PencilIcon className="h-6 w-6 mr-2" />
                        發表專案
                    </Link>
                    <Link to={'/Myprofolio'} className="flex mx-5 hover:text-yellow-700 align-middle">
                        {photo ? (
                            <img className="w-9 h-9 rounded-full" src={photo} alt="avatar" />
                        ) : (
                            <div className="w-9 h-9 rounded-full bg-yellow-700/70" />
                        )}
                        <span className="font-medium ml-4 my-auto">Hi, {name}</span>
                    </Link>
                </>
            ) : (
                <Link
                    to={'/login'}
                    className="flex mx-5 text-white font-medium px-4 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md"
                >
                    登入 / 註冊
                </Link>
            )}
        </div>
    );
}