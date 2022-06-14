function removeBSHandler() {
  const element = document.querySelector("div.scaffold-finite-scroll");
  console.log(element);
  let posts = element.querySelectorAll('.feed-shared-update-v2__commentary');
  let announcements =  element.querySelectorAll('.feed-shared-announcement');  
  let mentionedNews = element.querySelectorAll('.feed-shared-article--with-large-image', '.feed-shared-article--with-small-image');

  let importantKeyWords = ['Hiring', 'Looking', 'Microsoft'];
  posts.forEach((post) => {
    const important = importantKeyWords.some((keyword) =>
      post.innerText.includes(keyword)
    );
    if (!important) {
      let temp = 0;
      while (!post.classList.contains("feed-shared-update-v2") && temp < 20) {
        post = post.parentElement;
        temp++;
      }
      post.remove();
    }
  });
  announcements.forEach((announcement) => {        
      let temp = 0;
      while (!announcement.classList.contains("feed-shared-update-v2") && temp < 20) {
        announcement = announcement.parentElement;
        temp++;
      }
      announcement.remove();    
  });   
  
  mentionedNews.forEach((news) => {        
    let temp = 0;
    while (!news.classList.contains("feed-shared-update-v2") && temp < 20) {
        news = news.parentElement;
      temp++;
    }    
    news.remove();    
});   
}

setInterval(() => {
  removeBSHandler();
}, 2000);


