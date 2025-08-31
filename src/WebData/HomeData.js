//imports of why section 
import { CiStar } from "react-icons/ci";
import { FaBook, FaBox, FaBrain, FaHeart, FaPen, FaStar } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

//imports of recent models

import model_1 from '../Assets/Images/HomeImages/Vtuber_1.png'
import model_2 from '../Assets/Images/HomeImages/Vtuber_2.png'
import model_3 from '../Assets/Images/HomeImages/Work_card_3.jpg'
import model_4 from '../Assets/Images/HomeImages/Work_card_4.jpg'
import model_5 from '../Assets/Images/HomeImages/Vtuber_5.png'
import model_6 from '../Assets/Images/HomeImages/Work_card_6.jpg'


//imports of processs
import { FaHistory } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import { MdAnimation, MdHighQuality, MdOutline3dRotation, MdScreenshotMonitor } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { CgGirl } from "react-icons/cg";
import { LuPanelLeft } from "react-icons/lu";
import { DiNetbeans } from "react-icons/di";
import { SiMaterialdesignicons, SiOpenbadges } from "react-icons/si";
import { TfiLayoutMediaOverlayAlt } from "react-icons/tfi";






export const whyYummeArc = [
    {text : "Anime-inspired, original model design" , para : "Every model we create is rooted in expressive anime art — no templates, no shortcuts. Every design is tailored to your story." ,  icon : <CiStar/>},

    {text : "Built Around Lore & Identity" , para : "We don’t just design what looks cool. We craft what makes sense — visuals that reflect your character's personality and backstory." , icon : <FaBook/>},

    {text : "Wholesome & Value-Driven" , para : "No NSFW, no demonic themes. Just clean, heartfelt visuals made with intention and emotional respect.", icon : <FaLeaf/>},
    {text : " Highly Detailed, Stream-Ready Files" , para : " We obsess over line quality, color harmony, and character flow — everything’s optimized for Live2D, overlays, or PNGTuber use." , icon : <WiStars/>},

    
]

export const weCreate =[
    
    {name : "Custom 2D VTuber Models" , description : "Anime/chibi art style" , model : <CgGirl />},
    {name : "Custom 3D VTuber Models" , description : "Rig-ready 3d Avatars" , model : <MdOutline3dRotation />},
    {name : "Custom Chibi Panels" , description : "Cute info panels" , model : <LuPanelLeft />},

    {name : "Custom Panels" , description : "Panels for Twitch or Kick" , model : <DiNetbeans />},

    {name : "2D Art Scenes for Stream Starting, Ending, and BRB's" , description : "Starting, ending, and BR3" , model : <MdScreenshotMonitor />},
    
    {name : "Custom PFP Design" , description : "Unique profile pictures" , model : <SiMaterialdesignicons />},

    {name : "Custom Emotes & Badges" , description : "Personalised Emotes and Badges" , model : <SiOpenbadges />},


    {name : "Overlays Pack" , description : "Visual overlays for streams" , model : <TfiLayoutMediaOverlayAlt />},

    {name : "Intro/Outro Animation" , description : "Animated intro and outro" , model : <MdAnimation />
},



]

export const recentModels =[
    {name : "Aurelia Flareheart" , description : "A radiant fox-spirit born from embers and stars. Her expressive design and vivid glow were crafted to mesmerize perfectly rigged for dynamic live streaming and storytelling*" , model : model_1},
    
    {name : "Aren, The Lost Echo" , description : "A lone wanderer from a forgotten realm, Aren’s fully rigged 3D model brings depth and realism to virtual worlds. Ideal for creators seeking immersive expression and adventure in every motion." , model : model_2},

    {name : "Whispering Realms" , description : "2D Art Scenes for Stream Starting, Ending & BRBs Every stream deserves a cinematic touch. These hand-painted art scenes set the mood before you even say a word perfect for creating emotional, immersive transitions that leave a lasting impression." , model : model_3},

    {name : "Immersive Studio Worlds" , description : "Transform your stream into a cinematic masterpiece. Our custom-built 3D scenes bring depth, light, and motion to your starting/ending screens or BRBs, making your room as legendary as your avatar." , model : model_4},

    {name : "KuroBytes" , description : "A techy wolf-boy who runs your stream behind the scenes! These chibi-style panels show off your personality with charm, perfect for stream overlays, bios, or section breaks with flair." , model : model_5},

    {name : "Lore-Based Intro Cinematics" , description : "Short animated intros that bring your VTuber backstory to life like an opening scene from your own anime. Perfect for debuts, trailers, or stream openers." , model : model_6},

    
]

export const our_process = [
    {heaiding : 'Step 1: Discovery' ,  para : 'We start with you your lore, vibe, inspirations, and goals. Whether it’s a simple PNGTuber or a full-blown magical OC, we get to know everything.' , icon : < FaBrain />},
    {heaiding : 'Step 2: Concept & Sketch' ,  para : 'We sketch early ideas and send previews. You give feedback. This step lets you shape the vibe before anything’s finalized.' , icon : <FaPen />},
    {heaiding : 'Step 3: Final Model Art' ,  para : 'Once approved, we render the full piece with polish, emotion, and deep detail. You\'ll see your character come to life.' , icon : <FaHeart />},
    {heaiding : 'Step 4: Delivery & Support' ,  para : 'You receive clean files rig-ready, high-res, or for panels/branding. We’re here for post-delivery questions or add-ons.' , icon : <FaBox />},
    {heaiding : 'Step 5: Debut Ready Extras ' ,  para : 'Need help with banners, panels, or extra poses? We offer creative add-ons based on your needs.' , icon : <FaStar />},
]

export const testimonals_home = [
    {client_name : "AikoVT" , review : "YumeArc completely understood my character’s soul. The attention to detail was insane, and the process was super smooth!"},
    {client_name : "ErlicOnAir" , review : "The model design captured my lore perfectly. It wasn’t just a drawing—it was a story in motion."},
    {client_name : "Voidcaster" , review : "My lore felt complicated… but they actually made it beautiful.  I’ve never been so excited to see myself as a character."},
    {client_name : "NyanyaLive" , review : "The chibi panels? TOO cute.  It matched my stream's energy perfectly I get compliments every day."},

]