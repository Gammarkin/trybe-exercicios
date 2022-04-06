import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import missions from '../data/missions';
import Title from './Title';
import MissionsCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission) => (
            <MissionsCard
              key={ uuidv4() }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
