import React from "react";
import background from "../../images/bank-tree.jpeg";
import Feature from "../../components/Feature/Feature";
import chat from "../../images/icon-chat.png";
import money from "../../images/icon-money.png";
import security from "../../images/icon-security.png";

function Home() {
  return (
    <>
      <main>
        <section>
          <img className="background" src={background} alt="plant" />
          <article className="bank-promotion">
            <div className="highlight">
              <span>No fees.</span>
              <span>No minimum deposit.</span>
              <span>High interest rates.</span>
            </div>
            <p className="highlight-description">Open a savings account with Argent Bank today!</p>
          </article>
        </section>
        <section className="icons-container">
          <Feature
            icon={chat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            alt="icon-chat"
          />
          <Feature
            icon={money}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
            alt="icon-money"
          />
          <Feature
            icon={security}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
            alt="icon-security"
          />
        </section>
      </main>
    </>
  );
}

export default Home;
