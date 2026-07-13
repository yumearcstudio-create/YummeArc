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
    {text : "Not just another anime design" , para : "We build around the details that make your character feel like yours: the colors, mood, references, personality, and story behind the design." ,  icon : <CiStar/>},

    {text : "Lore comes first" , para : "Whether you have a full backstory or just a rough idea, we shape the visuals so your character feels connected, not random." , icon : <FaBook/>},

    {text : "Clean, creator-safe style" , para : "We focus on expressive, stream-friendly anime visuals without NSFW or extreme themes, so your character feels safe to grow a community around.", icon : <FaLeaf/>},
    {text : "Made for actual stream use" , para : "Models, PNGTubers, panels, overlays, and emotes are designed to look good where your audience actually sees them: on stream, on your profile, and across your socials." , icon : <WiStars/>},
]

export const weCreate =[
    
    {name : "2D VTuber Models" , description : "Custom anime-style models built around your character." , model : <CgGirl />},
    {name : "3D VTuber Models" , description : "Stylized 3D models for a more interactive stream presence." , model : <MdOutline3dRotation />},
    {name : "PNGTuber Designs" , description : "Expressive PNG art for creators not ready for a full model yet." , model : <LuPanelLeft />},

    {name : "Chibi Stream Panels" , description : "Cute panels for About, Rules, Credits, Donate, and more." , model : <DiNetbeans />},

    {name : "Custom Stream Panels" , description : "Clean panels matched to your character and theme." , model : <MdScreenshotMonitor />},
    
    {name : "Starting / BRB / Ending Screens" , description : "Stream scenes that set the mood before and between moments." , model : <SiMaterialdesignicons />},

    {name : "PFP Designs" , description : "Profile art made to feel recognizable across platforms." , model : <SiOpenbadges />},


    {name : "Emotes & Badges" , description : "Small expressions your community can actually use." , model : <MdAnimation />},

    {name : "Stream Overlay Pack" , description : "Overlay designs that match your model and stream vibe." , model : <TfiLayoutMediaOverlayAlt />},

    {name : "Intro / Outro Animation" , description : "Short animated moments for openings, debuts, and transitions." , model : <MdAnimation />
},



]

export const recentModels =[
    {name : "Halo Angel Model" , description : "A radiant fox-spirit born from embers and stars. Her expressive design and vivid glow were crafted to mesmerize perfectly rigged for dynamic live streaming and storytelling*" , model : model_1},
    
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
