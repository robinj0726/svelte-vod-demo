export async function LoadMediaList() {

    // Make the request to the server
    const response = await fetch('/media/list', {
        method: 'GET',
    })
    if (response.status < 200 || response.status >= 400) {
        throw Error('Invalid response status code: ' + response.status)
    }

    // Parse the response as JSON and return it
    const responseData = await response.json()
    if (!responseData) {
        throw Error('Response is empty')
    }

    return responseData
}