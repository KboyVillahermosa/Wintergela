import React from "react";
import './Message.css'
const Message: React.FC = () => {
  return (
    <>
      <section className="dark:bg-gray-900" id="message">
        <div className="message-title">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            My <span className="text-[#0e7490] dark:text-[#0e7490]">Message</span>
          </h1>
        </div>
        <div className="message-header">
          <div className="message-content">
            <p className="mb-3 text-gray-500 dark:text-white">
              I wanted to make something special for you, just as a little way
              of showing how much I appreciate having you as a friend. I know
              we’ve only recently become friends, but in the short time we’ve
              known each other, I’ve come to really value our friendship and the
              connection we share.
            </p>
            <p className="mb-3 text-gray-500 dark:text-white">
              Life can sometimes feel overwhelming, and there are moments when
              we all feel tired, sad, or like we’re not being noticed or
              appreciated. That’s why I created a website for you a space you
              can visit whenever you need a break or a little reminder that
              you’re important and valued. It’s a place where you can just take
              a moment for yourself, especially when you feel like you’re
              carrying the weight of everything.
            </p>
            <p className="mb-3 text-gray-500 dark:text-white">
              I want you to know that you matter, and I’m really grateful for
              the friendship we’re building. Even though we haven’t known each
              other long, I already appreciate the kindness and energy you bring
              into my life. I hope this website can bring a little bit of
              comfort and positivity whenever you need it.
            </p>
            <p className="mb-3 text-gray-500 dark:text-white">
              Please always remember that I’m here for you, and you’re never
              alone. You deserve to feel happy and appreciated, and I hope this
              can be a small reminder of that. If you ever need to talk or just
              want someone to hang out with, I’m always here.
            </p>
            <p className="mb-3 text-gray-500 dark:text-white">Take care, and I hope the website brings a smile to your face whenever you visit. ✧｡٩(ˊᗜˋ )و✧*｡</p>
          </div>
          <div className="image">
            <img src="/pic2.PNG" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
