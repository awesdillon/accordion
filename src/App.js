import { useState } from "react";
import "./index.css";

const faqs = [
  {
    question: "What does someone have to do to get to heaven?",
    answer:
      "In Ephesians 2:8-9, the Bible says, 'For by grace are ye saved through faith, and that not of yourselves, it is the gift of God. Not of works, lest any man should boast.' All one has to do to be saved is to stop trusting in their good works, or their religion to take them to heaven and trust in Jesus' death, burial and ressurrecction alone to take them to heaven.",
  },
  {
    question: "Once someone is saved, how long are they saved for?",
    answer:
      "Jesus said, 'And I give unto them eternal life, and they shall never perish, neither shall any man pluck them out of my hand. The Lord taught us that once you're saved, you're always saved. Since salvation is by grace, we didn't deserve to recieve it. We don't deserve to keep it either, but God has promised to keep us by his grace.",
  },
  {
    question: "How do I put my faith in Christ?",
    answer:
      "Romans 10:13 says, 'For whosoever (that's you and me) shall call upon the name of the LORD shall be saved.' All you have to do to place our faith in Christ is to call upon him and ask him to save you. The thief on the cross simply said, 'Lord, remember me when thou comest into thy kindgom.' The words aren't as important. What matters most is that you're calling out to him in faith to save you.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          question={faq.question}
          num={i}
          key={faq.num}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, question, key, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
