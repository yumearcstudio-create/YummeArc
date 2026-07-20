//imports of why section 
import { CiStar } from "react-icons/ci";
import { FaBook, FaBox, FaBrain, FaHeart, FaPen, FaStar } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

//imports of recent models

import model_1 from '../Assets/Images/HomeImages/angel-model.png'
import model_2 from '../Assets/Images/HomeImages/orange-fox-chibi.png'
import model_3 from '../Assets/Images/HomeImages/steampunk-panel-set.png'
import model_4 from '../Assets/Images/HomeImages/go-happy-hyped-emotes.png'
import model_5 from '../Assets/Images/HomeImages/Gnarly-PFP.png'
import model_6 from '../Assets/Images/HomeImages/cinematic-stream-intro.png'


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



    {name : "Custom Stream Panels" , description : "Clean panels matched to your character and theme." , model : <MdScreenshotMonitor />},
    
    {name : "Starting / BRB / Ending Screens" , description : "Stream scenes that set the mood before and between moments." , model : <SiMaterialdesignicons />},

    {name : "PFP Designs" , description : "Profile art made to feel recognizable across platforms." , model : <SiOpenbadges />},


    {name : "Emotes & Badges" , description : "Small expressions your community can actually use." , model : <MdAnimation />},

    {name : "Stream Overlay Pack" , description : "Overlay designs that match your model and stream vibe." , model : <TfiLayoutMediaOverlayAlt />},

    {name : "Intro / Outro Animation" , description : "Short animated moments for openings, debuts, and transitions." , model : <MdAnimation />
},



]

export const recentModels =[
    {name : "Halo Angel Model" , description : "A soft angel-inspired Live2D model with gentle colors, clean outfit details, and a friendly design made to feel memorable across stream and socials." , model : model_1},
    
    {name : "Orange Fox Chibi" , description : "A cute fox-inspired chibi model with bright colors, playful expressions, and smooth movement made for stream reactions and personality moments." , model : 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754745969/F1_zdxgvb.png'},

    {name : "Steampunk Panel Set" , description : "A chibi-style panel set with warm steampunk details, realistic scene backgrounds, and clear sections made to keep the channel feeling personal and polished." , model : model_3},

    {name : "GG / Happy / Hyped Emotes" , description : "A set of expressive chat emotes made for quick reactions, community moments, and small character details your audience can actually use." , model : model_4},

    {name : "Red Hoodie Catboy PFP" , description : "A clean character PFP with sharp catboy details, bold red accents, and a readable expression made to stand out across profiles and socials." , model : model_5},

    {name : "Cinematic Stream Intro" , description : "A cinematic 3D scene with moody lighting, room details, and a slow reveal made for stream openings, debuts, or lore moments." , model : model_6, type : 'video'},

    
]

export const our_process = [
    {heaiding : 'Step 1: We explore the idea' ,  para : 'We talk through your lore, mood, references, and character goals while also helping you clarify the direction if things still feel messy or unfinished.' , icon : < FaBrain />},
    {heaiding : 'Step 2: We shape the concept' ,  para : 'We narrow the look, outfit details, expressions, and overall visual style so the character starts feeling more clear and consistent.' , icon : <FaPen />},
    {heaiding : 'Step 3: Rough sketch first' ,  para : 'We create an initial sketch so you can see the pose, structure, outfit flow, and main design direction before we move further.' , icon : <FaHeart />},
    {heaiding : 'Step 4: Color, shade, and refine' ,  para : 'Once the sketch feels right, we move into clean lines, colors, shading, and the final visual details.' , icon : <FaBox />},
    {heaiding : 'Step 5: Final files and stream-ready delivery' ,  para : 'We prepare clean exports and final files so your model, panels, emotes, or stream assets are ready to use across your platforms.' , icon : <FaStar />},
]

export const testimonals_home = [
    {review : "\u201CI have lore, but no clear visual direction.\u201D", answer : "We help turn the story into colors, outfit details, expressions, and stream assets that actually make sense together."},
    {review : "\u201CMy current model is okay, but it doesn\u2019t fully feel like me.\u201D", answer : "We look at what\u2019s working, what feels off, and what could make the character stronger without losing the parts you still like."},
    {review : "\u201CI need panels, emotes, or stream visuals that match my character.\u201D", answer : "We design supporting assets so your channel feels consistent instead of looking like random pieces from different places."},
    {review : "\u201CI have references, but I don\u2019t know how to explain the vibe.\u201D", answer : "That\u2019s fine. We help shape the mood, theme, and visual direction before moving into the artwork."},

]
