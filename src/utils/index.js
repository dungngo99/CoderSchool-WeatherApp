export async function getLocation() {
    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude
            let lon = pos.coords.longitude
            alert(`Latitude: ${lat}; Longitude: ${lon}`)
        }, (err) => {
            if (err.code === 1) {
                alert("Error: Access is denied!");
            } else if (err.code === 2) {
                alert("Error: Position is unavailable!");
            }
        },
            { timeout: 60000 }
        );
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}

export async function sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
}

export function formatTime(miliseconds, isTime = true) {
    let date = new Date(miliseconds * 1000)

    let dayArr = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', "Sat", "Sun"]
    let monthArr = ['Jan', "Feb", "Mar", "Apr", 'May', 'June', "July", 'Aug', "Sep", "Oct", "Nov", "Dec"]

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let dt = date.getDate()
    let months = date.getMonth()
    let day = date.getDay()

    if (isTime) return `${dayArr[day]}, ${dt}th ${monthArr[months]}`
    else return `${hours}:${minutes}`
}

export function chooseTheme() {
    let backgroundImg = [
    'https://i.pinimg.com/564x/f9/e0/75/f9e075853b776da14464ccb20ad51d68.jpg',
    'https://i.pinimg.com/564x/d0/62/5c/d0625cd2d84ae4f8ce2fe328c9c670be.jpg',
    'https://i.pinimg.com/564x/32/30/4d/32304d147128b2409c3e2a88ae4a8e63.jpg',
    'https://i.pinimg.com/564x/5e/5a/2a/5e5a2ac3d481f30c30c9bb26f964bff6.jpg',
    'https://i.pinimg.com/564x/8f/f4/37/8ff4372be4874b4463437d873bcd7351.jpg',
    'https://i.pinimg.com/564x/58/fe/bf/58febf7a3277db4da1497aa213122b5d.jpg',
    'https://i.pinimg.com/564x/c0/95/a9/c095a9f6add5fcf70b9419c92652f26e.jpg',
    'https://i.pinimg.com/564x/28/73/81/287381806c958efcf93e71482a0a1b33.jpg']

    let num = Math.floor(Math.random() * 8)
    // console.log(document.getElementById('dn-side-bar'))
    document.getElementById('dn-side-bar').style.backgroundImage = `url(${backgroundImg[num]})`
}

