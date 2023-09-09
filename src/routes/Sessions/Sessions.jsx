/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

import { getSessions } from '../../services/db'
import SessionCard from "../../components/SessionCard";

export async function loader() {
  const sessions = await getSessions();
  return sessions;
}

export default function Sessions() {
    const {sessions} = useLoaderData();

    {/* TODO: hacer una paginación o algo parecido ya que hice esa mrda con Math.round pero es muy improbable que funcione 
        asi que lo mas conveniente seria hacer algo como /sessions?from=0?to=6 para que no explote la interfaz suerte uwu */}
              
    console.log(sessions.length)

    return (
      <div className={`p-5 grid sm:grid-cols-3 sm:grid-rows-${sessions.length > 3 ? (Math.round(sessions.length / 3 + 0.5)) : 1} grid-cols-1 grid-rows-2  gap-4`}>
        {sessions.map((session) => {
          return (
            <SessionCard key={session.id} {...session} />
          );
        })}
      </div>
    )
}