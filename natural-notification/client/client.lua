print('^4Natural [NOTIFICATION] | ^0v 0.0.1 | ^4Started')

function Notification(type, title, message, progress)
    SendNUIMessage({
        ac = 'notification';
        ty = type; 
        ti = title;
        inf = message;
        pr = progress or 4500
    })  
end
