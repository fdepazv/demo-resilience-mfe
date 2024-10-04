import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Member } from "../types";

interface MembersListProps {
 person: Member;
 resetPerson: () => void;
}

const MembersList = ({ person, resetPerson }: MembersListProps) => {
 const [members, setMembers] = useState<Member[]>([]);

 const { name, lastName, age } = person;

 useEffect(() => {
  if (!person.name) return;

  const isOlderThan18 = age >= 18;

  // Introducing an error on purpose
  // const jobs = person.jobs.map(job => job.toUpperCase())

  const newPerson: Member = {
   name,
   lastName,
   age,
   isOlderThan18,
   //  jobs
  };

  setMembers([...members, newPerson]);
  resetPerson();
 }, [person]);

 return (
  <>
   <Typography variant="h3" align="center" style={{ padding: "32px" }}>
    People
   </Typography>

   <Grid container spacing={2} justifyContent="center">
    {members?.map((member, index) => (
     <Grid size={8} key={index}>
      <Typography variant="h6">
       {member.name} {member.lastName}, age: {member.age}. Is older than 18:{" "}
       {member.isOlderThan18 ? "Yes" : "No"}
      </Typography>
     </Grid>
    ))}
   </Grid>
  </>
 );
};

export default MembersList;
