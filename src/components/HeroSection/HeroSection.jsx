import { useEffect, useState } from "react";
import axios from 'axios';

import heroImage from "../../assets/images/img-01.png"
import Button from "../Button/Button";

import "./HeroSection.style.scss";
import PostList from "../PostList/PostList";
import PostItem from "../PostItem/PostItem";

function HeroSection () {
	const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

	const [posts, setPosts] = useState([]);

	console.log(posts);

	useEffect (() => { 
		loadPosts();
	}, []);

	const loadPosts = () => {
		axios
			.get(BASE_URL)
			.then((res) => {
				setPosts([...posts, ...res.data]);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-columns">
					<div className="hero-cols">
						<h1>
							Premium Web Hosting for Your Website
						</h1>
						<p>
							Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.
						</p>
						<div className="btn-wrap">
							<Button variant="red" link={'#'} >Create an Account</Button>
							<Button variant="dark" link={'#'} >Choose your plan</Button>
						</div>
					</div>
					<div className="hero-cols">
						<div className="hero-visual">
							<img src={heroImage} className='hero-image' alt="image description" />
						</div>
					</div>
				</div>
				<PostList >
					{posts.map(post => (
						<PostItem  key={post.id}>
							<p>Post</p>
							<h3>{post.name}</h3>
							<p>Email: {post.email}</p>
						</PostItem>
					))}
				</PostList>
			</div>
		</section>
	)
}

export default HeroSection;