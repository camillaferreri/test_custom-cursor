import React, { useEffect, useState } from 'react'
import { Cursor } from './components/Cursor'

import testImage from './images/test.jpg'

import './App.scss'

function App() {
	return (
		<div className="App">
			<section className="Menu">
				<a data-cursor-link="">Facebook</a>
				<a data-cursor-link="">Instagram</a>
			</section>
			<section>
				<h2>Projects</h2>
				<div>
					<div data-cursor-text="View Project" >
						<img src={testImage} />	
						<p>Lorem</p>
					</div>
					<div data-cursor-text="View Project" >
						<img src={testImage} />	
						<p>Lorem</p>
					</div>
					<div data-cursor-text="View Project" >
						<img src={testImage} />	
						<p>Lorem</p>
					</div>
				</div>
			</section>

			<Cursor />			
		</div>
	);
}

export default App;
