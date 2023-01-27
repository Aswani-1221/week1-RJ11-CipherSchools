import React from 'react'
import UserDetails from './UserDetails';

const AllUserList =() =>{
    let allUsers =[{
        name:"John",
        email:"kumari",
        phone: "+911352321391",
    },
    {
        name:"Aswani",
        email:"Mishra",
        phone: "+911352325661",
    },
    {
        name:"Prem",
        email:"Singh",
        phone: "+873681210",
    },

];
let array =allUsers.map((user,index) =>(
    <UserDetails key={index} user={user} />
));



return(
    // <div>
    //     <UserDetails user={allUsers[0]} />
    //     <UserDetails user={allUsers[1]} />
    //     <UserDetails  user={allUsers[2]}/>
    // </div>

    //using map rendering
    <div>
    {allUsers.map((user,index) =>(
        <UserDetails key={index} user={user} />
    ))};
</div>
);


};

export default AllUserList;