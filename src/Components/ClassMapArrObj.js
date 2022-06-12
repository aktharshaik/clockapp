import "../App.css";
import React from "react";

class ClassMapArrObj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  // handleUsername = (e) =>{
  //     this.props.({
  //         name: 'Change Clicked'
  //     }

  //     )
  // }

  render() {
    const userList = [
      {
        id: 0,
        empcode: "21928",
        name: "AKTHAR SHAIK",
        dob: "22-07-1979",
        address: {
          building: "#304, Mytri Nivas,",
          street: "Near Yashoda Hospital Girls Hostel",
          area: "B.S. MAqtha",
          city: "Hyderabad",
          pin: "500082",
          state: "TELANGANA",
        },
        organization: "ALLEN REINFORCED PLASTICS PVT. LTD.",
        occupation: "Private Employee",
        designation: "MANAGER",
        department: "Information Technology",
      },
    ];

    return (
      <div>
        {userList.map((item, i) => {
          return (
            <div>
              <h2 align="center">
                <u>EMPLOYEE DETAILS</u>
              </h2>
              <p className="rm-wspace">S.NO. : {item.id + 1}</p>
              <p className="rm-wspace">
                <span>EMP. CODE : {item.empcode}</span>
              </p>
              <p className="rm-wspace">EMP. NAME : {item.name}</p>
              <p className="rm-wspace">DOB : {item.dob}</p>
              <p className="rm-wspace">OCCUPATION : {item.occupation}</p>
              <p className="rm-wspace">ORGANIZATION : {item.organization}</p>
              <p className="rm-wspace">DEPARTMENT : {item.department}</p>
              <p className="rm-wspace">DESIGNATION : {item.designation}</p>
              <p className="rm-wspace">RESIDENTIAL ADDRESS</p>
              <p className="rm-wspace">{item.address.building}</p>
              <p className="rm-wspace">{item.address.street}</p>
              <p className="rm-wspace">{item.address.area}</p>
              <p className="rm-wspace">
                {item.address.city} : {item.address.pin}
              </p>
              <p className="rm-wspace">{item.address.state}.</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassMapArrObj;
