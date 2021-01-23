import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
export default function App(props) {
	const [name, updateName] = useState('Arthur');
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + 'a475cd0d',
		option: '&t=',
		title: '',
		searchURL: ''
	});
	const [movie, setMovie] = useState({});
	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setMovie(data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'http://www.omdbapi.com/?',
						apiKey: 'apikey=' + 'a475cd0d',
						option: '&t=',
						title: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);
	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};
	return (
		<div className="Page-wrapper">
			<h2>Ruth App</h2>
			<h2>{name}</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Movie Info" />
			</form>
			<div className={'Page'}>
				{Object.keys(movie).length ? <MovieInfo movie={movie} /> : ''}
			</div>
		</div>
	);
}
