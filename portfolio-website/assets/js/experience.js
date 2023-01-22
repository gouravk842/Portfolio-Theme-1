AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Automation Engineer Intern",
    cardImage: "assets/images/experience-page/default.jpg",
    place: "Default",
    time: "(Oct, 2021 - March, 2022)",
    desp: "<li>Worked with python to automate things.</li> <li>Built web scraper for scrapping job details from different job boards.</li> <li>Built linkedin scraper for scrapping prospects details.</li><li>Integrated api with python code.</li><li>Deployed python application on the AWS Server.",
  },
  {
    title: "Junior Software Engineer",
    cardImage: "assets/images/experience-page/default.jpg",
    place: "Default",
    time: "(Apr, 2022 - Present)",
    desp: "<li>Worked as a Django backend developer.</li><li>Worked with the teams on the client project to build restful apis.</li><li>Designed centralized database for the company to store the data</li><li>Setup the cron jobs using celery on the server</li>",
  },
  {
    title: "SpringBoot Developer",
    cardImage: "assets/images/experience-page/freelancer.webp",
    place: "Freelance",
    time: "(July, 2021 - Feb, 2022)",
    desp: "<li>Worked on client project to develop webapp.</li><li>Management software to manage all the operations of a dubai based garment shop.</li><li>Worked with Sql database",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  // {
  //   title: "GirlScript Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/1.jpg",
  //   description:
  //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  // },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "AGBI Digital HealthTech Grand Challenge",
    subtitle: "Participant",
    image: "assets/images/experience-page/agbi.jpg",
    desp: "Developed a AI based webapp for detecting skin cancer. User of the webapp has to just upload the picture of the cancer and the application identifies the cancer and suggest the medicine and first aids. Application also provides options to book appointment to the given list of doctors.",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
             
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
