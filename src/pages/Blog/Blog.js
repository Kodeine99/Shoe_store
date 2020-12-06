import React, {useContext} from 'react';

// Context
import {BlogContext} from '../../contexts/BlogsProvider';

// Material-UI
import { Container, Link, Breadcrumbs, Typography, Grid } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pagination from '@material-ui/lab/Pagination';

// Components
import Footer from '../../components/Footer/Footer';
import BlogCard from "../../components/Card/BlogCard";




function Blogs() {

	const value = useContext(BlogContext);
	const [blogs] = value.blogs;
	console.log(blogs)

	return (
		<>
			<div className="main">
				<div className="page-header text-center">
					<Container>
						<h1 className="page-title">
							Blogs
							<span>Kodeine shoes</span>
						</h1>
					</Container>
				</div>
				<div className="breadcrumb-nav" style={{borderBottom:'1px solid #efefef'}}>
						<Container className="breadcrumb-container">
							<Breadcrumbs
								separator={<NavigateNextIcon fontSize="small" />}
								aria-label="breadcrumb">
								<Link className="breadcumbs-icon" color="inherit" href="/">
									<Typography color="inherit">Home</Typography>
								</Link>
								<Typography color="textPrimary">Blogs</Typography>
							</Breadcrumbs>
						</Container>
				</div>
				<div className="page-content">
					<Container>
						<Grid container spacing={2}>
							{
								blogs.slice(0,6).map(blog => {
									return (
										<Grid key={blog.id} item lg={4} md={4} sm={6} xs={12}>
											<BlogCard
												title={blog.title}
												image= {`${process.env.PUBLIC_URL}${blog.images}`}
												content={blog.content}
												createDate={blog.createDate}
											/>
									</Grid>)
								})
							}
						</Grid>
					</Container>
				</div>
				<div className="pagination-container">
					<Pagination
						style={{ display: 'flex', justifyContent: 'center' }}
						count={3}
						color="primary" />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Blogs;
