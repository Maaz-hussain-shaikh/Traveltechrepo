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
import { KedarnathGroup } from "./Destination trips/Uttrakhand/KedarnathGrouptrip"
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
import NewManali from "./Destination trips/Newyeartrips/NewManali"
import { NewGoagroup } from "./Destination trips/Newyeartrips/NewGoa group trip"
import { NewKashmir } from "./Destination trips/Newyeartrips/NewKashmir Group"
import { NewJodhpur } from "./Destination trips/Newyeartrips/NewJodhpur Jaisalmer"
import { NewPachmarhi } from "./Destination trips/Newyeartrips/NewPachmarhi"
import { NewUdaipur } from "./Destination trips/Newyeartrips/NewUdaipur"
import NewSpiti from "./Destination trips/Newyeartrips/NewSpiti"
import NewUttrakhand from "./Destination trips/Newyeartrips/NewUttrakhand"
import Newhimachal from "./Destination trips/Newyeartrips/Newhimachal"
import { JammuKashmir } from "./Destination trips/Kashmir/Jammu-Kashmir"
import { Vrindavan } from "./Destination trips/Newyeartrips/Vrindavan"
import { Pushkar } from "./Destination trips/Newyeartrips/Pushkar"
import Sangla from "./Destination trips/Newyeartrips/Sangla"
import { Chardham } from "./Destination trips/Uttrakhand/Chardham"
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
    "JammuKashmir": {info: JammuKashmir},
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

    // ==================================================Uttrakhand Chardham======================================
    "Kedarnath": { info: Kedarnath },
    "KedarnathGroup": { info: KedarnathGroup },
    "Chardham": { info: Chardham },
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

    // ===============================================New year itineary=================
"Newyearmanali": {info: NewManali},
"NewyearGoa": {info: NewGoagroup},
"NewyearKashmir": {info: NewKashmir},
"NewyearJaisalmer": {info: NewJodhpur},
"Newyearpachmarhi":{info: NewPachmarhi},
"NewUdaipur":{info: NewUdaipur},
"Newyearspiti":{info : NewSpiti},
"NewyearUttrakhand":{info: NewUttrakhand },
"NewyearHimachal":{info: Newhimachal },
"Pushkar":{info: Pushkar },
"Sangla":{info:Sangla },
"Vrindavan":{info: Vrindavan}
}
// =========================================================sliding frist card =================================
const Cardfirst = {
    
    "Manali": {lable:"Best Seller",
        imgurl: "images/tripcard/Grouptrip/Manali.png",
        iturl: "Details/Manali",
        Price: "7999",
        discount: "9999",
        day:"6N/7D",
        Season: "Dec-June",

    },
    
    "Pachmarhi": {lable:"Best Seller",
        imgurl: "images/tripcard/Grouptrip/Pachmarhi.png",
        iturl: "Details/Pachmarhi",
        Price: "4999",
        discount: "5999",
        day:"3N/2Day",
        Season: "Dec-Jun",

    }   ,   
   
    
    "Kashmir": {lable:"Best Seller",
        imgurl: "images/tripcard/Grouptrip/Kashmir.png",
        iturl: "Details/Kashmir",
        Price: "13499",
        discount: "15499",
        day:"7N/8D",
        Season: "Dec-June",

    },
    "Chardham Yatra": {lable:"Null",
        imgurl: "/images/tripcard/Grouptrip/Chardham.png",
        iturl: "Details/Chardham",
        Price: "20499",
        discount: "23499",
        day:"9N/10D",
        Season: "May-june",
        
    },
    "Kedarnath": {lable:"Null",
        imgurl: "/images/tripcard/Grouptrip/Kedarnath.png",
        iturl: "Details/KedarnathGroup",
        Price: "10999",
        discount: "5999",
        day:"5N/6D",
        Season: "May-june",

    },"Spiti": {lable:"",
        imgurl: "images/tripcard/Newyear/Spitinew.png",
        iturl: "Details/Newyearspiti",
        Price: "16999",
        discount: "19000",
        day:"8N/9D",
        Season: "Holi Special",

    },
   "Goa": {lable:"Best Seller",
        imgurl: "images/tripcard/Grouptrip/goa.png",
        iturl: "Details/Goa",
        Price: "8499",
        discount: "9999",
        day:"5N/6D",
        Season: "Dec-jun",
    },
    "Kerala": {lable:"Best Seller",
        imgurl: "/images/tripcard/Grouptrip/Kerala.jpg",
        iturl: "Details/Kerala 4n5d",
        Price: "13499",
        discount: "15499",
        day:"4N/5D",
        Season: "Dec-Jun",
    },    
      
   "Udaipur": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Udaipur.png",
        iturl: "Details/Udaipur",
        Price: "4299",
        discount: "6999",
        day:"3N/2D",
        Season: "Dec-Jun",


    },
    
    "Udaipur Mount abu": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Udaipur_maunt-abu.png",
        iturl: "Details/Udaipurmauntabu",
        Price: "4299",
        discount: "4999",
        day:"3N/2D",
        Season: "Dec-Jun",

    },
    
    "Kanha Kisli": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Kanha.png",
        iturl: "Details/Kanahkisli",
        Price: "5499",
        discount: "6499",
        day:"3N/2D",
        Season: "Dec-jun",

    },
    "Rishikesh ": {lable:"Null",
        imgurl: "/images/tripcard/Grouptrip/Rishikesh.png",
        iturl: "Details/Rishikesh Haridwar",
        Price: "7499",
        discount: "8499",
        day:"4N/5D",
        Season: "Dec-jun",

    },
    "Jaipur Ranthambore": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Jaipur.png",
        iturl: "Details/Jaipur Ranthambore",
        Price: "5499",
        discount: "6499",
        day:"3N/2D",
        Season: "Dec-Jun",

    },
    "Jodhpur jaisalmer": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/jaisalmer.png",
        iturl: "Details/Jodhpur Jaisalmer",
        Price: "5999",
        discount: "5999",
        day:"3N/4D",
        Season: "Dec-Jun",

    },
    "Manali with Kullu": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Kullumanali.png",
        iturl: "Details/Manali with Kullu",
        Price: "6999",
        discount: "5999",
        day:"4N/5D",
        Season: "Dec-Jun",
    },
    "Ladakh": {lable:"Null",
        imgurl: "images/tripcard/Destinationimgs/Maincard/Destination_2.png",
        iturl: "Details/leh_13day",
        Price: "23999",
        discount: "26999",
        day:"11N/12D",
        Season: "Dec-May",
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
    "Andaman": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Andaman.png",
        iturl: "/Details/Andaman",
        Price: "22499",
        discount: "24999",
        day:"4N/5D",
        Season: "",
    },

    "Sikkim": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Darjeeling.png",
        iturl: "Details/Sikkim darjeeling",
        Price: "19999",
        discount: "21999",
        day:"4N/5D",
        Season: "",
    },
    "Goa": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Goa.png",
        iturl: "Details/Goa",
        Price: "9999",
        discount: "11999",
        day:"5N/6D",
        Season: "",
    },
    "Himachal": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Himachal.png",
        iturl: "Details/Manali",
        Price: "9499",
        discount: "10000",
        day:"6N/7D",
        Season: "",

    },
    "Kashmir": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Kashmir.png",
        iturl: "Details/Kashmir",
        Price: "16999",
        discount: "18999",
        day:"7N/8D",
        Season: "",

    },
    "Kerala": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Kerala.png",
        iturl: "Destinations/Kerala",
        Price: "16499",
        discount: "18499",
        day:"4N/5D",
        Season: "",
    },
    "Maldives": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Maldives.png",
        iturl: "Details/Maldives",
        Price: "24999",
        discount: "28000",
        day:"--",
        Season: "",
    },
    "Meghalaya": {lable:"Null",
        imgurl: "/images/tripcard/Honymoontrip/Meghalaya.png",
        iturl: "Details/Meghalaya",
        Price: "18999",
        discount: "21499",
        day:"5N/6D",
        Season: "Dec-Dec",
    },
   
    "Ooty": {lable:"Null",
        imgurl: "images/tripcard/Grouptrip/Ooty.png",
        iturl: "Details/Ooty4n5d",
        Price: "12499",
        discount: "15000",
        day:"4N/5D",
        Season: "",

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




// event card list
// "Pushkar": {lable:"Best Seller",
//         imgurl: "/images/tripcard/Newyear/38.png",
//         iturl: "Details/Pushkar",
//         Price: "5499",
//         discount: "6499",
//         day:"2N/3D",
//         Season: "Holi Special",

//     },
//     "Mathura Vrindavan": {lable:"",
//         imgurl: "/images/tripcard/Newyear/37.png",
//         iturl: "Details/Vrindavan",
//         Price: "8499",
//         discount: "9499",
//         day:"4N/5D",
//         Season: "Holi Special",

//     },
//     "Sangla Chitkul": {lable:"",
//         imgurl: "/images/tripcard/Newyear/36.png",
//         iturl: "Details/Sangla",
//         Price: "13499",
//         discount: "14499",
//         day:"4N/5D",
//         Season: "Holi Special",

//     },