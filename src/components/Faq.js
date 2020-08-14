import React, { useState } from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";

function CustomToggle({ children, eventKey, handleClick }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () => {
        handleClick();
    });

    return (
        <div className="card-header" type="button" onClick={decoratedOnClick}>
            {children}
        </div>
    );
}

const Faq = () => {
    const [activeKey, setActiveKey] = useState(1);

    const data = [
        { Question: "Question1", Qbody: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
        { Question: "Question2", Qbody: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
        { Question: "Question3", Qbody: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
    ];
    return (

        <div className="container">
                <section id="main" >
                    <div class="inner">
                        <header class="container">
                            <h1>FAQ</h1>
                        </header>
                        <div className="headcommingsoon">
                            Coming Soon
                    </div>
                    </div>
                </section>
            <div style={{ display: "none" }}>
                <Accordion defaultActiveKey={0} activeKey={activeKey}>
                    {data.map((item, index) => (
                        <Card key={index + 1}>
                            <CustomToggle
                                as={Card.Header}
                                eventKey={index + 1}
                                handleClick={() => {
                                    if (activeKey === (index + 1)) {
                                        setActiveKey(null);
                                    } else {
                                        setActiveKey(index + 1);
                                    }
                                }}
                            >
                                {activeKey === (index + 1) ? "-" : "+"}
                                {item.Question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={index + 1}>
                                <Card.Body>{item.Qbody}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};
export default Faq;
