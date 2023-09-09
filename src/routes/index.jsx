import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Index() {

    return (
      <div className="max-w-6xl mx-auto px-4 sm:items-center">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Coding Sessions</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Choose your coding adventure and sharpen your skills!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Button as={Link} to="/sessions">Go to Sessions</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}