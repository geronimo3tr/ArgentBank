import React from "react";
import background from "../../images/bank-tree.jpeg";
import Icon from "../../components/Icon/Icon";
import data from "../../data.json";

import test from "../../images/icon-chat.png";

function Home() {
  return (
    <>
      <main>
        <img className="background" src={background} alt="plant" />
        <section className="icons-container">
          {data.map((item, index) => (
            <Icon key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
