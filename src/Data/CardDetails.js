import { JaipurRanthambore } from "./All trip details/JaipurRanthambore"
import Manali from "./All trip details/Manali"
import { Pachmarhi } from "./All trip details/Pachmarhi"
import { Udaipur } from "./All trip details/Udaipur"
import {Kashmir} from "./All trip details/Kashmir Group"
import  Kashmir_trips from "./Destination trips/Kashmir"
import { Andaman } from "./All trip details/Andaman4N_5D"
import { Sikkimdarjeeling } from "./All trip details/Sikkim Darjeeling"
import { Meghalaya } from "./All trip details/Meghalaya"
import { Ladakh6daystrip } from "./All trip details/Leh to Leh 5d"
import { Goagroup } from "./All trip details/Goa group trip"
import { Jodhpur } from "./All trip details/Jodhpur Jaisalmer"
import { Kerala } from "./All trip details/Kerala4n5d"
import { Kedarnath } from "./All trip details/Kedarnath group trip 7days"
import { Kashmir7n8d } from "./Destination trips/Kashmir/Kashmir Group 7n8d"
import { Kashmir4n5d } from "./Destination trips/Kashmir/Kashmir Personalise Srinagar to Srinagar"
// ================================================================Main details data===========================

const Maindetailsdata = {
    "Manali": {info: Manali},
    "Kashmir": {info: Kashmir,more:Kashmir_trips},
    "Kashmir Personal 7n8d": {info:Kashmir7n8d},
    "Kashmir Personal 4n5d": {info:Kashmir4n5d},
    "Pachmarhi": {info: Pachmarhi},
    "Udaipur": {info: Udaipur},
    "Jaipur Ranthambore": {info: JaipurRanthambore},
    "Jodhpur Jaisalmer": {info: Jodhpur},
    "Andaman": {info: Andaman,more:Kashmir_trips},
    "Sikkim darjeeling": {info: Sikkimdarjeeling},
    "Meghalaya": {info: Meghalaya},
    "leh_6day": {info: Ladakh6daystrip},
    "Goa": {info: Goagroup},
    "Kerala":{info:Kerala} ,
    "Kedarnath":{info:Kedarnath}   

}

// =========================================================sliding frist card =================================
const Cardfirst = {
    "Manali": {
        imgurl: "images/tripcard/Grouptrip/Manali.png",
        iturl: "Details/Manali",
        Price: "7999",
       
    },
    "Kashmir": {
        imgurl: "images/tripcard/Grouptrip/Kashmir.png",
        iturl: "Details/Kashmir",
        Price: "13499",
       
    },
    "Pachmarhi": {
        imgurl: "images/tripcard/Grouptrip/Pachmarhi.png",
        iturl: "Details/Pachmarhi",
        Price: "4999",
       
    },
    "Udaipur": {
        imgurl: "images/tripcard/Grouptrip/Udaipur.png",
        iturl: "Details/Udaipur",
        Price: "4499",
       

    },
    "Jaipur Ranthambore": {
        imgurl: "images/tripcard/Grouptrip/Jaipur.png",
        iturl: "Details/Jaipur Ranthambore",
        Price: "5499",
        
    },
    "Jodhpur jaisalmer": {
        imgurl: "images/tripcard/Grouptrip/jaisalmer.png",
        iturl: "Details/Jodhpur Jaisalmer",
        Price: "5999",
        
    },
    "Goa": {
        imgurl: "images/tripcard/Grouptrip/goa.png",
        iturl: "Details/Goa",
        Price: "8499",
        
    },



}

// ======================================destination cards========================================

const destinationard = {
    "Kashmir": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_7.png",
        href: "/Destinations/Kashmir",
      
    },
    "Himachal": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_3.png",
        href: "/Details/Manali",

    },
    "Ladakh": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_2.png",
        href: "/Details/leh_6day",

    },
    "Uttrakhand": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_6.png",
        href: "/Details/Kedarnath",

    },
    "Rajasthan": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_4.png",
        href: "/Details/Jodhpur Jaisalmer"
    },
    "Kerala": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_5.png",
        href: "/Details/Kerala",
    },
    "Meghalaya": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_1.png",
        href: "/Details/Meghalaya",

    },
    "Goa": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_9.png",
        href: "/Details/Goa",

    },




}
//   ==============================================Honymoon destination slider===============================
const Honymooncards = {
    "Andaman": {
        imgurl: "/images/tripcard/Honymoontrip/Andaman.png",
        iturl: "/Details/Andaman",
        Price: "22499",
    },
    
    "Sikkim": {
        imgurl: "/images/tripcard/Honymoontrip/Darjeeling.png",
        iturl: "Details/Sikkim darjeeling",
        Price: "19999",

    },
    "Goa": {
        imgurl: "/images/tripcard/Honymoontrip/Goa.png",
        iturl: "Details/Goa",
        Price: "9999",

    },
    "Himachal": {
        imgurl: "/images/tripcard/Honymoontrip/Himachal.png",
        iturl: "Details/Manali",
        Price: "9499",

    },
    "Kashmir": {
        imgurl: "/images/tripcard/Honymoontrip/Kashmir.png",
        iturl: "Details/Kashmir",
        Price: "16999",

    },
    "Kerala": {
        imgurl: "/images/tripcard/Honymoontrip/Kerala.png",
        iturl: "Details/Kerala",
        Price: "16499",

    },
    "Maldives": {
        imgurl: "/images/tripcard/Honymoontrip/Maldives.png",
        iturl: "Details/Maldives",
        Price: "24999",

    },
    "Meghalaya": {
        imgurl: "/images/tripcard/Honymoontrip/Meghalaya.png",
        iturl: "Details/Meghalaya",
        Price: "18999",

    },
    "Rajasthan": {
        imgurl: "/images/tripcard/Honymoontrip/Rajisthan.png",
        iturl: "Details/Rajasthan",
        Price: "5499",

    },
}
// ============================================Advertisment cards=======================



// =========================================common faq =================================
const FAQ = [
    {
        question: "By when can I book this trip?",
        answar: "You can book this trip 3 days before the commencement date."
    },
    {
        question: "By when can I book this trip?",
        answar: "You can book this trip 3 days before the commencement date."
    },
    {
        question: "By when can I book this trip?",
        answar: "You can book this trip 3 days before the commencement date."
    },
    {
        question: "By when can I book this trip?",
        answar: "You can book this trip 3 days before the commencement date."
    },


]
// =======================================review=====================


const reviewdata = [
    {
        id: 1,
        name: "Manoj Kushwah",
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
       
        comment: `The trip was amazing , got to meet adorable people, the stay was very comfortable and with spacious rooms, meals were delightful.Well managed trip by Travel tech!
        Thnx for Travel tech….`,

    },
    {
        id: 1,
        name: "Ayushi soni",
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
        
        comment: `It was really a great trip with you guys, it was my 1st group trip with amazing people.
            We really enjoyed alot together, we created a strong bond together with so many memories. I would Love to go again with Travel Tech for creating memories again.
            Thanks for the amazing trip .`,

    },
    {
        id: 1,
        name: "Simran Nagdeve",
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
       
        comment: `Honestly, pachmari sbke lie utna hi beautiful h, or sbka experience b outstanding hoga, for sure.. But the real reason why we enjoyed this trip is bcoz of our co-ordinators(@salman @⁨Farhan Travel Tech⁩ @mehul) n also mohit bhaiya. U guys r really made it our best trip ever with loads of memories, thnks for those tiny treats n gosspis n spcl thnks to mohit bhaiya for their songs.. We guys r hell tired bt couldn't stop laughing, singing n spend whole journey awaken.. N thnks to co - travllers also, u guys made it very happening, thnk u all of u for adjusting n managing with each other in whole trip, N mainly, aunty wala group toh rockss🤟🏻🤟🏻🤟🏻🤟🏻.. From unkown peoples to travel buddies.. Big claps for #TRAVELTECH.`,
    
    },
    {
        id: 1,
        name: "Namrata singh",
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
      
        comment: `I took a batch of 23 students to Pachmarhi with Travel Tech and I must say it has been a wonderful experience. Food and Stay was good. All ups and downs during the trip were very well handled by the Trip Coordinator. All the requests made were considered and worked upon very well to make sure the trip becomes a memorable one! All in all a great experience!!.`,
    
    },
    {
        id: 1,
        name: "Amy Philip",
       
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
        comment: `The trip was amazing , got to meet adorable people, the stay was very comfortable and with spacious rooms, meals were delightful.Well managed trip by Travel tech!
                        Rest everything was well planned by the members:- Salman, Farhan and Sameer. Will surely look forward to again plan our next vacation with you all as each member of the team took care and made sure that we are secure!
                        Cheers to Travel Tech!🍻.`,
    
    },
    {
        id: 1,
        name: "Shailee ",
       
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
        comment: `This was my first trip and to be very honest it was so wonderful and rocking that aane wale kuch days tak to aisa lagega that we are still in that ghaat area..totally the Experince was full of thrilling and adventurous. Thanks to those small treats special Thanks to Farhan salman Mehul and mohit bhaiya and specially our co travellers who joined into craziness 🤩🤩
                            From strangers to travel buddies 🤩 you guys rock!!! 😎😎✌🏻✌🏻✌🏻
                            Hatts off to TRAVEL TECH❣.`,
    
    },
    {
        id: 1,
        name: "Savvy Shristva",
       
        tripname: "Udaipur and bahubali hill",
        tripdate: "04-Oct-2024",
        comment: `We batchmates took 3 days tour in Pachmarhi and it was an amazing time. I personally would have loved to give a 5 star review because travel tech did there job very well. They tried to made our tour too best ( yes more than best 🥺 ).Special THANKS to Salman Sir ☺️`,
    
    },
    
]
export { Cardfirst, reviewdata, destinationard, Honymooncards, FAQ,Maindetailsdata };  




