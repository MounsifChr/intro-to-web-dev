import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Li from "./linkedin";

export default function Footer({ twitter, linkedin, github }) {
  return (
    <footer className="footer">
      <ul className="socials">
        <li className="social" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          paddingRight: '40px',
          borderRight: '2px solid',
          color: 'var(--text-footer)'
        }}>
          <a>
            <img
              src={`${process.env.BASE_URL}/images/mounsif.jpg`}
              alt="author image"
              style={{
                width: '60px',
                borderRadius: '100%',
                border: '1px solid'
              }}
            />
          </a>

          <span><b>Mounsif Cherfaoui</b></span>
        </li>
        {github ? (
          <li className="social">
            <a href={`https://github.com/${github}`}>
              <Gh />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <Li />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Excercises Licensed Under Apache 2.0</p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
