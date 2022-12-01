import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Case from '../component/Case';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { getAllPost } from '../api';



export default function Looby() {

  const [keyword, setKeyword] = useState('');
  const [cases, setPosts] = useState([]);

  useEffect(() => {
      fetchAllPost();
  }, []);

  const fetchAllPost = async () => {
      const res = await getAllPost();
      setPosts(res.data.data);
  };

    const handleSearch = () => {
        alert('搜尋： '+keyword)
    }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="text-center text-3xl mb-8">首頁</div>
            <div className="w-2/5 h-10 rounded-md mb-12">
                <input type="text" placeholder={"關鍵字"} value={keyword} onChange={(e)=> setKeyword(e.target.value)} onKeyPress={(e)=> e.key === "Enter" ? handleSearch() : null } className="absolute w-2/5 h-10 rounded-md pl-10 focus:outline-0 focus:bg-yellow-700/5"></input>
                <MagnifyingGlassIcon className="absolute h-6 w-6 my-2 ml-2"/>
            </div>
            <Case data={cases} />
      <Footer />
    </div>
  );
}
