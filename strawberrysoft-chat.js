let css = `.card-title,button,input,optgroup,select,textarea{font-family:Roboto,sans-serif;font-weight:300}.card-bordered{border:1px solid #ebebeb}.card{border:0;border-radius:0;margin-bottom:30px;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.03);box-shadow:0 2px 3px rgba(0,0,0,.03);-webkit-transition:.5s;transition:.5s}.padding{padding:3rem!important}body{background-color:#f9f9fa}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:15px 20px;background-color:transparent;border-bottom:1px solid rgba(77,82,89,.07)}.card-header .card-title{padding:0;border:none}h4.card-title{font-size:17px}.card-header>:last-child{margin-right:0}.card-header>*{margin-left:8px;margin-right:8px}.btn-secondary{color:#4d5259!important;background-color:#e4e7ea;border-color:#e4e7ea}.avatar,.media-chat .media-body p{background-color:#f5f6f7;position:relative}.btn-xs{font-size:11px;padding:2px 8px;line-height:18px}.btn-xs:hover{color:#fff!important}.card-title{line-height:1.5;margin-bottom:0;padding:15px 20px;border-bottom:1px solid rgba(77,82,89,.07)}.ps-container{position:relative;-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}.media .avatar{flex-shrink:0}.avatar{display:inline-block;width:36px;height:36px;line-height:36px;text-align:center;border-radius:100%;color:#8b95a5;text-transform:uppercase}.media-chat .media-body{-webkit-box-flex:initial;flex:initial;display:table}.media-body{min-width:0}.media-chat .media-body p{font-weight:100;color:#9b9b9b;padding:6px 8px;margin:4px 0;border-radius:3px}.media>*,.publisher>*{margin:0 8px}.media-chat .media-body p.meta{background-color:transparent!important;padding:0;opacity:.8}.media-meta-day{-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;margin-bottom:0;color:#8b95a5;opacity:.8;font-weight:400}.media-meta-day::before{margin-right:16px}.media-meta-day::after,.media-meta-day::before{content:'';-webkit-box-flex:1;flex:1 1;border-top:1px solid #ebebeb}.media-meta-day::after{margin-left:16px}.media-chat.media-chat-reverse{padding-right:12px;padding-left:64px;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.media-chat{padding-right:64px;margin-bottom:0}.media{padding:16px 12px;-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.media-chat.media-chat-reverse .media-body p{float:right;clear:right;background-color:#48b0f7;color:#fff}.border-light{border-color:#f1f2f3!important}.bt-1{border-top:1px solid #ebebeb!important}.publisher{position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:12px 20px;background-color:#f9fafb}.publisher-btn,.publisher-input{background-color:transparent;border:none}.publisher>:first-child{margin-left:0}.publisher-input{-webkit-box-flex:1;flex-grow:1;outline:0!important}.publisher-btn{overflow:-moz-hidden-unscrollable}.file-group{position:relative;overflow:hidden}.publisher-btn{color:#cac7c7;font-size:16px;cursor:pointer;overflow:-moz-hidden-unscrollable;-webkit-transition:.2s linear;transition:.2s linear}.file-group input[type=file]{position:absolute;opacity:0;z-index:-1;width:20px}.text-info{color:#48b0f7!important}` 


document.getElementsByTagName("body")[0].innerHTML = `
<style>${css}</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" crossorigin="anonymous">
<div id="chat-container">
<div style="position:absolute;left: 75vw;top:40vh;">
    <div class="card card-bordered">
        <div class="card-header">
            <h4 class="card-title"><strong>Chat</strong></h4>
            <!-- <a class="btn btn-xs btn-secondary" href="#" data-abc="true">Let's Chat App</a> -->
        </div>
        <div class="ps-container ps-theme-default ps-active-y" id="chat-content"
            style="overflow-y: scroll !important; height:400px !important;">
            <div class="media media-chat">
                <img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="...">
                <div class="media-body">
                    <p>Hi</p>
                    <p>How are you ...???</p>
                    <p>What are you doing tomorrow?<br> Can we come up a bar?</p>
                    <p class="meta"><time datetime="2018">23:58</time></p>
                </div>
            </div>

            <div class="media media-meta-day">Today</div>

            <div class="media media-chat media-chat-reverse">
                <div class="media-body">
                    <p>Hiii, I'm good.</p>
                    <p>How are you doing?</p>
                    <p>Long time no see! Tomorrow office. will be free on sunday.</p>
                    <p class="meta"><time datetime="2018">00:06</time></p>
                </div>
            </div>

            <div class="media media-chat">
                <img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="...">
                <div class="media-body">
                    <p>Okay</p>
                    <p>We will go on sunday? </p>
                    <p class="meta"><time datetime="2018">00:07</time></p>
                </div>
            </div>

            <div class="media media-chat media-chat-reverse">
                <div class="media-body">
                    <p>That's awesome!</p>
                    <p>I will meet you Sandon Square sharp at 10 AM</p>
                    <p>Is that okay?</p>
                    <p class="meta"><time datetime="2018">00:09</time></p>
                </div>
            </div>

            <div class="media media-chat">
                <img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="...">
                <div class="media-body">
                    <p>Okay i will meet you on Sandon Square </p>
                    <p class="meta"><time datetime="2018">00:10</time></p>
                </div>
            </div>

            <div class="media media-chat media-chat-reverse">
                <div class="media-body">
                    <p>Do you have pictures of Matley Marriage?</p>
                    <p class="meta"><time datetime="2018">00:10</time></p>
                </div>
            </div>

            <div class="media media-chat">
                <img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="...">
                <div class="media-body">
                    <p>Sorry I don't have. i changed my phone.</p>
                    <p class="meta"><time datetime="2018">00:12</time></p>
                </div>
            </div>

            <div class="media media-chat media-chat-reverse">
                <div class="media-body">
                    <p>Okay then see you on sunday!!</p>
                    <p class="meta"><time datetime="2018">00:12</time></p>
                </div>
            </div>

            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps-scrollbar-y-rail" style="top: 0px; height: 0px; right: 2px;">
                <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 2px;"></div>
            </div>
        </div>

        <div class="publisher bt-1 border-light">
            <img class="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png"
                alt="...">
            <input class="publisher-input" type="text" placeholder="Write something">
            <span class="publisher-btn file-group">
                <i class="fa fa-paperclip file-browser"></i>
                <input placeholder="he" type="file">
            </span>
            <a class="publisher-btn" href="#" data-abc="true"><i class="fa fa-smile"></i></a>
            <a class="publisher-btn text-info" href="#" data-abc="true"><i class="fa fa-paper-plane"></i></a>
        </div>
    </div>

</div>
</div>
<button  id="chat-btn"></button>`


class ChatBot {
    constructor(custom) {
        this.hide = true;
        this.chatContainer = document.getElementById("chat-container");
        this.chatBtn = document.getElementById("chat-btn");
        this.custom = custom;
        this.chatContainer.style.display = "none";``

    }
    start() {
        console.log(this.chatContainer)
        this.chatBtn.setAttribute('class', 'btn btn-primary');
        this.chatBtn.style.position = "absolute";
        this.chatBtn.style.left = "85vw"
        this.chatBtn.style.top = "90vh"
        this.chatBtn.style.padding = "20px 60px"
        this.chatBtn.innerHTML = `<i class="fas fa-comment"></i> ${this.custom.text}`
        this.chatContainer.style.opacity = 0;
        let element = this.chatContainer
        this.chatBtn.addEventListener("click", function () {
            this.hide = !this.hide;
            
            if (!this.hide) {
               
                   let opacity = 0;
                console.log(this.chatContainer)
                element.style.display = "block";
                const fadeEffect = setInterval(function () {
                    if (opacity < 1) {
                        opacity += 0.1;
                        element.style.opacity = opacity;
                    } else {
                        clearInterval(fadeEffect);
                    }
                }, 20);

            } else {
                let opacity = 1;
        const fadeEffect = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                element.style.display = "none";
                clearInterval(fadeEffect);
            }
        }, 20);
            }
        });
    }

   
}