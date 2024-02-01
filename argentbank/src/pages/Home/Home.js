import React from "react";
import background from "../../images/bank-tree.jpeg";
import Icon from "../../components/Icon/Icon";
import Card from "../../components/Card/Card";
import data from "../../data.json";

function Home() {
  console.log(data.cards);
  return (
    <>
      <main>
        <section>
          <img className="background" src={background} alt="plant" />
          <article className="card">
            {data.cards.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </article>
        </section>
        <section className="icons-container">
          {data.icons.map((icon, index) => (
            <Icon key={index} icon={icon.icon} title={icon.title} description={icon.description} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
