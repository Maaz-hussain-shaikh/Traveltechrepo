import { JaipurRanthambore } from "./All trip details/JaipurRanthambore"
import Manali from "./All trip details/Manali"
import { Pachmarhi } from "./All trip details/Pachmarhi"
import { Udaipur } from "./All trip details/Udaipur"
import Kashmir from "./Destination trips/Kashmir"
import { Udaipurtrip } from "./Udaipurtrip"


// =========================================================sliding frist card =================================
const Cardfirst = {
    "Manali":{
        imgurl: "images/tripcard/Grouptrip/Manali.png",
        iturl: "Details/Manali",
        Price:"8500",
        info:Manali
    },   
    "Kashmir":{
        imgurl: "images/tripcard/Grouptrip/Kashmir.png",
        iturl: "Details/Udaipurtrip",
        Price:"13999",
        info:Udaipurtrip
    }, 
    "Pachmarhi":{
        imgurl: "images/tripcard/Grouptrip/Pachmarhi.png",
        iturl: "Details/Pachmarhi",
        Price:"5500",
        info:Pachmarhi
    }, 
    "Udaipur":{
        imgurl: "images/tripcard/Grouptrip/Udaipur.png",
        iturl: "Details/Udaipur",
        Price:"5500",
        info:Udaipur
         
    },
    "Jaipur_Ranthambore":{
        imgurl: "images/tripcard/Grouptrip/Jaipur.png",
        iturl: "Details/Jaipur_Ranthambore",
        Price:"13999",
        info:JaipurRanthambore
    }, 
    "Jodhpur_jaisalmer":{
        imgurl: "images/tripcard/Grouptrip/jaisalmer.png",
        iturl: "Details/JaipurRanthambore",
        Price:"13999",
        info:JaipurRanthambore
    },   
    
        

}

// ======================================destination cards========================================

const destinationard = {
    "Kashmir":{
        url: "images/tripcard/1.jpg",
        href: "/Destinations/Kashmir",
        details:Kashmir
    },
    "Manali": {
        url: "images/tripcard/2.jpg",
        href: "/Destinations/Manali",
       
    },
    "Pushkar":{
        url: "images/tripcard/4.jpg",
        href: "/Destinations/Pushkar",
        
    },
    "Udaipur":{
        url: "images/tripcard/5.jpg",
        href: "/Destinations/Udaipur",
        
    },
    "Jaisalmer":{
        url: "images/tripcard/6.jpg",
        href: "/Destinations/Jaisalmer"
    },
    "Pachmrahi":{
        url: "images/tripcard/7.jpg",
        href: "/Destinations/Pachmarhi",
    },
    "Kerala":{
        url: "images/tripcard/8.jpg",
        href: "/Destinations/Kerala",
        
    },
    "Goa":{
        url: "images/tripcard/9.jpg",
        href: "/Destinations/Goa",
        
    },

    
    

}
//   ==============================================Honymoon destination slider===============================
const Honymooncards = {
    "Andaman":{
        imgurl: "images/tripcard/Honymoontrip/Andaman.png",
        iturl: "Details/Andaman",
        Price:"3000",
         
    },
    "Darjeeling":{
        imgurl: "images/tripcard/Honymoontrip/Darjeeling.png",
        iturl: "Details/Darjeeling",
        Price:"3000",
         
    },
    "Goa":{
        imgurl: "images/tripcard/Honymoontrip/Goa.png",
        iturl: "Details/Goa",
        Price:"3000",
         
    },
    "Himachal":{
        imgurl: "images/tripcard/Honymoontrip/Himachal.png",
        iturl: "Details/Himachal",
        Price:"3000",
         
    },
    "Kashmir":{
        imgurl: "images/tripcard/Honymoontrip/Kashmir.png",
        iturl: "Details/Kashmir",
        Price:"3000",
         
    },
    "Kerala":{
        imgurl: "images/tripcard/Honymoontrip/Kerala.png",
        iturl: "Details/Kerala",
        Price:"3000",
         
    },
    "Maldives":{
        imgurl: "images/tripcard/Honymoontrip/Maldives.png",
        iturl: "Details/Maldives",
        Price:"3000",
         
    },
    "Meghalaya":{
        imgurl: "images/tripcard/Honymoontrip/Meghalaya.png",
        iturl: "Details/Meghalaya",
        Price:"3000",
         
    },
    "Rajisthan":{
        imgurl: "images/tripcard/Honymoontrip/Rajisthan.png",
        iturl: "Details/Rajisthan",
        Price:"3000",
         
    },
}
// ============================================Advertisment cards=======================



// =========================================common faq =================================
const FAQ=[
    {
        question:"By when can I book this trip?",
        answar:"You can book this trip 3 days before the commencement date."
    },
    {
        question:"By when can I book this trip?",
        answar:"You can book this trip 3 days before the commencement date."
    },
    {
        question:"By when can I book this trip?",
        answar:"You can book this trip 3 days before the commencement date."
    },
    {
        question:"By when can I book this trip?",
        answar:"You can book this trip 3 days before the commencement date."
    },
    
   
]
// =======================================review=====================


const reviewdata = [
    {
        id: 1,
        name: "Manoj Kushwah",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        imgsrc: "images/pic-1.png",
        comment: `The trip was amazing , got to meet adorable people, the stay was very comfortable and with spacious rooms, meals were delightful.Well managed trip by Travel tech!
        Thnx for Travel tech….`,

    },
    {
        id: 1,
        name: "Ayushi soni",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        imgsrc: "images/pic-2.png",
        comment: `It was really a great trip with you guys, it was my 1st group trip with amazing people.
            We really enjoyed alot together, we created a strong bond together with so many memories. I would Love to go again with Travel Tech for creating memories again.
            Thanks for the amazing trip .`,

    },
    {
        id: 1,
        name: "Simran Nagdeve",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        imgsrc: "images/pic-2.png",
        comment: `Honestly, pachmari sbke lie utna hi beautiful h, or sbka experience b outstanding hoga, for sure.. But the real reason why we enjoyed this trip is bcoz of our co-ordinators(@salman @⁨Farhan Travel Tech⁩ @mehul) n also mohit bhaiya. U guys r really made it our best trip ever with loads of memories, thnks for those tiny treats n gosspis n spcl thnks to mohit bhaiya for their songs.. We guys r hell tired bt couldn't stop laughing, singing n spend whole journey awaken.. N thnks to co - travllers also, u guys made it very happening, thnk u all of u for adjusting n managing with each other in whole trip, N mainly, aunty wala group toh rockss🤟🏻🤟🏻🤟🏻🤟🏻.. From unkown peoples to travel buddies.. Big claps for #TRAVELTECH.`,

    },
    {
        id: 1,
        name: "Namrata singh",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        imgsrc: "images/pic-5.png",
        comment: `I took a batch of 23 students to Pachmarhi with Travel Tech and I must say it has been a wonderful experience. Food and Stay was good. All ups and downs during the trip were very well handled by the Trip Coordinator. All the requests made were considered and worked upon very well to make sure the trip becomes a memorable one! All in all a great experience!!.`,

    },
    {
        id: 1,
        name: "Amy Philip",
        imgsrc: "images/pic-2.png",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        comment: `The trip was amazing , got to meet adorable people, the stay was very comfortable and with spacious rooms, meals were delightful.Well managed trip by Travel tech!
                        Rest everything was well planned by the members:- Salman, Farhan and Sameer. Will surely look forward to again plan our next vacation with you all as each member of the team took care and made sure that we are secure!
                        Cheers to Travel Tech!🍻.`,

    },
    {
        id: 1,
        name: "Shailee ",
        imgsrc: "images/pic-5.png",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        comment: `This was my first trip and to be very honest it was so wonderful and rocking that aane wale kuch days tak to aisa lagega that we are still in that ghaat area..totally the Experince was full of thrilling and adventurous. Thanks to those small treats special Thanks to Farhan salman Mehul and mohit bhaiya and specially our co travellers who joined into craziness 🤩🤩
                            From strangers to travel buddies 🤩 you guys rock!!! 😎😎✌🏻✌🏻✌🏻
                            Hatts off to TRAVEL TECH❣.`,

    },
    {
        id: 1,
        name: "Savvy Shristva",
        imgsrc: "images/pic-1.png",
        tripname:"Udaipur and bahubali hill",
        tripdate:"04-Oct-2024",
        comment: `We batchmates took 3 days tour in Pachmarhi and it was an amazing time. I personally would have loved to give a 5 star review because travel tech did there job very well. They tried to made our tour too best ( yes more than best 🥺 ).
                                Special THANKS to Salman Sir ☺️`,

    },
]
export { Cardfirst, reviewdata,destinationard,Honymooncards,FAQ };  