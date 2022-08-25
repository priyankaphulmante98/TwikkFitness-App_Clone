
let footer = ()=>{
    return ` <div class="footer">
    <div class="footer_left">
      <div class="footer_left_img">
        <img src="https://www.shapelink.com/images/logo.png" alt="logo" />
      </div>
      <p>
        All rights reserved © 2002 - 2020 <br />
        Developed by Wellnesstech Labs International AB
      </p>
      <p>
        <a href="">Contact Us</a>
      </p>
      <p>
        <a href="">Terms & Conditions</a>
      </p>
    </div>

    <div class="footer_right">
      <div class="footer_right_img">
       <a href="https://www.facebook.com/twiikme/"><img src="https://kcdn.twiikapp.com/images/icon_facebook.png" alt="facebook" class="fb" /></a>
      </div>

      <div class="footer_right_img">
       <a href="https://www.instagram.com/twiik.me/"><img src="https://kcdn.twiikapp.com/images/icon_instagram.png" alt="insta" /></a>
      </div>

      <div class="footer_right_img">
       <a href="https://www.linkedin.com/company/twiik/"><img src="https://kcdn.twiikapp.com/images/icon_linkedin.png" alt="link" /></a>
      </div>

      <div class="footer_right_img">
        <a href="https://apps.apple.com/se/app/twiik/id1022318229?ls=1"><img src="https://kcdn.twiikapp.com/images/icon_apple.png" alt="apple" /></a>
      </div>

      <div class="footer_right_img">
        <a href="https://play.google.com/store/apps/details?id=me.twiik.twiikapp"><img src="https://kcdn.twiikapp.com/images/icon_android.png" alt="android" /></a>
      </div>

    </div>
  </div>`
}
let navbar = ()=>{
  return `    <div id="navbar">
  <a href="/html/exercise.html" class="navbar_menu"><img src="https://kcdn.twiikapp.com/images/logo.png" alt="" id="logo"></a>
  <a href="/html/exercise.html" class="navbar_menu">Exercise Log</a>
  <a href="/html/result.html" class="navbar_menu">Results</a>
  <a href="/html/indexchallenge.html" class="navbar_menu">Challenges</a>
  <a href="/html/friends.html" class="navbar_menu">Friends</a>
  <a href="/html/myGroups.html" class="navbar_menu">Groups</a>
  <div class="login_info">
      <p>Logged in as <a href="">Nilesh More</a></p>


      <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">My account &#x25BC</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Preferance</a>
            <a href="#">Change Language</a>
            <a href="#">Enter a code</a>
            <a href="#">subsricbtion and Purchase</a>
            <a href="#">External Connection</a>
            <a href="#">Help Pages</a>
            <a href="/index.html">Logout</a>
          </div>
        </div>


  </div>
  <img class="notify_logo" src="https://graph.facebook.com/5024087821052050/picture?width=200&height=200" alt="">
  <a class="notify_logo1" href=""><img src="	https://kcdn.twiikapp.com/images/messages_off.png" alt=""></a>
  <a class="notify_logo1" href=""><img src="	https://kcdn.twiikapp.com/images/notifications_off.png" alt=""></a>
</div>`
}





export {footer,navbar};


