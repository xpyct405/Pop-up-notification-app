let btn = document.querySelector('button');
let container = document.querySelector('.container');


btn.addEventListener('click', () => {
    popUpNotification();  
})

function popUpNotification() {
    let notification = document.createElement('div')
    notification.classList.add('notification')

    notification.innerHTML = 'You clicked me'
    container.appendChild(notification)
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}