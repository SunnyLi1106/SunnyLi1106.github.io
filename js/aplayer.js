const ap = new APlayer({
    container: document.getElementById('aplayer'),
	volume: 0.2,
    fixed: true,
	autoplay: false,
    audio: [
    {
        name: 'Sunburst',
        artist: 'Tobu / Itro',
        url: 'http://music.163.com/song/media/outer/url?id=28830411.mp3',
        cover: 'http://p2.music.126.net/AWDnHZIVbGI-PSo248vm8Q==/109951167481013649.jpg',
    }, 
    {
        name: 'Infectious',
        artist: 'Tobu',
        url: 'http://music.163.com/song/media/outer/url?id=28830409.mp3',
        cover: 'http://p2.music.126.net/xQeIwDrMh_UeMwhZ-CrzVQ==/109951165358935018.jpg',
    }, 
    {
        name: 'By My Side',
        artist: 'Synthion / Yuuna Nini',
        url: 'http://music.163.com/song/media/outer/url?id=2014406819.mp3',
        cover: 'http://p1.music.126.net/-8YI4jH9WC4BjUCAQ_8T1g==/109951168233398874.jpg',
    }, 
    {
        name: 'Maboroshi',
        artist: 'Synthion / Hyper Potions / MYLK',
        url: 'http://music.163.com/song/media/outer/url?id=1354965157.mp3',
        cover: 'http://p1.music.126.net/hvc3dltT_yXPJGQBXU361Q==/109951165397851146.jpg',
    }, 
	]
});