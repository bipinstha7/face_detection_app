import React from "react";
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    }
  }

  onFormChange = (event) => {
    switch(event.target.name) {
      case 'username':
        this.setState({name: event.target.value});
        break;
      case 'age':
        this.setState({age: event.target.value});
        break;
      case 'pet':
        this.setState({pet: event.target.value});
        break;
      default:
        return;
    }
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`,{
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({formInput: data})
    })
    .then(response => {
      this.props.toggleModal();
      this.props.loadUser(...this.props.user, ...data);
    })
    .catch(console.log);
  }

  render() {
    const {user} = this.props;
    const {name, age, pet} = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center bg-white w-80">
          <main className="pa4 black-80 w-80">
            <img src="http://tachyons.io/img/logo.jpg" alt="avatar" className="br-100 ba h3 w3 dib" />
            <h1>{this.state.name}</h1>
            <h4>{`Image Submitted: ${user.entries}`}</h4>
            <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            <hr />

            <label htmlFor="username" className="mt2 fw6">Name</label>
            <input
              className="pa2 ba w-100"
              placeholder="John Doe"
              type="text"
              name="username"
              id="username"
              onChange={this.onFormChange}
            />
            <label htmlFor="age" className="mt2 fw6">Age</label>
            <input
              className="pa2 ba w-100"
              placeholder="25"
              type="text"
              name="age"
              id="age"
              onChange={this.onFormChange}
            />
            <label htmlFor="pet" className="mt2 fw6">Pet</label>
            <input
              className="pa2 ba w-100"
              placeholder="Dog"
              type="text"
              name="pet"
              id="pet"
              onChange={this.onFormChange}
            />
            <div className="mt4" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <button 
                className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                onClick={() => this.onProfileUpdate({name,age,pet})}
                >Save</button>
              <button className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20" onClick={this.props.toggleModal}>Cancel</button>
            </div>
          </main>
          <div className="modal-close" onClick={this.props.toggleModal}>&times;</div>
        </article>
      </div>
    )
  }
};

export default Profile;