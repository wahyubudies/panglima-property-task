import Projects from "./components/projects";
import AboutUs from "./components/about-us";
import Faq from "./components/faq";
import BookNow from "./components/book-now";
import Testimony from "./components/testimony";
import Reason from "./components/reason";
import Banner from "./components/banner";

const projects = [
  {
    title: "Perumahan Halal Elfida Mulia",
    location: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    mapUrl: "#",
    image: "/images/project-card-1.png",
    unitTypes: ["Ahsan", "Mumtaz", "Sultan"]
  },
  {
    title: "Salima Memorial Park - Sambutan",
    location: "Jl. Sultan Sulaiman Sambutan, Samarinda, Kalimantan Timur",
    mapUrl: "#",
    image: "/images/project-card-2.png",
    unitTypes: ["Single", "Couple", "Family"]
  },
  {
    title: "Pesona Elfida",
    location: "Jl. Gn. Lingai Sungai Pinang, Samarinda, Kalimantan Timur",
    mapUrl: "#",
    image: "/images/project-card-3.png",
    unitTypes: ["Al Kalam", "Al Karim"]
  }
];

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Reason */}
      <Reason />
      {/* Projects */}
      <Projects projects={projects} />
      {/* Tentang Kami */}
      <AboutUs />
      {/* Testimoni */}
      <Testimony />
      {/* Pertanyaan Umum */}
      <Faq />
      {/* Booking Sekarang */}
      <BookNow />
    </>
  );
}
