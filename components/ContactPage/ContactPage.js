import React, { useContext, useCallback, useReducer, useState } from 'react';
import Axios from 'axios';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';
import InteractiveText from '../../UI/InteractiveText/InteractiveText';
import Copyright from '../../UI/Copyright/Copyright';
import SocialTab from './SocialTab/SocialTab';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import Spinner from '../../UI/Spinner/Spinner';
import { VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_EMAIL } from '../../utils/validation';

import s from './ContactPage.module.css';

const inputReducer = (state, action) => {
	switch(action.type) {
		case 'CHANGE':
			let formValid = true;
			for (let input in state.form) {
				if (input === action.id) {
					formValid = formValid && action.isValid;
				} else {
					formValid = formValid && state.form[input].valid;
				}
			}
			return {
				form: {
					...state.form,
					[action.id]: {value: action.value, valid: action.isValid}
				},
				isValid: formValid
			}
		case 'CANCEL_VALIDITY':
			return {
				form: {
					...state.form
				},
				isValid: false
			}
		default:
			return state;
	}
};

const ContactPage = () => {
	const context = useContext(Context);

	const [modalMessage, setModalMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const [state, dispatch] = useReducer(inputReducer, {
		form: {
			nameInput: {
				value: '',
				valid: false
			},
			emailInput: {
				value: '',
				valid: false
			},
			messageInput: {
				value: '',
				valid: false
			}
		},
		isValid: false
	});

	const style = {
		width: '100vw',
		height: '100vh',
		background: '#222',
		position: 'absolute',
		transform: context.contactPage ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.7s',
	};

	const sendMessage = (e) => {
		e.preventDefault();

		dispatch({type: 'CANCEL_VALIDITY'});

		setLoading(true);

		const emailData = {
			name: state.form.nameInput.value,
			email: state.form.emailInput.value,
			message: state.form.messageInput.value
		};

		Axios.post('https://portfolionew-email-api.herokuapp.com/api/email', emailData)
			.then((res) => {
				setLoading(false);
				setModalMessage(res.data.message);
			})
			.catch((err) => {
				setLoading(false);
				setModalMessage(err.message);
			});
	};

	const onInput = useCallback((value, isValid, id) => {
		dispatch({type: 'CHANGE', value: value, isValid: isValid, id: id});
	}, []);

	return (
		<div className={s.contactPage} style={style}>
			{loading ? <Spinner /> : null}
			<Modal 
				active={modalMessage !== ''} 
				closeModal={() => window.location.reload()}>
					{modalMessage}
			</Modal>

			<Navbar />
			
			<h2 className={s.contactHeader}>
				<InteractiveText type='contactHeader' />
			</h2>

			<p className={s.contactText}>
				Do you have some offer, idea or just want to ask me something?
				Don’t hesistate to contact me right here!
			</p>

			<form className={s.contactForm} onSubmit={(e) => sendMessage(e)}>
				<SocialTab icon='linkedin' url='https://www.linkedin.com/in/petr-sudoma' />
				<SocialTab icon='github' url='https://github.com/Chesty28' />
				<SocialTab icon='facebook' url='https://www.facebook.com/petrsudoma' />
				<SocialTab icon='instagram' url='https://www.instagram.com/petr_sudoma' />

				<div className={s.inputsContainer}>

					<Input 
						id='nameInput'
						type='text'
						element='input' 
						placeholder='Your Name'
						className={[s.input, s.nameInput].join(' ')}
						onInput={onInput}
						validators={[VALIDATOR_MIN(3), VALIDATOR_MAX(30)]}
						errormessage={'Enter valid name'}
					/>

					<Input 
						id='emailInput'
						type='email'
						element='input' 
						placeholder='Your Email'
						className={[s.input, s.emailInput].join(' ')}
						onInput={onInput}
						validators={[VALIDATOR_EMAIL()]}
						errormessage={'Enter valid email address'}
					/>

					<Input 
						id='messageInput'
						element='textarea' 
						placeholder='Your Message'
						className={s.messageArea}
						onInput={onInput}
						validators={[VALIDATOR_MIN(10)]}
						errormessage={'Your message has to be at least 10 characters long'}
					/>

					<div className={s.flexbox}>
						<button 
							className={state.isValid ? s.contactButton : [s.contactButton, s.disabled].join(' ')} 
							disabled={!state.isValid}>
								SEND
						</button>
					</div>
				</div>

				<p className={s.forgetText}>
					Don’t forget to type your valid email address :)
				</p>
			</form>

			<Copyright />
		</div>
	);
};

export default ContactPage;
