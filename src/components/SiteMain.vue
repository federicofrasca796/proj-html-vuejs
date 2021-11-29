<template>
  <div id="site_main">
    <!-- SECTION 1 "Accomplishments" -->
    <section class="container">
      <div class="row">
        <div class="col-3 accomplishment">
          <div class="numbers">1.926</div>
          <div class="text-uppercase txt">finished session</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">100%</div>
          <div class="text-uppercase txt">satisfaction rate</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">3092+</div>
          <div class="text-uppercase txt">enrolled learners</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">200</div>
          <div class="text-uppercase txt">online instructors</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 "About Me" -->
    <sectionAboutMe />

    <!-- SECTION 3 "Online Courses" -->
    <sectionCourses :coursesArr="onlineCourses" />

    <!-- SECTION 4 "Book Store" -->
    <sectionBooks :booksArr="books" />

    <!-- SECTION 5 "Clients" -->
    <sectionClients :clientsArr="clientsLogos" />

    <!-- SECTION 6 "Real Stories" -->
    <section class="container-fluid bg_waves position-relative">
      <div class="row">
        <!-- Stories column -->
        <div class="col-6 text-center">
          <h4 class="section_title primary_color">Real Stories</h4>

          <div v-for="story in realStories" :key="story.id">
            <div class="real_story" v-if="story.showActive === true">
              <p class="story_quote">{{ story.review_text }}</p>
              <img
                class="story_avatar rounded-circle"
                :src="require(`@/assets/img/${story.author.avatar}`)"
                alt="testimonial avatar"
              />
              <div class="story_author">{{ story.author.name }}</div>
              <div class="story_job">/{{ story.author.job }}</div>
            </div>
          </div>

          <div class="carousel_scroll">
            <img
              src="@/assets/img/image.png"
              alt="arrow up"
              class="d-inline-block"
            />
            <div class="carousel_counter">1/4</div>
            <img
              src="@/assets/img/image (1).png"
              alt="arrow up"
              class="d-inline-block"
            />
          </div>
        </div>
        <!-- MaxCoach img column  -->
        <div class="col-6 px-0">
          <img
            class="img-fluid"
            src="@/assets/img/home-movation-testimonial-image.jpg"
            alt="max coach looking outside the window while talking at the phone"
            width="100%"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sectionAboutMe from "@/components/site-main-components/sectionAboutMe.vue";
import sectionCourses from "@/components/site-main-components/sectionCourses.vue";
import sectionBooks from "@/components/site-main-components/sectionBooks.vue";
import sectionClients from "@/components/site-main-components/sectionClients.vue";

export default {
  components: {
    sectionAboutMe,
    sectionCourses,
    sectionBooks,
    sectionClients,
  },
  props: {},

  data() {
    return {
      onlineCourses: [
        {
          thumb: "motivation-course-06-480x298.jpg",
          alt: "Max reading and laughing at a phone screen",
          price: [30, 0],
          title: "How to be Successful: Create A Growth Mindset For Success",
          lessons: 3,
          students: 50,
        },
        {
          thumb: "motivation-course-05-480x298.jpg",
          alt: "Max sitting in a sofa having a toast",
          price: [30, 0],
          title: "How to Build Confidence in Your Abilities",
          lessons: 1,
          students: 50,
        },
        {
          thumb: "motivation-course-04-480x298.jpg",
          alt: "Max sitting in a sofa writing with a laptop",
          price: [20, 0],
          title: "Productivity Machine - Focus in a Distracted World",
          lessons: 5,
          students: 50,
        },
        {
          thumb: "motivation-course-03-480x298.jpg",
          alt: "Max and another guy discussing and looking at a laptop",
          price: [20, 0],
          title: "Effective Time Management Mastery - Complete Guide",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-02-480x298.jpg",
          alt: "Guy giving a public speach in front of a little crowd",
          price: [25, 99],
          title: "Body Language Secrets for Entrepreneurs",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-01-480x298.jpg",
          alt: "Max and another guy with a blue suit laughing and pointing at a laptop",
          price: [19, 99],
          title: "Management Skills: The Science of Leadership",
          lessons: 17,
          students: 50,
        },
      ],
      books: [
        {
          thumb: "product-book-11-400x400.jpg",
          title: "Alpha man by Maxcoach",
          price: [29, 0],
        },
        {
          thumb: "product-book-10-400x400.jpg",
          title: "Real man 4.0 by Maxcoach",
          price: [39, 0],
        },
      ],
      clientsLogos: [
        "client-logo-05-primary.png",
        "client-logo-06-primary.png",
        "client-logo-07-primary.png",
        "client-logo-04-primary.png",
        "client-logo-03-primary.png",
        "client-logo-02-primary.png",
        // "client-logo-01-primary.png",
      ],
      realStories: [
        {
          showActive: true,
          review_text:
            "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          author: {
            name: "Mina Hollace",
            avatar: "testimonial-avata-02.jpg",
            job: "Freelancer",
          },
        },
        {
          showActive: false,
          review_text:
            "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          review_author: {
            name: "Madley Pondor",
            avatar: "testimonial-avata-04.jpg",
            job: "IT Specialist",
          },
        },
        {
          showActive: false,
          review_text:
            "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.",
          review_author: {
            name: "Luvic Dubble",
            avatar: "testimonial-avata-01.jpg",
            job: "Private Tutor",
          },
        },
        {
          showActive: false,
          review_text:
            "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          review_author: {
            name: "Florence Themes",
            avatar: "testimonial-avata-03.jpg",
            job: "Multimedia Admin",
          },
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#site_main {
  section {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  // Section 1
  .accomplishment {
    position: relative;
  }
  .accomplishment::before {
    content: url("../assets/img/background-pattern-grid-line-06.png");
    position: absolute;
    top: 0;
  }
  .accomplishment:last-child::after {
    content: url("../assets/img/background-pattern-grid-line-06.png");
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(180deg);
  }
  .numbers,
  .txt {
    text-align: center;
  }
  .numbers {
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: $brand_primary;
  }
  .txt {
    color: $light_grey;
  }

  //Section 6
  .container-fluid .row {
    align-items: center;
  }
  .real_story {
    width: 60%;
    margin: auto;
    .story_quote {
      color: $darkest_grey;
      font-size: 1.5rem;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    .story_avatar {
      width: 80px;
      height: 80px;
      margin-bottom: 1.5rem;
    }
    .story_author {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    .story_job {
      //   font-size: 0.9rem;
      color: $light_grey;
    }
  }
  .carousel_scroll {
    display: inline-block;
    text-align: center;
    width: 90px;
    height: 90px;
    padding: 0.5rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 20px 50px rgb(0 0 0 / 5%);
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}
</style>