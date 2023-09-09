import { create } from "zustand";

const useSessionsStore = create((set,get)=>{
    return {
        sessions: [],
        currentSession: 0,
        currentTheme: 0,
        fetchSessions: async () => {
            const res = await fetch('http://localhost:6790/sessions');
            const json = await res.json()
            const questions = json
            set({questions})
        }
    }
})

export default useSessionsStore