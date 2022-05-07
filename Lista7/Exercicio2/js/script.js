let id_value = 0;


function populateSite(qualifiedName) {
    const div_container = document.querySelector('#container');
    const div_videos = document.querySelector('#videos')
    data["videos"].forEach(element => {
        let div = document.createElement('div');
        div.setAttribute("id", `card_video_${id_value}`);
        let img = document.createElement('img');
        img.setAttribute("id", `img_${id_value}`);
        img.setAttribute("src", `https://img.youtube.com/vi/${element.youtubeId}/0.jpg`);
        let p = document.createElement('p');
        p.setAttribute("class", "title_video")
        let p_02 = document.createElement('p');
        p_02.setAttribute("class", "author_video");
        let link = document.createElement("a");
        link.setAttribute("href", `https://www.youtube.com/watch?v=${element.youtubeId}`);
        let button = document.createElement('input');
        button.setAttribute("id", `btn_video_${id_value}`);
        button.setAttribute("type", "button");
        button.setAttribute("value", "Assista");
        link.appendChild(button);
        let title = element.title;
        let author = element.author;
        p.appendChild(document.createTextNode(title));
        p_02.appendChild(document.createTextNode(author));
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p_02);
        div.appendChild(link);
        div_videos.appendChild(div);
        div_container.appendChild(div_videos);
        id_value++;
    })
}

window.addEventListener('load', populateSite);
