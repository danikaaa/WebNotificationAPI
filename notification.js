/**
 * 알림 권한 설정
 * 
 */

window.onload = function () {
    if (window.Notification) {
        Notification.requestPermission();
    }
}

/**
 * 알림
 * 
 */
function notification(){
    if (Notification.permission !== 'granted') {
        alert('알림설정이 되어있지 않습니다.');
    }
    else {
        var notification = new Notification('알림 타이틀', {
            icon: '이미지',
            body: '알림내역',
        });

        notification.onclick = function () {
            window.open('http://google.com'); 
        };
    }
}

