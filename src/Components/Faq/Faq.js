import React from "react";

const Faq = () => {
  return (
    <div style={{ display:'grid',gridTemplateColumns:'1fr' ,width:'600px',margin:'50px' }}>
        
  
      <div>
        <h1>what is cors?</h1>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources.
        </p>
      </div>
      <div>
        <h1>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
      </div>
      <div>
        <h1>How does the private route work?</h1>
        <p>
          React Router is one of the most important components of React
          ecosystem. In this tutorial, we will learn how to build different
          types of routes including private, public, and restricted routes. For
          a quick demonstration, we will build a simple application with
          following components:
        </p>
      </div>
      <div>
        <h1>What is Node? How does Node work?</h1>
        <p>
          Node.js is an open-source, cross-platform JavaScript runtime
          environment and library to run web applications outside the client's
          browser. It is used to create server-side web applications. Node.js is
          perfect for data-intensive applications as it uses an asynchronous,
          event-driven model.
        </p>
      </div>
    </div>
  );
};

export default Faq;
