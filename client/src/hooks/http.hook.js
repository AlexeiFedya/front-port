import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [resTrue, setresTrue] = useState(null)

    console.log('привеееет22')

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        console.log('привеееет')
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            } else (
                setresTrue(`I am grateful for message. I will be in touch soon`)
            )
            console.log(response)

            setLoading(false)

            return data
        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)
    const clearMessage = () => setresTrue(null)

    // const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError, clearMessage, resTrue }
}