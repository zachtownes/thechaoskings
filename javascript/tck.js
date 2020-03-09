let mainNav = document.getElementById('navbar');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
})

function onLoad(){
    console.log(window.location.href)
    if(window.location.href == "https://thechaoskings.com/test/"){
        showRules();
    }
    else{
        $('.HidePage').hide()
    }
    
}

// function ShowMultiStream(){
//     $('.HidePage').show()
//     document.getElementById('TabArea').innerHTML=
//     `<div class="frontPage">
//     <div class="MultiStreamTwoPerRow">
//         <div class="Left">
//             <iframe
//                 class="VideoLeft"
//                 src="https://player.twitch.tv/?channel=checkovskylp"
//                 height="400"
//                 width="100%"
//                 frameborder="0"
//                 scrolling="true"
//                 allowfullscreen="true"
//                 >
//             </iframe>
//             <iframe 
//                 class="ChatLeft"
//                 frameborder="0"
//                 id="chat_embed"
//                 src="https://www.twitch.tv/embed/checkovskylp/chat"
//                 height="400"
//                 width="100%"
//                 >
//             </iframe>
//         </div>
//         <div class="Right">
//             <iframe
//                 class="VideoRight"
//                 src="https://player.twitch.tv/?channel=mahersh117"
//                 height="400"
//                 width="100%"
//                 frameborder="0"
//                 scrolling="true"
//                 allowfullscreen="true">
//             </iframe>
//             <iframe 
//                 class="ChatRight"
//                 frameborder="0"
//                 id="chat_embed"
//                 src="https://www.twitch.tv/embed/mahersh117/chat"
//                 height="400"
//                 width="100%">
//             </iframe>
//         </div>
//     </div>
//     <div class="VideoWithRules">
//         <div class="PercentLeft MembersText">
//             <h3 class="TextUnderline MembersText">Chat Rules</h3>
//             </br>
//             <h4 class="MembersText">
//                 <ul style="list-style-type:square;">
//                     <li>Talk to us, help us have a great stream with you</li>
//                     <li>Don't use racist or sexist language</li>
//                     <li>Don't bring down the stream</li>
//                     <li>No religion or politics in the chat</li>
//                     <li>Please have fun</li>
//                 </ul>
//             </h4>
//         </div>
        
//         <div class="PercentRight MembersText">
//             <h3 class="TextUnderline MembersText">Chat Rules</h3>
//             </br>
//             <h4 class="MembersText">
//                 <ul style="list-style-type:square;">
//                     <li>Talk to us, help us have a great stream with you</li>
//                     <li>Don't use racist or sexist language</li>
//                     <li>Don't bring down the stream</li>
//                     <li>No religion or politics in the chat</li>
//                     <li>Please have fun</li>
//                 </ul>
//             </h4>
//         </div>
//         <div class="Center">
//             <iframe
//                 class="Video"
//                 src="https://player.twitch.tv/?channel=M1STERXMAYH3M"
//                 height="400"
//                 width="708"
//                 frameborder="0"
//                 scrolling="true"
//                 allowfullscreen="true">
//             </iframe>
//             <iframe 
//                 class="Chat"    
//                 frameborder="0"
//                 id="chat_embed"
//                 src="https://www.twitch.tv/embed/M1STERXMAYH3M/chat"
//                 height="400"
//                 width="200">
//             </iframe>
//         </div>
//     </div>
// </div>`
// }

function ShowMembers(){
    $('.HidePage').show();
    document.getElementById('TabArea').innerHTML=
    `<div class="membersPage">
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
    </div>`;
}


function ShowDiscord(){
    $('.HidePage').show();
    document.getElementById('TabArea').innerHTML=
    `<div class="membersPage">
        <div class="MembersCenter">
            <div class="Centerfull">    
                <iframe src="https://titanembeds.com/embed/663543994805911573?fixedsidenav=false&noscroll=false&scrollbartheme=minimal-dark&lockscrollbar=false&theme=MetroEdge&username=Prospect&userscalable=true" height="600" width="600" frameborder="0"></iframe>
            </div>
        </div>
    </div>
    `
}


function MahershBio(){
    $('.MahershBio').show();
    $('.M1STERXMAYH3MBio').hide();
    $('.ShaddowSparrowBio').hide();
    $('.CheckovskyBio').hide();
    $('.IrishBeefCakeBio').hide();
    document.getElementById("Mahersh117").classList.add('LeftAlign');
    document.getElementById("Mahersh117").classList.remove("LeftAlignNoPad");
    document.getElementById("Mahersh117Text").classList.add("TextUnderline");
    document.getElementById("M1STERXMAYH3M").classList.remove("LeftAlign");
    document.getElementById("M1STERXMAYH3M").classList.add('LeftAlignNoPad');
    document.getElementById("M1STERXMAYH3MText").classList.remove("TextUnderline");
    document.getElementById("ShaddowSparrow").classList.remove('LeftAlign');
    document.getElementById("ShaddowSparrow").classList.add('LeftAlignNoPad');
    document.getElementById("ShaddowSparrowText").classList.remove("TextUnderline");
    document.getElementById("Checkovsky").classList.remove('LeftAlign');
    document.getElementById("Checkovsky").classList.add('LeftAlignNoPad');
    document.getElementById("CheckovskyText").classList.remove("TextUnderline");
    document.getElementById("IrishBeefCake").classList.remove('LeftAlign');
    document.getElementById("IrishBeefCake").classList.add('LeftAlignNoPad');
    document.getElementById("IrishBeefCakeText").classList.remove("TextUnderline");
}

function M1STERXMAYH3MBio(){
    $('.MahershBio').hide();
    $('.M1STERXMAYH3MBio').show();
    $('.ShaddowSparrowBio').hide();
    $('.CheckovskyBio').hide();
    $('.IrishBeefCakeBio').hide();
    document.getElementById("Mahersh117").classList.remove('LeftAlign');
    document.getElementById("Mahersh117").classList.add("LeftAlignNoPad");
    document.getElementById("Mahersh117Text").classList.remove("TextUnderline");
    document.getElementById("M1STERXMAYH3M").classList.add("LeftAlign");
    document.getElementById("M1STERXMAYH3M").classList.remove('LeftAlignNoPad');
    document.getElementById("M1STERXMAYH3MText").classList.add("TextUnderline");
    document.getElementById("ShaddowSparrow").classList.remove('LeftAlign');
    document.getElementById("ShaddowSparrow").classList.add('LeftAlignNoPad');
    document.getElementById("ShaddowSparrowText").classList.remove("TextUnderline");
    document.getElementById("Checkovsky").classList.remove('LeftAlign');
    document.getElementById("Checkovsky").classList.add('LeftAlignNoPad');
    document.getElementById("CheckovskyText").classList.remove("TextUnderline");
    document.getElementById("IrishBeefCake").classList.remove('LeftAlign');
    document.getElementById("IrishBeefCake").classList.add('LeftAlignNoPad');
    document.getElementById("IrishBeefCakeText").classList.remove("TextUnderline");
}

function ShaddowSparrowBio(){
    $('.MahershBio').hide();
    $('.M1STERXMAYH3MBio').hide();
    $('.ShaddowSparrowBio').show();
    $('.CheckovskyBio').hide();
    $('.IrishBeefCakeBio').hide();
    document.getElementById("Mahersh117").classList.remove('LeftAlign');
    document.getElementById("Mahersh117").classList.add("LeftAlignNoPad");
    document.getElementById("Mahersh117Text").classList.remove("TextUnderline");
    document.getElementById("M1STERXMAYH3M").classList.remove("LeftAlign");
    document.getElementById("M1STERXMAYH3M").classList.add('LeftAlignNoPad');
    document.getElementById("M1STERXMAYH3MText").classList.remove("TextUnderline");
    document.getElementById("ShaddowSparrow").classList.add('LeftAlign');
    document.getElementById("ShaddowSparrow").classList.remove('LeftAlignNoPad');
    document.getElementById("ShaddowSparrowText").classList.add("TextUnderline");
    document.getElementById("Checkovsky").classList.remove('LeftAlign');
    document.getElementById("Checkovsky").classList.add('LeftAlignNoPad');
    document.getElementById("CheckovskyText").classList.remove("TextUnderline");
    document.getElementById("IrishBeefCake").classList.remove('LeftAlign');
    document.getElementById("IrishBeefCake").classList.add('LeftAlignNoPad');
    document.getElementById("IrishBeefCakeText").classList.remove("TextUnderline");
}

function CheckovskyBio(){
    $('.MahershBio').hide();
    $('.M1STERXMAYH3MBio').hide();
    $('.ShaddowSparrowBio').hide();
    $('.CheckovskyBio').show();
    $('.IrishBeefCakeBio').hide();
    document.getElementById("Mahersh117").classList.remove('LeftAlign');
    document.getElementById("Mahersh117").classList.add("LeftAlignNoPad");
    document.getElementById("Mahersh117Text").classList.remove("TextUnderline");
    document.getElementById("M1STERXMAYH3M").classList.remove("LeftAlign");
    document.getElementById("M1STERXMAYH3M").classList.add('LeftAlignNoPad');
    document.getElementById("M1STERXMAYH3MText").classList.remove("TextUnderline");
    document.getElementById("ShaddowSparrow").classList.remove('LeftAlign');
    document.getElementById("ShaddowSparrow").classList.add('LeftAlignNoPad');
    document.getElementById("ShaddowSparrowText").classList.remove("TextUnderline");
    document.getElementById("Checkovsky").classList.add('LeftAlign');
    document.getElementById("Checkovsky").classList.remove('LeftAlignNoPad');
    document.getElementById("CheckovskyText").classList.add("TextUnderline");
    document.getElementById("IrishBeefCake").classList.remove('LeftAlign');
    document.getElementById("IrishBeefCake").classList.add('LeftAlignNoPad');
    document.getElementById("IrishBeefCakeText").classList.remove("TextUnderline");
}

function IrishBeefCakeBio(){
    $('.MahershBio').hide();
    $('.M1STERXMAYH3MBio').hide();
    $('.ShaddowSparrowBio').hide();
    $('.CheckovskyBio').hide();
    $('.IrishBeefCakeBio').show();
    document.getElementById("Mahersh117").classList.remove('LeftAlign');
    document.getElementById("Mahersh117").classList.add("LeftAlignNoPad");
    document.getElementById("Mahersh117Text").classList.remove("TextUnderline");
    document.getElementById("M1STERXMAYH3M").classList.remove("LeftAlign");
    document.getElementById("M1STERXMAYH3M").classList.add('LeftAlignNoPad');
    document.getElementById("M1STERXMAYH3MText").classList.remove("TextUnderline");
    document.getElementById("ShaddowSparrow").classList.remove('LeftAlign');
    document.getElementById("ShaddowSparrow").classList.add('LeftAlignNoPad');
    document.getElementById("ShaddowSparrowText").classList.remove("TextUnderline");
    document.getElementById("Checkovsky").classList.remove('LeftAlign');
    document.getElementById("Checkovsky").classList.add('LeftAlignNoPad');
    document.getElementById("CheckovskyText").classList.remove("TextUnderline");
    document.getElementById("IrishBeefCake").classList.add('LeftAlign');
    document.getElementById("IrishBeefCake").classList.remove('LeftAlignNoPad');
    document.getElementById("IrishBeefCakeText").classList.add("TextUnderline");
}

$('.HidePage').click(CloseTransactionForm);
function CloseTransactionForm() {
    if(window.location.href == "https://thechaoskings.com/test/"){
        
    }
    else {
        document.getElementById("TabArea").innerHTML = "";
        $('.HidePage').hide();
    }
}