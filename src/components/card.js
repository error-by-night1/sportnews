import React from "react";

//-----------------------------------------------------------------------
const Card = ({ title, body, admin }) => {
  //-----------------------------------
  return (
    <div className="grid">
      <div className="card card__body">
        <figure className="card__img">
          <img
            src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg"
            width="340"
            height="280"
          />
        </figure>
        <div className="card__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          tempora.
        </div>
      </div>
    </div>
  );
};
export default Card;

/*
import React from "react"
import Delete from ./Delete.js
class Card exports React.Component{
  constructor(props){
    super(props)
  
   this.state={users:[],fetched:false}
}
  componentDidMount(){
    axios.get('http://localhost:3000/login')   your localhost
    .then(result=>{
      console.log(result)
      this.setState({users:result.data.data,fetched:true})
    })
    .catch((error)=>{
      console.log("error")
    })


}

const admin=users.filter(user=>user.isadmin===true)


render(){
  if(admin){
 return (
    <div className="grid">
      <div className="card card__body">
        <figure className="card__img">
          <img
            src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg"
            width="340"
            height="280"
          />
        </figure>
        <div className="card__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          tempora.
        </div>
        <Delete></Delete>

      </div>
    </div>
  );
}
 return (
    <div className="grid">
      <div className="card card__body">
        <figure className="card__img">
          <img
            src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg"
            width="340"
            height="280"
          />
        </figure>
        <div className="card__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          tempora.
        </div>
        <Delete></Delete>

      </div>
    </div>
  );
}


}

}


*/
