import { Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";

function Content({ posts} : any) {
    return (
        <Routes>
            <Route path="/" element={<Home posts={posts} />} />

            <Route path="/blog" element={<Blog posts={posts} />} />

            <Route path="/about" element={<About posts={posts} />} />
        </Routes>
    )
}

export default Content;