import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

export function ContactList () {
//   state = {
//     name: '',
//     number: '',
//   };
//   changeInput = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { contacts, onSubmit } = this.props;
//     const { name, number } = this.state;
//     const id = nanoid();
//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//     onSubmit({ id, ...this.state });
//     this.setState({ name: '', number: '' });
//     // console.log(onSubmit({id, ...this.state}));
//   };

     return (
      <ul>
			<li>
				<p></p>
				<button type="button" className={css.btn}>Delete</button>
			</li>
		</ul>
    );
  
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
