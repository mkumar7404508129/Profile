
var jsonFile = {
    "all": {
        'website': {
            "Webchat": { "img": "/image/portfolio/website/webchat.png", "description": "Simple Webchat app" },
            "Labrary": { "img": "/image/portfolio/website/labrary.png", "description": "Simple Labrary Project" },
            "Contest": { "img": "/image/portfolio/website/intern.png", "description": "Contest Website" },
            "TET": { "img": "/image/portfolio/website/tet.png", "description": "Teacher Aligibility Test" },
            "Service": { "img": "/image/portfolio/website/service.png", "description": "Service Center" }

        },
        'c++': {
            "Employ": { "img": "/image/portfolio/c++/employ.png", "description": "Employ Management" }

        },
        'nodeJs': {
            "Storage": { "img": "/image/portfolio/nodeJs/storage.png", "description": "Storage System Demo" }

        },
        // 'python': {
        //     "webchat": { "img": "/image/portfolio/python/hi.png", "description": "python" },
        //     "labrary": { "img": "/image/portfolio/python/hi.png", "description": "python" }
        // },
        'android': {
            "Contact": { "img": "/image/portfolio/android/contectapp.jpg", "description": "Simple contect App" },
            "GoogleMap": { "img": "/image/portfolio/android/googlemap.jpg", "description": "Google Map Demo" }
        },
        // 'ardino': {
        //     "webchat": { "img": "/image/portfolio/ardino/hi.png", "description": "ardino" },
        //     "labrary": { "img": "/image/portfolio/ardino/hi.png", "description": "ardino" }
        // },
    }
}

var imgFor = {};
portfolio = (name) => {
    var data = document.getElementById("img");
    var elem = "";
    imgFor = {};
    if (name == 'all') {

        for (var key in jsonFile.all) {

            elem += common(key, jsonFile.all)
        }
    }
    else {
        elem = common(name, jsonFile.all)
    }
    data.innerHTML = elem;
    for (key in imgFor) {
        document.getElementById(key).style.backgroundImage = 'url(' + imgFor[key] + ')';
    }

}

common = (key, jsonFile) => {

    var elem = "";
    for (var value in jsonFile[key]) {
        elem += '<a  onclick="portImgOnClick(\'' + key+ '\',\'' + value + '\')" href="#"><div class="imgText"><div class="text">' + value + '</div><img id=' + key + value + ' alt=""><div class="titleText">' + jsonFile[key][value]['description'] + '</div></div></a>';
        imgFor[key + value] = jsonFile[key][value]['img'];
    }
    return elem;
}
