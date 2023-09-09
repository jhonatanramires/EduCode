export const getSessions = async () => {
    const res = await fetch('/sessions.json');
    const sessions = res.json();
    return sessions
}
export const getSession = async (id) => {
    const res = await fetch('/sessions.json');
    const json = await res.json();
    const { sessions } = json
    return sessions[id]
}

export const getThemes = async (sessionId) => {
    const res = await fetch(`/themes_${sessionId}.json`);
    const json = await res.json();
    const { themes } = json
    return themes
}