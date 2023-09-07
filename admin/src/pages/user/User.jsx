import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './user.css'
const User = () => {
  return (
    <div className="editUser">
      <div className="editUserTop">
        <h1>Edit User</h1>
        <button>Create</button>
      </div>
      <div className="editUserWrapper">
        <div className="editUserInfo">
          <div className="editUserTitle">
            <img src="https://images.pexels.com/photos/18078965/pexels-photo-18078965/free-photo-of-beautiful-woman-in-white-dress-with-wineglass-in-hand.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="username">
              <h5>Anna Backer</h5>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="accountDetails">
            <span>Account Details</span>
            <div className="accountName">
              <Person2OutlinedIcon sx={{ fontSize: '16px' }} />
              <span>annabeck99</span>
            </div>
            <div className="accountDOB">
              <CalendarTodayOutlinedIcon sx={{ fontSize: '16px' }} />
              <span>10.12.1999</span>
            </div>
          </div>
          <div className="accountContact">
            <span>Contact</span>
            <div className="accountNumber">
              <PhoneAndroidOutlinedIcon sx={{ fontSize: '16px' }} />
              <span>+1 928 374 191</span>
            </div>
            <div className="accountEmail">
              <EmailOutlinedIcon sx={{ fontSize: '16px' }} />
              <span>annabeck@gmail.com</span>
            </div>
            <div className="accountLocation">
              <LocationSearchingOutlinedIcon sx={{ fontSize: '16px' }} />
              <span>New York | USA</span>
            </div>
          </div>
        </div>
        <div className="editUserEdit">
          <h3>Edit</h3>
          <div className="editWrapper">
            <div className="editForm">
              <div className="editUsername">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='anna99' />
              </div>
              <div className="editFullname">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Anna Beckenson' />
              </div>
              <div className="editEmail">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='anna99@gmail.com' />
              </div>
              <div className="editPhone">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='+1 928 374 191' />
              </div>
              <div className="editAddress">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='New York | USA' />
              </div>
            </div>
            <div className="editFormRight">
              <div className="editFormImage">
                <img src="https://images.pexels.com/photos/18078965/pexels-photo-18078965/free-photo-of-beautiful-woman-in-white-dress-with-wineglass-in-hand.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <FileUploadIcon />
              </div>
              <button className='editUpdateBtn'>Update</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default User
