const videosList =[
    {
        video:"https://cdn.pixabay.com/vimeo/459186589/helicopter-49329.mp4?width=640&hash=06b3c0b7a2e19e8edf2a979a6fcc3f57000df137",
        title:"3D halicopter animation"
    },
    {
        video:"https://player.vimeo.com/progressive_redirect/playback/811839511/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=84795a535d19a9524464c6110fd650e6715096c1bd46a22945ac7e5a655aa5a0",
        title:"emoji animation"
    },
    {
        video:"https://player.vimeo.com/external/653302467.sd.mp4?s=510fa7ef0382d2a94df1d9c9f978cf72e01c1fdf&profile_id=164&oauth_token_id=57447761",
        title:"cristmas animation"
    },
    {
        video:"https://player.vimeo.com/progressive_redirect/playback/839521312/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=30a7a284d8a250b1e3e4f93692bf7f05fd4ec4a0256316a15ea7407c525cba28",
        title:"walking animation"
    },
    {
        video:"https://cdn.pixabay.com/vimeo/552602288/room-74450.mp4?width=640&hash=339a7980afe32f446ef45a0214ee42467706b2d9",
        title:"home animation"
    },
    {
        video:"https://player.vimeo.com/progressive_redirect/playback/839216793/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=f07f4b32c6d07fb34715e4a33f49fee09f2d2b74ac5cb1855ccc7751a5c3a0ba",
        title:"dance animation"
    },
    {
        video:"https://cdn.pixabay.com/vimeo/608445873/green-88883.mp4?width=640&hash=71927a16d6e4bc8fec0d81ebf7f17e7dfd36546d",
        title:"door animation"
    },
    {
        video:"https://cdn.pixabay.com/vimeo/586228759/anime-84574.mp4?width=640&hash=27501b47f748e486ebf577c2fceeb2e60b8eaeed",
        title:"butterfly animation"
    },
]

const categories = [...new Set(videosList.map((item) => {
    return item;
}))]
document.getElementById("videosList").innerHTML = categories.map((item)=>{
    var {video , title} = item;
    return (
       ` <div class="list active">
            <video src=${video} class="list-video" ></video>
            <h3 class="list-title">${title}</h3>
        </div>`
    )
}).join("")
let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});