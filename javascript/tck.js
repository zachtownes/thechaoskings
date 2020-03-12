let mainNav = document.getElementById('navbar');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
})


//Onload function sets the rules for multistream page or hides the overlay
function onLoad(){
    console.log(window.location.href)
    if(window.location.href == "https://thechaoskings.com/test/"){
        showRules();
    }
    else{
        $('.HidePage').hide()
    }
    
}

//Renders the members overlay to show the members of the chaoskings
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
                    <a href="mailto:mahersh117@gmail.com" target="_top" class="member-links"><i class="fas fa-envelope"></i> Email</a>
                    <a href="https://www.twitch.tv/mahersh117" class="member-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/id/mahersh117" class="member-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <a href="https://twitter.com/mahersh117" class="member-links"><i class="fab fa-twitter-square"></i> Twitter</a>
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
                    <!-- <a href="mailto:mahersh117@gmail.com" target="_top" class="member-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <a href="https://www.twitch.tv/M1STERXMAYH3M" class="member-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/profiles/76561198202631337" class="member-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <!-- <a href="https://twitter.com/mahersh117" class="member-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
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
                    <a href="mailto:checkovskylp@gmail.com" target="_top" class="member-links"><i class="fas fa-envelope"></i> Email</a>
                    <a href="https://www.twitch.tv/checkovskylp" class="member-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/id/checkovsky" class="member-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <a href="https://twitter.com/checkovskylp" class="member-links"><i class="fab fa-twitter-square"></i> Twitter</a>
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
                    <!-- <a href="mailto:checkovskylp@gmail.com" target="_top" class="member-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <!-- <a href="https://www.twitch.tv/checkovskylp" class="member-links"><i class="fab fa-twitch"></i> Twitch.Tv</a> -->
                    <!-- <a href="https://steamcommunity.com/profiles/76561198843276373" class="member-links"><i class="fab fa-steam-symbol"></i> Steam</a> -->
                    <!-- <a href="https://twitter.com/checkovskylp" class="member-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
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
                    <!-- <a href="mailto:checkovskylp@gmail.com" target="_top" class="member-links"><i class="fas fa-envelope"></i> Email</a> -->
                    <a href="https://www.twitch.tv/irishbeefcake" class="member-links"><i class="fab fa-twitch"></i> Twitch.Tv</a>
                    <a href="https://steamcommunity.com/profiles/76561198412950319" class="member-links"><i class="fab fa-steam-symbol"></i> Steam</a>
                    <!-- <a href="https://twitter.com/checkovskylp" class="member-links"><i class="fab fa-twitter-square"></i> Twitter</a> -->
                </div>
                </br></br>
                </div>
                </div>
        </div>
    </div>`;
}

//Discord Overlay. Could be better and will be worked on in issue #2
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


//Shows Mahersh Bio info, Hides all other members.
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

//Shows Mayh3m's bio info. Hides other members
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

//Shows Sparrow Bio info Hides others.
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

//Shows Checkosvsky Bio info, hides others.
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

//Shows Beefcakes Bio info, hides others
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

//Removes the backround blur on anypage, and hides overlays
$('.HidePage').click(CloseTransactionForm);
function CloseTransactionForm() {
    if(window.location.href.match('/test*/')){
        
    }
    else if(window.location.href.match('/multistream.*/')){
        
    }
    else {
        document.getElementById("TabArea").innerHTML = "";
        $('.HidePage').hide();
    }
}