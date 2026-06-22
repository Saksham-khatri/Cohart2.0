const reels = [
  {
    username: "travelwithmaya",
    likeCount: 12843,
    isLiked: false,
    commentCount: 324,
    caption: "Sunrise views from the mountains never get old 🌄",
    video: "./new1/reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 187,
    isFollowed: true,
  },
  {
    username: "fitraj",
    likeCount: 9842,
    isLiked: false,
    commentCount: 156,
    caption: "Quick 15-minute workout you can do at home 💪",
    video: "./new1/reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 92,
    isFollowed: false,
  },
  {
    username: "foodieaisha",
    likeCount: 22561,
    isLiked: true,
    commentCount: 541,
    caption: "Homemade creamy pasta recipe 🍝✨",
    video: "./new1/reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/32.jpg",
    shareCount: 418,
    isFollowed: true,
  },
  {
    username: "techwithsam",
    likeCount: 7432,
    isLiked: false,
    commentCount: 88,
    caption: "Top 5 AI tools every developer should try in 2026 🚀",
    video: "./new1/reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 134,
    isFollowed: false,
  },
  {
    username: "urbanlens",
    likeCount: 16520,
    isLiked: true,
    commentCount: 267,
    caption: "City lights and rainy nights 📸",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/52.jpg",
    shareCount: 203,
    isFollowed: true,
  },
  {
    username: "naturevibes",
    likeCount: 31287,
    isLiked: true,
    commentCount: 719,
    caption: "A peaceful waterfall hidden deep in the forest 🌿💧",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 672,
    isFollowed: true,
  },
  {
    username: "dancebeats",
    likeCount: 18976,
    isLiked: false,
    commentCount: 433,
    caption: "Trying out the latest dance trend 🕺🔥",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/67.jpg",
    shareCount: 290,
    isFollowed: false,
  },
  {
    username: "bookishnina",
    likeCount: 5621,
    isLiked: true,
    commentCount: 74,
    caption: "Current read: a thriller that keeps getting better 📚",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/58.jpg",
    shareCount: 41,
    isFollowed: true,
  },
  {
    username: "streetchef",
    likeCount: 27433,
    isLiked: false,
    commentCount: 618,
    caption: "Best street food spot I've discovered this month 🌮",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/74.jpg",
    shareCount: 512,
    isFollowed: false,
  },
  {
    username: "dailydesign",
    likeCount: 11392,
    isLiked: true,
    commentCount: 201,
    caption: "Minimal UI inspiration for your next project 🎨",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/81.jpg",
    shareCount: 148,
    isFollowed: true,
  },
];
var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''
reels.forEach(function(elem,idx ){
    sum = sum +`<div class="reel">
                <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src=${elem.userprofile} alt="">
                        <h4>${elem.username}</h4>
                        <button class=follow id=${idx}>${elem.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
                    <h3>"${elem.caption}"</h3>
                </div>
                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class=" ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>"${elem.commentCount}"</h6>
                    </div>
                    <div class="share">
                        <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>"${elem.shareCount}"</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>`
});

allReels.innerHTML = sum

}

addData()

allReels.addEventListener('click',function (dets) {

    if(dets.target.className == 'like'){
      if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
      }
      else{
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
      }
    }

    if(dets.target.className == 'follow'){
      if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
      }
      else{
      reels[dets.target.id].isFollowed = false
      }
    }

      addData()
})

