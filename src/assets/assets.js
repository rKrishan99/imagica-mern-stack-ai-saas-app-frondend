import logo from "./logo.svg";
import profileIcon from "./profile_icon.svg";
import creditStar from "./credit_star.svg";
import star_icon from "./star_icon.svg";
import star_group from "./star_group.png";
import generated_image_1 from "./generated_image_1.jpg";
import generated_image_2 from "./generated_image_2.jpg";
import generated_image_3 from "./generated_image_3.jpg";
import generated_image_4 from "./generated_image_4.jpg";
import generated_image_5 from "./generated_image_5.jpg";
import generated_image_6 from "./generated_image_6.jpg";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import intro_sec_img_1 from "./intro_sec_img_1.jpg";
import intro_sec_img_2 from "./intro_sec_img_2.jpg";
import profile_img_1 from "./profile_img_1.jpg";
import profile_img_2 from "./profile_img_2.jpg";
import profile_img_3 from "./profile_img_3.jpg";
import rating_star from "./rating_star.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import priceIcon from "./priceIcon.svg";
import starDeep from "./starDeep.svg";
import imgDwn from "./imgDwn.svg"
import plainLogo from "./plainLogo.svg"
import cross_icon from "./cross_icon.svg";
import lock_icon from "./lock_icon.svg";
import email_icon from "./email_icon.svg";
import coins from "./coins.svg";
import logout from "./logout.svg";
import gLogo from "./gLogo.svg"

export const assets = {
  logo,
  profileIcon,
  creditStar,
  star_icon,
  star_group,
  generatedImages: [
    generated_image_1,
    generated_image_2,
    generated_image_3,
    generated_image_4,
    generated_image_5,
    generated_image_6,
  ],
  step_icon_1,
  step_icon_2,
  step_icon_3,
  intro_sec_img_1,
  intro_sec_img_2,
  profile_img_1,
  profile_img_2,
  rating_star,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  priceIcon,
  starDeep,
  imgDwn,
  plainLogo,
  cross_icon,
  lock_icon,
  email_icon,
  coins,
  logout,
  gLogo
};

export const HowItWorksData = [
  {
    image: step_icon_1,
    title: "Describe Your Vision",
    description:
      "Type a phrese, sentence or paragraph that describes the image you want to generate",
  },
  {
    image: step_icon_2,
    title: "Watch the Magic",
    description:
      "Our AI will generate an image based on your description. You can also choose from a list of generated images",
  },
  {
    image: step_icon_3,
    title: "Download & Share",
    description: "Download the image and share it with your friends and family",
  },
];

export const testimonials = [
  {
    image: profile_img_1,
    name: "Sarah T.",
    role: "Freelance Graphic Designer",
    star: 4,
    text: "Imagica has completely transformed the way I approach design projects! As a freelance graphic designer, I often struggle with creative blocks, but this tool helps me generate stunning visuals in seconds. The AI is incredibly intuitive and produces high-quality images that align perfectly with my vision. It’s like having a creative partner who never runs out of ideas!"
  },
  {
    image: profile_img_2,
    name: " James L",
    role: "Small Business Owner",
    star: 5,
    text: "I’m not a tech-savvy person, but Imagica makes it so easy to create professional-grade images without any hassle. All I have to do is type a prompt, and within moments, I get results that exceed my expectations. Whether it’s for social media posts or marketing materials, Imagica saves me time and effort while delivering amazing outcomes."
  },
  {
    image: profile_img_3,
    name: "Priya K.",
    role: "Digital Marketing Specialist",
    star: 5,
    text: "As a digital marketer managing multiple campaigns, speed and quality are crucial for me. Imagica has been a game-changer—it allows me to quickly generate unique visuals tailored to each campaign’s needs. The variety of styles and customization options ensures that every image feels fresh and on-brand. Highly recommend it to anyone looking to elevate their content strategy!"
  },
];

export const plans = [
  {
    id: "Basic",
    price: "10",
    credits: "100",
    desc: "Basic plan for small shopping",
    img: priceIcon,
  },
  {
    id: "Standard",
    price: "20",
    credits: "200",
    desc: "Standard plan for medium shopping",
    img: priceIcon,
  },
  {
    id: "Premium",
    price: "30",
    credits: "300",
    desc: "Premium plan for large shopping",
    img: priceIcon,
  },
];
