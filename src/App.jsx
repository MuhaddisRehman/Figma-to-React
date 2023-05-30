import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import responseMessage from './messaging_init_in_sw'

import './messaging_init_in_sw'
// import HomePage from './pages/HomePage/HomePage'

const  App=()=> {
  // const [count, setCount] = useState(0)
const [showMyContainer, setShowMyContainer] = useState(false)
const payload = responseMessage()
console.log("🚀 ~ file: App.tsx:13 ~ App ~ payload:", payload)
const handleDrawerToggle = () => {
  setShowMyContainer(()=>!showMyContainer);
  console.log("🚀 ~ file: App.tsx:13 ~ handleDrawerToggle ~ showMyContainer:", showMyContainer)
  console.log("Clicked")
};
const handleChatSearch = () => {
  // TODO: Implement chat search functionality
};
  return (
    <>x
    <div onClick={handleDrawerToggle}  className="float  ">
      <div onClick={handleDrawerToggle} className="float">
          <div className="go306309570"  >
            <a>
              <svg
                fill="#ffffff"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
              </svg>
              
            </a>
        </div>
      </div>
  </div>
 <div className={showMyContainer?"drawerHidden":"drawerShown"} >
    <div className="chat-header ">
      <div className="container pb-2 ">
          <div className="d-flex">
                <div className="mt-2 mb-0 pb-0 "> 
                  <i className="fa fa-user-circle-o text-light fa-3x "></i>
                    </div>
                <div className="mt-2 ml-2 mb-0 pb-0 ">
                  <h5 className="text-white">Manager</h5>
                  <p className="text-white">Active now</p>
                </div>
          </div>           
            <div className="input-group ">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white border-right-0 " id="basic-addon1">
                  <i className="fa fa-search"></i> 
                </span>
              </div>
              <input  className="form-control bg-white border-left-0 chat-search-input  " placeholder="search Agents"/>
            </div>
      </div>     
  </div>
  <div className="chat-body  pt-2">
      <span className="font-weight-bold pb-3 pl-2">Recent chats <i className="fa fa-angle-down "></i></span>
      {payload && <div className="d-flex chat_list pl-2  recent_message ">
        <div className="mt-1 mb-0 pb-0 "> 
          <div className="name_icon shadow ">MR</div>
            </div>
        <div className="mt-1 ml-2 mb-0 pb-0 ">
          <img src={payload?.notification?.image} alt="" width={"100px"}/>
            <h6>{payload?.notification?.title}</h6>
            <span>{payload?.notification?.body}</span>
        </div>
        <div className=" mb-0 pb-0 ">
            <div className="recent_message_count">3</div>
        </div>
      </div>}
      {/* <div className="d-flex chat_list pl-2 ">
      <div className="mt-1 mb-0 pb-0 "> 
        <div className="name_icon shadow ">MA</div>
          </div>
      <div className="mt-1 ml-2 mb-0 pb-0 ">
        <h6>Farman Tariq</h6>
        <span>ok done!</span>
      </div>
      </div>
  <div className="d-flex chat_list pl-2 ">
  <div className="mt-1 mb-0 pb-0 "> 
      <div className="name_icon shadow ">MA</div>
      </div>
  <div className="mt-1 ml-2 mb-0 pb-0 ">
      <h6>Musawer Awan</h6>
      <span>ok done!</span>
  </div>
</div> */}
    </div>
</div>
      {/* <HomePage/> */}
    </>
  )
}

export default App
