const server = 'http://localhost:3000/'

function getAPIUserData(uri){
    return fetch(server + uri)
        .then(response => response.json())
        .then(response => response.data)
}

function getAPIUserDataMain(userId){
    return getAPIUserData('user/' + userId)
}

function getAPIUserDataActivity(userId){
    return getAPIUserData('user/' + userId + '/activity')
}

function getAPIUserDataAverage(userId){
    return getAPIUserData('user/' + userId + '/average-sessions')
}

function getAPIUserDataPerformance(userId){
    return getAPIUserData('user/' + userId + '/performance')
}

export {getAPIUserDataMain, getAPIUserDataActivity, getAPIUserDataAverage, getAPIUserDataPerformance}