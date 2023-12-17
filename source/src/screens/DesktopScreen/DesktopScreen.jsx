import React from "react";
import { Link } from "react-router-dom";
import { Component } from "../../components/Component";
import { Group } from "../../components/Group";
import "./style.css";
import "./styleWithMenu.css";
import "./styleWithBanner.css";

export const DesktopScreen = () => {
  return (
    <div className="desktop-screen">
      <div className="desktop-2">
        {/* <img className="banner-2" alt="Banner" src="/img/banner.png" /> */}

        <div className="overlap-44">
          <div className="banner-3">
            <img className="vector" alt="Vector" src="/img/vector-2.png" />
            <img className="mask-group" alt="Mask group" src="/img/banner.png" />
            <img className="logo-6" alt="Logo" src="/img/resarch-badge2024-2.png" />
          </div>
          <div className="navbar-3">
            <Link className="text-wrapper-128" to="/">Home</Link>
            <Link className="text-wrapper-129" to="/research-details">
              Research Details
            </Link>
            <Link className="text-wrapper-130" to="/resources">
              Resources
            </Link>
            <Link className="text-wrapper-131" to="/contact-us">
              Contact
            </Link>
            <div className="rectangle-22" />
          </div>
        </div>
        <div className="text-wrapper-61">நிலை 1 ஆராய்ச்சி</div>
        <Link className="text-wrapper-62" to="/resources-tab-2">
          நிலை 2 ஆராய்ச்சி
        </Link>
        <Group
          className="group-49"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15.png"
          text="தமிழின் இசை மரபு"
          text1="அர்சுன் வித்யாசங்கர்"
        />
        <Group
          className="group-50"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="நடனக்கலை"
          text1="சமிகஂசா கணேசன்"
        />
        <Group
          className="group-51"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-31.png"
          text="தமிழர் நடனக்கலைகள்"
          text1="அம்சிரிகா பாலராம்குமார்"
        />
        <Group
          className="group-52"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-32.png"
          text="பெரியோர்களை மதித்தல்"
          text1="அனுசுயா சுவாமிநாதன்"
        />
        <Group
          className="group-53"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="சிற்பகலை"
          text1="மகதி கலாநிதி"
        />
        <Group
          className="group-54"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-33.png"
          text="வீரம்"
          text1="கேசவ் புலிகேசி"
        />
        <Group
          className="group-55"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="தமிழர் உணவுகள்"
          text1="ரிஷப் தண்டபாணி"
        />
        <Group
          className="group-56"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-34.png"
          text="பாரம்பரிய தின்பண்டங்..."
          text1="துருவன் முத்துக்குமரன்"
        />
        <Group
          className="group-57"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-35.png"
          text="தமிழர் கட்டிடக்கலை"
          text1="ச.ரே. நிக்கிதா"
        />
        <Group
          className="group-58"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-36.png"
          text="விருந்தோம்பல்"
          text1="அனீசுவர் பாலசுப்பிரமணியன்"
        />
        <Group
          className="group-59"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-37.png"
          text="நீர்வளத்தின் முக்கியத்து..."
          text1="சௌரவ் சிரிகிரிட்டினா"
        />
        <Group
          className="group-60"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-38.png"
          text="தமிழர் வரலாற்று கைதகள்"
          text1="சியா பாலசந்தர்"
        />
        <Group
          className="group-61"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="பெரியோர்களை மதித்தல்"
          text1="தண்வி பிரியா புலிேகசி"
        />
        <Group
          className="group-62"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-39.png"
          text="தமிழர் அறிவியல்"
          text1="சிவநேத்ரா முத்துமணி"
        />
        <Group
          className="group-63"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-40.png"
          text="தமிழர் உணவு"
          text1="வர்சினி போகிரெட்டி சீனிவாசன்"
        />
        <Group
          className="group-64"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-41.png"
          text="தமிழ் மருத்துவம்"
          text1="ச. ர. அர்ச்சிதா"
        />
        <Group
          className="group-65"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="தமிழர் கட்டிடக்கலை"
          text1="அவ்யுக்து செயபிரபு"
        />
        <Group
          className="group-66"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="தமிழ் இலக்கியம்"
          text1="பிரதீவ் கோபாலன்"
        />
        <Group
          className="group-67"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="விருந்தோம்பல்"
          text1="அன்பில் செல்லகுமாரசாமி"
        />
        <Group
          className="group-68"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="தமிழர் நடனக்கலைகள்"
          text1="தியா கோபால்"
        />
        <Group
          className="group-69"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="விருந்தோம்பல்"
          text1="சகசரா வைத்தியநாதன்"
        />
        <Group
          className="group-70"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="தமிழ் மருத்துவம்"
          text1="அசுவத்து நாராயண் பாலசுப்பிரமணியன்"
        />
        <Group
          className="group-71"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-42.png"
          text="தமிழர் நடனக்கலைகள்"
          text1="சுதர்சனன் சபரிநாத்து"
        />
        <Group
          className="group-72"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-43.png"
          text="பொங்கல் பண்டிகை"
          text1="சனவ் சந்தீபு"
        />
        <Group
          className="group-73"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-22.png"
          text="பொங்கல் திருவிழா"
          text1="ஆரவ் சாய் சரவணன்"
        />
        <Group
          className="group-74"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          text="ஒழுக்கத்தின் முக்கியத்து..."
          text1="சித்தார்த்து சிரிகிரிட்டினா"
        />
        <Group
          className="group-75"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-44.png"
          text="அணிகலனஂகளுமஂ அறிவி.."
          text1="விருசப்ரியா கோபால்"
        />
        <Group
          className="group-76"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-45.png"
          text="தமிழர்கள் அணியும் ஆடை"
          text1="தீத்யா கல்யாணகுமார்"
        />
        <Group
          className="group-77"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-46.png"
          text="கட்டிடக்கலை"
          text1="காசிணி கார்த்திகேயன்"
        />
        <Group
          className="group-78"
          href="https://drive.google.com/drive/folders/1L0W8hGUgy48OG7pn4GXhunhUjEHOXWm7"
          rectangle="/img/rectangle-15-25.png"
          text="வீரம்"
          text1="அத்விகா கிருட்டிணகுமார்"
        />
        <div className="overlap-19">
          <img className="screenshot-2" alt="Screenshot" src="/img/screenshot-2023-11-23-at-3-59-1.png" />

          <div className="text-wrapper-63">2023 Event Highlights</div>
          <img className="image-36" alt="Image" src="/img/image-38.png" />
          <img className="image-37" alt="Image" src="/img/image-39.png" />
          <img className="image-38" alt="Image" src="/img/image-40.png" />
          <img className="image-39" alt="Image" src="/img/image-41.png" />
        </div>
        <Component className="component-instance" href="mailto:thamizh.research.usa@gmail.com" />
        <div className="overlap-20">
          <img className="line-4" alt="Line" src="/img/line-2.svg" />
          <div className="rectangle-7" />
        </div>

        <div className="group-27">
          <div className="group-28">
            <div className="text-wrapper-13">தமிழர் பண்பாடுகள்</div>
            <div className="text-wrapper-14">28</div>
            <div className="time">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <img className="image-6" alt="Image" src="/img/image-37.png" />
              </div>
            </div>
          </div>
          <div className="group-29">
            <div className="text-wrapper-15">தமிழ் ஆராய்ச்சி மாணவர்கள்</div>
            <div className="text-wrapper-16">58</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <div className="ellipse-2" />
                <img className="image-7" alt="Image" src="/img/image-28.png" />
              </div>
            </div>
          </div>
          <div className="group-30">
            <div className="text-wrapper-17">ஆராய்ச்சி காலம்</div>
            <div className="text-wrapper-18">100 நாட்கள்</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <div className="ellipse-3" />
                <img className="image-7" alt="Image" src="/img/image-29.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
