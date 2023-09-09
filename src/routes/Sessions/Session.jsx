/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getSession, getThemes} from '../../services/db'
import ThemeCard from "../../components/ThemeCard";

export async function loader ({ params }) {
    const session = await getSession(params.id);
    const themes = await getThemes(params.id)
    return { session, themes };
}

export default function Index() {
    const {session} = useLoaderData();
    const {themes} = useLoaderData();

    console.log(themes)

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{session.name}</span></h1>
            <div className="mx-auto flex mt-[5vh] sm:flex-row flex-col justify-center items-center">
              <p className="sm:text-xl sm:text-left sm:max-w-[40vw] text-center text-sm max-w-[90vw] text-gray-400 sm:mr-[5vw]" data-aos="zoom-y-out" data-aos-delay="150">{session.description}</p>
              <div className={`flex flex-col gap-5 flex-auto max-h-[45vh] sm:overflow-y-auto sm:mt-0 mt-[6vh]`}>
                {themes.map((theme) => {
                  return (
                    <ThemeCard key={theme.id} {...theme} />
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    )
}