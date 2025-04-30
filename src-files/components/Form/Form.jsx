import React from 'react'
import './Form.css'
import Input from '../Input/Input';
import Message from '../Message/Message';


const EMPTY_STRING = '';
const INIT_NAME_STRING ='Поле имени не может быть пустым.';
const LIMIT_NAME_STRING ='Имя должно быть больше 2 и меньше 20 символов!';
const LIMIT_SURNAME_STRING ='Фамилия должна быть больше 2 и меньше 25 символов!';
const INIT_EMAIL_STRING ='Поле email не может быть пустым.';
const INIT_ERROR_STRING ='Некорректный email!';
const PHONE_ERROR_STRING ='Некорректный номер!';
const INIT_PASSWORD_STRING ='Поле пороля не может быть пустым.';
const INIT_PASSWORD_REPEAT_STRING ='Поле повтора пороля не может быть пустым. И пороли должны совпадать.';
const LIMIT_PASSWORD_STRING ='Пороль должен быть не меньше 8 и небольше 12 символов!';
const NO_EQUALITY_PASSWORD_STRING ='Пороли должны совпадать!';
const FILL_FIRST_PASSWORD_STRING ='Заполните первое поле пороля!';
const EQUALITY_PASSWORD_STRING ='Пороли совпадают!';


class Form extends React.Component  {

	 constructor(props) {
		  super(props);

		  this.state = {
				name: '',
				surname: '',
				phone: '',
				email: '',
				password: '',
				passwordRepeat: '',
				confirm: false,

				isCheckbox: true,
				checkedStatus: false,
				isRequiredInputs: false,

				nameError: '',
				surnameError: '',
				phoneError: '',
				emailError: '',
				passwordError: '',
				passwordRepeatError: '',
				///
				nameText: INIT_NAME_STRING,
				emailText: INIT_EMAIL_STRING,
				passwordText: INIT_PASSWORD_STRING,
				passwordRepeatText: INIT_PASSWORD_REPEAT_STRING,
				formValid: false,
		}
				this.handleSubmit = this.handleSubmit.bind(this); 
				this.handleInputChange = this.handleInputChange.bind(this);
				this.validateForm = this.validateForm.bind(this);
	 }
	 

	handleSubmit(e) {
		e.preventDefault();
		
		alert('Регистрация прошла успешно!\n\nДанные формы'+ '\nИмя: ' + this.state.name + '\nФамилия: ' + this.state.surname + '\nТелефон: ' + this.state.phone + '\nПочта: ' + this.state.email + '\nПароль: ' + this.state.password + '\nПовтор пороля: ' + this.state.passwordRepeat + '\nСтатус подтверждения пороля: ' + this.state.confirm);
		console.log(this.state);
	
			// обнуление полей формы
			 this.setState({nameText: INIT_NAME_STRING,
						emailText: INIT_EMAIL_STRING,
						passwordText: INIT_PASSWORD_STRING,
						passwordRepeatText: INIT_PASSWORD_REPEAT_STRING,});
			this.setState({checkedStatus: false, isCheckbox: true});
			this.setState({
				name: '',
				surname: '',
				phone: '',
				email: '',
				password: '',
				passwordRepeat: '',
				confirm: false
			}); 
	}

	handleInputChange (e){

		if (e.target.name === 'name') {
			this.setState({[e.target.name]: e.target.value});

			if (e.target.value.length <2 || e.target.value.length >20) {
				this.setState({nameError: LIMIT_NAME_STRING});
				if (!e.target.value) {
					this.setState({nameText: INIT_NAME_STRING, nameError: EMPTY_STRING});
				}
					this.setState({isRequiredInputs: false});
			} else {
					this.setState({
								nameText: EMPTY_STRING,
								nameError: EMPTY_STRING,
								isRequiredInputs: true});
			}
					 return;
		} 

		if (e.target.name === 'surname') {
		 	this.setState({[e.target.name]: e.target.value});
			if (e.target.value.length <2 || e.target.value.length >20) {
					this.setState({surnameError: LIMIT_SURNAME_STRING});

					if (!e.target.value) {
						this.setState({surnameError: EMPTY_STRING});
					}
			} else {
						this.setState({surnameError: EMPTY_STRING});
			}
					 return;
		} 

		if (e.target.name === 'phone') {
					this.setState({[e.target.name]: e.target.value});
					const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

					if (!regex.test(e.target.value)) {

							this.setState({phoneError: PHONE_ERROR_STRING});
							if (!e.target.value) {
								this.setState({phoneError: EMPTY_STRING});
							}
					} else {
							this.setState({phoneError: EMPTY_STRING});
					}
							return;
		} 

	 	 if (e.target.name === 'email') {
			this.setState({[e.target.name]: e.target.value});

			const re = /^(([^&lt;&gt;()[\]\\.,;:\s@"]+(\.[^&lt;&gt;()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if (!re.test(String(e.target.value).toLowerCase())) {
				this.setState({emailError: INIT_ERROR_STRING});
					if (!e.target.value) {
							this.setState({emailError: EMPTY_STRING});
							this.setState({emailText: INIT_EMAIL_STRING});
					}
					this.setState({isRequiredInputs: false});
			} else{
				this.setState({emailText: EMPTY_STRING});
				this.setState({emailError: EMPTY_STRING});
				this.setState({isRequiredInputs: true});
			}
			return;
		}  


	 	if (e.target.name === 'password') {
		 	this.setState({[e.target.name]: e.target.value});

			if (e.target.value.length <8 || e.target.value.length >12) {
					this.setState({passwordError: LIMIT_PASSWORD_STRING});
					this.setState({isCheckbox: true});
					this.setState({checkedStatus: false});

					if(this.state.passwordRepeat !== EMPTY_STRING ){
							this.setState({passwordRepeatError: NO_EQUALITY_PASSWORD_STRING});
					}
					if (!e.target.value) {
						this.setState({passwordText: INIT_PASSWORD_STRING});
						this.setState({passwordError: EMPTY_STRING});
								if(this.state.passwordRepeat){
									this.setState({passwordRepeatError: FILL_FIRST_PASSWORD_STRING});
							}
						}
			}
			else {

					this.setState({passwordText: EMPTY_STRING});
					this.setState({passwordError: EMPTY_STRING});
					if (e.target.value !== this.state.passwordRepeat) {
						if(this.state.passwordRepeat !== EMPTY_STRING ){
							this.setState({passwordRepeatText: EMPTY_STRING});
							this.setState({passwordRepeatError: NO_EQUALITY_PASSWORD_STRING});
							}
							this.setState({isCheckbox: true});
							this.setState({checkedStatus: false});
						}
						else{
							this.setState({passwordRepeatError: EMPTY_STRING});
							this.setState({passwordRepeatText: EQUALITY_PASSWORD_STRING});
							this.setState({isCheckbox: false});
						}
			}
					 return;
		}  

		if (e.target.name === 'passwordRepeat') {
		 		this.setState({[e.target.name]: e.target.value});

					if (!this.state.password) {
						this.setState({passwordRepeatError: FILL_FIRST_PASSWORD_STRING});
						}
						else{

							if (e.target.value.length <8 || e.target.value.length >12) {

									this.setState({isCheckbox: true});
									this.setState({checkedStatus: false});
									if (!e.target.value || !e.target.value && this.state.passwordRepeat === EMPTY_STRING ) {
											this.setState({passwordRepeatError: EMPTY_STRING});
											this.setState({passwordRepeatText: INIT_PASSWORD_REPEAT_STRING});

										} else{
											this.setState({passwordRepeatText: EMPTY_STRING});
											this.setState({passwordRepeatError: NO_EQUALITY_PASSWORD_STRING});
										}
							}
							else{
								if (e.target.value !== this.state.password) {
										this.setState({passwordRepeatError: NO_EQUALITY_PASSWORD_STRING});
										this.setState({isCheckbox: true});
										this.setState({checkedStatus: false});
									} else {
											this.setState({passwordRepeatText: EQUALITY_PASSWORD_STRING});
											this.setState({passwordRepeatError: EMPTY_STRING});
											this.setState({isCheckbox: false});
									}
							}
						}
					 	return;
			}

					if (e.target.name === 'confirm') {
						this.setState({checkedStatus: !this.state.checkedStatus});
						this.setState({[e.target.name]: !this.state.checkedStatus});
					}  
 		
	}

	 componentDidUpdate(prevProps,prevState) {
    if (
      prevState.checkedStatus !== this.state.checkedStatus ||
      prevState.isRequiredInputs !== this.state.isRequiredInputs
    ) {
      this.validateForm();
    }
  }

	validateForm () {
    const { checkedStatus, isRequiredInputs } = this.state;
    if (!checkedStatus || !isRequiredInputs) {
      this.setState({ formValid: false });
    } else {
      this.setState({ formValid: true });
    }
  };


	render() {

		return (
					<>
						<form className="form" onSubmit={this.handleSubmit}> 
							<h1 className="form__title">Создание аккаунта</h1>
							<p className="form__subtitle">Введите свои данные, чтобы создать аккаунт в сервисе</p>

							<div className="form__input-wrapper">
									<Input
										type="text"
										name="name"
										value={this.state.name} 
										placeholder="Имя"
										onChange={this.handleInputChange} />

									<Message
										error={this.state.nameError} 
										text={this.state.nameText} />
							</div>
				
							<div className="form__input-wrapper">
									<Input
										type="text"
										name="surname"
										value={this.state.surname}
										placeholder="Фамилия"
										onChange={this.handleInputChange} />

									<Message
										error={this.state.surnameError} />
							</div>

							<div className="form__input-wrapper">
								<Input
								type="tel"
								name="phone"
								value={this.state.phone}
								placeholder="Номер телефона"
								onChange={this.handleInputChange} />

								<Message
									error={this.state.phoneError} />
							</div>

							<div className="form__input-wrapper">
								<Input
									type="email"
									name="email"
									value={this.state.email}
									placeholder="Email"
									onChange={this.handleInputChange} />

								<Message
									error={this.state.emailError} 
									text={this.state.emailText} />
							</div>

							<div className="form__input-wrapper">
								<Input
									type="password"
									name="password"
									value={this.state.password}
									placeholder="Пароль"
									autoComplete=''
									onChange={this.handleInputChange} />

									<Message
										error={this.state.passwordError} 
										text={this.state.passwordText} />
							</div>

							<div className="form__input-wrapper">
								<Input
									type="password"
									name="passwordRepeat"
									value={this.state.passwordRepeat}
									placeholder="Повторите пароль"
									autoComplete=''
									onChange={this.handleInputChange} />
								<Message
									error={this.state.passwordRepeatError} 
									text={this.state.passwordRepeatText} />
							</div>

							<div className="checkbox-item">
								<input 
									type="checkbox" 
									className="checkbox-input" 
									id="confirm" 
									value={this.state.checkedStatus}
									checked={this.state.checkedStatus} 
									name="confirm"
									disabled={this.state.isCheckbox}
									onChange={this.handleInputChange} />

									<label 
										htmlFor="confirm" 
										className="checkbox-label">
										Подтверждаю пароль
									</label>
							</div>
			
							<button 
									className="form__btn"
									type="submit"
									disabled={!this.state.formValid}>
									Продолжить
							</button>

			</form>

			<p className="account-entry">Уже есть аккаунт ?<a className="account-entry__link" href="https://dzen.ru/?yredirect=true" target="_blank"><span> Войти</span></a></p>
					</>
			) 
	 }

}


//////////////////////////////
export default Form







