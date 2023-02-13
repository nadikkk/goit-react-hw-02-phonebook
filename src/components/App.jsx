import { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
// import {Filter} from './Filter/Filter'
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
		{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
	 ],
    filter: '',
  };
  
  addContact = (contact) => {
	console.log(contact);
	this.setState(prevState => {
		console.log(prevState);
		return {contacts: [contact, ...prevState.contacts]}
	})
	
  }
  render() {
	console.log(this.state.contacts);
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
		<ContactForm onSubmit={this.addContact} contacts={this.state.contacts} />
	 
		<h2>Contacts</h2>
		 {/* <Filter contacts={this.state.contacts} />  */}
		<ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
