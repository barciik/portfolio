import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<div className='contact-body'>
			<p>
				E-mail: <span className='contact-color'>bartek.batko3@gmail.com</span>
			</p>
			<p>
				Linkedin:{' '}
				<a
					className='contact-color'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/bart%C5%82omiej-batko-518bb0226/'
				>
					Link
				</a>
			</p>
			<p>
				Github:{' '}
				<a
					className='contact-color'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/barciik'
				>
					Link
				</a>
			</p>
		</div>
	);
};

export default Contact;
