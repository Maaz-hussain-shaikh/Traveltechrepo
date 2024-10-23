import { JaipurRanthambore } from "./All trip details/JaipurRanthambore"
import Manali from "./All trip details/Manali"
import { Pachmarhi } from "./All trip details/Pachmarhi"
import { Udaipur } from "./All trip details/Udaipur"
import { Kashmir } from "./All trip details/Kashmir Group"
import Kashmir_trips from "./Destination trips/Kashmir"
import { Andaman } from "./All trip details/Andaman4N_5D"
import { Sikkimdarjeeling } from "./All trip details/Sikkim Darjeeling"
import { Meghalaya } from "./All trip details/Meghalaya"
import { Ladakh6daystrip } from "./All trip details/Leh to Leh 5d"
import { Goagroup } from "./All trip details/Goa group trip"
import { Jodhpur } from "./All trip details/Jodhpur Jaisalmer"
import { Kashmir7n8d } from "./Destination trips/Kashmir/Kashmir Group 7n8d"
import { Kashmir4n5d } from "./Destination trips/Kashmir/Kashmir Personalise Srinagar to Srinagar"
import Himachal from "./Destination trips/Himachal"
import Kullumanali4n5d from "./Destination trips/Himachal/Kullu Manali 4n 5d"
import Shimlamanalispecial from "./Destination trips/Himachal/Shimla Manali  Special"
import Shimlamanali5n6d from "./Destination trips/Himachal/Shimla Manali 5Nights 6 days"
import Shimlamanalikasol from "./Destination trips/Himachal/Shimla Manali With kasol 5Nights 6 days"
import Shimlamanalidalhusie from "./Destination trips/Himachal/Himachal Manali shimla dalhousie amritsar"
import Kerala from "./Destination trips/Kerala"
import Kerala3n4d from "./Destination trips/Kerala/Kerala 3n4d"
import Kerala4n5d from "./Destination trips/Kerala/Kerala4n5d"
import { Kedarnath } from "./Destination trips/Uttrakhand/Kedarnath group trip 7days"
import Uttrakhand from "./Destination trips/Uttrakhand"
import Rishikeshharidwar from "./Destination trips/Uttrakhand/Rishikesh Masoorie haridwar Group trip"
import { Ladakh13daystrip } from "./All trip details/Leg Gorup"
import { Lonavalakhandala } from "./All trip details/Lonavala with Khandala"
import { Kanakisli } from "./All trip details/Kanahkisli"
import { Lonavalakhandalaimagica } from "./All trip details/Lonavala with Imagica"
import { UdaipurMauntabu } from "./All trip details/UdaipurMauntabu"
import Ooty from "./All trip details/Ooty"
import Ayodhya from "./All trip details/Ayodhya"
import Rameshwaram from "./All trip details/Rameshwaram"
import Manali4n5d from "./Destination trips/Himachal/Manali4n5d"
import ManaliFromDelhi from "./Destination trips/Himachal/Manali Delhi"
// ================================================================Main details data===========================

const Maindetailsdata = {
    // ===========================================Himachal================================
    "Manali": { info: Manali },     
    "Manali with Kullu": { info: Manali4n5d },
    "DelhiManali": { info: ManaliFromDelhi },
    "Kullu manali": { info: Kullumanali4n5d },
    "Shimla manali special": { info: Shimlamanalispecial },
    "Shimla manali 5night": { info: Shimlamanali5n6d },
    "Shimla manali kasol": { info: Shimlamanalikasol },
    "Shimla manali dalhusie": { info: Shimlamanalidalhusie },
    "Himachal": { more: Himachal },
    //  ==================================================Kashmir=================================   
    "Kashmir": { info: Kashmir, more: Kashmir_trips },
    "Kashmir Personal 7n8d": { info: Kashmir7n8d },
    "Kashmir Personal 4n5d": { info: Kashmir4n5d },
    //  =================================================Pachmarhi===============================   
    "Pachmarhi": { info: Pachmarhi },

    //  ====================================================rajashtan======================================   
    "Udaipur": { info: Udaipur },
    "Udaipurmauntabu": { info: UdaipurMauntabu},
    "Jaipur Ranthambore": { info: JaipurRanthambore }, 
    "Jodhpur Jaisalmer": { info: Jodhpur },
    // =====================================================andaman==========================    
    "Andaman": { info: Andaman, more: Kashmir_trips },
    // ======================================================sikkim=======================================
    "Sikkim darjeeling": { info: Sikkimdarjeeling },
    // ==========================================meghalaya================================
    "Meghalaya": { info: Meghalaya },

    // ==============================================ladakh=================================    
    "leh_6day": { info: Ladakh6daystrip },
    "leh_13day": { info:Ladakh13daystrip },
    // =============================================maharashtra===============================    
    "Goa": { info: Goagroup },
    // =========================================================Kerala=======================
    "Kerala": { more: Kerala },
    "Kerala 3n4d": { info: Kerala3n4d },
    "Kerala 4n5d": { info: Kerala4n5d },

    // ==================================================Kedarnath======================================
    "Kedarnath": { info: Kedarnath },
    "Rishikesh Haridwar": { info: Rishikeshharidwar },
    "Uttrakhand": { more: Uttrakhand },
    //======================================Lonavala ======================================
    "Lonavala": { info: Lonavalakhandala },
    "Lonavalaimagica": {info: Lonavalakhandalaimagica},
    // =============================Kanakisli=================================
    "Kanahkisli": { info: Kanakisli },
    // ========================================Ooty=============================
    "Ooty4n5d": { info: Ooty},
    // =========================================Ayodhya=====================================
    "Ayodhya": { info: Ayodhya},
     // =========================================Rameshwaram=====================================
     "Rameshwaram": {info: Rameshwaram},
}
// =========================================================sliding frist card =================================
const Cardfirst = {
    "Pachmarhi": {
        imgurl: "images/tripcard/Grouptrip/Pachmarhi.png",
        iturl: "Details/Pachmarhi",
        Price: "4999",

    }, 
    "Manali with Kullu": {
        imgurl: "images/tripcard/Grouptrip/Kullumanali.png",
        iturl: "Details/Manali with Kullu",
        Price: "5999",

    },      
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
   
    "Kerala": {
        imgurl: "/images/tripcard/Grouptrip/Kerala.jpg",
        iturl: "Details/Kerala 4n5d",
        Price: "13499",

    },
    "Goa": {
        imgurl: "images/tripcard/Grouptrip/goa.png",
        iturl: "Details/Goa",
        Price: "8499",
    },
    
    "Lonavala Khandala": {
        imgurl: "/images/tripcard/Grouptrip/Lonavala.png",
        iturl: "Details/Lonavala",
        Price: "5499",


    },
   
   "Udaipur": {
        imgurl: "images/tripcard/Grouptrip/Udaipur.png",
        iturl: "Details/Udaipur",
        Price: "4299",


    },
    "Lonavala With imagica": {
        imgurl: "/images/tripcard/Grouptrip/Lonavala_Khandala.png",
        iturl: "Details/Lonavalaimagica",
        Price: "5499",


    },
    "Udaipur Mount abu": {
        imgurl: "images/tripcard/Grouptrip/Udaipur_maunt-abu.png",
        iturl: "Details/Udaipurmauntabu",
        Price: "4299",


    },
    
    "Kanha Kisli": {
        imgurl: "images/tripcard/Grouptrip/Kanha.png",
        iturl: "Details/Kanahkisli",
        Price: "5499",

    },
    "Rishikesh ": {
        imgurl: "/images/tripcard/Grouptrip/Rishikesh.png",
        iturl: "Details/Rishikesh Haridwar",
        Price: "7499",

    },
    "Ladakh": {
        imgurl: "images/tripcard/Destinationimgs/Maincard/Destination_2.png",
        iturl: "Details/leh_13day",
        Price: "23999",

    },
    "Kedarnath": {
        imgurl: "/images/tripcard/Grouptrip/Kedarnath.png",
        iturl: "Details/Kedarnath",
        Price: "10999",

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
    

}

// ======================================destination cards========================================

const destinationard = {
    "Kashmir": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_7.png",
        href: "/Destinations/Kashmir",

    },
    "Himachal": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_3.png",
        href: "/Destinations/Himachal",

    },
    "Ladakh": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_2.png",
        href: "/Details/leh_6day",

    },
    "Uttrakhand": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_6.png",
        href: "/Destinations/Uttrakhand",

    },
    "Rajasthan": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_4.png",
        href: "/Details/Jodhpur Jaisalmer"
    },
    "Kerala": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_5.png",
        href: "/Destinations/Kerala",
    },
    "Meghalaya": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_1.png",
        href: "/Details/Meghalaya",

    },
    "Goa": {
        url: "images/tripcard/Destinationimgs/Maincard/Destination_9.png",
        href: "/Details/Goa",

    },
    "Ayodhya and Kashi": {
        url: "images/tripcard/Grouptrip/Ayodhya.png",
        href: "Details/Ayodhya",
       

    },
    "Rameshwaram": {
        url: "images/tripcard/Grouptrip/Rameshwaram.png",
        href: "Details/Rameshwaram",
        

    },
"Ooty": {
        url: "images/tripcard/Grouptrip/Ooty.png",
        href: "Details/Ooty4n5d",
       

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
        iturl: "Destinations/Kerala",
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
    "Ooty": {
        imgurl: "images/tripcard/Grouptrip/Ooty.png",
        iturl: "Details/Ooty4n5d",
        Price: "4999",

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
export { Cardfirst, reviewdata, destinationard, Honymooncards, FAQ, Maindetailsdata };




