import React from 'react';
export default function MovieInfo(props) {
	return (
		<div className={'column'}>
			<h1>Title: {props.movie.Title}</h1>
			<h2>Year Released: {props.movie.Year}</h2>
			<div>
				<img src={props.movie.Poster} />
			</div>
			<h2>Production:{props.movie.Production}</h2>
		</div>
	);
}
