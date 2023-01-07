import React from 'react';
import './Projects.scss';

const Projects = (props) => {
	return (
		<div className='projects-body'>
			<div className='cards'>
				{props.projectArr.map((project) => {
					return (
						<div className='card' key={project.name}>
							<img
								className='card-img'
								src={project.img}
								alt={props.name}
							></img>
							<h3 className='card-name'>{project.name}</h3>
							<p className='card-description'>{project.description}</p>
                            <button className='card-button'>Check out</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
