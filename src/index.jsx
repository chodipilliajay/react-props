import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  console.log(props);
  return <div className="my-style">
    <h2>{props.name}</h2>
    <img
    src={props.img}
    alt="avatar_img"
    />
    <p>{props.phone}</p>
    <p>{props.email}</p>

  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" email="b@beyonce.com" phone="+123 456 789"/>
    <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" email="jack@nowhere.com" phone="+890 334 345"/>
    <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" email="gmail@chucknorris.com" phone="+333 764 789"/>
    {/* <input id="fName" placeholder="Enter Your First Name" value="Ajay" /> */}
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


{/* <h2>Jack Bauer</h2>
<img
  src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  alt="avatar_img"
/>
<p>+987 654 321</p>
<p>jack@nowhere.com</p>

<h2>Chuck Norris</h2>
<img
  src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  alt="avatar_img"
/>
<p>+918 372 574</p>
<p>gmail@chucknorris.com</p> */}