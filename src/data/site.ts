// All business content below comes from hometowndentalwyo.com (audited Nov 2026).
const A = "assets/hometown-dental/";
export const asset = (name: string) => A + name;

export const site = {
  name: "Hometown Dental",
  doctor: "Dr. Ethan Hoopes, DDS",
  phoneDisplay: "(307) 674-9661",
  phoneHref: "tel:+13076749661",
  email: "info@hometowndentalwyo.com",
  address: { street: "23 E. Brundage St. Suite #5", city: "Sheridan", region: "WY", zip: "82801" },
  newAddress: { street: "1465 Burton St STE A", city: "Sheridan", region: "WY", zip: "82801", from: "January 1, 2027" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=23+E+Brundage+St+Suite+5+Sheridan+WY+82801",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 4:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  accessNote:
    "Hometown Dental is located in historic downtown Sheridan, on the second floor of a historic building. Our office is accessible by stairs only.",
  facebook: "https://www.facebook.com/share/fnL9VFbp5woZheEy/?mibextid=qi2Omg",
  googleReview: "https://g.page/r/Cab_DQTtXkmjEAE/review",
  newPatientForm: A + "new-patient-form.pdf",
  // Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to receive appointment requests by email.
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "",
} as const;

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "New Patients", href: "#new-patients" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  { title: "Fillings", img: "svc-fillings", alt: "Dental mirror and tooth model", copy: "Over time tooth structure can decay. Dental fillings repair cavities so that they can continue to function in high form. Failure to have cavities fixed can lead to infections that have to be fixed with root canals, fracture of teeth, or even extraction." },
  { title: "Thorough Hygiene & Exams", img: "svc-hygiene", alt: "A patient relaxing during a dental cleaning", copy: "The most important part of good health is knowing what is going on with your teeth. Our friendly hygienists bring years of experience to the practice, providing gentle and thorough care." },
  { title: "Root Canals", img: "svc-root-canal", alt: "Tooth model showing the root canal", copy: "Sometimes the nerve inside our tooth can become irritated due to decay or trauma. A root canal is a procedure that removes the damaged root so that the tooth can be saved." },
  { title: "Emergency / Wisdom Tooth Extractions", img: "svc-emergency", alt: "A blue toothbrush on a soft blue background", copy: "We know there is nothing worse than tooth pain! Removing a tooth is always a last resort, but may be necessary when dealing with severe decay, infection, or transitioning to dentures." },
  { title: "Bridges", img: "svc-bridges", alt: "A three-unit dental bridge", copy: "We can bridge the gap that you have! Bridges, a permanent solution to missing teeth, can be done in the front of the mouth for aesthetic results or in the posterior region to ensure better chewing capacity." },
  { title: "Crowns", img: "svc-crowns", alt: "Three dental crowns on display posts", copy: "Dental crowns are used when a tooth has had a large filling that is breaking down, a fracture, or decay. Crowns can be extremely durable and aesthetic." },
  { title: "Implants", img: "svc-implants", alt: "A bright, healthy smile", copy: "Contact us today to see if dental implants are right for you. We are happy to answer any questions you may have." },
  { title: "Dentures", img: "svc-dentures", alt: "A dental model with dentures being flossed", copy: "Custom fitting dentures are offered in either a traditional style or with implants. We can deliver a new smile that you will love." },
] as const;

export const doctor = {
  name: "Ethan K. Hoopes, DDS",
  role: "Dentist",
  bio: "Dr. Hoopes is proud to be back in his hometown where he grew up. He spent 4 months living in a school in Mexico City, then lived in Las Vegas for two years in which he became fluent in Spanish. He moved back to Laramie and graduated from the University of Wyoming with a bachelors in Physiology. Upon graduation, he moved to Lincoln Nebraska for dental school and fell in love with the practice of dentistry. He enjoys chess, guitar, Brazilian Jiu Jitsu, baseball, basketball, and football. He is married to his wife Haven since 2017 and they are proud parents of a boy and a girl.",
  qa: [
    {
      q: "Why did you become a dentist?",
      a: "I know what it is like to be in dental pain. I had an experience where I had a wisdom tooth growing into my cheek and cutting me. After a few meals the pain was so bad I knew I needed help. I was grateful to find a dentist who helped me out of that tough situation. It changed my perspective of dentistry forever. I realized people don't become dentists because they love teeth (maybe some do), but rather they become dentists because they love helping people.",
    },
    {
      q: "What do you love most about being a dentist?",
      a: "There are two moments in dentistry that I find special: The first is when we are able to alleviate suffering for someone that has been dealing with tooth pain. I have been there before, and I like returning the favor to as many people as I can. The second is when we can give an aesthetic smile back to a patient. I love the moment people get to see their new teeth in the mirror and the joy that comes in their new appearance.",
    },
  ],
};

export const team = [
  { name: "Tammy D., RDH", role: "Hygienist", img: "team-tammy", bio: "Tammy graduated from the University of Wyoming with a bachelor of science degree in Dental hygiene. She also attended Sheridan College earning an applied science degree in Dental Hygiene, as well as an Associates of Arts degree, with emphasis in Musical theatre. She enjoys singing to her patients, her hunk of a husband Wess and their 5 brave and bold kids. Remember to live a full life and eat the dessert first!" },
  { name: "Teresa S., RDH", role: "Hygienist", img: "team-teresa", bio: "Teresa is excited to be a part of the team at Hometown Dental! Teresa is a 2001 Colorado graduate of Dental Hygiene / Associates of Applied Science. She brought her skills to Wyoming in 2019, with 18 years of previous experience with a large dental team in Colorado. She strives to provide a gentle and educational dental experience to all of her patients. Sheridan is home for Teresa and her husband, a Wyoming native. When Teresa isn't at the office, she enjoys country dancing with her husband, photography, traveling, gardening, and horseback riding. Share your smile with someone today!" },
  { name: "Amber P.", role: "", img: "team-amber", bio: "Amber grew up in Buffalo and has lived in Sheridan for 20 years. Amber studied Early Childhood at Sheridan College. She is really passionate about being outdoors and loves to be involved in numerous activities including camping, fishing, snowboarding. She is the proud mother of two boys." },
  { name: "Gabby E.", role: "Dental Assistant", img: "team-gabby", bio: "Gabby is originally from Sheridan and pursued Child and Family Studies in college. She ran track for Utah State. She later returned to Sheridan with her 2 children. On her time off she enjoys exercise on her roller blades and spending time with her family. Smiling makes each day happier!" },
  { name: "Rebecca A.", role: "Dental Assistant", img: "team-rebecca", bio: "Becca is the newest member of our team. Becca has a passion for dentistry and is studying to become a hygienist." },
] as const;

export const reviews = [
  { quote: "Dr. Hoopes and his team make going to the dentist easy, enjoyable, and pain free! They will work with your schedule and make you as comfortable as possible!", name: "Nikki U." },
  { quote: "The staff is friendly, thorough, and knowledgeable. Dr. Hoopes made the experience comfortable and easy. He took the time to show me my X-rays and explained everything he saw. Plus, the price was very reasonable. I'll be going there again!", name: "Hyrum R." },
  { quote: "I was in only to have my teeth cleaned. However, it was the best cleaning I have had in years! The staff is delightful and Dr. Hoopes is ever so professional. He answered my questions with straight answers, not interested in doing dental work just to make money. At my age and having moved often, I have had numerous dentists and I highly recommend Dr. Hoopes.", name: "Nancy D." },
  { quote: "A very friendly and professional dentist office. I highly recommend to anyone.", name: "Michael M." },
] as const;

export const emergencyQuote =
  "I had a god awful tooth ache that... was due to a cavity that turned into an infection. I was able to be seen the same day and have that tooth extracted. The staff and doctor made sure I knew what was happening and that I was ok every step of the way...";
