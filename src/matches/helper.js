import React from 'react';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';
import {MS_PER_DAY, RESULT_CODES} from './constants';

export function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

export function getMatchResultFromCode(resultCode, teamACode, teamBCode) {

  switch (resultCode) {
    case RESULT_CODES.TeamAWins:
      return <span className="d-flex justify-content-center text-success">
        {TEAM_CODE_TO_TEAM[teamACode] + ' Won'}
      </span>;
    case RESULT_CODES.TeamBWins:
      return <span className="d-flex justify-content-center text-success">
        {TEAM_CODE_TO_TEAM[teamBCode] + ' Won'}
        </span>;
    case RESULT_CODES.NoResult:
      return <span className="d-flex justify-content-center text-warning">
        {'Match Abandoned'}
        </span>;
    case RESULT_CODES.Tie:
      return <span className="d-flex justify-content-center text-primary">
        {'Match Drawn'}
        </span>;
    default:
      return <span className="d-flex justify-content-center text-danger">
        {'unknown'}
        </span>;
  }
}
