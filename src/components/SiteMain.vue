<template>
  <main id="site_main">
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
    <sectionStories :storiesArr="realStories" />

    <!-- SECTION 7 "Blog Articles" -->
    <section class="container" id="blog_articles">
      <!-- Section header  -->
      <div class="row">
        <h4 class="section_title">Blog Updated</h4>
        <h2>
          Interesting <span class="primary_color">articles updated</span> daily
        </h2>
      </div>

      <!-- Articles cards -->
      <div class="row">
        <div class="col-3" v-for="article in articles" :key="article.key">
          <div class="card">
            <img
              :src="require(`@/assets/img/${article.thumb}`)"
              alt="article thumbnail"
              class="card-img-top rounded-3"
            />
            <div class="card-title">
              <div class="publish_date">
                <i class="far fa-calendar"></i>
                {{ article.publish_date }}
              </div>

              <h3>{{ article.title }}</h3>
            </div>
            <div class="card-text">
              {{ article.text }}
            </div>
          </div>
        </div>
      </div>

      <!-- View all CTA  -->
      <div class="text-center my-5">
        <a class="btn_underline_primary">View All Posts</a>
      </div>
    </section>
  </main>
</template>

<script>
import sectionAboutMe from "@/components/site-main-components/sectionAboutMe.vue";
import sectionCourses from "@/components/site-main-components/sectionCourses.vue";
import sectionBooks from "@/components/site-main-components/sectionBooks.vue";
import sectionClients from "@/components/site-main-components/sectionClients.vue";
import sectionStories from "@/components/site-main-components/sectionStories.vue";

export default {
  components: {
    sectionAboutMe,
    sectionCourses,
    sectionBooks,
    sectionClients,
    sectionStories,
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
      articles: [
        {
          thumb: "motivation-blog-04-480x325.jpg",
          title: "How to Stay True to Your Personal Brand",
          publish_date: "May 13, 2020",
          text: "When it comes to your business or career, you want ...",
        },
        {
          thumb: "motivation-blog-03-480x325.jpg",
          title: "5 Vital Lessons in 5 Years of Freelancing",
          publish_date: "May 13, 2020",
          text: "Being self-employed and working from home, it's easy to get ...",
        },
        {
          thumb: "motivation-blog-02-480x325.jpg",
          title: "11 Super Useful Tips for Small-Business Owners",
          publish_date: "May 13, 2020",
          text: "Being a small-business owner poses a ton of challenges. We ...",
        },
        {
          thumb: "motivation-blog-01-480x325.jpg",
          title: "How to Give Yourself Grace to Start Again",
          publish_date: "May 13, 2020",
          text: "Forgive yourself for bad habits you may have started or ...",
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

  //Section 7
  #blog_articles {
    .publish_date {
      margin-top: 2rem;
      color: $light_grey;
      i {
        margin-right: 0.5rem;
      }
    }
    .card-title > h3 {
      color: $darkest_grey;
    }
  }
}
</style>