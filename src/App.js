import { Routes, Route } from 'react-router';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const PROJECTS = [
	{
		name: 'FoodApp',
		img: './foodAppImg.png',
		link: '',
		description: 'A simple demo app for ordering food',
	},
	{
		name: 'Todo List',
		img: './unknown.jpg',
		link: '',
		description: 'A todo list linked to a firebase database',
	},
	
];

function App() {
	return (
		<div className='wrapper'>
			<Navigation />
			<Routes>
				{/* <Route path='/' ></Route> */}
				<Route path='/home' element={<Home />}></Route>
				<Route
					path='/projects'
					element={<Projects projectArr={PROJECTS} />}
				></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</div>
	);
}

export default App;
