//Used to count how many Twitch streeams should be rendered
window.count=0;

//Shows rule over lay when going ot multistream page. Helps with not need to render them next to vidoes/streams
function chatrules(){
    $('.HidePage').show();
    document.getElementById('TabArea').innerHTML=
    `<div class="rulesPage">
        <div class="MembersCenter">
            <div class="Centerfull">    
                <div class="MembersText">
                    <h3 class="TextUnderline MembersText">Chat Rules</h3>
                    </br>
                    <h4 class="MembersText">
                        <ul style="list-style-type:square;">
                            <li>Talk to us, help us have a great stream with you</li>
                            <li>Don't use racist or sexist language</li>
                            <li>Don't bring down the stream</li>
                            <li>No religion or politics in the chat</li>
                            <li>Please have fun</li>
                            <li> </li>
                            <li>Give us a follow if you like what you see!</li>
                        </ul>
                        <br/>
                        <ul class="main-nav">
                            <li class="nav-links" onclick="showMultiStream()"><i class="fas fa-users"></i> OK</li>
                        </ul>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    `
}

//Decides which streams and how many should be set based off of who is live from twitch API
function showMultiStream(){
    $('.HidePage').hide();
    $.ajax({
        type: "POST",
        url: "https://id.twitch.tv/oauth2/token",
        async: false,
        data: {
            'client_id':'oz93uklqqxzw3v2aq41or3850tvpu5',
            'client_secret':'1uxdeji50xlj0ux709izl0o4tavpes',
            'grant_type':'client_credentials'
        },
        success: function (data) {
            $.ajax({
                type: "GET",
                headers: {
                    'Authorization': 'Bearer ' + data.access_token,
                    'Client-ID':'oz93uklqqxzw3v2aq41or3850tvpu5'
                },
                async: false,
                url: "https://api.twitch.tv/helix/streams?user_id=426241930",
                success: function (response) {
                    console.log(response)
                    window.MahershStatus = "Offline"
                    if(response.data[0].type){
                        window.MahershStatus = "Online"
                        window.count=window.count+1
                    }
                }
            })
            $.ajax({
                type: "GET",
                headers: {
                    'Authorization': 'Bearer ' + data.access_token,
                    'Client-ID':'oz93uklqqxzw3v2aq41or3850tvpu5'
                },
                async: false,
                url: "https://api.twitch.tv/helix/streams?user_id=105877980",
                success: function (response) {
                    console.log(response)
                    window.CheckovskyStatus = "Offline"
                    if(response.data[0].type){
                        window.CheckovskyStatus = "Online"
                        window.count=window.count+1
                    } 
                }
            })
            $.ajax({
                type: "GET",
                headers: {
                    'Authorization': 'Bearer ' + data.access_token,
                    'Client-ID':'oz93uklqqxzw3v2aq41or3850tvpu5'
                },
                async: false,
                url: "https://api.twitch.tv/helix/streams?user_id=162793470",
                success: function (response) {
                    console.log(response)
                    window.IrishBeefCakeStatus = "Offline"
                    if(response.data[0].type){
                        window.IrishBeefCakeStatus = "Online"
                        window.count=window.count+1
                    }
                }
            })
            $.ajax({
                type: "GET",
                headers: {
                    'Authorization': 'Bearer ' + data.access_token,
                    'Client-ID':'oz93uklqqxzw3v2aq41or3850tvpu5'
                },
                async: false,
                url: "https://api.twitch.tv/helix/streams?user_id=164541550",
                success: function (response) { 
                    console.log(response)                   
                    window.M1STERXMAYH3MStatus = "Offline"
                    if(response.data[0].type){
                        window.M1STERXMAYH3MStatus = "Online"
                        window.count=window.count+1
                    } 
                }
            })
        }
    })
    console.log(window.MahershStatus)
    console.log(window.CheckovskyStatus)
    console.log(window.M1STERXMAYH3MStatus)
    console.log(window.IrishBeefCakeStatus)
    console.log(window.count)
    if(window.count == 0){
        Offline();
        
    }
    else if(window.count == 1){
        if(window.MahershStatus ==  "Online"){
            MahershOnly();
        }
        else if(window.CheckovskyStatus == "Online"){
            CheckovskyOnly();
        }
        else if(window.IrishBeefCakeStatus == "Online"){
            IrishBeefcakeOnly();
        }
        else if(window.M1STERXMAYH3MStatus == "Online"){
            M1STERXMAYH3MOnly();
        }
        else {
            Offline()
        }
    }
    else if(window.count == 2){
        if(window.CheckovskyStatus == "Online"){
            if(window.MahershStatus == "Online"){
                CheckovskyAndMahersh()
            }
            else if(window.IrishBeefCakeStatus == "Online"){
                CheckovskyAndIrishBeefcake()
            }
            else if(window.M1STERXMAYH3MStatus == "Online"){
                CheckovskyAndM1STERXMAYH3M()
            }
        }
        else if(window.MahershStatus == "Online"){
            if(window.IrishBeefCakeStatus == "Online"){
                MahershAndIrishBeefcake()
            }
            else if(window.M1STERXMAYH3MStatus == "Online"){
                MahershAndM1STERXMAYH3M()
            }
        }
        else if (window.IrishBeefCakeStatus == "Online"){
            if(window.M1STERXMAYH3MStatus == "Online"){
                IrishBeefCakeAndM1STERXMAYH3M()
            }
        } else {
            Offline()
        }
    }
    else if(window.count == 3){
        if(window.CheckovskyStatus == "Online"){
            if(window.MahershStatus == "Online" && window.IrishBeefCakeStatus == "Online"){
                CheckovskyAndMahershAndIrishBeefcake()
            }
            else if(window.IrishBeefCakeStatus == "Online" && window.M1STERXMAYH3MStatus == "Online"){
                CheckovskyAndIrishBeefCakeAndM1STERXMAYH3M()
            }
            else if(window.M1STERXMAYH3MStatus == "Online" && window.MahershStatus == "Online"){
                CheckovskyAndM1STERXMAYH3MAndMahersh()
            }
        }
        else if(window.MahershStatus == "Online"){
            if(window.IrishBeefCakeStatus == "Online" && window.M1STERXMAYH3MStatus == "Online"){
                MahershAndIrishBeefcakeAndM1STERXMAYH3M()
            }
        } else {
            Offline()
        }
    }
    else if(window.count == 4){
        everyone()
    }
}

//Sets up for Mahersh
function MahershOnly(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML=
    `
    <iframe
        class="VideoFullLeft"
        src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
        height="90%"
        width="100%"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true">
    </iframe>
    <iframe 
        class="ChatFullLeft"
        frameborder="0"
        id="chat_embed"
        src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
        height="90%"
        width="100%">
    </iframe>
    `
}

//Sets up for Chekcovsky
function CheckovskyOnly(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML=
    `
    <iframe
        class="VideoFullLeft"
        src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
        height="90%"
        width="100%"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true">
    </iframe>
    <iframe 
        class="ChatFullLeft"
        frameborder="0"
        id="chat_embed"
        src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
        height="90%"
        width="100%">
    </iframe>
    `
}

//Sets up for Axel
function IrishBeefcakeOnly(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML=
    `
    <iframe
        class="VideoFullLeft"
        src="https://player.twitch.tv/?channel=IrishBeefcake&parent=thechaoskings.com"
        height="90%"
        width="100%"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true">
    </iframe>
    <iframe 
        class="ChatFullLeft"
        frameborder="0"
        id="chat_embed"
        src="https://www.twitch.tv/embed/IrishBeefcake/chat?parent=thechaoskings.com"
        height="90%"
        width="100%">
    </iframe>
    `
}

//Sets up for Mayh3m Only
function M1STERXMAYH3MOnly(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML=
    `
    <iframe
        class="VideoFullLeft"
        src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
        height="90%"
        width="100%"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true">
    </iframe>
    <iframe 
        class="ChatFullLeft"
        frameborder="0"
        id="chat_embed"
        src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
        height="90%"
        width="100%">
    </iframe>
    `
}

//Sets up for Checkovsky and Mahersh//
function CheckovskyAndMahersh(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true"
            >
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
            height="50%"
            width="100%"
            >
        </iframe>
    </div>
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true">
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
            height="50%"
            width="100%">
        </iframe>
    </div>
    `
}

//Sets up for Checkovsky and Axel
function CheckovskyAndIrishBeefcake(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true"
            >
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
            height="50%"
            width="100%"
            >
        </iframe>
    </div>
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true">
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
            height="50%"
            width="100%">
        </iframe>
    </div>
    `
}

//Sets up for Checkovsky and Mayh3m
function CheckovskyAndM1STERXMAYH3M(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
       <div>
             <iframe
                 class="VideoFullLeft"
                 src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
                 height="50%"
                  width="100%"
                 frameborder="0"
                 scrolling="true"
                 allowfullscreen="true"
                 >
             </iframe>
             <iframe 
                 class="ChatFullLeft"
                 frameborder="0"
                 id="chat_embed"
                 src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
                 height="50%"
                 width="100%"
                 >
             </iframe>
         </div>
         <div>
             <iframe
                 class="VideoFullLeft"
                 src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                 height="50%"
                 width="100%"
                 frameborder="0"
                 scrolling="true"
                 allowfullscreen="true">
             </iframe>
             <iframe 
                 class="ChatFullLeft"
                 frameborder="0"
                 id="chat_embed"
                 src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                 height="50%"
                 width="100%">
             </iframe>
         </div>
    `
}

//Sets up for Mahersh and Mayh3m
function MahershAndM1STERXMAYH3M(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
       <div>
             <iframe
                 class="VideoFullLeft"
                 src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
                 height="50%"
                  width="100%"
                 frameborder="0"
                 scrolling="true"
                 allowfullscreen="true"
                 >
             </iframe>
             <iframe 
                 class="ChatFullLeft"
                 frameborder="0"
                 id="chat_embed"
                 src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
                 height="50%"
                 width="100%"
                 >
             </iframe>
         </div>
         <div>
             <iframe
                 class="VideoFullLeft"
                 src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                 height="50%"
                 width="100%"
                 frameborder="0"
                 scrolling="true"
                 allowfullscreen="true">
             </iframe>
             <iframe 
                 class="ChatFullLeft"
                 frameborder="0"
                 id="chat_embed"
                 src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                 height="50%"
                 width="100%">
             </iframe>
         </div>
    `
}

//Sets up for Mahers and Beefcake
function MahershAndIrishBeefcake(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true"
            >
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
            height="50%"
            width="100%"
            >
        </iframe>
    </div>
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true">
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
            height="50%"
            width="100%">
        </iframe>
    </div>
    `
}

//Sets up for Axel and Mayh3m
function IrishBeefCakeAndM1STERXMAYH3M(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true"
            >
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
            height="50%"
            width="100%"
            >
        </iframe>
    </div>
    <div>
        <iframe
            class="VideoFullLeft"
            src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
            height="50%"
            width="100%"
            frameborder="0"
            scrolling="true"
            allowfullscreen="true">
        </iframe>
        <iframe 
            class="ChatFullLeft"
            frameborder="0"
            id="chat_embed"
            src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
            height="50%"
            width="100%">
        </iframe>
    </div>
    `
}

//Sets up for Axel, Checkovsky, Mahersh
function CheckovskyAndMahershAndIrishBeefcake(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true"
                >
            </iframe>
            <iframe 
                class="ChatLeft"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
                height="45%"
                width="100%"
                >
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>
    <div class="VideoWithRules">
        <div class="PercentLeft MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        
        <div class="PercentRight MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        <div class="CenterVideo">
            <iframe
                class="Video"
                src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
                height="45%"
                width="708"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="Chat"    
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
                height="45%"
                width="200">
            </iframe>
        </div>
    </div>
    ` 
}

//Sets up for Axel, Checkovsky, Mayh3m
function CheckovskyAndIrishBeefCakeAndM1STERXMAYH3M(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true"
                >
            </iframe>
            <iframe 
                class="ChatLeft"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
                height="45%"
                width="100%"
                >
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>
    <div class="VideoWithRules">
        <div class="PercentLeft MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        
        <div class="PercentRight MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        <div class="CenterVideo">
            <iframe
                class="Video"
                src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                height="45%"
                width="700"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="Chat"    
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                height="45%"
                width="200">
            </iframe>
        </div>
    </div>
    ` 
}

//Sets up for Mahersh, Axel and Mayh3m
function MahershAndIrishBeefcakeAndM1STERXMAYH3M(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true"
                >
            </iframe>
            <iframe 
                class="ChatLeft"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
                height="45%"
                width="100%"
                >
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=IrishBeefCake&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/IrishBeefCake/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>
    <div class="VideoWithRules">
        <div class="PercentLeft MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        
        <div class="PercentRight MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        <div class="CenterVideo">
            <iframe
                class="Video"
                src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                height="45%"
                width="708"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="Chat"    
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                height="45%"
                width="200">
            </iframe>
        </div>
    </div>
    ` 
}

//Sets up for Checkovsky, Mayh3m, and Mahersh
function CheckovskyAndM1STERXMAYH3MAndMahersh(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML +=
    `
    <div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true"
                >
            </iframe>
            <iframe 
                class="ChatLeft"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
                height="45%"
                width="100%"
                >
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>
    <div class="VideoWithRules">
        <div class="PercentLeft MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        
        <div class="PercentRight MembersText">
            <h3 class="TextUnderline MembersText">Chat Rules</h3>
            </br>
            <h4 class="MembersText">
                <ul style="list-style-type:square;">
                    <li>Talk to us, help us have a great stream with you</li>
                    <li>Don't use racist or sexist language</li>
                    <li>Don't bring down the stream</li>
                    <li>No religion or politics in the chat</li>
                    <li>Please have fun</li>
                </ul>
            </h4>
        </div>
        <div class="CenterVideo">
            <iframe
                class="Video"
                src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                height="45%"
                width="708"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="Chat"    
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                height="45%"
                width="200">
            </iframe>
        </div>
    </div>
    ` 
}

//Sets up for 4 streams (Axel, Mayh3m, Checkovsky, Mahers)
function everyone(){
    document.getElementById("TabArea").innerHTML = "";
    document.getElementById('multistreamArea').innerHTML=
    `<div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=checkovskylp&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true"
                >
            </iframe>
            <iframe 
                class="ChatLeft"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/checkovskylp/chat?parent=thechaoskings.com"
                height="45%"
                width="100%"
                >
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=mahersh117&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/mahersh117/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>
    <div class="MultiStreamTwoPerRow">
        <div class="Left">
            <iframe
                class="VideoLeft"
                src="https://player.twitch.tv/?channel=M1STERXMAYH3M&parent=thechaoskings.com"
                height="45%"
                width="708"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatLeft"    
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
        <div class="Right">
            <iframe
                class="VideoRight"
                src="https://player.twitch.tv/?channel=IrishBeefcake&parent=thechaoskings.com"
                height="45%"
                width="100%"
                frameborder="0"
                scrolling="true"
                allowfullscreen="true">
            </iframe>
            <iframe 
                class="ChatRight"
                frameborder="0"
                id="chat_embed"
                src="https://www.twitch.tv/embed/IrishBeefcake/chat?parent=thechaoskings.com"
                height="45%"
                width="100%">
            </iframe>
        </div>
    </div>`
}

//Renders Members info if no one is live.
function Offline(){
    document.getElementById("TabArea").innerHTML =
        `
        <div class="membersMultistreamPage">
        <h1 class="MembersText" style="text-align: center;">No one is currently online right now. Please use the twitch links below to follow us and get notifications when we are online.</h1>
        <div class="MembersCenter">
        <div class="LeftColumn">
            <div onmouseover="MahershBio()">
                <div id="Mahersh117" class="LeftAlign"><p id="Mahersh117Text" class="MembersText TextUnderline">Mahersh117</p></div>
            </div></br>​</br></br>
            <div onmouseover="M1STERXMAYH3MBio()">
                <div id="M1STERXMAYH3M" class="LeftAlignNoPad"><p id="M1STERXMAYH3MText" class="MembersText">M1STERXMAYH3M</p></div>
            </div></br>​</br></br>
            <div onmouseover="ShaddowSparrowBio()">
                <div id="ShaddowSparrow" class="LeftAlignNoPad"><p id="ShaddowSparrowText" class="MembersText">ShaddowSparrow</p></div>
            </div></br>​</br></br>
            <div onmouseover="CheckovskyBio()">
                <div id="Checkovsky" class="LeftAlignNoPad"><p id="CheckovskyText" class="MembersText">Checkovsky</p></div>
            </div></br>​</br></br>
            <div onmouseover="IrishBeefCakeBio()">
                <div id="IrishBeefCake" class="LeftAlignNoPad"><p id="IrishBeefCakeText" class="MembersText">IrishBeefCake</p></div>
            </div></br>​</br></br>
        </div>
        <div class="RightColumn">
            <div id="MahershBio" class="MahershBio MembersText RightAlign Bio">
                <ul style="list-style-type:square;">
                    <li><h3>Master at Arms:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Whether it’s through his scope, or boarding an enemy boat, he always gets his mark, and has your back</h4></li>
                        </ul>
                    </li>
                    <li><h3>Second Helmsman:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Only handles the Helm when Checkovsky says it’s ok</h4></li>
                        </ul>
                    </li>
                    <li><h3>Distractor Extraordinaire:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>If he’s not falling off the boat, he’s doing laps around the boat, or spotting other things to do than the current mission</h4></li>
                        </ul>
                    </li>
                </ul>
                </br>
                <div style="font-size: small;">
                    <a href="mailto:mahersh117@gmail.com" target="_top" class="nav-links"><i class="fas fa-envelope"></i> Email</a>
                    <a href="https://www.twitch.tv/mahersh117" class="nav-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/id/mahersh117" class="nav-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <a href="https://twitter.com/mahersh117" class="nav-links"><i class="fab fa-twitter-square"></i> Twitter</a>
                </div>
                </br></br>
            </div>
            <div id="M1STERXMAYH3MBio" class="M1STERXMAYH3MBio MembersText RightAlign Bio" style="display: none;">
                <ul style="list-style-type:square;">
                    <li><h3>Lore Keeper:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>A constant source of lore about the Sea of Thieves.  If he isn’t spotting something new, he’s looking at the drawings left by the Ancient Ones</h4></li>
                        </ul>
                    </li>
                    <!-- <li><h3>Second Helmsman:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Only handles the Helm when Checkovsky says it’s ok</h4></li>
                        </ul>
                    </li> -->
                    <li><h3>Drunken Fashionista:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>First and Last to the Grog, while inebriated he will be changing his clothes
                            </h4></li>
                        </ul>
                    </li>
                </ul>
                </br>
                <div style="font-size: small;">
                    <!-- <a href="mailto:mahersh117@gmail.com" target="_top" class="nav-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <a href="https://www.twitch.tv/M1STERXMAYH3M" class="nav-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/profiles/76561198202631337" class="nav-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <!-- <a href="https://twitter.com/mahersh117" class="nav-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
                </div>
                </br></br>
            </div>
            <div id="CheckovskyBio" class="CheckovskyBio MembersText RightAlign Bio" style="display: none;">
                <ul style="list-style-type:square;">
                    <li><h3>Master Helmsman:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Trusts only his hands to maneuver the boat correctly.  Will stare at you until you relinquish his wheel</h4></li>
                        </ul>
                    </li>
                    <li><h3>Local Bard:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Wears ladies clothing because he wants to look like a bard.</h4></li>
                        </ul>
                    </li>
                    <li><h3>Obsessed with his wiener:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Upon meeting him, he will ask you to ask him “About His Wiener”</h4></li>
                        </ul>
                    </li>
                </ul>
                </br>
                <div style="font-size: small;">
                    <a href="mailto:checkovskylp@gmail.com" target="_top" class="nav-links"><i class="fas fa-envelope"></i> Email</a>
                    <a href="https://www.twitch.tv/checkovskylp" class="nav-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/id/checkovsky" class="nav-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <a href="https://twitter.com/checkovskylp" class="nav-links"><i class="fab fa-twitter-square"></i> Twitter</a>
                </div>
                </br></br>
            </div>
            <div id="ShaddowSparrowBio" class="ShaddowSparrowBio MembersText RightAlign Bio" style="display: none;">
                <ul style="list-style-type:square;">
                    <li><h3>Master Navigator:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Always cognisant of where we need to be going and that we are staying on course.  She’s a wind whisperer, positions the sails perfectly every time, 75% of the time</h4></li>
                        </ul>
                    </li>
                    <!-- <li><h3>Second Helmsman:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Only handles the Helm when Checkovsky says it’s ok</h4></li>
                        </ul>
                    </li> -->
                    <li><h3>Steel Sharing:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>If she has it, she will ask you taste it.</h4></li>
                        </ul>
                    </li>
                </ul>
                </br>
                <div style="font-size: small;">
                    <!-- <a href="mailto:checkovskylp@gmail.com" target="_top" class="nav-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <!-- <a href="https://www.twitch.tv/checkovskylp" class="nav-links"><i class="fab fa-twitch"></i> Twitch.Tv</a> -->
                    <!-- <a href="https://steamcommunity.com/profiles/76561198843276373" class="nav-links"><i class="fab fa-steam-symbol"></i> Steam</a> -->
                    <!-- <a href="https://twitter.com/checkovskylp" class="nav-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
                </div>
                </br></br>
                </div>
            <div id="IrishBeefCakeBio" class="IrishBeefCakeBio MembersText RightAlign Bio" style="display: none;">
                <ul style="list-style-type:square;">
                    <li><h3>Master Shipwright:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Very Vigilant of the state of the boat. Very quick to make repairs when needed.</h4></li>
                        </ul>
                    </li>
                    <!-- <li><h3>Second Helmsman:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>Only handles the Helm when Checkovsky says it’s ok</h4></li>
                        </ul>
                    </li> -->
                    <li><h3>Master of Cute Vulgarity:</h3>
                        <ul>
                            <li class="PaddingLeft"><h4>She will call you a “whore”, and you will say “awwwwwwww” because she said it with a smile.</h4></li>
                        </ul>
                    </li>
                </ul>
                </br>
                <div style="font-size: small;">
                    <!-- <a href="mailto:checkovskylp@gmail.com" target="_top" class="nav-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <a href="https://www.twitch.tv/irishbeefcake" class="nav-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/profiles/76561198412950319" class="nav-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <!-- <a href="https://twitter.com/checkovskylp" class="nav-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
                </div>
                </br></br>
                </div>
                </div>
        </div>
    </div>
        `
}