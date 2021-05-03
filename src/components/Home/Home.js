import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Animation from '../Animation/Animation';
const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
      };
    };
    const scrollTo = ele => {
      ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
const Home = () => {
    const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const AboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const HomeRef=useRef(null)
  const ContactRef = useRef(null)

  const sectionRefs = [
    { section: "Home", ref: HomeRef },
    { section: "About", ref: AboutRef },
    { section: "Projects", ref: projectsRef },
    { section: "Blog", ref: blogRef },
    { section: "Contact", ref: ContactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
    return (
<div>
<div className="top-spacer"> 
    <Animation/>
          </div>
  
<div className="content">
  
  <div className="sticky">
    <div className="header" ref={headerRef}>
    <button
        type="button"
        className={`header_link ${visibleSection === "Home" ? "selected" : ""}`} 
      >
         <a class="nav-link active" aria-current="page" href="#">Home</a> 
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(AboutRef.current);
        }}
      >
        About 
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(projectsRef.current);
        }}
      >
        Projects
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Blog" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(blogRef.current);
        }}
      >
        Blog
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(ContactRef.current);
        }}
      >
        Contact
      </button>
    </div>
  </div>
  <div className="section" id="About" ref={AboutRef}><Header/></div>
  <div className="section" id="Projects" ref={projectsRef}> <Projects/> </div>
  <div className="section" id="Blog" ref={blogRef}> <Blog/> </div>
  <div style={{background:"#252934"}} className="section " id="Contact" ref={ContactRef}><Contact/></div>
</div>
</div>
  
    );
};

export default Home;