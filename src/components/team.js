import React from 'react';
import TeamMember from './team-member';
import team from '../content/team.json';
import './team.css';

const Team = (props) => (
   <section>
      <h2>Team</h2>
      <div className='teammembers'>
         {
            team.map(member => <TeamMember name={member.name} title={member.title} image={member.image} />)
         }
      </div>
   </section>
)

export default Team;
