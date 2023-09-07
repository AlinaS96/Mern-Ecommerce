import './newUser.css'
const NewUser = () => {
  return (<>
    <div className="newUser">
      <h1>New User</h1>
      <div className="newUserWrapper">
        <div className="newUserUsername">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserFullname">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="john Smith" />
        </div>
        <div className="newUserEmail">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="user@example.com" />
        </div>
        <div className="newUserPassword">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="" />
        </div>
        <div className="newUserPhone">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+123 456 789" />
        </div>
        <div className="newUserAddress">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserGender">
            <legend>Gender</legend>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="email">Male</label>

              <input type="radio" id="female" name="gender" value="female" />
              <label for="phone">Female</label>
            </div>
        </div>
        <div className="newUserActive">
          <label htmlFor="">Active</label>
          <select name="" id="">
            <option value="active">Yes</option>
            <option value="passive">No</option>
          </select>
        </div>
      </div>
      <button>Create</button>
    </div>
  </>)
}

export default NewUser
