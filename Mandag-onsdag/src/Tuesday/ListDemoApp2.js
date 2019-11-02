import React, { useState } from "react";

function MemberTable(props) {
  const members = props.members;
  const memTable = members.map((val, index) => (
    <Table key= {index} name={val.name} age={val.age} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>{memTable}</tbody>
    </table>
  );
}
function Table(props){
return <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
